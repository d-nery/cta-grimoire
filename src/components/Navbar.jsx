import React from "react";
import Select, { components } from "react-select";

import Logo from "../../assets/CTA_Logo.png";
import styled from "styled-components";

import Theme from "~/src/theme/theme";

const NavDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 2em;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

/****** Logo ******/

const LogoImg = styled.img`
  max-height: 75px;
`;

/****** Title ******/

const TitleSvg = styled.svg`
  z-index: 3;
  width: 350px;
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

/****** Search hbar ******/

const selectStyle = {
  option: (styles, state) => ({
    ...styles,
    fontFamily: "Avenir",
  }),
  control: (styles) => ({
    ...styles,
    width: 300,
    backgroundColor: Theme.default.body.darken(0.2).hex(),
  }),
  container: (styles) => ({
    ...styles,
    marginTop: "1em",
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
      <img src={`hero_icons/${props.data.icon}.png`} alt="" width="40px" />
      <components.SingleValue {...props} />
    </div>
  );
};

const Option = ({ ...props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img src={`hero_icons/${props.data.icon}.png`} alt="" width="40px" />
      <components.Option {...props} />
    </div>
  );
};

/****** Nav Component ******/

const Navbar = (props) => {
  const options = props.heroOptions.map((v, i) => {
    return { value: i, icon: v.id, label: v.info("name") };
  });

  return (
    <NavDiv>
      <LogoImg src={Logo} />
      <TitleSvg>
        <TitleText x="50%" y="50%">
          Hero Builder
        </TitleText>
      </TitleSvg>
      <Select
        styles={selectStyle}
        components={{ Option, SingleValue }}
        options={options}
        placeholder="Select Hero"
        onChange={(opt) => props.onHeroChange(opt.value)}
      />
    </NavDiv>
  );
};

export default Navbar;
