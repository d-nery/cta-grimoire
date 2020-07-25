import React, { Component } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const StatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.4em;
  width: ${({ w }) => w + "px"};
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: ${({ w, hasBonus }) => (w > 200 && hasBonus ? "200px" : w + "px")};
    height: 75px;
  }
`;

const StatData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.body.darken(0.2).hex()};

  border-radius: 5px;
  border-color: ${({ theme }) => theme.body.darken(0.5).hex()};
  border-width: 2px;
  border-style: solid;

  padding: 5px 10px;
  width: ${({ w }) => w + "px"};
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

const StatNumber = ({ icon, title, ini = 0, unit, value, bonus, dec = 0, w = 300 }) => {
  const hasBonus = bonus != null;

  return (
    <StatWrapper w={w} hasBonus={hasBonus}>
      <StatData w={hasBonus ? w - 100 : w}>
        <div>
          <img src={`icons/${icon}.png`} title={title} />
        </div>
        <CountUp start={ini} end={value} duration={0.5} delay={0} decimals={dec} separator=",">
          {({ countUpRef }) => (
            <span>
              <span ref={countUpRef} />
              &nbsp;
              {unit ? unit : ""}
            </span>
          )}
        </CountUp>
      </StatData>
      {hasBonus && <StatBonus>{bonus ? `+${(bonus * 100).toFixed(2)}%` : ""}</StatBonus>}
    </StatWrapper>
  );
};

export default StatNumber;
