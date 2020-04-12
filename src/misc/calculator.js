export const getStats = (baseStats, stars = 1, awakens = 0, runeBonus) => {
  const baseMultiplier = Math.pow(2, stars - 1) * Math.pow(1.5, awakens);
  const basePower = 200;

  let atk = (baseStats && baseStats.atk * baseMultiplier * runeBonus.atk) || 0;
  let def = (baseStats && baseStats.def * baseMultiplier * runeBonus.def) || 0;
  let hp = (baseStats && baseStats.hp * baseMultiplier * runeBonus.hp) || 0;
  let power = basePower * baseMultiplier * runeBonus.power;

  let aps = (baseStats && baseStats.aps * runeBonus.aps) || 0;
  let mvspeed = (baseStats && baseStats.mvspeed * runeBonus.mvspeed) || 0;
  let atkrange = (baseStats && baseStats.atkrange * runeBonus.atkrange) || 0;
  let ctkrate = (baseStats && baseStats.ctkrate + (runeBonus.ctkrate - 1) * 100) || 0;
  let ctkdmg = (baseStats && baseStats.ctkdmg + (runeBonus.ctkdmg - 1) * 100) || 0;

  return { atk, def, hp, power, aps, mvspeed, ctkrate, ctkdmg, atkrange };
};

export const PossibleRunes = [
  { value: "precise", name: "Precise", setBonus: "ctkrate", base: 0.1, perStar: 0.005 },
  { value: "splash", name: "Splash", setBonus: "aoe", base: 0.1, perStar: 0.01 },
  { value: "rage", name: "Rage", setBonus: "ctkdmg", base: 0.5, perStar: 0.05 },
  { value: "resist", name: "Resist", setBonus: "resist", base: 0.1, perStar: 0.01 },
  { value: "helpful", name: "Helpful", setBonus: "supshield", base: 0.5, perStar: 0.02 },
  { value: "vitality", name: "Vitality", setBonus: "hp", base: 0.6, perStar: 0.06 },
  { value: "spoiling", name: "Spoiling", setBonus: "gold", base: 0.5, perStar: 0.05 },
  { value: "frenzy", name: "Frenzy", setBonus: "frenzy", base: 0.05, perStar: 0.005 },
  { value: "frozen", name: "Frozen", setBonus: "freeze", base: 0.2, perStar: 0.02 },
  { value: "chilling", name: "Chilling", setBonus: "freezech", base: 0.05, perStar: 0.005 },
  { value: "phalanx", name: "Phalanx", setBonus: "knightshield", base: 1, perStar: 0.1 },
  { value: "nimble", name: "Nimble", setBonus: "dodge", base: 0.1, perStar: 0.005 },
  { value: "guard", name: "Guard", setBonus: "def", base: 0.6, perStar: 0.06 },
  { value: "dazed", name: "Dazed", setBonus: "stun", base: 0.2, perStar: 0.02 },
  { value: "stunning", name: "Stunning", setBonus: "stunch", base: 0.05, perStar: 0.005 },
  { value: "burning", name: "Burning", setBonus: "burn", base: 0.2, perStar: 0.02 },
  { value: "ignite", name: "Ignite", setBonus: "burnch", base: 0.05, perStar: 0.01 },
  { value: "intelligent", name: "Intelligent", setBonus: "ultreload", base: 0.05, perStar: 0.005 },
  { value: "damage", name: "Damage", setBonus: "atk", base: 0.6, perStar: 0.06 },
  { value: "wrath", name: "Wrath", setBonus: "ult", base: 1, perStar: 0.1 },
  { value: "swift", name: "Swift", setBonus: "aps", base: 0.1, perStar: 0.005 },
  { value: "poisonous", name: "Poisonous", setBonus: "poisonch", base: 0.05, perStar: 0.01 },
  { value: "blight", name: "Blight", setBonus: "poison", base: 0.2, perStar: 0.02 },
];

export const PossiblePrimaries = [
  { value: "atk", name: "Attack", base: 0.06 },
  { value: "aoe", name: "Area of Effect", base: 0.03 },
  { value: "aps", name: "Attack Speed", base: 0.01 },
  { value: "gold", name: "Bonus Gold", base: 0.1 },
  { value: "ctkdmg", name: "Critical Damage", base: 0.05 },
  { value: "def", name: "Defence", base: 0.06 },
  { value: "hp", name: "HP", base: 0.06 },
  { value: "ult", name: "Ultimate Attack", base: 0.1 },
  { value: "freeze", name: "Freeze Time", base: 0.02 },
  { value: "stun", name: "Stun Time", base: 0.02 },
  { value: "burn", name: "Burn Time", base: 0.02 },
  { value: "poison", name: "Poison Time", base: 0.02 },
  { value: "ultreload", name: "Ultimate Reload Speed", base: 0.02 },
];

export const PossibleSecondaries = [
  { value: "atk", name: "Attack", base: [0.009, 0.018, 0.027, 0.036, 0.045, 0.054] },
  { value: "atkrange", name: "Attack Range", base: [0.006, 0.012, 0.018, 0.024, 0.03, 0.036] },
  { value: "gold", name: "Bonus Gold", base: [0.015, 0.03, 0.045, 0.06, 0.075, 0.09] },
  { value: "ctkdmg", name: "Critical Damage", base: [0.008, 0.015, 0.022, 0.03, 0.038, 0.045] },
  { value: "def", name: "Defence", base: [0.009, 0.018, 0.027, 0.036, 0.045, 0.054] },
  { value: "hp", name: "HP", base: [0.009, 0.018, 0.027, 0.036, 0.045, 0.054] },
  { value: "mvspeed", name: "Move Speed", base: [0.003, 0.006, 0.009, 0.012, 0.015, 0.018] },
  { value: "ult", name: "Ultimate Attack", base: [0.015, 0.03, 0.045, 0.06, 0.075, 0.09] },
];

export const getRunesBonus = (runes) => {
  let bonuses = { power: 1 };
  let runeTypes = {};
  runes = runes.filter((r) => r.type);

  for (let v of PossibleRunes) {
    bonuses[v.setBonus] = 1;
    let count = runes.reduce((acc, cur) => (cur.type.value == v.value ? ++acc : acc), 0);

    if (count > 0) {
      runeTypes[v.value] = { count: 0, stars: 0 };

      runeTypes[v.value].count = runes.reduce((acc, cur) => (cur.type.value == v.value ? ++acc : acc), 0);
      runeTypes[v.value].stars = runes.reduce((acc, cur) => (cur.type.value == v.value ? (acc += cur.stars) : acc), 0);
    }
  }

  for (let v of [...PossibleSecondaries, ...PossiblePrimaries]) {
    bonuses[v.value] = 1;
  }

  let sets = 0;
  for (let [type, { count, stars }] of Object.entries(runeTypes)) {
    if (count == 3) {
      sets++;

      const set = PossibleRunes.find((v) => v.value == type);
      bonuses[set.setBonus] += set.base + set.perStar * stars;
      //   console.log("Set!", set.setBonus, set.base + set.perStar * stars);
    }
  }

  bonuses["power"] += Math.pow(1.3, sets) - 1;

  for (let rune of runes) {
    if (!rune.primary) {
      continue;
    }

    const stars = rune.stars;
    const level = rune.level;
    const maxLevel = stars * 5;

    const base = rune.primary.base * stars;
    const perLevel = base / (maxLevel - 1);

    bonuses[rune.primary.value] += parseFloat((base + (level - 1) * perLevel).toFixed(4));
    bonuses["power"] += ((1 + 5 * (1 + stars)) * (1 + (level - 1) / (5 * stars - 1))) / 300;

    // console.log("Primary:", rune.primary.value, parseFloat((base + (level - 1) * perLevel).toFixed(4)));

    for (let [i, sec] of rune.secondaries.entries()) {
      if (!sec) {
        continue;
      }

      const secBase = sec.base[stars - 1];
      const secMaxLevel = stars * 5;
      const secPerLevel = secBase / (secMaxLevel - 1);

      bonuses[sec.value] += parseFloat(
        ((secBase + (level - 1) * secPerLevel) * slotMultiplier(rune, i + 1)).toFixed(4)
      );

      //   console.log(
      //     "Sec:",
      //     sec.value,
      //     parseFloat(((secBase + (level - 1) * secPerLevel) * slotMultiplier(rune, i + 1)).toFixed(4))
      //   );
    }
  }

  //   console.log(bonuses);
  return bonuses;
};

const slotMultiplier = (rune, slot) => {
  const stars = rune.stars;
  const level = rune.level;

  if (slot == 1) {
    if (stars == 1) {
      return level < 5 ? 0 : 1;
    }

    if (stars == 2 || stars == 3) {
      return 1;
    }

    if (stars == 4 || stars == 5) {
      return level < 15 ? 1 : 2;
    }

    return level < 10 ? 1 : 2;
  }

  if (stars == 1) {
    return 0;
  }

  if (slot == 2) {
    if (stars == 2 || stars == 3) {
      return level < 5 ? 0 : 1;
    }

    if (stars == 4 || stars == 5) {
      return level < 20 ? 1 : 2;
    }

    return level < 15 ? 1 : 2;
  }

  if (slot == 3) {
    if (stars == 2 || stars == 3) {
      return level < 10 ? 0 : 1;
    }

    if (stars == 4) {
      return level < 5 ? 0 : 1;
    }

    if (stars == 5) {
      return level < 5 ? 0 : level < 25 ? 1 : 2;
    }

    return level < 20 ? 1 : 2;
  }

  if (stars == 2) {
    return 0;
  }

  if (slot == 4) {
    if (stars == 3) {
      return level < 15 ? 0 : 1;
    }

    if (stars == 4 || stars == 5) {
      return level < 10 ? 0 : 1;
    }

    return level < 5 ? 0 : level < 25 ? 1 : 2;
  }
};
