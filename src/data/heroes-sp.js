export default {
  bf: {
    sp1: {
      name: "Shoot Bubbles",
      description: "Casts a ball of energy at an enemy",
    },
    sp2: {
      name: "Multi-Shot",
      description: "Rapidly casts balls of energy at enemies",
    },
    sp3: {
      name: "Bubble Rain",
      description:
        "Destructive rain of water falls from the sky causing damage in an area of impact",
      aoe: 300,
      cd: 30,
    },
    sp4: null,
  },
  bugoa: {
    sp1: {
      name: "Arrows",
      description: null,
    },
    sp2: {
      name: "Multi Fire",
      description: "Fires multiple arrows at enemies",
    },
    sp3: {
      name: "Arrow Shower",
      description:
        "Volley of arrows fall from the sky covering the ground and causing damage in an area on impact",
      aoe: 100,
      cd: 30,
    },
    sp4: null,
  },
  bugof: {
    sp1: {
      name: "Sword",
      description: "Swings their weapon at an enemy",
    },
    sp2: {
      name: "Multi Hit",
      description: "Rapid strong hits at an enemy",
    },
    sp3: {
      name: "Swords Rain",
      description:
        "Huge weapons of water are summoned and rain over the field causing damage in an area on impact",
      aoe: 300,
      cd: 30,
    },
    sp4: null,
  },
  bugos: {
    sp1: {
      name: "Spear Hit",
      description: "Swings their weapon at an enemy",
      effect: [["stun", 30, 0]],
    },
    sp2: {
      name: "Piercing Multi-Hit",
      description: "Thrust their heavy spear which pierces all enemies in a line",
      effect: [["stun", 30, 0]],
    },
    sp3: {
      name: "Spear Wave",
      description: "Send multiple piercing spears accross the battlefield",
      cd: 30,
    },
    sp4: null,
  },
  bugog: {
    sp1: {
      name: "Axe Hit",
      description: "Heavily swings their weapon at an enemy",
    },
    sp2: {
      name: "Multi Hit",
      description: "Quickly swings their heavy weapon multiple times at an enemy",
      aoe: 150,
    },
    sp3: {
      name: "Axe Smash",
      description:
        "Summons a destructive weapon of water over the field and causes damage in a large area on impact",
      aoe: 500,
      cd: 30,
    },
    sp4: null,
  },
  ik: {
    sp1: {
      name: "Sword Hit",
      description: "Swings their weapon at an enemy",
      effect: [["freeze", 10, 2]],
    },
    sp2: {
      name: "Multi Hit",
      description: "Rapid strong hits at an enemy",
      effect: [["freeze", 10, 2]],
    },
    sp3: {
      name: "Ice Pillars",
      effect: [["freeze", 20, 2]],
      description: null,
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
      description: "Shoots at an enemy",
      aoe: 100,
    },
    sp2: {
      name: "Shoot a Big Bomb",
      description: "Shoot an explosive at enemies",
      aoe: 150,
    },
    sp3: {
      name: "Bomb Rain",
      description:
        "Huge weapons of water are summoned and rain over the field causing damage in an area on impact",
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Buff Atk",
      type: ["buff", "atk"],
      affects: "water",
      value: [400, 800, 1200, 1600],
    },
  },
  rufus: {
    sp1: {
      name: "Shoot Straight",
      description: "Shoots at an enemy",
    },
    sp2: {
      name: "Large Caliber",
      description: "Shoots a large bullet at enemies",
      timed: 10,
    },
    sp3: {
      name: "Trigger-Happy",
      description: "Shoots devastating bullets",
      cd: 30,
    },
    sp4: {
      name: "Buff Critical Damage",
      type: ["buff", "ctkdmg"],
      affects: "water",
      value: [200, 400, 600, 800],
    },
  },

  trickster: {
    sp1: {
      name: "Magic Card",
      description: "Shoots at an enemy.\nRandomly try to apply the following effects:",
      effect: [
        ["atkdown", 50, 3],
        ["slowdown", 100, 3],
        ["def", 50, 3],
        ["stun", 100, 3],
      ],
    },
    sp2: {
      name: "Cards Cascade",
      description: "Throws three cards to different enemies, each applying a random debuff.",
      effect: [
        ["atkdown", 50, 4],
        ["slowdown", 100, 4],
        ["def", 50, 4],
        ["stun", 100, 4],
      ],
    },
    sp3: {
      name: "Cards Attack",
      description:
        "Huge weapons of dark are summoned and rain over the field causing damage in an area on impact",
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Buff Effect Duration",
      type: ["buff", "effecttm"],
      affects: "all",
      value: [6, 6, 6, 6],
    },
  },
};
