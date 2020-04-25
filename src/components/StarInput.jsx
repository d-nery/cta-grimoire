import React, { Component } from "react";
import styled from "styled-components";

import c from "../misc/colors";

const StatRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8em;
  background-color: ${c.baseBrown.darken(0.2).hex()};

  border-radius: 5px;
  border-color: ${c.baseBrown.darken(0.5).hex()};
  border-width: 2px;
  border-style: solid;

  padding: 5px 10px;
  width: 95px;
  color: white;
  font-family: Avenir;
  font-size: 20px;

  & > div {
    height: 35px;
    width: 45px;

    img {
      height: 100%;
      margin: auto;
    }
  }

  input {
    width: 30px;
    background: ${c.baseBrown.hex()};
    border: none;
    color: white;
    text-align: center;
    caret-color: transparent;
    cursor: pointer;

    &:focus {
      outline-color: ${(props) => (props.pink ? "pink" : "yellow")};
      outline-style: solid;
      outline-width: 1px;
    }
  }
`;

const StarInput = ({ icon, title, pink, children }) => {
  return (
    <StatRow pink={pink}>
      <div>
        <img src={`icons/${icon}.png`} title={title} />
      </div>
      <span>{children}</span>
    </StatRow>
  );
};

export default StarInput;
