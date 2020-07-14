import React from "react";
import styled from "styled-components";

// pirato: {
//   sp1: {
//     name: "Shoot Bombs",
//     description: null,
//     aoe: 100,
//   },
//   sp2: {
//     name: "Shoot a Big Bomb",
//     description: null,
//     aoe: 150,
//     timed: 0,
//   },
//   sp3: {
//     name: "Bomb Rain",
//     aoe: 300,
//     cd: 30,
//   },
//   sp4: {
//     name: "Buff Atk",
//     type: ["buff", "atk"],
//     affects: "water",
//     value: 400,
//   },
// },

const CardDiv = styled.div`
  background-color: ${({ theme, active }) => (active ? theme.body.darken(0.2) : "#CCC")};
  color: ${({ theme }) => theme.text};
`;

const SPCard = ({ data, hero, stars }) => {
  return <CardDiv active={hero.yellow >= stars}>TESTE</CardDiv>;
};

export default SPCard;
