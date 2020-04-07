import React, { Component } from "react";

import BgCommon from "../../assets/cards/common.png";
import BgRare from "../../assets/cards/rare.png";
import BgEpic from "../../assets/cards/epic.png";
import BgLegendary from "../../assets/cards/leg.png";

import ElWater from "../../assets/cards/water.png";
import ElFire from "../../assets/cards/fire.png";
import ElEarth from "../../assets/cards/earth.png";
import ElDark from "../../assets/cards/dark.png";
import ElLight from "../../assets/cards/light.png";

const bgs = new Map([
  ["common", BgCommon],
  ["rare", BgRare],
  ["epic", BgEpic],
  ["legendary", BgLegendary],
]);

const elms = new Map([
  ["water", ElWater],
  ["fire", ElFire],
  ["earth", ElEarth],
  ["dark", ElDark],
  ["light", ElLight],
]);

export const rarities = [...bgs.keys()];
export const elements = [...elms.keys()];

export default class HeroCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={bgs.get(this.props.rarity)}>
            
        </img>
        <img src={elms.get(this.props.element)}></img>
      </div>
    );
  }
}
