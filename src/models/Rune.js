import React from "react";

import { Primaries, Secondaries } from "../data/runes";

export default class Rune {
  constructor(set) {
    this.set = set;
    this._stars = 1;
    this._level = 1;
    this._primary = Primaries[0];
    this._secondaries = [null, null, null, null];
  }

  /**
   * @param {number} v
   */
  set level(v) {
    this._level = v < 1 || v > this.maxLevel ? this._level : v;
    this._fixSecondaries();
  }

  get level() {
    return this._level;
  }

  /**
   * @param {number} v
   */
  set stars(v) {
    this._stars = v < 1 || v > 6 ? this._stars : v;
    this._level = this._level < 1 ? 1 : this._level > this.maxLevel ? this.maxLevel : this._level;
    this._fixSecondaries();
  }

  get stars() {
    return this._stars;
  }

  get powerBonus() {
    return ((1 + 5 * (1 + this._stars)) * (1 + (this._level - 1) / (this.maxLevel - 1))) / 300;
  }

  /**
   * @param {object?} p
   */
  set primary(p) {
    this._primary = p;
  }

  get primary() {
    return this._primary;
  }

  get maxLevel() {
    return this._stars * 5;
  }

  setSecondary(i, s) {
    this._secondaries[i] = s;
    this._fixSecondaries();
  }

  getSecondary(i) {
    return this._secondaries[i];
  }

  get option() {
    return {
      value: this.set,
      label: <img src={`runes/${this.set}.png`} alt="" style={{ width: "35px", height: "35px" }} />,
    };
  }

  get bonuses() {
    const base = this._primary.base * this._stars;
    const perLevel = base / (this.maxLevel - 1);
    const bonuses = {};

    const primV = parseFloat((base + (this._level - 1) * perLevel).toFixed(6));
    bonuses[this._primary.value] = primV;
    bonuses["power"] =
      ((1 + 5 * (1 + this._stars)) * (1 + (this._level - 1) / (this.maxLevel - 1))) / 300;

    for (let [i, sec] of this._secondaries.entries()) {
      if (!sec) {
        continue;
      }

      const secBase = sec.base[this._stars - 1];
      const secPerLevel = secBase / (this.maxLevel - 1);

      const secV = parseFloat(
        ((secBase + (this._level - 1) * secPerLevel) * this._slotMultiplier(i + 1)).toFixed(6)
      );

      bonuses[sec.value] = secV;
    }

    return bonuses;
  }

  _fixSecondaries() {
    if (this._stars == 1) {
      if (this._level < 5) {
        this._secondaries[0] = null;
      }
      this._secondaries[1] = null;
      this._secondaries[2] = null;
      this._secondaries[3] = null;
    } else if (this._stars == 2) {
      if (this._level < 10) {
        this._secondaries[2] = null;
      }

      if (this._level < 5) {
        this._secondaries[1] = null;
      }
      this._secondaries[3] = null;
    } else if (this._stars == 3) {
      if (this._level < 15) {
        this._secondaries[3] = null;
      }

      if (this._level < 10) {
        this._secondaries[2] = null;
      }

      if (this._level < 5) {
        this._secondaries[1] = null;
      }
    } else if (this._stars == 4 || this._stars == 5) {
      if (this._level < 10) {
        this._secondaries[3] = null;
      }

      if (this._level < 5) {
        this._secondaries[2] = null;
      }
    } else {
      if (this._level < 5) {
        this._secondaries[3] = null;
      }
    }
  }

  _slotMultiplier(slot) {
    const stars = this._stars;
    const level = this._level;

    if (slot == 1) {
      if (stars <= 3) {
        return 1;
      }

      if (stars == 4 || stars == 5) {
        return level < 15 ? 1 : 2;
      }

      return level < 10 ? 1 : 2;
    }

    if (slot == 2) {
      if (stars <= 3) {
        return 1;
      }

      if (stars == 4 || stars == 5) {
        return level < 20 ? 1 : 2;
      }

      return level < 15 ? 1 : 2;
    }

    if (slot == 3) {
      if (stars <= 4) {
        return 1;
      }

      if (stars == 5) {
        return level < 25 ? 1 : 2;
      }

      return level < 20 ? 1 : 2;
    }

    if (slot == 4) {
      if (stars <= 5) {
        return 1;
      }

      return level < 25 ? 1 : 2;
    }
  }
}
