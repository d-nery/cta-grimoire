import React, { Component } from "react";
import Select, { components } from "react-select";

import Logo from "../../assets/CTA_Logo.png";
import styled from "styled-components";
import c from "../misc/colors";

const NavDiv = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 2em;
  align-items: center;
  justify-content: space-between;
`;

/****** Logo ******/

const LogoImg = styled.img`
  max-height: 100%;
`;

/****** Title ******/

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

/****** Seacr hbar ******/

const selectStyle = {
  option: (styles, state) => ({
    ...styles,
    fontFamily: "Avenir",
  }),
  control: (styles) => ({
    ...styles,
    width: 300,
    backgroundColor: c.baseBrown.darken(0.2).hex(),
  }),
  singleValue: (styles, state) => ({
    ...styles,
    position: "unset",
    transform: "unset",
    fontFamily: "Avenir",
    color: "white",
    marginLeft: ".4em",
  }),
};

const SingleValue = ({ ...props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <img src={`hero_icons/${props.data.value}.png`} alt="" width="40px" />
      <components.SingleValue {...props} />
    </div>
  );
};

const Option = ({ ...props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img src={`hero_icons/${props.data.value}.png`} alt="" width="40px" />
      <components.Option {...props} />
    </div>
  );
};

/****** Nav Component ******/

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
        <Select
          styles={selectStyle}
          components={{ Option, SingleValue }}
          options={options}
          placeholder="Select Hero"
          onChange={(opt) => this.props.onHeroChange(opt.value)}
        />
      </NavDiv>
    );
  }
}
