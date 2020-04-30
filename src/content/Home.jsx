import React, { useEffect, useState } from "react";
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

export default () => {
  const [heroes, setHeroes] = useState([new Hero("be")]);
  const [hero, setHero] = useState(0);

  useEffect(() => {
    let _heroes = [];

    for (let k of Object.keys(Heroes)) {
      _heroes.push(new Hero(k));
    }

    db.defaults({ heroes: _heroes, hero: 93 }).write();

    setHeroes(db.get("heroes").value());
    setHero(db.get("hero").value());
  }, []);

  useEffect(() => {
    db.set("hero", hero).write();
    db.set("heroes", heroes).write();
  }, [heroes, hero]);

  const setStars = (n, v) => {
    if (isNaN(v)) {
      return;
    }

    heroes[hero][n] = v;
    setHeroes([...heroes]);
  };

  const setRune = (i, set) => {
    heroes[hero].setRune(i, set);
    setHeroes([...heroes]);
  };

  const clearRune = (i) => {
    heroes[hero].deleteRune(i);
    setHeroes([...heroes]);
  };

  const setPrimary = (index, primary) => {
    if (!heroes[hero].getRune(index)) {
      return;
    }

    heroes[hero].getRune(index).primary = primary.value;
    heroes[hero]._updateBonuses();

    setHeroes([...heroes]);
  };

  const setSecondary = (indexRune, indexSecondary, secondary) => {
    if (!heroes[hero].getRune(indexRune)) {
      return;
    }

    heroes[hero].getRune(indexRune).setSecondary(indexSecondary, secondary.value);
    heroes[hero]._updateBonuses();

    setHeroes([...heroes]);
  };

  const setRuneStars = (i, s) => {
    if (isNaN(s)) {
      return;
    }

    heroes[hero].getRune(i).stars = s;
    heroes[hero]._updateBonuses();

    setHeroes([...heroes]);
  };

  const setRuneLevel = (i, l) => {
    if (isNaN(l)) {
      return;
    }

    let runelvl = heroes[hero].getRune(i).level;
    let runestars = heroes[hero].getRune(i).stars;

    if (runelvl <= (runestars * 5) / 10) {
      runelvl *= 10;
      runelvl += l;
    } else {
      runelvl = l;
    }

    heroes[hero].getRune(i).level = runelvl;
    heroes[hero]._updateBonuses();

    setHeroes([...heroes]);
  };

  return (
    <>
      <GlobalStyle />
      <HomeDiv>
        <Navbar heroOptions={heroes} onHeroChange={(id) => setHero(id)} />
        <Panel>
          <HeroCard hero={heroes[hero]} size="700" />
          <div style={{ width: "15px" }} />
          <Stats
            hero={heroes[hero]}
            onStarChange={(n, v) => setStars(n, v)}
            onRuneChange={(i, set) => setRune(i, set)}
            onRuneClear={(i) => clearRune(i)}
            onRuneStarChange={(i, v) => setRuneStars(i, v)}
            onRuneLevelChange={(i, v) => setRuneLevel(i, v)}
            onPrimaryChange={(i, p) => setPrimary(i, p)}
            onSecondaryChange={(i, j, p) => setSecondary(i, j, p)}
          />
        </Panel>
      </HomeDiv>
    </>
  );
};
