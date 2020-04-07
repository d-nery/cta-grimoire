import Papa from "papaparse";
import data from "./data/heroes.csv";
// import Tabulator from "tabulator-tables";
// import $ from "jquery";

import React from "react";
import { render } from "react-dom";

import Home from "./content/Home";

// import "./style.scss";

const parseFile = (rawFile) => {
  return new Promise((resolve) => {
    Papa.parse(rawFile, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        resolve(results.data);
      },
    });
  });
};

(async () => {
  let heroes = await parseFile(data);
  console.log(heroes);
})();

const App = () => <Home />;

render(<App />, document.getElementById("root"));
