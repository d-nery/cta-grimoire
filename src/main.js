import Papa from "papaparse";
import data from "./data/heroes.csv";
import Tabulator from "tabulator-tables";
import $ from "jquery";

import "tabulator-tables/dist/css/tabulator.min.css";
import "./style.scss";

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

let ind = ["c", "r", "e", "l"];
let elm = ["w", "e", "l", "f", "d"];
let a = 0;
let b = 0;

$("#test-btn").click(() => {
  $(".card-bg").hide();
  $(".card-elem").hide();
  $(`#card-bg-${ind[a]}`).show();
  $(`#card-elem-${elm[b]}`).show();
  a = (a + 1) % 4;
  b = (b + 1) % 5;
});

(async () => {
  let heroes = await parseFile(data);
  console.log(heroes);

  //   let table = new Tabulator("#table", {
  //     data: heroes,
  //     autoColumns: true,
  //   });
})();
