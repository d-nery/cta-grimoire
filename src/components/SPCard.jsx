import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  position: relative;
  background-color: ${({ theme, active }) => (active ? theme.body.darken(0.2) : "#CCC")};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  padding: 0.8em;
  margin: 0 1em;
  border-radius: 10px;
  text-align: center;
  min-width: 200px;
`;

const StarsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.3em;
`;

const StarImg = styled.img`
  width: 20px;
`;

const Icon = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
`;

const Time = styled.div`
  position: absolute;
  right: 0.8em;
`;

const Name = styled.div`
  font-size: 1.1em;
  margin-bottom: 0.5em;
`;

const Description = styled.div`
  font-size: 1em;
  margin-bottom: 0.5em;
`;

const DataWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    height: 20px;
    width: 25px;
    margin-right: 0.1em;

    img {
      height: 100%;
      margin: auto;
    }
  }

  & > span {
  }
`;

const Data = ({ value, bonus, icon, title }) => {
  if (!value) {
    return <></>;
  }

  return (
    <DataWrapper>
      <div>
        <img src={`icons/${icon}.png`} title={title} />
      </div>
      <span>{Math.round(bonus < 0 ? value / (1 - bonus) : value * (bonus + 1))}</span>
    </DataWrapper>
  );
};

const SPCard = ({ data, hero, stars }) => {
  if (!data) {
    return <CardDiv></CardDiv>;
  }

  return (
    <CardDiv active={hero.yellow >= stars}>
      <StarsDiv>
        {[...Array(stars).keys()].map((_, i) => (
          <StarImg key={i} src="icons/ystar.png"></StarImg>
        ))}
      </StarsDiv>
      {stars == 3 ? <Icon src={`hero_sp/${hero.id}.png`}></Icon> : <></>}
      {data.timed == 0 ? <Time>{data.timed}s</Time> : <></>}
      <Name>{data.name}</Name>
      {data.description ? <Description>{data.description}</Description> : <></>}
      <Data value={data.aoe} bonus={hero.bonuses.aoe} icon="aoe" title="AoE"></Data>
      <Data
        value={data.cd}
        bonus={-hero.bonuses.ultreload}
        icon="cd"
        title="CD"
        style={{ marginTop: "0.2em" }}
      ></Data>
    </CardDiv>
  );
};

export default SPCard;
