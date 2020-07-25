const sk_desc = {
  Archer: (el) => `Fires ${el} arrows at an enemy`,
  ArcherSP2: (el) => `Fires multiple ${el} arrows at enemies`,
  Shoot: "Shoots at an enemy",
  EnergyBall: (el) => `Casts a ball of ${el} energy at an enemy`,
  EnergyBall_Multi: (el) => `Casts multiples balls of ${el} energy at enemies`,
  EnergyBall_Unique: (el) => `Casts a ball of ${el} at an enemy`,
  EnergyBall_Push: (el) => `Casts a ball of ${el} energy damaging and pushing back enemies`,
  EnergyBall_Rapid: (el) => `Rapidly casts balls of ${el} energy at enemies`,
  EnergyBall_Throw: "Throws a ball of",
  EnergyWave: "Casts a small wave which damages and pushes back enemies",
  Heal_TotalHP:
    "Casts a spell which will heal an injured hero for 100% of the Caster's total HP and dispel all negative effects",
  WpnSmash_Ground: "Heavily smashes the ground with their weapon causing splash damage",
  WpnShoot: "Shoots at an enemy",
  WpnShoot_Arrows: (el) => `Fires ${el} arrows at an enemy`,
  WpnShoot_ArrowsMulti: (el) => `Fires multiple ${el} arrows at enemies`,
  WpnShoot_Charge:
    "Charges their weapon for a short period to release a powerful concentrated shot",
  WpnShoot_Elemental: (el) => `Shoots a ${el} orb at an enemy`,
  WpnShoot_ElementalMulti: (el) => `Shoots multiple ${el} orbs at enemies`,
  WpnShoot_ElementalUnique: (el) => `Shoots ${el} at an enemy`,
  WpnShoot_Explosive: "Shoots an explosive at enemies",
  WpnShoot_LargeBullet: "Shoots a large bullet at enemies",
  WpnShoot_Rapid: "Rapidly shoots at enemies",
  WpnStrike: "Swings their weapon at an enemy",
  WpnStrike_Bite: "Viciously bites an enemy",
  WpnStrike_Claws: "Swipes their claws at an enemy",
  WpnStrike_ClawsRapid: "Rapidly swipes their claws at enemies",
  WpnStrike_Heavy: "Heavily swings their weapon at an enemy",
  WpnStrike_HeavyMulti: "Quickly swings their heavy weapon multiple times at an enemy",
  WpnStrike_Mighty: "Strikes an enemy with their mighty weapon",
  WpnStrike_Multi: "Rapid strong hits at an enemy",
  WpnStrike_Pierce: "Pierces an enemy with a high chance of doing a critical hit",
  WpnStrike_PiercingMulti: "Pierces an enemy multiple times which will also stun them",
  WpnStrike_PiercingThrust: "Thrusts their heavy spear which pierces all enemies in a line",
  WpnStrike_Punch: "Swings their fists at an enemy",
  WpnStrike_Slash: "Slashes at enemies in quick succession",
  WpnThrow: "Throws their weapon at an enemy",
  SP3_EnergyBall: (el) =>
    `Destructive rain of ${el} falls from the sky causing damage in an area on impact`,
  SP3_Arrows:
    "Volley of arrows fall from the sky covering the ground and causing damage in an area on impact",
  SP3_WeaponRain: (el) =>
    `Huge weapons of ${el} are summoned and rain over the field causing damage in an area on impact`,
  SP3_WeaponSummon: (el) =>
    `Summons a destructive weapon of ${el} over the field and causing damage in a large area on impact`,
  SP3_SpearWave: "Sends multiple piercing spears across the battlefield",
  SP3_SpearSummon: "Sends a devastating spear across the battlefield damaging all in its path",
  SP3_WeaponShoot: "Shoots devastating bullets",
  SP3_ShieldOrb:
    "Protects all heroes with a shield absorbing as much damage as the caster's total *HP*. The shield is more efficient against the same *element*",
  SP3_EnergyWave: (el) => `Large wave of ${el} energy that damages all in its path`,
  SP3_Flurry: "Releases a flurry of attacks across random enemies",
  SP3_BigHit: "Launch a powerful attack on one random enemy",
  SP3_Lasers: (el) => `Fires huge ${el} lasers from the sky hitting the field in large areas`,
  SP3_BreathFire: (el) => `Summons assistance which breathes ${el} fire over the field`,
  HookyShootSP2: "Grab a distant enemy and bring them closer.",
  KasumiSP2: "Teleport behind a target and backstab them.",
  GroovineSP2: "Releases a swarm of bees that distracts and slows down the enemy.",
  ThorSP2: "Rush through enemies knocking them down.",
  PetuniaSP2:
    "Transform a random enemy into a frog. The frog has *no Def* and is unable to attack for *{duration}*.",
  NecromancerSP2: "Summon Skeletons at the same level and stars as the caster.",
  CirceSP2:
    "Take control of the mind of an enemy for a *{duration}*. Controlling a higher |HE_Star.png| enemy than the caster reduces the mind control duration.",
  VladSP2:
    "Sends bats at an enemy which then return to a random injured ally and heal them for *{hpPercent}%* of the *damage* dealt.",
  AngelicaSP2: "Chance to revive an allied hero with a percentage of their total Health.",
  SparkSP2: "Fires a piercing arrow which damages all enemies in its path.",
  ThornSP2: "Creates an orb around the caster which explodes poisoning enemies hit.",
  MantaSP2: (el) => `Summons a large ${el} ball which damages and curses enemies hit.`,
  CardsCascade: "Throws 3 cards at different enemies, each apply a random debuff.",
  ElectricBall: "Throws an electric ball which explodes, stunning all enemies damaged.",
  FairyShield:
    "Creates a shield on a random hero which will absorb all damage until it's destroyed.",
  FatalWeakness: "Shoot a piercing bullet at the weakest enemy and stun them.",
  ForceField:
    "Blow out opponents with a force, pushing them back and dispelling any positive effects they have.",
  Heal: "Casts a spell which will heal an injured hero based on the caster's total Health.",
  HealingBeam: "Regenerate the Health of an injured hero based on the caster's health.",
  SnowmanShoot: "Throws a snowball at an enemy.",
  Blizzard:
    "A blizzard of ice will freeze all heroes touched by it. At the end of the freeze, the ice will explode causing damage around it",
  PoisonousSpurt: "Throws a spurt poisoning and damaging enemies within range.",
  RunawaySnowball: "Giant snowball rolls across the field",
  SpearCharge: "The hero jousts the enemies infront of them.",
  YolkyEgg: "Throws a big egg which blinds and damages all enemies around it.",
  BubbleRockets: "Shoots 3 missiles which will target units in the backline and slow them down.",
  BurningFlame: "Shoots large burning flames for a few seconds.",
  ShockWave: "Throws a shock wave which will stun all enemies in a large radius.",
  FrogRain: "Rain of exploding frogs. Will place *{value} {effect}* on target enemies.",
  Protect:
    "Protect the heroes with a shield absorbing as much damage as the caster's *HP*. The shield is more efficient against the same *element*.",
  ElementalAtk:
    "Affected heroes will do elemental damages from the *element* of the caster. Heroes strong to the caster's element won't be affected",
  ElementalAtkEA:
    "All the team will do |Elt_EA.png| elemental damage. |Elt_FI.png|heroes won't be affected by this spell.",
  PoisonRoot: "Prevent enemies from moving and will deal poisonous damage",
  SpawnBombs:
    "Summons a little kamikaze bomb at the same level and stars as the summoner. This little, almost invincible bomb walks towards the enemy and explode.",
  KnightShield:
    "Create a shield on a random hero which will absorb all the damage until it's destroyed. The life of the shield is *{hpPercent}%* of the caster's life.",
  SniperHit: "Fatal shot at a random enemy",
};

const majorBuff = (name, type) => {
  return (affects) => ({
    name: `Buff ${name}`,
    type: ["buff", type],
    affects: affects,
    value: [400, 800, 1200, 1600],
  });
};

const HPBuff = majorBuff("HP", "hp");
const AtkBuff = majorBuff("Atk", "atk");
const DefBuff = majorBuff("Def", "def");

const ApsBuff = (affects) => ({
  name: "Buff Atk Speed",
  type: ["buff", "aps"],
  affects: affects,
  value: [10, 20, 30, 40],
});

export default {
  bf: {
    sp1: {
      name: "Shoot Bubbles",
      description: sk_desc.EnergyBall("water"),
    },
    sp2: {
      name: "Multi-Shot",
      description: sk_desc.EnergyBall_Rapid("water"),
    },
    sp3: {
      name: "Bubble Rain",
      description: sk_desc.SP3_EnergyBall("water"),
      aoe: 300,
      cd: 30,
    },
    sp4: null,
  },
  bugoa: {
    sp1: {
      name: "Arrows",
      description: sk_desc.WpnShoot_Arrows("water"),
    },
    sp2: {
      name: "Multi Fire",
      description: sk_desc.WpnShoot_ArrowsMulti("water"),
    },
    sp3: {
      name: "Arrow Shower",
      description: sk_desc.SP3_Arrows,
      aoe: 100,
      cd: 30,
    },
    sp4: null,
  },
  bugof: {
    sp1: {
      name: "Sword",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Multi Hit",
      description: sk_desc.WpnStrike_Multi,
    },
    sp3: {
      name: "Swords Rain",
      description: sk_desc.SP3_WeaponRain("water"),
      aoe: 300,
      cd: 30,
    },
    sp4: null,
  },
  bugos: {
    sp1: {
      name: "Spear Hit",
      description: sk_desc.WpnStrike,
      effect: [["stun", 30, 0]],
    },
    sp2: {
      name: "Piercing Multi-Hit",
      description: sk_desc.WpnStrike_PiercingThrust,
      effect: [["stun", 30, 0]],
    },
    sp3: {
      name: "Spear Wave",
      description: sk_desc.SP3_SpearWave,
      cd: 30,
    },
    sp4: null,
  },
  bugog: {
    sp1: {
      name: "Axe Hit",
      description: sk_desc.WpnStrike_Heavy,
    },
    sp2: {
      name: "Multi Hit",
      description: sk_desc.WpnStrike_HeavyMulti,
      aoe: 150,
    },
    sp3: {
      name: "Axe Smash",
      description: sk_desc.SP3_WeaponSummon("water"),
      aoe: 500,
      cd: 30,
    },
    sp4: null,
  },
  ik: {
    sp1: {
      name: "Sword Hit",
      description: sk_desc.WpnStrike,
      effect: [["freeze", 10, 2]],
    },
    sp2: {
      name: "Multi Hit",
      description: sk_desc.WpnStrike_Multi,
      effect: [["freeze", 10, 2]],
    },
    sp3: {
      name: "Ice Pillars",
      effect: [["freeze", 20, 2]],
      description: sk_desc.SP3_EnergyWave,
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Buff Freeze Duration",
      type: ["buff", "freezetm"],
      affects: "water",
      value: [8, 12, 16, 20],
    },
  },
  pirato: {
    sp1: {
      name: "Shoot Bombs",
      description: sk_desc.WpnShoot,
      aoe: 100,
    },
    sp2: {
      name: "Shoot a Big Bomb",
      description: sk_desc.WpnShoot_Explosive,
      aoe: 150,
    },
    sp3: {
      name: "Bomb Rain",
      description: sk_desc.SP3_WeaponRain("water"),
      aoe: 300,
      cd: 30,
    },
    sp4: AtkBuff("water"),
  },
  rufus: {
    sp1: {
      name: "Shoot Straight",
      description: sk_desc.WpnShoot,
    },
    sp2: {
      name: "Large Caliber",
      description: sk_desc.WpnShoot_LargeBullet,
    },
    sp3: {
      name: "Trigger-Happy",
      description: sk_desc.SP3_WeaponShoot,
      cd: 30,
    },
    sp4: {
      name: "Buff Critical Damage",
      type: ["buff", "ctkdmg"],
      affects: "water",
      value: [200, 400, 600, 800],
    },
  },
  oceana: {
    sp1: {
      name: "Bubble Cast",
      description: sk_desc.energy_ball,
    },
    sp2: {
      name: "Multi-Cast",
      description: sk_desc.energy_ball_rapid,
    },
    sp3: {
      name: "Heavy Rain",
      description: sk_desc.SP3_EnergyBall("water"),
      aoe: 300,
      cd: 30,
    },
    sp4: HPBuff("water"),
  },
  goddess: {
    sp1: {
      name: "Water Bubbles",
      description: sk_desc.energy_ball,
    },
    sp2: {
      name: "Mini Tsunami",
      description: sk_desc.EnergyWave,
      effect: [["pb", 0, 0]],
    },
    sp3: {
      name: "Water Invincibility",
      description: sk_desc.Protect,
      cd: 60,
    },
    sp4: HPBuff("water"),
  },
  snowman: {
    sp1: {
      name: "Snowballs",
      description: sk_desc.SnowmanShoot,
    },
    sp2: {
      name: "Runaway Snowball",
      description:
        "Creates a giant snowball which rolls across the field, damaging and placing a def down on all enemies hit",
      effect: [["defdown", 50, 6]],
    },
    sp3: {
      name: "Avalanche",
      description:
        "Causes heavy snowfall which crushes all beneath it, damaging and placing a atk down on all enemies hit",
      effect: [["atkdown", 50, 10]],
      aoe: 300,
      cd: 45,
    },
    sp4: AtkBuff("water"),
  },
  bb: {
    sp1: {
      name: "Sword Hit",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Multi Hit",
      description: sk_desc.WpnStrike_Multi,
    },
    sp3: {
      name: "Tsunami",
      description: sk_desc.SP3_EnergyWave("water"),
      effect: [["stun", 100, 3]],
      cd: 45,
    },
    sp4: DefBuff("water"),
  },
  atlantus: {
    sp1: {
      name: "Spear Hit",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Smash Attack",
      description: sk_desc.WpnSmash_Ground,
      aoe: 350,
    },
    sp3: {
      name: "Trident Wrath",
      description: sk_desc.SP3_SpearSummon,
      effect: [["stun", 100, 3]],
      cd: 45,
    },
    sp4: {
      name: "Buff Critical Damage",
      type: ["buff", "ctkdmg"],
      affects: "water",
      value: [200, 400, 600, 800],
    },
  },
  luka: {
    sp1: {
      name: "Sword Hit",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Multi Hit",
      description: sk_desc.WpnStrike_Multi,
    },
    sp3: {
      name: "Sword Storm",
      description: sk_desc.SP3_WeaponRain("water"),
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Buff Move Speed",
      type: ["buff", "mvspeed"],
      affects: "water",
      value: [25, 50, 75, 100],
    },
  },
  mizu: {
    sp1: {
      name: "Katana Hit",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Piercing Hit",
      description: sk_desc.WpnStrike_Pierce,
    },
    sp3: {
      name: "Random Hits",
      description: sk_desc.SP3_BigHit,
      aoe: 300,
      cd: 30,
    },
    sp4: AtkBuff("water"),
  },
  akwa: {
    sp1: {
      name: "Water Punch",
      description: sk_desc.WpnStrike_Punch,
    },
    sp2: {
      name: "Water Energy Ball",
      description: sk_desc.EnergyBall_Push,
      effect: [["pb", 0, 0]],
    },
    sp3: {
      name: "Water Blast",
      description: sk_desc.SP3_EnergyWave("water"),
      cd: 45,
    },
    sp4: ApsBuff("water"),
  },
  namida: {
    sp1: {
      name: "Rocket Launcher",
      description: sk_desc.WpnShoot_Explosive,
      aoe: 100,
    },
    sp2: {
      name: "Bubble Rockets",
      description:
        "Shoots 3 missiles which will target the units in the backline and slow them down",
      effect: [["slowdown", 100, 5]],
    },
    sp3: {
      name: "Missile Rain",
      description: sk_desc.SP3_WeaponRain("water"),
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Debuff Atk",
      type: ["debuff", "atkdown"],
      affects: "water",
      value: [-200, -400, -600, -800],
    },
  },
  valk: {
    sp1: {
      name: "Ice Arrows",
      description: sk_desc.WpnShoot_Arrows("water"),
      effect: [["freeze", 5, 2]],
    },
    sp2: {
      name: "Multi Ice Arrows",
      description: sk_desc.WpnShoot_ArrowsMulti("water"),
      effect: [["freeze", 10, 2]],
    },
    sp3: {
      name: "Ice Arrow Shower",
      description: sk_desc.SP3_Arrows,
      effect: [["freeze", 30, 3]],
      aoe: 100,
      cd: 30,
    },
    sp4: {
      name: "Buff Critical Damage",
      type: ["buff", "ctkdmg"],
      affects: "all",
      value: [300, 600, 900, 1200],
    },
  },
  fq: {
    sp1: {
      name: "Ice Ball",
      description: sk_desc.energy_ball,
      effect: [["freeze", 30, 2]],
    },
    sp2: {
      name: "Multi-Shot",
      description: sk_desc.energy_ball_rapid,
      effect: [["freeze", 10, 2]],
    },
    sp3: {
      name: "Blizzard",
      description: sk_desc.Blizzard,
      effect: [["freeze", 100, 4]],
      aoe: 650,
      cd: 30,
    },
    sp4: {
      name: "Buff Freeze Explode",
      type: ["buff", "freezeexpldmg"],
      affects: "water",
      value: [100, 200, 300, 400],
    },
  },
  manta: {
    sp1: {
      name: "Water Ball",
      description: sk_desc.WpnShoot,
    },
    sp2: {
      name: "Water Bubble",
      description: sk_desc.MantaSP2("water"),
      effect: [["healdown", 100, 15]],
      aoe: 500,
    },
    sp3: {
      name: "Manta Summoning",
      description: sk_desc.SP3_WeaponSummon("water"),
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Debuff AoE Damage",
      type: ["debuff", "aoedmg"],
      affects: "all",
      value: [-100, -200, -300, -400],
    },
  },
  ic: {
    sp1: {
      name: "Mace/Axe Hit",
      description: sk_desc.WpnStrike_Heavy,
      effect: [["freeze", 10, 2]],
    },
    sp2: {
      name: "Multi Hit",
      description: sk_desc.WpnStrike_HeavyMulti,
      effect: [["freeze", 10, 2]],
      aoe: 150,
    },
    sp3: {
      name: "Icy Wave",
      description:
        "Huge Mace strike which will damage everything. Heroes will be frozen for a shor period of time",
      effect: [["freeze", 100, 4]],
      cd: 45,
    },
    sp4: DefBuff("all"),
  },
  td: {
    sp1: {
      name: "Fireball",
      description: sk_desc.EnergyBall("fire"),
      effect: [["burn", 10, 5]],
    },
    sp2: {
      name: "Fragon Fire",
      description: sk_desc.EnergyBall_Rapid("fire"),
      effect: [["burn", 5, 5]],
    },
    sp3: {
      name: "Meteor Rain",
      description: sk_desc.SP3_EnergyBall("fire"),
      aoe: 300,
      cd: 30,
    },
    sp4: null,
  },
  vulcana: {
    sp1: {
      name: "Flaming Arrows",
      description: sk_desc.WpnShoot_Arrows("fire"),
      effect: [["burn", 30, 6]],
    },
    sp2: {
      name: "Multi Fire Arrows",
      description: sk_desc.WpnShoot_ArrowsMulti("fire"),
      effect: [["burn", 10, 6]],
    },
    sp3: {
      name: "Arrow Shower",
      description: sk_desc.SP3_Arrows,
      effect: [["burn", 30, 6]],
      aoe: 100,
      cd: 30,
    },
    sp4: null,
  },
  vulcanf: {
    sp1: {
      name: "Sword",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Multi Hit",
      description: sk_desc.WpnStrike_Multi,
    },
    sp3: {
      name: "Swords Rain",
      description: sk_desc.SP3_WeaponRain("fire"),
      aoe: 300,
      cd: 30,
    },
    sp4: null,
  },
  vulcanh: {
    sp1: {
      name: "Mace Hit",
      description: sk_desc.WpnStrike_Heavy,
    },
    sp2: {
      name: "Multi Hammer Hit",
      description: sk_desc.WpnStrike_HeavyMulti,
      aoe: 150,
    },
    sp3: {
      name: "Axe Smash",
      description: sk_desc.SP3_WeaponSummon("fire"),
      aoe: 500,
      cd: 30,
    },
    sp4: null,
  },
  mk: {
    sp1: {
      name: "Spear Hit",
      description: sk_desc.WpnStrike,
      effect: [["stun", 30, 0]],
    },
    sp2: {
      name: "Combo Attack",
      description: sk_desc.WpnStrike_Multi,
      effect: [["stun", 100, 0]],
      aoe: 300,
    },
    sp3: {
      name: "Fire Staff Wave",
      description: sk_desc.SP3_SpearWave,
      cd: 30,
    },
    sp4: ApsBuff("fire"),
  },
  fm: {
    sp1: {
      name: "Fireball",
      description: sk_desc.energy_ball,
      effect: [["burn", 20, 3]],
    },
    sp2: {
      name: "Multi-Cast",
      description: sk_desc.energy_ball_rapid,
      effect: [["burn", 30, 3]],
      aoe: 300,
    },
    sp3: {
      name: "Meteor Rain",
      description: sk_desc.SP3_EnergyBall("fire"),
      aoe: 300,
      cd: 30,
    },
    sp4: HPBuff("fire"),
  },
  magmus: {
    sp1: {
      name: "Mace/Axe Hit",
      description: sk_desc.WpnStrike_Heavy,
    },
    sp2: {
      name: "Multi Hit",
      description: sk_desc.WpnStrike_HeavyMulti,
      aoe: 150,
    },
    sp3: {
      name: "Fire Axe Smash",
      description: sk_desc.SP3_WeaponSummon("fire"),
      aoe: 500,
      cd: 30,
    },
    sp4: DefBuff("fire"),
  },
  mv: {
    sp1: {
      name: "Punch",
      description: sk_desc.WpnStrike_Punch,
    },
    sp2: {
      name: "Big Boom",
      description: sk_desc.WpnSmash_Ground,
      aoe: 300,
    },
    sp3: {
      name: "Mecha Missiles",
      description: sk_desc.SP3_WeaponRain("fire"),
      aoe: 300,
      cd: 30,
    },
    sp4: DefBuff("fire"),
  },
  furiosa: {
    sp1: {
      name: "Sword",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Multi Hit",
      description: sk_desc.WpnStrike_Multi,
    },
    sp3: {
      name: "Fire Blades",
      description: sk_desc.SP3_EnergyWave("fire"),
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Frenzy Hero",
      type: ["buff", "frenzy"],
      affects: "fire",
      value: [3, 6, 9, 12],
    },
  },
  kasai: {
    sp1: {
      name: "Katana Hit",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Piercing Hit",
      description: sk_desc.WpnStrike_Pierce,
    },
    sp3: {
      name: "Fire Wave",
      description: sk_desc.SP3_EnergyWave("fire"),
      cd: 45,
    },
    sp4: AtkBuff("Fire"),
  },
  jasmine: {
    sp1: {
      name: "Saber Hit",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Dancing Blades",
      description: sk_desc.WpnStrike_Multi,
    },
    sp3: {
      name: "Strike",
      description: sk_desc.SP3_BigHit,
      effect: [["stun", 100, 3]],
      cd: 30,
    },
    sp4: {
      name: "Buff Critical Damage",
      type: ["buff", "ctkdmg"],
      affects: "fire",
      value: [200, 400, 600, 800],
    },
  },
  spyro: {
    sp1: {
      name: "Burning Spear",
      description: sk_desc.WpnStrike,
    },
    sp2: {
      name: "Burning Spear Multi",
      description: sk_desc.WpnStrike_Multi,
      effect: [["burn", 30, 5]],
    },
    sp3: {
      name: "Fire Destroyer",
      description: sk_desc.SP3_SpearSummon,
      effect: [["burn", 100, 5]],
      cd: 45,
    },
    sp4: AtkBuff("fire"),
  },
  xak: {
    sp1: {
      name: "Fireball",
      description: sk_desc.energy_ball,
    },
    sp2: {
      name: "Shock Wave",
      description: "Throws a shock wave which will stun all enemies in a large radius",
      effect: [["stun", 100, 3]],
      aoe: 600,
    },
    sp3: {
      name: "Fire Orb of Protection",
      description: sk_desc.Protect,
      cd: 60,
    },
    sp4: {
      name: "Buff Move Speed",
      type: ["buff", "mvspeed"],
      affects: "fire",
      value: [25, 50, 75, 100],
    },
  },
  spark: {
    sp1: {
      name: "Flaming Arrows",
      description: sk_desc.WpnShoot_Arrows("fire"),
    },
    sp2: {
      name: "Piercing Arrow",
      description: sk_desc.SparkSP2,
      effect: [["stun", 100, 3]],
      aoe: 600,
    },
    sp3: {
      name: "Arrow Shower",
      description: sk_desc.SP3_Arrows,
      cd: 60,
    },
    sp4: {
      name: "Buff Move Speed",
      type: ["buff", "mvspeed"],
      affects: "fire",
      value: [25, 50, 75, 100],
    },
  },
  tnt: {
    sp1: {
      name: "Fire bombs",
      description: sk_desc.WpnShoot,
    },
    sp2: {
      name: "Kamikaze Summon",
      description: sk_desc.SpawnBombs,
      effect: [["burn", 100, 4]],
      aoe: 250,
    },
    sp3: {
      name: "Super Bomb",
      description: sk_desc.SP3_WeaponSummon,
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Buff Burn Duration",
      type: ["buff", "burntm"],
      affects: "fire",
      value: [10, 20, 30, 40],
    },
  },
  torch: {
    sp1: {
      name: "Fireball",
      description: sk_desc.WpnShoot_ElementalUnique("fire"),
    },
    sp2: {
      name: "Burning Flame",
      description: sk_desc.WpnShoot_ElementalUnique("fire"),
      effect: [["burn", 100, 5]],
      aoe: 400,
    },
    sp3: {
      name: "Super Flamethrower",
      description: sk_desc.SP3_BreathFire,
      effect: [["burn", 100, 2]],
      aoe: 500,
      cd: 30,
    },
    sp4: {
      name: "Buff Burn Damage",
      type: ["buff", "burndmg"],
      affects: "fire",
      value: [50, 100, 150, 200],
    },
  },
  alda: {
    sp1: {
      name: "Flaming Arrows",
      description: sk_desc.WpnShoot_Arrows("fire"),
      effect: [["burn", 30, 5]],
    },
    sp2: {
      name: "Multi Fire Arrows",
      description: sk_desc.WpnShoot_ArrowsMulti("fire"),
      effect: [["burn", 10, 5]],
      aoe: 250,
    },
    sp3: {
      name: "Arrow Shower",
      description: sk_desc.SP3_Arrows,
      effect: [["burn", 30, 5]],
      aoe: 100,
      cd: 30,
    },
    sp4: {
      name: "Buff Critical Damage",
      type: ["buff", "ctkdmg"],
      affects: "all",
      value: [300, 600, 900, 1200],
    },
  },
  scud: {
    sp1: {
      name: "Shoot Missiles",
      description: sk_desc.WpnShoot_Explosive,
      aoe: 100,
    },
    sp2: {
      name: "Missile Shot",
      description: sk_desc.WpnShoot_Explosive,
      aoe: 150,
    },
    sp3: {
      name: "Missile Rain",
      description: sk_desc.SP3_WeaponRain("fire"),
      effect: [["burn", 30, 5]],
      aoe: 300,
      cd: 30,
    },
    sp4: AtkBuff("all"),
  },
  voodooa: {
    sp1: {
      name: "Arrows",
      description: sk_desc.WpnShoot_Arrows("earth"),
      effect: [["poison", 20, 5]],
    },
    sp2: {
      name: "Multi Arrows",
      description: sk_desc.WpnShoot_ArrowsMulti("earth"),
      effect: [["poison", 10, 5]],
    },
    sp3: {
      name: "Arrow Shower",
      description: sk_desc.SP3_Arrows,
      aoe: 100,
      cd: 30,
    },
    sp4: null,
  },

  trickster: {
    sp1: {
      name: "Magic Card",
      description: "Shoots at an enemy.\nRandomly try to apply the following effects:",
      effect: [
        ["atkdown", 50, 3],
        ["slowdown", 100, 3],
        ["defdown", 50, 3],
        ["stun", 0, 3],
      ],
    },
    sp2: {
      name: "Cards Cascade",
      description: "Throws three cards to different enemies, each applying a random debuff.",
      effect: [
        ["atkdown", 50, 4],
        ["slowdown", 100, 4],
        ["defdown", 50, 4],
        ["stun", 0, 4],
      ],
    },
    sp3: {
      name: "Cards Attack",
      description: sk_desc.SP3_WeaponRain("dark"),
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Buff Effect Duration",
      type: ["buff", "effecttm"],
      affects: "all",
      value: [6, 12, 18, 24],
    },
  },
};
