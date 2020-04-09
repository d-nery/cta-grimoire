import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-modern-css-reset";
import Papa from "papaparse";

import data from "../data/heroes.csv";

import HeroCard from "../components/HeroCard";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";

const parseFile = (rawFile) => {
  return new Promise((resolve) => {
    Papa.parse(rawFile, {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
    });
  });
};

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
  background-color: #452308;

  min-height: 100vh;
`;

const Panel = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
  padding: 0 2em;
  align-items: center;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      hero: {},
    };
  }

  async componentDidMount() {
    let hs = await parseFile(data);

    this.setState({
      heroes: hs,
      hero: hs.find((v) => v.id == "vlad"),
    });

    console.log(this.state.heroes);
    console.log(this.state.hero);
  }

  setHero(hero_id) {
    this.setState({
      hero: this.state.heroes.find((v) => v.id == hero_id),
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
            <div style={{ width: "30px" }} />
            <Stats hero={this.state.hero} />
          </Panel>
        </HomeDiv>
      </>
    );
  }
}
