import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";

export const rarities = ["common", "rare", "epic", "legendary"];
export const elements = ["water", "fire", "earth", "dark", "light"];

const CardDiv = styled.div`
  position: relative;
  height: ${(props) => (props.size && `${props.size}px`) || "780px"};
  width: ${(props) => (props.size && `${Math.round((props.size * 570) / 780)}px`) || "570px"};
  ${(props) =>
    props.size &&
    css`
      ${NameSvg} {
        height: ${Math.round(0.05 * props.size)}px;
        font: bold ${Math.round(0.04 * props.size)}px Avenir;
      }

      ${NameText} {
        stroke-width: ${Math.round(0.002 * props.size)}px;
      }
    `}
`;

const borders = new Map([
  ["fire", "#820000"],
  ["earth", "#184d00"],
  ["water", "#0042a8"],
  ["light", "#ac4a00"],
  ["dark", "#230041"],
]);

const Image = styled.img`
  position: absolute;
  z-index: ${(props) => props.z || 0};
  height: 100%;
  width: 100%;
`;

const Icon = styled.img`
  position: absolute;
  z-index: 3;
  height: 5%;
  top: 11.7%;
  right: 16.2%;
`;

const AvatarAnim = keyframes`
  50% {
    transform: translate(-50%, -0.8%);
  }
`;

const Avatar = styled.img`
  position: absolute;
  z-index: 3;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
  max-height: 90%;
  max-width: 100%;
  animation: ${AvatarAnim} 5s ease-in-out infinite;
`;

const NameSvg = styled.svg`
  position: absolute;
  top: 11%;
  z-index: 3;
  width: 100%;
`;

const NameText = styled.text`
  fill: white;
  z-index: 3;
  stroke: ${(props) => props.color && borders.get(props.color)};
  stroke-linejoin: round;
  dominant-baseline: middle;
  text-anchor: middle;
`;

export default class HeroCard extends Component {
  render() {
    const { hero, size } = this.props;

    return (
      <CardDiv size={size}>
        <Image src={`cards/${(hero && hero.info("rarity")) || "rare"}.png`} z="0" />
        <Image src={`cards/${(hero && hero.info("element")) || "dark"}.png`} z="1" />
        <NameSvg>
          <NameText y="50%" x="50%" color={(hero && hero.info("element")) || "dark"}>
            {(hero && hero.info("name")) || "Dark Hunter"}
          </NameText>
        </NameSvg>
        <Icon src={`icons/${(hero && hero.info("class")) || "dark"}.png`} />
        <Avatar src={`hero_art/${(hero && hero.id) || "dh"}.png`} />
      </CardDiv>
    );
  }
}
