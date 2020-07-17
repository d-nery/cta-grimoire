// prettier-ignore
export const Sets = {
  precise:     { name: "Precise",     setBonus: "ctkrate",      base: 0.10, perStar: 0.005 },
  splash:      { name: "Splash",      setBonus: "aoe",          base: 0.10, perStar: 0.010 },
  rage:        { name: "Rage",        setBonus: "ctkdmg",       base: 0.50, perStar: 0.050 },
  resist:      { name: "Resist",      setBonus: "resist",       base: 0.10, perStar: 0.010 },
  helpful:     { name: "Helpful",     setBonus: "supshield",    base: 0.50, perStar: 0.020 },
  vitality:    { name: "Vitality",    setBonus: "hp",           base: 0.60, perStar: 0.060 },
  spoiling:    { name: "Spoiling",    setBonus: "gold",         base: 0.50, perStar: 0.050 },
  frenzy:      { name: "Frenzy",      setBonus: "frenzy",       base: 0.05, perStar: 0.005 },
  frozen:      { name: "Frozen",      setBonus: "freezetm",     base: 0.20, perStar: 0.020 },
  chilling:    { name: "Chilling",    setBonus: "freezech",     base: 0.05, perStar: 0.005 },
  phalanx:     { name: "Phalanx",     setBonus: "knightshield", base: 1.00, perStar: 0.100 },
  nimble:      { name: "Nimble",      setBonus: "dodge",        base: 0.10, perStar: 0.005 },
  guard:       { name: "Guard",       setBonus: "def",          base: 0.60, perStar: 0.060 },
  dazed:       { name: "Dazed",       setBonus: "stuntm",       base: 0.20, perStar: 0.020 },
  stunning:    { name: "Stunning",    setBonus: "stunch",       base: 0.05, perStar: 0.005 },
  burning:     { name: "Burning",     setBonus: "burntm",       base: 0.20, perStar: 0.020 },
  ignite:      { name: "Ignite",      setBonus: "burnch",       base: 0.05, perStar: 0.010 },
  intelligent: { name: "Intelligent", setBonus: "ultreload",    base: 0.05, perStar: 0.005 },
  damage:      { name: "Damage",      setBonus: "atk",          base: 0.60, perStar: 0.060 },
  wrath:       { name: "Wrath",       setBonus: "ult",          base: 1.00, perStar: 0.100 },
  swift:       { name: "Swift",       setBonus: "aps",          base: 0.10, perStar: 0.005 },
  poisonous:   { name: "Poisonous",   setBonus: "poisonch",     base: 0.05, perStar: 0.010 },
  blight:      { name: "Blight",      setBonus: "poisontm",     base: 0.20, perStar: 0.020 },
};

// prettier-ignore
export const Primaries = {
  atk:       { name: "Attack",                base: 0.06 },
  aoe:       { name: "Area of Effect",        base: 0.03 },
  aps:       { name: "Attack Speed",          base: 0.01 },
  gold:      { name: "Bonus Gold",            base: 0.10 },
  ctkdmg:    { name: "Critical Damage",       base: 0.05 },
  def:       { name: "Defence",               base: 0.06 },
  hp:        { name: "HP",                    base: 0.06 },
  ult:       { name: "Ultimate Attack",       base: 0.10 },
  freezetm:  { name: "Freeze Time",           base: 0.02 },
  stuntm:    { name: "Stun Time",             base: 0.02 },
  burntm:    { name: "Burn Time",             base: 0.02 },
  poisontm:  { name: "Poison Time",           base: 0.02 },
  ultreload: { name: "Ultimate Reload Speed", base: 0.02 },
};

// prettier-ignore
export const Secondaries = {
  atk:      { name: "Attack",          base: [0.009, 0.018, 0.027, 0.036, 0.045, 0.054] },
  atkrange: { name: "Attack Range",    base: [0.006, 0.012, 0.018, 0.024, 0.030, 0.036] },
  gold:     { name: "Bonus Gold",      base: [0.015, 0.030, 0.045, 0.060, 0.075, 0.090] },
  ctkdmg:   { name: "Critical Damage", base: [0.008, 0.015, 0.022, 0.030, 0.038, 0.045] },
  def:      { name: "Defence",         base: [0.009, 0.018, 0.027, 0.036, 0.045, 0.054] },
  hp:       { name: "HP",              base: [0.009, 0.018, 0.027, 0.036, 0.045, 0.054] },
  mvspeed:  { name: "Move Speed",      base: [0.003, 0.006, 0.009, 0.012, 0.015, 0.018] },
  ult:      { name: "Ultimate Attack", base: [0.015, 0.030, 0.045, 0.060, 0.075, 0.090] },
};
