import { encode } from "./coder";

export const toUrl = (hero) => `${window.location.href}?${encode(hero)}`;
