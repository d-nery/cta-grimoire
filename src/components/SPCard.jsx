import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.body.darken(0.2)};
  color: ${({ theme, active }) => theme.text};
  display: flex;
  flex-direction: column;
  padding: 0.8em;
  margin: 0 1em;
  border-radius: 10px;
  text-align: center;
  width: 200px;
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

const Name = styled.div`
  font-size: 1.1em;
  margin-bottom: 0.5em;
`;

const Description = styled.div`
  font-size: 0.8em;
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

const Lock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000090;
  border-radius: 10px;

  opacity: ${({ active }) => (active ? 0 : 1)};
  visibility: ${({ active }) => (active ? "hidden" : "visible")};
  transition: opacity 0.5s ease, visibility 0.5s ease;

  img {
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Data = ({ value, bonus, icon, title }) => {
  if (!value) {
    return null;
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

const Effect = ({ value, bonuses, type, duration }) => {
  if (!value) {
    return null;
  }

  const found = !!bonuses[type + "ch"];

  const ch_bonus = bonuses[type + "ch"] || 0;
  const tm_bonus = bonuses[type + "tm"] || 0;

  return (
    <DataWrapper>
      <div>
        <img src={`icons/${found ? type + "tm" : type}.png`} title={type} />
      </div>
      <span>{Math.round(value + ch_bonus * 100)}%</span>
      {duration > 0 && (
        <>
          <div style={{ marginLeft: "0.1em" }}>
            <img src={`icons/time.png`} title="Duration" />
          </div>
          <span>
            {Math.round(tm_bonus < 0 ? duration / (1 - tm_bonus) : duration * (tm_bonus + 1))}s
          </span>
        </>
      )}
    </DataWrapper>
  );
};

const SPCard = ({ data, hero, stars }) => {
  if (!data) {
    return (
      <CardDiv>
        <Lock>
          <img src="icons/nope.png" />
        </Lock>
      </CardDiv>
    );
  }

  let effects = null;
  if (data.effect) {
    effects = data.effect.map((e, i) => (
      <Effect key={i} type={e[0]} value={e[1]} duration={e[2]} bonuses={hero.bonuses} />
    ));
  }

  return (
    <CardDiv>
      <StarsDiv>
        {[...Array(stars).keys()].map((_, i) => (
          <StarImg key={i} src="icons/ystar.png" />
        ))}
      </StarsDiv>
      {stars == 3 ? <Icon src={`hero_sp/${hero.id}.png`} /> : <></>}
      {data.timed && (
        <Time>
          <div>
            <img src="icons/time.png" title="Timed" />
          </div>
          <span>{data.timed}s</span>
        </Time>
      )}
      <Name>{data.name}</Name>
      {data.description ? <Description>{data.description}</Description> : <></>}

      {effects}

      <Data value={data.aoe} bonus={hero.bonuses.aoe} icon="aoe" title="AoE" />
      <Data
        value={data.cd}
        bonus={-hero.bonuses.ultreload}
        icon="time"
        title="CD"
        style={{ marginTop: "0.2em" }}
      />
      <Lock active={hero.yellow >= stars}>
        <img src="icons/lock.png" />
      </Lock>
    </CardDiv>
  );
};

export default SPCard;
