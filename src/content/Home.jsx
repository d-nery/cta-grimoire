import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-modern-css-reset";

import Heroes from "../data/heroes";
import c from "../misc/colors";

import HeroCard from "../components/HeroCard";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Hero from "../models/Hero";

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
  min-width: 1200px;
`;

const Panel = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
  padding: 0 2em;
  align-items: center;
  justify-content: center;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    let heroes = [];

    for (let k of Object.keys(Heroes)) {
      heroes.push(new Hero(k));
    }

    this.state = {
      heroes: heroes,
      hero: heroes.find((v) => v.id == "vlad"),
    };
  }

  setHero(hero_id) {
    this.setState({
      hero: this.state.heroes.find((v) => v.id == hero_id),
    });
  }

  setStars(n, v) {
    this.state.hero[n] = v;
    this.setState({
      hero: this.state.hero,
    });
  }

  setRune(i, set) {
    this.state.hero.setRune(i, set);

    this.setState({
      hero: this.state.hero,
    });
  }

  clearRune(i) {
    this.state.hero.deleteRune(i);
    this.setState({
      hero: this.state.hero,
    });
  }

  setPrimary(index, primary) {
    if (!this.state.hero.getRune(index)) {
      return;
    }

    this.state.hero.getRune(index).primary = primary;

    this.setState({
      hero: this.state.hero,
    });
  }

  setSecondary(indexRune, indexSecondary, secondary) {
    if (!this.state.hero.getRune(indexRune)) {
      return;
    }

    this.state.hero.getRune(indexRune).setSecondary(indexSecondary, secondary);

    this.setState({
      hero: this.state.hero,
    });
  }

  setRuneStars(i, s) {
    this.state.hero.getRune(i).stars = s;
    this.setState({
      hero: this.state.hero,
    });
  }

  setRuneLevel(i, l) {
    let runelvl = this.state.hero.getRune(i).level;
    let runestars = this.state.hero.getRune(i).stars;

    if (runelvl <= (runestars * 5) / 10) {
      runelvl *= 10;
      runelvl += l;
    } else {
      runelvl = l;
    }

    this.state.hero.getRune(i).level = runelvl;
    this.setState({
      hero: this.state.hero,
    });
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <HomeDiv>
          <Navbar heroOptions={this.state.heroes} onHeroChange={(id) => this.setHero(id)} />
          <Panel>
            <HeroCard hero={this.state.hero} size="700" />
            <div style={{ width: "15px" }} />
            <Stats
              hero={this.state.hero}
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
