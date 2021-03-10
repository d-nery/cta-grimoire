import Heroes from "../data/heroes";
import Rune from "./Rune";
import { Sets } from "../data/runes";

const bonusZero = {
  atk: 0,
  aoe: 0,
  aps: 0,
  gold: 0,
  ctkdmg: 0,
  def: 0,
  hp: 0,
  ult: 0,
  freezetm: 0,
  stuntm: 0,
  burntm: 0,
  poisontm: 0,
  burndmg: 0,
  poisondmg: 0,
  ultreload: 0,
  atkrange: 0,
  mvspeed: 0,
  ctkrate: 0,
  resist: 0,
  supshield: 0,
  frenzy: 0,
  freezech: 0,
  knightshield: 0,
  dodge: 0,
  stunch: 0,
  burnch: 0,
  poisonch: 0,
  power: 0,
};

export default class Hero {
  constructor(id) {
    this.id = id;

    this._yellow = 1;
    this._pink = 0;
    this._runes = [null, null, null, null, null, null, null, null, null];

    this.bonuses = { ...bonusZero };
  }

  get multiplier() {
    return Math.pow(2, this.yellow - 1) * Math.pow(1.5, this.pink);
  }

  /**
   * @param {number} v
   */
  set yellow(v) {
    this._yellow = v < 1 || v > 7 ? this._yellow : v;
    this._pink = Math.min(this._pink, this._yellow);
  }

  get yellow() {
    return this._yellow;
  }

  /**
   * @param {number} v
   */
  set pink(v) {
    this._pink = v < 0 || v > 7 ? this._pink : v;
    this._yellow = Math.max(this._pink, this._yellow);
  }

  get pink() {
    return this._pink;
  }

  stat(s) {
    return Heroes[this.id][s];
  }

  info(s) {
    return Heroes[this.id][s];
  }

  get weaponLevel() {
    return this._runes.filter((r) => r).length;
  }

  get stats() {
    const atk = this.stat("atk") * this.multiplier * (1 + this.bonuses.atk);
    const ctkdmg = this.stat("ctkdmg") + this.bonuses.ctkdmg * 100;
    const ctkrate = this.stat("ctkrate") + this.bonuses.ctkrate * 100;
    const aps = this.stat("aps") * (1 + this.bonuses.aps);

    return {
      atk: atk,
      hp: this.stat("hp") * this.multiplier * (1 + this.bonuses.hp),
      def: this.stat("def") * this.multiplier * (1 + this.bonuses.def),
      aps: aps,
      mvspeed: this.stat("mvspeed") * (1 + this.bonuses.mvspeed),
      resist: this.stat("resist") + this.bonuses.resist * 100,
      dodge: this.stat("dodge") + this.bonuses.dodge * 100,
      ctkdmg: ctkdmg,
      ctkrate: ctkrate,
      atkrange: this.stat("atkrange") * (1 + this.bonuses.atkrange),
      power: 200 * this.multiplier * (1 + this.bonuses.power),
      dps: ((1 - ctkrate / 100) * atk + (ctkrate / 100) * atk * (ctkdmg / 100)) * aps,
    };
  }

  get runes() {
    return this._runes;
  }

  getRune(slot) {
    if (slot < 0 || slot > 8) {
      return null;
    }

    return this._runes[slot];
  }

  setRuneStars(runeIndex, stars) {
    this.getRune(runeIndex).stars = stars;
    this._updateBonuses();
  }

  setRuneLevel(runeIndex, newLevel) {
    const rune = this.getRune(runeIndex);
    const { level, stars } = rune;

    // round to the max level, which depends on stars
    if (level <= (stars * 5) / 10) {
      rune.level = level * 10 + newLevel;
    } else {
      rune.level = newLevel;
    }

    this._updateBonuses();
  }

  setRunePrimaryBonus(runeIndex, primary) {
    this.getRune(runeIndex).primary = primary.value;
    this._updateBonuses();
  }

  setRuneSecondaryBonus(runeIndex, secondarySlot, secondary) {
    this.getRune(runeIndex)?.setSecondary(secondarySlot, secondary);
    this._updateBonuses();
  }

  setRune(slot, set) {
    if (slot < 0 || slot > 8) {
      return;
    }

    this._runes[slot] = new Rune(set);
    this._updateBonuses();
  }

  deleteRune(slot) {
    if (slot < 0 || slot > 8) {
      return;
    }

    this._runes[slot] = null;
    this._updateBonuses();
  }

  _updateBonuses() {
    this.bonuses = { ...bonusZero };

    const runes = this._runes.filter((r) => r);
    let sets = 0;

    for (let [k, v] of Object.entries(Sets)) {
      const count = runes.reduce((acc, cur) => (cur.set == k ? ++acc : acc), 0);

      if (count == 3) {
        const stars = runes.reduce((acc, cur) => (cur.set == k ? (acc += cur.stars) : acc), 0);
        sets++;

        this.bonuses[v.setBonus] += v.base + v.perStar * stars;
      }
    }

    this.bonuses["power"] += Math.pow(1.3, sets) - 1;

    for (let rune of runes) {
      const runeBonus = rune.bonuses;
      for (let [k, v] of Object.entries(runeBonus)) {
        this.bonuses[k] += v;
      }
    }
  }
}

export const deserializeHero = (data) => {
  if (!data.id) {
    return
  }
  let instance = new Hero();
  let serializedObject = JSON.parse(data);
  Object.assign(instance, serializedObject);
  return instance;
};
