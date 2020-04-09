import React, { Component } from "react";
import Select from "react-select";

import Logo from "../../assets/CTA_Logo.png";
import styled from "styled-components";

const NavDiv = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 2em;
  align-items: center;
  justify-content: space-between;
`;

const StyledSelect = styled(Select)`
  /* margin-left: auto; */
  width: 300px;
`;

const LogoImg = styled.img`
  max-height: 100%;
`;

const TitleSvg = styled.svg`
  z-index: 3;
  width: 40%;
  height: 75px;
  font: bold 50px Avenir;
`;

const TitleText = styled.text`
  fill: white;
  z-index: 3;
  stroke: #381e07;
  stroke-linejoin: round;
  dominant-baseline: middle;
  text-anchor: middle;
  stroke-width: 2px;
`;

export default class Navbar extends Component {
  render() {
    const options = this.props.heroOptions.map((v) => {
      return { value: v.id, label: v.name };
    });

    return (
      <NavDiv>
        <LogoImg src={Logo} />
        <TitleSvg>
          <TitleText x="50%" y="50%">
            The Grimoire
          </TitleText>
        </TitleSvg>
        <StyledSelect options={options} onChange={(opt) => this.props.onHeroChange(opt.value)} />
      </NavDiv>
    );
  }
}
