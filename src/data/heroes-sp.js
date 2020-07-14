export default {
  bf: {
    sp1: {
      name: "Shoot Bubbles",
      description: null,
      aoe: 0,
    },
    sp2: {
      name: "Multi-Shot",
      description: null,
      aoe: 0,
      timed: 0,
    },
    sp3: {
      name: "Bubble Rain",
      description: null,
      aoe: 300,
      cd: 30,
    },
    sp4: null,
  },
  bugoa: {
    sp1: {
      name: "Arrows",
      description: "Shoot Arrows",
      aoe: 0,
    },
    sp2: {
      name: "Multi Arrows",
      description: "Shoot quickly multiple arrows.",
      aoe: 0,
      timed: 0,
    },
    sp3: {
      name: "Arrow Shower",
      description: "Rain of arrows will devastate the enemy",
      aoe: 100,
      cd: 30,
    },
    sp4: null,
  },
  bugof: {
    sp1: {
      name: "Sword",
      description: null,
      aoe: 0,
    },
    sp2: {
      name: "Multi Hit",
      description: "Multiple strong sword hits",
      aoe: 0,
      timed: 0,
    },
    sp3: {
      name: "Swords Rain",
      description: null,
      aoe: 300,
      cd: 30,
    },
    sp4: null,
  },
  bugos: {
    sp1: {
      name: "Spear",
      description: null,
      aoe: 0,
    },
    sp2: {
      name: "Combo Attack",
      description: "Strong piercing hit which stuns the enemy",
      aoe: 0,
      timed: 0,
    },
    sp3: {
      name: "Spear Wave",
      description: "Send multiple piercing spears",
      aoe: 0,
      cd: 30,
    },
    sp4: null,
  },
  bugog: {
    sp1: {
      name: "Axe Hit",
      description: null,
      aoe: 0,
    },
    sp2: {
      name: "Multi Hit",
      description: "Multiple strong smashing hits",
      aoe: 150,
      timed: 0,
    },
    sp3: {
      name: "Axe Smash",
      description: null,
      aoe: 500,
      cd: 30,
    },
    sp4: null,
  },
  ik: {
    sp1: {
      name: "Sword Hit",
      effect: ["freeze", 10, 2],
      description: null,
      aoe: 0,
    },
    sp2: {
      name: "Multi Hit",
      description: "Multiple quick hits",
      effect: ["freeze", 10, 2],
      aoe: 0,
      timed: 0,
    },
    sp3: {
      name: "Ice Pillars",
      effect: ["freeze", 20, 2],
      description: null,
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Buff Freeze Duration",
      type: ["buff", "freezetm"],
      affects: "water",
      value: 8,
    },
  },
  pirato: {
    sp1: {
      name: "Shoot Bombs",
      description: null,
      aoe: 100,
    },
    sp2: {
      name: "Shoot a Big Bomb",
      description: null,
      aoe: 150,
      timed: 0,
    },
    sp3: {
      name: "Bomb Rain",
      aoe: 300,
      cd: 30,
    },
    sp4: {
      name: "Buff Atk",
      type: ["buff", "atk"],
      affects: "water",
      value: 400,
    },
  },
};
