import React, { Component } from "react";
import styled from "styled-components";

import StatNumber from "./StatNumber";
import StarInput from "./StarInput";
import { getStats, PossibleRunes, PossiblePrimaries, PossibleSecondaries, getRunesBonus } from "../misc/calculator";
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

const Option = ({ ...props }) => {
  props.data.label = <img src={`runes/${props.data.value}.png`} alt="" style={{ width: "35px", height: "35px" }} />;

  return <components.Option {...props} />;
};

const StatOption = ({ ...props }) => {
  props.data.label = <img src={`icons/${props.data.value}.png`} alt="" style={{ width: "35px", height: "35px" }} />;

  return <components.Option {...props} />;
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
let previous = { atk: 0, hp: 0, power: 0, def: 0, aps: 0, mvspeed: 0, ctkdmg: 0, ctkrate: 0, atkrange: 0 };

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yellow: 1,
      pink: 0,
      runes: [
        { type: null, stars: 0, level: 0, primary: null, secondaries: [null, null, null, null] },
        { type: null, stars: 0, level: 0, primary: null, secondaries: [null, null, null, null] },
        { type: null, stars: 0, level: 0, primary: null, secondaries: [null, null, null, null] },
        { type: null, stars: 0, level: 0, primary: null, secondaries: [null, null, null, null] },
        { type: null, stars: 0, level: 0, primary: null, secondaries: [null, null, null, null] },
        { type: null, stars: 0, level: 0, primary: null, secondaries: [null, null, null, null] },
        { type: null, stars: 0, level: 0, primary: null, secondaries: [null, null, null, null] },
        { type: null, stars: 0, level: 0, primary: null, secondaries: [null, null, null, null] },
        { type: null, stars: 0, level: 0, primary: null, secondaries: [null, null, null, null] },
      ],
    };
  }

  handleStarChange(event) {
    const target = event.target;
    const name = target.name;
    const value = event.charCode - 48;

    let yellow = this.state.yellow;
    let pink = this.state.pink;

    if (name == "yellow") {
      yellow = value < 1 || value > 7 ? yellow : value;
      pink = Math.min(pink, yellow);
    } else {
      pink = value < 0 || value > 7 ? pink : value;
      yellow = Math.max(pink, yellow);
    }

    this.setState({
      yellow: yellow,
      pink: pink,
    });
  }

  handleRuneStarsChange(event) {
    const target = event.target;
    let [_, type, slot] = target.name.split("-");
    const value = event.charCode - 48;

    // Invalid input
    if (value < 0 || value > 9) {
      return;
    }

    slot = parseInt(slot);

    let runestars = this.state.runes[slot].stars;
    let runelvl = this.state.runes[slot].level;

    if (type == "s") {
      runestars = value < 1 || value > 6 ? runestars : value;
      runelvl = Math.max(1, runelvl);
    } else {
      if (runelvl <= (runestars * 5) / 10) {
        runelvl *= 10;
        runelvl += value;
      } else {
        runelvl = value;
      }
      runelvl = Math.max(1, runelvl);
    }

    runelvl = Math.min(runelvl, 5 * runestars);

    let tempRunes = this.state.runes;
    tempRunes[slot].stars = runestars;
    tempRunes[slot].level = runelvl;

    this.setState({
      runes: tempRunes,
    });
  }

  handleRuneStatsChange(slot, type, value) {
    let runes = this.state.runes;

    if (type == "t") {
      runes[slot].type = value;
      if (runes[slot].stars == 0) {
        runes[slot].stars = 1;
        runes[slot].level = 1;
      }
    } else if (type == "p") {
      runes[slot].primary = value;
    } else if (type == "c") {
      runes[slot].type = null;
      runes[slot].primary = null;
      runes[slot].secondaries = [null, null, null, null];
      runes[slot].stars = 0;
      runes[slot].level = 0;
    } else {
      runes[slot].secondaries[type] = value;
    }

    this.setState({ runes: runes });
  }

  render() {
    const { hero } = this.props;

    const stats = getStats(hero, this.state.yellow, this.state.pink, getRunesBonus(this.state.runes));
    const { atk, hp, power, def, aps, mvspeed, ctkdmg, ctkrate, atkrange } = stats;

    const ini = previous;
    previous = stats;

    return (
      <MainPanel>
        <LeftPanel>
          <div style={{ width: "200px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <StarInput icon="ystar" title="Stars">
              <input readOnly name="yellow" value={this.state.yellow} onKeyPress={(e) => this.handleStarChange(e)} />
            </StarInput>
            <StarInput icon="pstar" title="Awakens" pink>
              <input readOnly name="pink" value={this.state.pink} onKeyPress={(e) => this.handleStarChange(e)} />
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
                {this.state.runes.map((r, i) => {
                  return (
                    <RuneInputs key={i}>
                      <td style={{ padding: "0 .5em" }}>
                        <StyledSelect
                          options={PossibleRunes}
                          components={{ Option }}
                          styles={selectStyle}
                          placeholder="▼"
                          onChange={(opt) => this.handleRuneStatsChange(i, "t", opt)}
                          value={this.state.runes[i].type}
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          value={r.stars}
                          name={`rune-s-${i}`}
                          onKeyPress={(e) => this.handleRuneStarsChange(e)}
                        ></input>
                      </td>
                      <td>
                        <input
                          readOnly
                          value={r.level}
                          name={`rune-l-${i}`}
                          onKeyPress={(e) => this.handleRuneStarsChange(e)}
                        ></input>
                      </td>
                      <td style={{ padding: "0 .5em " }}>
                        <StyledSelect
                          options={PossiblePrimaries}
                          components={{ Option: StatOption }}
                          styles={selectStyle}
                          placeholder="▼"
                          onChange={(opt) => this.handleRuneStatsChange(i, "p", opt)}
                          value={this.state.runes[i].primary}
                        />
                      </td>
                      {[0, 1, 2, 3].map((j) => (
                        <td key={j}>
                          <StyledSelect
                            options={PossibleSecondaries}
                            components={{ Option: StatOption }}
                            styles={selectStyle}
                            placeholder="▼"
                            onChange={(opt) => this.handleRuneStatsChange(i, j, opt)}
                            value={this.state.runes[i].secondaries[j]}
                          />
                        </td>
                      ))}
                      <td>
                        <ClearButton onClick={() => this.handleRuneStatsChange(i, "c")}>X</ClearButton>
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
