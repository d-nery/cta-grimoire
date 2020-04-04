import Papa from "papaparse";
import data from "./data/heroes.csv";
import Tabulator from "tabulator-tables";

import "tabulator-tables/dist/css/tabulator.min.css";
import "./style.scss";

const parseFile = (rawFile) => {
  return new Promise((resolve) => {
    Papa.parse(rawFile, {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
    });
  });
};

(async () => {
  let heroes = await parseFile(data);
  console.log(heroes);

  let table = new Tabulator("#table", {
    data: heroes, //load row data from array
    autoColumns: true,
  });
})();
