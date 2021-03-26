import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";
import { dataToHero } from "../mappers/data-to-hero";

export const db = low(
  new LocalStorage("cta-grimoire-db-4", {
    deserialize: (data) => {
      let db = JSON.parse(data);

      db.heroes.forEach((v, i) => {
        db.heroes[i] = dataToHero(v)
      });

      return db;
    },
  }),
);

export const useDb = () => {
  return { db };
};
