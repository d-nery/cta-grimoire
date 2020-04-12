import React, { Component } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

import c from "../misc/colors";

const StatRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4em;
  background-color: ${c.baseBrown.darken(0.2).hex()};

  border-radius: 5px;
  border-color: ${c.baseBrown.darken(0.5).hex()};
  border-width: 2px;
  border-style: solid;

  padding: 5px 10px;
  width: 200px;
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
`;

const StatNumber = ({ icon, title, ini, unit, children, dec = 0 }) => {
  const s = ini || 0;

  return (
    <StatRow row>
      <div>
        <img src={`icons/${icon}.png`} title={title} />
      </div>
      <CountUp start={s} end={children} duration={0.5} delay={0} decimals={dec}>
        {({ countUpRef }) => (
          <span>
            <span ref={countUpRef} />
            &nbsp;
            {unit ? unit : ""}
          </span>
        )}
      </CountUp>
    </StatRow>
  );
};

export default StatNumber;
