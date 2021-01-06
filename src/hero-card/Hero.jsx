import React from "react";
import styled, { css } from "styled-components";
import ExtraStats from "~/src/components/ExtraStats";
import HeroCard from "~/src/components/HeroCard";
import Stats from "~/src/components/Stats";

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

const SPDiv = styled.div`
  ${sectionCss};

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

export const Hero = ({
                       hero,
                       setStars,
                       setRune,
                       clearRune,
                       setRuneStars,
                       setRuneLevel,
                       setPrimary,
                       setSecondary,
                     }) =>
  <>
    <UpperPanel>
      <HeroCard hero={hero} size="700"/>
      <div style={{ width: "15px" }}/>
      <Stats
        hero={hero}
        onStarChange={(n, v) => setStars?.(n, v)}
        onRuneChange={(i, set) => setRune?.(i, set)}
        onRuneClear={(i) => clearRune?.(i)}
        onRuneStarChange={(i, v) => setRuneStars?.(i, v)}
        onRuneLevelChange={(i, v) => setRuneLevel?.(i, v)}
        onPrimaryChange={(i, p) => setPrimary?.(i, p)}
        onSecondaryChange={(i, j, p) => setSecondary?.(i, j, p)}
      />
    </UpperPanel>
    <LowerPanel>
      {/* <SPDiv>
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
              </SPDiv> */}
      <ExtrasDiv>
        <span>Extras</span>
        <ExtraStats hero={hero}/>
      </ExtrasDiv>
    </LowerPanel>
  </>;
