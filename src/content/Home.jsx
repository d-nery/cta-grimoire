import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-modern-css-reset";

import Heroes from "../data/heroes";
import c from "../misc/colors";

import HeroCard from "../components/HeroCard";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Hero from "../models/Hero";
import Rune from "../models/Rune";

import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const db = low(
  new LocalStorage("cta-grimoire-db-1", {
    deserialize: (data) => {
      let db = JSON.parse(data);

      db.heroes.forEach((v, i) => {
        db.heroes[i] = Object.assign(new Hero(), v);

        db.heroes[i]._runes.forEach((r, j) => {
          if (!r) {
            return;
          }

          db.heroes[i]._runes[j] = Object.assign(new Rune(), r);
        });
      });

      return db;
    },
  })
);

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Avenir";
    src: url("fonts/Avenir-Black.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  };
`;

const HomeDiv = styled.div`
  background-color: ${c.baseBrown.hex()};

  min-height: 100vh;
  min-width: 100vw;
  /* min-width: 1200px; */
`;

const Panel = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: row;
  padding: 0 0.5em 0.5em 0.5em;
  align-items: stretch;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    let heroes = [];

    for (let k of Object.keys(Heroes)) {
      heroes.push(new Hero(k));
    }

    db.defaults({ heroes: heroes, hero: 93 }).write();

    this.state = {
      heroes: db.get("heroes").value(),
      hero: db.get("hero").value(),
    };
  }

  setHero(hero_idx) {
    db.set("hero", hero_idx).write();

    this.setState({
      hero: hero_idx,
    });
  }

  setStars(n, v) {
    if (isNaN(v)) {
      return;
    }

    const idx = this.state.hero;
    this.state.heroes[idx][n] = v;

    db.set("heroes", this.state.heroes).write();

    this.setState({
      heroes: this.state.heroes,
    });
  }

  setRune(i, set) {
    const idx = this.state.hero;
    this.state.heroes[idx].setRune(i, set);

    db.set("heroes", this.state.heroes).write();

    this.setState({
      heroes: this.state.heroes,
    });
  }

  clearRune(i) {
    const idx = this.state.hero;
    this.state.heroes[idx].deleteRune(i);

    db.set("heroes", this.state.heroes).write();

    this.setState({
      hero: this.state.hero,
    });
  }

  setPrimary(index, primary) {
    const idx = this.state.hero;

    if (!this.state.heroes[idx].getRune(index)) {
      return;
    }

    this.state.heroes[idx].getRune(index).primary = primary.value;
    this.state.heroes[idx]._updateBonuses();

    db.set("heroes", this.state.heroes).write();

    this.setState({
      heroes: this.state.heroes,
    });
  }

  setSecondary(indexRune, indexSecondary, secondary) {
    const idx = this.state.hero;
    if (!this.state.heroes[idx].getRune(indexRune)) {
      return;
    }

    this.state.heroes[idx].getRune(indexRune).setSecondary(indexSecondary, secondary.value);
    this.state.heroes[idx]._updateBonuses();

    db.set("heroes", this.state.heroes).write();

    this.setState({
      heroes: this.state.heroes,
    });
  }

  setRuneStars(i, s) {
    const idx = this.state.hero;

    if (isNaN(s)) {
      return;
    }

    this.state.heroes[idx].getRune(i).stars = s;
    this.state.heroes[idx]._updateBonuses();

    db.set("heroes", this.state.heroes).write();

    this.setState({
      heroes: this.state.heroes,
    });
  }

  setRuneLevel(i, l) {
    const idx = this.state.hero;

    if (isNaN(l)) {
      return;
    }

    let runelvl = this.state.heroes[idx].getRune(i).level;
    let runestars = this.state.heroes[idx].getRune(i).stars;

    if (runelvl <= (runestars * 5) / 10) {
      runelvl *= 10;
      runelvl += l;
    } else {
      runelvl = l;
    }

    this.state.heroes[idx].getRune(i).level = runelvl;
    this.state.heroes[idx]._updateBonuses();

    db.set("heroes", this.state.heroes).write();

    this.setState({
      heroes: this.state.heroes,
    });
  }

  render() {
    const idx = this.state.hero;

    return (
      <>
        <GlobalStyle />
        <HomeDiv>
          <Navbar heroOptions={this.state.heroes} onHeroChange={(id) => this.setHero(id)} />
          <Panel>
            <HeroCard hero={this.state.heroes[idx]} size="700" />
            <div style={{ width: "15px" }} />
            <Stats
              hero={this.state.heroes[idx]}
              onStarChange={(n, v) => this.setStars(n, v)}
              onRuneChange={(i, set) => this.setRune(i, set)}
              onRuneClear={(i) => this.clearRune(i)}
              onRuneStarChange={(i, v) => this.setRuneStars(i, v)}
              onRuneLevelChange={(i, v) => this.setRuneLevel(i, v)}
              onPrimaryChange={(i, p) => this.setPrimary(i, p)}
              onSecondaryChange={(i, j, p) => this.setSecondary(i, j, p)}
            />
          </Panel>
        </HomeDiv>
      </>
    );
  }
}
