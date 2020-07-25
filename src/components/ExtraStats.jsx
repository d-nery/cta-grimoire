import React from "react";
import styled from "styled-components";

import StatNumber from "./StatNumber";

/* GAMBI for number animations */
let previous = {
  dps: 0,
  aoe: 0,
  gold: 0,
  ultreload: 0,
  ult: 0,
  freezech: 0,
  freezetm: 0,
  burnch: 0,
  burntm: 0,
  poisonch: 0,
  poisontm: 0,
  stuntm: 0,
  stunch: 0,
  resist: 0,
  dodge: 0,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5em;
  flex-wrap: wrap;
  width: 300px;
  justify-content: space-between;
`;

const ExtraStats = ({ hero }) => {
  const { dps, resist, dodge } = hero.stats;
  const {
    aoe,
    gold,
    ultreload,
    ult,
    freezech,
    freezetm,
    burnch,
    burntm,
    poisonch,
    poisontm,
    stuntm,
    stunch,
  } = hero.bonuses;

  const ini = { ...previous };
  previous = { ...hero.stats, ...hero.bonuses };

  let tm, ch, tmIcon, chIcon, tmIni, chIni;

  switch (hero.info("element")) {
    case "water":
      tm = freezetm;
      ch = freezech;
      tmIcon = "freezetm";
      chIcon = "freezech";
      tmIni = ini.freezetm;
      chIni = ini.freezech;
      break;

    case "fire":
      tm = burntm;
      ch = burnch;
      tmIcon = "burntm";
      chIcon = "burnch";
      tmIni = ini.burntm;
      chIni = ini.burnch;
      break;

    case "earth":
      tm = poisontm;
      ch = poisonch;
      tmIcon = "poisontm";
      chIcon = "poisonch";
      tmIni = ini.poisontm;
      chIni = ini.poisonch;
      break;
  }

  return (
    <Wrapper>
      <StatNumber ini={ini.dps} value={dps} bonus={null} icon="dps" title="Raw Damage Per Second" />
      <StatNumber
        ini={ini.aoe * 100}
        value={aoe * 100}
        bonus={null}
        icon="aoe"
        title="AoE Bonus"
        w={148}
        unit="%"
      />
      <StatNumber
        ini={ini.gold * 100}
        value={gold * 100}
        bonus={null}
        icon="gold"
        title="Gold Bonus"
        w={148}
        unit="%"
      />
      <StatNumber
        ini={ini.resist}
        value={resist}
        bonus={null}
        icon="resist"
        title="Effect Resistance"
        w={148}
        unit="%"
      />
      <StatNumber
        ini={ini.dodge}
        value={dodge}
        bonus={null}
        icon="dodge"
        title="Dodge Rate"
        w={148}
        unit="%"
      />
      <StatNumber
        ini={ini.stuntm * 100}
        value={stuntm * 100}
        bonus={null}
        icon="stuntm"
        title="Stun Time Bonus"
        w={148}
        unit="%"
      />
      <StatNumber
        ini={ini.stunch * 100}
        value={stunch * 100}
        bonus={null}
        icon="stunch"
        title="Stun Chance Bonus"
        w={148}
        unit="%"
      />
      {tm != null && (
        <StatNumber
          ini={tmIni * 100}
          value={tm * 100}
          bonus={null}
          icon={tmIcon}
          title="Effect Time Bonus"
          w={148}
          unit="%"
        />
      )}
      {ch != null && (
        <StatNumber
          ini={chIni * 100}
          value={ch * 100}
          bonus={null}
          icon={chIcon}
          title="Effect Chance Bonus"
          w={148}
          unit="%"
        />
      )}
      <StatNumber
        ini={ini.ultreload * 100}
        value={ultreload * 100}
        bonus={null}
        icon="ultreload"
        title="SP3 Reload Speed Reduction"
        w={148}
        unit="%"
      />
      <StatNumber
        ini={ini.ult * 100}
        value={ult * 100}
        bonus={null}
        icon="ult"
        title="SP3 Damage"
        w={148}
        unit="%"
      />
    </Wrapper>
  );
};

export default ExtraStats;
