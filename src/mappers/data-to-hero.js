import Hero from "../models/Hero";
import Rune from "../models/Rune";

export const dataToHero = (data) => {
  const hero = Object.assign(new Hero(), data)
  hero._runes.forEach((r,j) => {
    if (!r) {
      return
    }
    hero._runes[j] = Object.assign(new Rune(), r)
  })
  return hero
}
