import React, { Component } from "react";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  padding: 60px 0 30px 0;
`;

const StatRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8em;
  background-color: #381e07;
  border-radius: 5px;
  padding: 5px 10px;
  width: 170px;

  & > div {
    height: 35px;
    width: 45px;

    img {
      max-height: 100%;
      margin: auto;
    }
  }

  span {
    color: white;
    font-family: Avenir;
    font-size: 20px;
  }
`;

const StatText = ({ icon, children }) => {
  return (
    <StatRow row>
      <div>
        <img src={`icons/${icon}.png`} alt="" />
      </div>
      <span>{children}</span>
    </StatRow>
  );
};

export default class Stats extends Component {
  render() {
    const { hero } = this.props;

    return (
      <Panel>
        <StatText icon="atk">{hero.atk}</StatText>
        <StatText icon="hp">{hero.hp}</StatText>
        <StatText icon="def">{hero.def}</StatText>
      </Panel>
    );
  }
}
