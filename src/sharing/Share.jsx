import React from "react";
import { Href } from "../components/Href";
import { encode } from "../deep-link/coder";

export const Share = ({ hero }) => {
  const url = `${window.location.href}?${encode(hero)}`;
  return <Href href={url} target="_blank">Link to this hero.</Href>;

};
