import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";

import Theme from "~/src/theme/theme";
import GlobalStyle from "~/src/theme/global";

import Heroes from "~/src/data/heroes";
import HeroesSP from "~/src/data/heroes-sp";

import HeroCard from "~/src/components/HeroCard";
import Navbar from "~/src/components/Navbar";
import Stats from "~/src/components/Stats";
import SPCard from "~/src/components/SPCard";
import Footer from "~/src/components/Footer";
import ExtraStats from "~/src/components/ExtraStats";

import Hero from "~/src/models/Hero";
import Rune from "~/src/models/Rune";

import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

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
  })
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

const UpperPanel = styled.div`
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

const LowerPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const sectionCss = css`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body.darken(0.1)};
  padding: 0.3em 0.5em;

  border-radius: 10px;
  border-color: ${({ theme }) => theme.body.darken(0.5).hex()};
  border-width: 2px;
  border-style: solid;

  align-items: center;
`;

const SPDiv = styled.div`
  ${sectionCss}

  margin-right: 2em;

  @media (max-width: 768px) {
    margin-bottom: 2em;
    margin-right: 0;
  }

  & > span {
    margin-left: 1em;
  }

  & > div {
    display: flex;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const ExtrasDiv = styled.div`
  ${sectionCss}

  & > span {
    /* margin-left: 1em; */
  }
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

  return (
    <ThemeProvider theme={Theme.default}>
      <>
        <GlobalStyle />
        <HomeDiv>
          <Navbar heroOptions={heroes} onHeroChange={(id) => setHero(id)} />
          <ContentWrapper>
            <UpperPanel>
              <HeroCard hero={currentHero} size="700" />
              <div style={{ width: "15px" }} />
              <Stats
                hero={currentHero}
                onStarChange={(n, v) => setStars(n, v)}
                onRuneChange={(i, set) => setRune(i, set)}
                onRuneClear={(i) => clearRune(i)}
                onRuneStarChange={(i, v) => setRuneStars(i, v)}
                onRuneLevelChange={(i, v) => setRuneLevel(i, v)}
                onPrimaryChange={(i, p) => setPrimary(i, p)}
                onSecondaryChange={(i, j, p) => setSecondary(i, j, p)}
              />
            </UpperPanel>
            <LowerPanel>
              <SPDiv>
                <span>Skills</span>
                <div>
                  <SPCard
                    data={HeroesSP[currentHero.id]?.sp1}
                    hero={currentHero}
                    stars={1}
                  ></SPCard>
                  <SPCard
                    data={HeroesSP[currentHero.id]?.sp2}
                    hero={currentHero}
                    stars={2}
                  ></SPCard>
                  <SPCard
                    data={HeroesSP[currentHero.id]?.sp3}
                    hero={currentHero}
                    stars={3}
                  ></SPCard>
                  <SPCard
                    data={HeroesSP[currentHero.id]?.sp4}
                    hero={currentHero}
                    stars={4}
                  ></SPCard>
                </div>
              </SPDiv>
              <ExtrasDiv>
                <span>Extras</span>
                <ExtraStats hero={currentHero} />
              </ExtrasDiv>
            </LowerPanel>
          </ContentWrapper>
          <Footer></Footer>
        </HomeDiv>
      </>
    </ThemeProvider>
  );
};

export default Home;
