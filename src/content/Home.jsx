import React, { useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";

import Footer from "~/src/components/Footer";
import Navbar from "~/src/components/Navbar";
import GlobalStyle from "~/src/theme/global";

import Theme from "~/src/theme/theme";

import { fromUrl } from "../deep-link/import-hero";
import { Hero as HeroView } from "../hero-card/Hero";
import { dataToHero } from "../mappers/data-to-hero";
import { deserializeHero } from "../models/Hero";
import { useOwnedHeroes } from "../persistence/owned-heroes";
import { Share } from "../sharing/Share";


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
  const { heroes, visitHero, activeHero, updateHero } = useOwnedHeroes();

  const onUpdateHero = useCallback(() => {
    updateHero(activeHero);
  }, [activeHero]);

  const importedHero = fromUrl();

  if (heroes.length === 0) {
    return <ThemeProvider theme={Theme.default}>
      Loading...
    </ThemeProvider>;
  }
  return (
    <ThemeProvider theme={Theme.default}>
      <>
        <GlobalStyle/>
        <HomeDiv>
          <Navbar heroOptions={heroes} onHeroChange={(hero) => visitHero(hero)}/>
          <ContentWrapper>

            {!importedHero?.id && <>
              <Share hero={activeHero}/>
              <HeroView
                hero={activeHero}
                updateHero={onUpdateHero}
              />
            </>}
            {importedHero?.id && <>
              Below is the hero someone shared with you.
              {/* TODO make another page at all -> no hero selection */}
              <HeroView hero={dataToHero(importedHero)}/>
            </>}


          </ContentWrapper>
          <Footer/>
        </HomeDiv>
      </>
    </ThemeProvider>
  );
};

export default Home;
