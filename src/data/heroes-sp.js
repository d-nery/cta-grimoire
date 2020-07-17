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
  oceana: {
    sp1: {
      name: "Bubble Cast",
      description: "Casts a ball of energy at an enemy",
    },
    sp2: {
      name: "Multi-Cast",
      description: "Rapidly casts balls of energy at enemies",
    },
    sp3: {
      name: "Heavy Rain",
      description:
        "Destructive rain of water falls from the sky causing damage in an area on impact",
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Buff HP",
      type: ["buff", "hp"],
      affects: "water",
      value: [400, 800, 1200, 1600],
    },
  },
  goddess: {
    sp1: {
      name: "Water Bubbles",
      description: "Casts a ball of energy at an enemy",
    },
    sp2: {
      name: "Mini Tsunami",
      description: "Casts a small wave which damages and pushes back enemies",
      effect: [["pb", 0, 0]],
    },
    sp3: {
      name: "Water Invincibility",
      description:
        "Protects all heroes with a shield absorbing as much damage as the caster's total HP. The shield is more efficient against the same element",
      cd: 60,
    },
    sp4: {
      name: "Buff HP",
      type: ["buff", "hp"],
      affects: "water",
      value: [400, 800, 1200, 1600],
    },
  },
  snowman: {
    sp1: {
      name: "Snowballs",
      description: "Throws a snowball at an enemy",
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
    sp4: {
      name: "Buff Atk",
      type: ["buff", "atk"],
      affects: "water",
      value: [400, 800, 1200, 1600],
    },
  },
  bb: {
    sp1: {
      name: "Sword Hit",
      description: "Swings their weapon at an enemy",
    },
    sp2: {
      name: "Multi Hit",
      description: "Rapid strong hits at an enemy",
    },
    sp3: {
      name: "Tsunami",
      description: "Large wave of water that damages all in its path",
      effect: [["stun", 100, 3]],
      cd: 45,
    },
    sp4: {
      name: "Buff Def",
      type: ["buff", "def"],
      affects: "water",
      value: [400, 800, 1200, 1600],
    },
  },
  atlantus: {
    sp1: {
      name: "Spear Hit",
      description: "Swings their weapon at an enemy",
    },
    sp2: {
      name: "Smash Attack",
      description: "Heavily smashes the ground with their weapon causing splash damage",
      aoe: 350,
    },
    sp3: {
      name: "Trident Wrath",
      description: "Sends a devastating spear across the battlefield damaging all in its path",
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
      description: "Swings their weapon at an enemy",
    },
    sp2: {
      name: "Multi Hit",
      description: "Rapid strong hits at an enemy",
    },
    sp3: {
      name: "Sword Storm",
      description:
        "Huge weapons of water are summoned and rain over the field causing damage in an area on impact",
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
      description: "Swings their weapon at an enemy",
    },
    sp2: {
      name: "Piercing Hit",
      description: "Pierces an enemy with a high chance of doing a critical hit",
    },
    sp3: {
      name: "Random Hits",
      description: "Launch a powerful attack on one random enemy",
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
  akwa: {
    sp1: {
      name: "Water Punch",
      description: "Swings their fists at an enemy",
    },
    sp2: {
      name: "Water Energy Ball",
      description: "Casts a ball of water damaging and pushing back enemies",
      effect: [["pb", 0, 0]],
    },
    sp3: {
      name: "Water Blast",
      description: "Large wave of water that damages all in its path",
      cd: 45,
    },
    sp4: {
      name: "Buff Atk Per Sec",
      type: ["buff", "aps"],
      affects: "water",
      value: [10, 20, 30, 40],
    },
  },
  namida: {
    sp1: {
      name: "Rocket Launcher",
      description: "Shoots an explosive at enemies",
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
      description:
        "Huge weapons of water are summoned and rain over the field causing damage in an area on impact",
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
      description: "Fires arrows at enemies",
      effect: [["freeze", 5, 2]],
    },
    sp2: {
      name: "Multi Ice Arrows",
      description: "Fires Multi Ice Arrows at enemies",
      effect: [["freeze", 10, 2]],
    },
    sp3: {
      name: "Ice Arrow Shower",
      description:
        "Volley of arrows fall from the sky covering the ground and causing damage in an area on impact",
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
      description: "Casts a ball of energy at an enemy",
      effect: [["freeze", 30, 2]],
    },
    sp2: {
      name: "Multi-Shot",
      description: "Rapidly casts balls of energy at enemies",
      effect: [["freeze", 10, 2]],
    },
    sp3: {
      name: "Blizzard",
      description:
        "A blizzard of ice will freeze all heroes touched by it. At the end of the freeze, the ice will explode causing damage around it",
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
      description: "Shoots at an enemy",
    },
    sp2: {
      name: "Water Bubble",
      description: "Summons a large water ball which damages and  curses enemies hit",
      effect: [["healdown", 100, 15]],
      aoe: 500,
    },
    sp3: {
      name: "Manta Summoning",
      description:
        "Summons a destructive weapon of water over the field that causes damage in a large area on impact",
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
      description: "Heavily swings their weapon at an enemy",
      effect: [["freeze", 10, 2]],
    },
    sp2: {
      name: "Multi Hit",
      description: "Quickly swings their heavy weapon multiple times at an enemy",
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
    sp4: {
      name: "Buff Def",
      type: ["buff", "def"],
      affects: "all",
      value: [400, 800, 1200, 1600],
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
        ["defdown", 50, 4],
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
