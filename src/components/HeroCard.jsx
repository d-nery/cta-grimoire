import React, { useState, useLayoutEffect } from "react";
import styled, { css, keyframes } from "styled-components";

export const rarities = ["common", "rare", "epic", "legendary"];
export const elements = ["water", "fire", "earth", "dark", "light"];

const CardDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 570px;
  min-height: 600px;
`;

const Wrapper = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
  right: 0;
  max-width: 100%;
  max-height: 100%;
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
  ${(props) =>
    css`
      ${NameSvg} {
        height: ${Math.round(0.05 * props.height)}px;
        font: bold ${Math.round(0.04 * props.height)}px Avenir;
      }

      ${NameText} {
        stroke-width: ${Math.round(0.002 * props.height)}px;
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
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  left: 0;
  right: 0;
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
    transform: translateY(-46%);
  }
`;

const Avatar = styled.img`
  position: absolute;
  z-index: 3;
  top: 50%;
  transform: translateY(-45%);
  left: 0;
  right: 0;
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

const HeroCard = ({ hero }) => {
  const [width, setWidth] = useState(570);

  const onResize = () => {
    const actualWidth = document.getElementById("carddiv").clientWidth;
    setWidth(actualWidth);
  };

  useLayoutEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const baseHeight = 780;
  const baseWidth = 570;

  let w = Math.min(width, baseWidth);
  let h = Math.round((baseHeight * w) / baseWidth);

  return (
    <CardDiv id="carddiv">
      <Wrapper height={h} width={w}>
        <Image src={`cards/${hero?.info("rarity") || "rare"}.png`} z="0" />
        <Image src={`cards/${hero?.info("element") || "dark"}.png`} z="1" />
        <NameSvg>
          <NameText y="50%" x="50%" color={hero?.info("element") || "dark"}>
            {hero?.info("name") || "Dark Hunter"}
          </NameText>
        </NameSvg>
        <Icon src={`icons/${hero?.info("class") || "dark"}.png`} />
        <Avatar src={`hero_art/${hero?.id || "dh"}.png`} />
      </Wrapper>
    </CardDiv>
  );
};

export default HeroCard;
