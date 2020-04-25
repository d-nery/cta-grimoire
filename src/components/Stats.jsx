import React, { Component } from "react";
import styled from "styled-components";

import * as runes from "./Runes";

import StatNumber from "./StatNumber";
import StarInput from "./StarInput";

import { Sets, Primaries, Secondaries } from "../data/runes";

const MainPanel = styled.div`
  display: flex;
  flex-direction: row;
  padding: 60px 0 20px 0;

  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 1em;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
  }
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

/* GAMBI for number animations */
let previous = {
  atk: 0,
  hp: 0,
  power: 0,
  def: 0,
  aps: 0,
  mvspeed: 0,
  ctkdmg: 0,
  ctkrate: 0,
  atkrange: 0,
};

const setOptions = Object.entries(Sets).map(([k, v]) => {
  return {
    value: k,
    label: (
      <img
        src={`runes/${k}.png`}
        alt={v.name}
        title={v.name}
        style={{ width: "35px", height: "35px" }}
      />
    ),
  };
});

Primaries.forEach((v) => {
  v.label = (
    <img
      src={`icons/${v.value}.png`}
      alt={v.name}
      title={v.name}
      style={{ width: "35px", height: "35px" }}
    />
  );
});

Secondaries.forEach((v) => {
  v.label = (
    <img
      src={`icons/${v.value}.png`}
      alt={v.name}
      title={v.name}
      style={{ width: "35px", height: "35px" }}
    />
  );
});

export default (props) => {
  const { hero } = props;

  const { atk, hp, power, def, aps, mvspeed, ctkdmg, ctkrate, atkrange } = hero.stats;

  const ini = { ...previous };
  previous = { ...hero.stats };

  return (
    <MainPanel>
      <LeftPanel>
        <div
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StarInput icon="ystar" title="Stars">
            <input
              name="yellow"
              value={hero.yellow}
              onKeyPress={(e) => props.onStarChange("yellow", e.charCode - 48)}
            />
          </StarInput>
          <StarInput icon="pstar" title="Awakens" pink>
            <input
              name="pink"
              value={hero.pink}
              onKeyPress={(e) => props.onStarChange("pink", e.charCode - 48)}
            />
          </StarInput>
        </div>

        <StatNumber ini={ini.atk} value={atk} bonus={hero.bonuses.atk} icon="atk" title="Damage" />
        <StatNumber ini={ini.hp} value={hp} bonus={hero.bonuses.hp} icon="hp" title="Health" />
        <StatNumber ini={ini.def} value={def} bonus={hero.bonuses.def} icon="def" title="Defense" />
        <StatNumber
          ini={ini.aps}
          value={aps}
          bonus={hero.bonuses.aps}
          icon="aps"
          title="Attack Speed"
          dec={2}
        />
        <StatNumber
          ini={ini.atkrange}
          value={atkrange}
          bonus={hero.bonuses.atkrange}
          icon="atkrange"
          title="Attack Range"
        />
        <StatNumber
          ini={ini.mvspeed}
          value={mvspeed}
          bonus={hero.bonuses.mvspeed}
          icon="mvspeed"
          title="Move Speed"
        />
        <StatNumber
          ini={ini.ctkrate}
          value={ctkrate}
          bonus={hero.bonuses.ctkrate}
          icon="ctkrate"
          title="Critical Rate"
          unit="%"
        />
        <StatNumber
          ini={ini.ctkdmg}
          value={ctkdmg}
          bonus={hero.bonuses.ctkdmg}
          icon="ctkdmg"
          title="Critical Damage"
          unit="%"
        />

        <div style={{ marginTop: "auto" }}>
          <StatNumber ini={ini.power} value={power} icon="power" title="Power" />
        </div>
      </LeftPanel>
      <RightPanel>
        <runes.Panel>
          <runes.Title>Runes</runes.Title>
          <runes.Table>
            <thead>
              <runes.Inputs>
                <th>T</th>
                <th>
                  <img src={`icons/ystar.png`} title="stars" />
                </th>
                <th>lvl</th>
                <th>P</th>
                <th colSpan="4">Secondaries</th>
                <th></th>
              </runes.Inputs>
            </thead>

            <tbody>
              {hero.runes.map((r, i) => {
                return (
                  <runes.Inputs key={i}>
                    <td style={{ padding: "0 .5em" }}>
                      <runes.StyledSelect
                        options={setOptions}
                        styles={runes.SelectStyle}
                        placeholder="▼"
                        onChange={(opt) => props.onRuneChange(i, opt.value)}
                        value={hero.getRune(i) && hero.getRune(i).option}
                      />
                    </td>
                    <td>
                      <input
                        value={(r && r.stars) || 0}
                        name={`rune-s-${i}`}
                        onKeyPress={(e) => props.onRuneStarChange(i, e.charCode - 48)}
                      ></input>
                    </td>
                    <td>
                      <input
                        value={(r && r.level) || 0}
                        name={`rune-l-${i}`}
                        onKeyPress={(e) => props.onRuneLevelChange(i, e.charCode - 48)}
                      ></input>
                    </td>
                    <td style={{ padding: "0 .5em " }}>
                      <runes.StyledSelect
                        options={Primaries}
                        styles={runes.SelectStyle}
                        placeholder="▼"
                        onChange={(opt) => props.onPrimaryChange(i, opt)}
                        value={hero.getRune(i) && hero.getRune(i).primary}
                      />
                    </td>
                    {[0, 1, 2, 3].map((j) => (
                      <td key={j}>
                        <runes.StyledSelect
                          options={Secondaries}
                          styles={runes.SelectStyle}
                          placeholder="▼"
                          onChange={(opt) => props.onSecondaryChange(i, j, opt)}
                          value={hero.getRune(i) && hero.getRune(i).getSecondary(j)}
                        />
                      </td>
                    ))}
                    <td>
                      <runes.ClearButton onClick={() => props.onRuneClear(i)}>X</runes.ClearButton>
                    </td>
                  </runes.Inputs>
                );
              })}
            </tbody>
          </runes.Table>
          <runes.WeaponDiv>
            <img
              src={`hero_weapons/${hero.id}-${Math.max(Math.ceil(hero.weaponLevel / 3), 1)}.png`}
              alt=""
            />
          </runes.WeaponDiv>
        </runes.Panel>
      </RightPanel>
    </MainPanel>
  );
};
