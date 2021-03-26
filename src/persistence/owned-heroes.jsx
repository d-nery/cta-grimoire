import { useCallback, useEffect, useState } from "react";

import Heroes from "~/src/data/heroes";

import Hero from "../models/Hero";
import { useDb } from "./use-db";

export const useOwnedHeroes = () => {
  const { db } = useDb();
  const [heroes, setHeroes] = useState([]);
  const [recentlyVisitedHero, setRecentlyVisitedHero] = useState(undefined);

  const updateHero = useCallback((hero) => {
    const heroIndex = heroes.findIndex(h => h.id === hero.id);
    if (heroIndex < 0) {
      return;
    }
    heroes[heroIndex] = hero;
    db.set("heroes", heroes).write();
    setHeroes([...heroes]);
  }, [db, heroes]);

  const visitHero = useCallback((hero) => {
    const heroIndex = heroes.findIndex(h => h.id === hero.id);
    if (heroIndex < 0) {
      return;
    }
    db.set("hero", heroIndex).write()
    setRecentlyVisitedHero(hero);
  }, [db, heroes]);

  // load from db / set defaults
  useEffect(() => {
    const heroesFromDb = db.get("heroes").value();
    let _heroes = Object.keys(Heroes).map(k => new Hero(k));
    if (!heroesFromDb) {
      db.defaults({ heroes: _heroes, hero: 26 }).write();
      setHeroes(db.get("heroes").value());
    } else {
      setHeroes(heroesFromDb);
    }

    // would be more flexible to store `id-name` instead. Index will break when adding new hero.
    const recentlyVisitedIndex = db.get("hero").value() ?? 0;
    setRecentlyVisitedHero(_heroes[recentlyVisitedIndex]);

  }, []);

  return { heroes, activeHero: recentlyVisitedHero, updateHero, visitHero };
};
