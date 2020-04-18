import React, { Component } from "react";
import styled from "styled-components";

import StatNumber from "./StatNumber";
import StarInput from "./StarInput";

import { Sets, Primaries, Secondaries } from "../data/runes";

import c from "../misc/colors";
import Select, { components } from "react-select";

const MainPanel = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  /* min-width: 720px; */
  padding: 60px 0 20px 0;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  margin-right: 1em;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 500px;
`;

const RunesPanel = styled.div`
  background-color: ${c.baseBrown.darken(0.2).hex()};
  height: 480px;
  border-radius: 5px;
  border-color: ${c.baseBrown.darken(0.5).hex()};
  border-width: 2px;
  border-style: solid;
`;

const RunesTitle = styled.div`
  width: 100%;
  border-bottom: 1px black solid;
  text-align: center;
  font-family: Avenir;
  color: white;
  font-size: 25px;
  background-color: ${c.baseBrown.darken(0.1).hex()};
`;

const RunesTable = styled.table`
  margin: auto;
  margin-top: 1em;
  th {
    font-family: Avenir;
    color: white;
  }
`;

const RuneInputs = styled.tr`
  height: 35px;
  width: 100%;
  margin-bottom: 0.3em;

  input {
    width: 35px;
    height: 35px;
    background: ${c.baseBrown.hex()};
    border: none;
    color: white;
    text-align: center;
    caret-color: transparent;
    cursor: pointer;
    font-family: Avenir;

    &:focus {
      outline-color: yellow;
    }
  }

  img {
    height: 20px;
    margin: auto;
  }
`;

const selectStyle = {
  dropdownIndicator: () => ({
    display: "none",
  }),
  control: (styles) => ({
    ...styles,
    width: 35,
    height: 35,
    background: c.baseBrown.hex(),
    border: "none",
    margin: "auto",
    minHeight: "unset",
  }),
  valueContainer: (styles) => ({
    padding: 0,
  }),
  singleValue: (styles) => ({
    ...styles,
    maxWidth: "unset",
    margin: 0,
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "white",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0,
  }),
  indicatorsContainer: () => ({
    display: "none",
  }),
  menuList: (styles) => ({
    ...styles,
    scrollbarWidth: "none",
    padding: "0.1em",
  }),
  option: (styles) => ({
    ...styles,
    padding: 0,
    marginBottom: "0.1em",
  }),
};

const StyledSelect = styled(Select)`
  *::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const ClearButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: Avenir;
  color: red;
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

const setOptions = Object.keys(Sets).map((k) => {
  return {
    value: k,
    label: <img src={`runes/${k}.png`} alt="" style={{ width: "35px", height: "35px" }} />,
  };
});

Primaries.forEach((v) => {
  v.label = <img src={`icons/${v.value}.png`} alt="" style={{ width: "35px", height: "35px" }} />;
});

Secondaries.forEach((v) => {
  v.label = <img src={`icons/${v.value}.png`} alt="" style={{ width: "35px", height: "35px" }} />;
});

export default class Stats extends Component {
  render() {
    const { hero } = this.props;

    const { atk, hp, power, def, aps, mvspeed, ctkdmg, ctkrate, atkrange } = hero.stats;

    const ini = previous;
    previous = hero.stats;

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
                readOnly
                name="yellow"
                value={hero.yellow}
                onKeyPress={(e) => this.props.onStarChange("yellow", e.charCode - 48)}
              />
            </StarInput>
            <StarInput icon="pstar" title="Awakens" pink>
              <input
                readOnly
                name="pink"
                value={hero.pink}
                onKeyPress={(e) => this.props.onStarChange("pink", e.charCode - 48)}
              />
            </StarInput>
          </div>

          <StatNumber ini={ini.atk} icon="atk" title="Damage">
            {atk}
          </StatNumber>
          <StatNumber ini={ini.hp} icon="hp" title="Health">
            {hp}
          </StatNumber>
          <StatNumber ini={ini.def} icon="def" title="Defense">
            {def}
          </StatNumber>
          <StatNumber ini={ini.aps} icon="aps" title="Attack Speed" dec={2}>
            {aps}
          </StatNumber>
          <StatNumber ini={ini.atkrange} icon="atkrange" title="Attack Range">
            {atkrange}
          </StatNumber>
          <StatNumber ini={ini.mvspeed} icon="mvspeed" title="Move Speed">
            {mvspeed}
          </StatNumber>
          <StatNumber ini={ini.ctkrate} icon="ctkrate" title="Critical Rate" unit="%">
            {ctkrate}
          </StatNumber>
          <StatNumber ini={ini.ctkdmg} icon="ctkdmg" title="Critical Damage" unit="%">
            {ctkdmg}
          </StatNumber>

          <div style={{ marginTop: "auto" }}>
            <StatNumber ini={ini.power} icon="power" title="Power">
              {power}
            </StatNumber>
          </div>
        </LeftPanel>
        <RightPanel>
          <RunesPanel>
            <RunesTitle>Runes</RunesTitle>
            <RunesTable>
              <thead>
                <RuneInputs>
                  <th>T</th>
                  <th>
                    <img src={`icons/ystar.png`} title="stars" />
                  </th>
                  <th>lvl</th>
                  <th>P</th>
                  <th colSpan="4">Secondaries</th>
                  <th></th>
                </RuneInputs>
              </thead>

              <tbody>
                {hero.runes.map((r, i) => {
                  return (
                    <RuneInputs key={i}>
                      <td style={{ padding: "0 .5em" }}>
                        <StyledSelect
                          options={setOptions}
                          styles={selectStyle}
                          placeholder="▼"
                          onChange={(opt) => this.props.onRuneChange(i, opt.value)}
                          value={hero.getRune(i) && hero.getRune(i).option}
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={(r && r.stars) || 0}
                          name={`rune-s-${i}`}
                          onKeyPress={(e) => this.props.onRuneStarChange(i, e.charCode - 48)}
                        ></input>
                      </td>
                      <td>
                        <input
                          readOnly
                          value={(r && r.level) || 0}
                          name={`rune-l-${i}`}
                          onKeyPress={(e) => this.props.onRuneLevelChange(i, e.charCode - 48)}
                        ></input>
                      </td>
                      <td style={{ padding: "0 .5em " }}>
                        <StyledSelect
                          options={Primaries}
                          styles={selectStyle}
                          placeholder="▼"
                          onChange={(opt) => this.props.onPrimaryChange(i, opt)}
                          value={hero.getRune(i) && hero.getRune(i).primary}
                        />
                      </td>
                      {[0, 1, 2, 3].map((j) => (
                        <td key={j}>
                          <StyledSelect
                            options={Secondaries}
                            styles={selectStyle}
                            placeholder="▼"
                            onChange={(opt) => this.props.onSecondaryChange(i, j, opt)}
                            value={hero.getRune(i) && hero.getRune(i).getSecondary(j)}
                          />
                        </td>
                      ))}
                      <td>
                        <ClearButton onClick={() => this.props.onRuneClear(i)}>X</ClearButton>
                      </td>
                    </RuneInputs>
                  );
                })}
              </tbody>
            </RunesTable>
          </RunesPanel>
        </RightPanel>
      </MainPanel>
    );
  }
}
