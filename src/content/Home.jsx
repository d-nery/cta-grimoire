import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Footer from "~/src/components/Footer";
import Navbar from "~/src/components/Navbar";

import Heroes from "~/src/data/heroes";
import { Hero as HeroView } from "../hero-card/Hero";

import Hero from "~/src/models/Hero";
import Rune from "~/src/models/Rune";
import GlobalStyle from "~/src/theme/global";

import Theme from "~/src/theme/theme";

import { fromUrl } from "../deep-link/import-hero";
import { Share } from "../sharing/Share";

const db = low(
  new LocalStorage("cta-grimoire-db-2", {
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
  }),
);

const HomeDiv = styled.div`
  background-color: ${({ theme }) => theme.body.hex()};

  min-height: 100vh;
  position: relative;
  padding-bottom: calc(50px + 2em);

  @media (max-width: 768px) {
    padding-bottom: calc(100px + 2em);
  }

  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Home = () => {
  const [heroes, setHeroes] = useState([new Hero("bf")]);
  const [hero, setHero] = useState(0);

  useEffect(() => {
    let _heroes = [];

    for (let k of Object.keys(Heroes)) {
      _heroes.push(new Hero(k));
    }

    db.defaults({ heroes: _heroes, hero: 35 }).write();
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

  const currentHero = heroes[hero];

  const importedHero = fromUrl();
  console.log(currentHero)
  console.log(importedHero)
  console.log(`heroes`, heroes) // in imported one it does not contain all heroes
  console.log(`hero`, hero)


  // seems like an ugly hack, not sure yet what is going on there ;)
  if (heroes.length < 2) {
    return <ThemeProvider theme={Theme.default}>
      Loading...
    </ThemeProvider>
  }


  return (
    <ThemeProvider theme={Theme.default}>
      <>
        <GlobalStyle/>
        <HomeDiv>
          <Navbar heroOptions={heroes} onHeroChange={(id) => setHero(id)}/>
          <ContentWrapper>

            {!importedHero?.id && <>
              <Share hero={currentHero}/>
              <HeroView
                hero={currentHero}
                setStars={setStars}
                setRune={setRune}
                clearRune={clearRune}
                setRuneStars={setRuneStars}
                setRuneLevel={setRuneLevel}
                setPrimary={setPrimary}
                setSecondary={setSecondary}
              />
            </>}
            {importedHero?.id && <>
              Below is the hero someone shared with you.
               {/* apparently, need all the 'sets' or constructor from deserialized data... */}
              <HeroView hero={new Hero(importedHero.id)}/>
            </>}


          </ContentWrapper>
          <Footer/>
        </HomeDiv>
      </>
    </ThemeProvider>
  );
};

export default Home;
