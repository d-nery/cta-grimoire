import React, { Component } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

import c from "../misc/colors";

const StatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.4em;
  width: 300px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 200px;
    height: 75px;
  }
`;

const StatData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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

const StatBonus = styled.div`
  margin-left: auto;
  color: white;
  font-family: Avenir;
`;

const StatNumber = ({ icon, title, ini, unit, value, bonus, dec = 0 }) => {
  const s = ini || 0;

  return (
    <StatWrapper>
      <StatData>
        <div>
          <img src={`icons/${icon}.png`} title={title} />
        </div>
        <CountUp start={s} end={value} duration={0.5} delay={0} decimals={dec} separator=",">
          {({ countUpRef }) => (
            <span>
              <span ref={countUpRef} />
              &nbsp;
              {unit ? unit : ""}
            </span>
          )}
        </CountUp>
      </StatData>
      <StatBonus>{bonus ? `+${(bonus * 100).toFixed(2)}%` : ""}</StatBonus>
    </StatWrapper>
  );
};

export default StatNumber;
