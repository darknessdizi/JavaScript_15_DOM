/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/game.js
function nextIndex(arrayHole, oldIndex) {
  let index = oldIndex;
  while (oldIndex === index) {
    index = Math.floor(Math.random() * arrayHole.length);
  }
  return index;
}
function getMain(count) {
  const main = document.createElement("main");
  main.classList.add("content");
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("hole-game");
  main.append(mainDiv);
  for (let i = 0; i < count; i += 1) {
    const element = document.createElement("div");
    element.classList.add("hole");
    mainDiv.append(element);
  }
  return main;
}
;// CONCATENATED MODULE: ./src/js/dataAtribut.js
const data = [{
  id: 26,
  title: "Побег из Шоушенка",
  imdb: "9.30",
  year: 1994
}, {
  id: 25,
  title: "Крёстный отец",
  imdb: "9.20",
  year: 1972
}, {
  id: 27,
  title: "Крёстный отец 2",
  imdb: "9.00",
  year: 1974
}, {
  id: 1047,
  title: "Тёмный рыцарь",
  imdb: "9.00",
  year: 2008
}, {
  id: 223,
  title: "Криминальное чтиво",
  imdb: "8.90",
  year: 1994
}, {
  id: 5678,
  title: "Угарное чтиво",
  imdb: "8.91678",
  year: 2023
}, {
  id: 123,
  title: "Так себе фильм",
  imdb: "8.",
  year: 2023
}];
function compaireAfterPoint(text) {
  const number = Number(text);
  let result = "imdb: ";
  const value = String(number);
  const point = value.includes(".");
  if (point) {
    const index = value.includes(".");
    const afterPoint = value.slice(index + 1);
    result += afterPoint.length === 1 ? `${value}0` : value.slice(0, index + 3);
  } else {
    result += `${value}.00`;
  }
  return result;
}
function addTd(tr, object, status = true) {
  const id = `#${object.id}`;
  const {
    title
  } = object;
  const year = `(${object.year})`;
  const imdb = compaireAfterPoint(object.imdb);
  const arrayValue = [id, title, year, imdb];
  const arrayTitle = ["id", "title", "year", "imdb"];
  const array = status ? arrayValue : arrayTitle;
  for (let i = 0; i < array.length; i += 1) {
    const td = document.createElement("td");
    td.textContent = array[i];
    tr.append(td);
  }
}
function createMainDataset(arrayObject) {
  const main = document.createElement("main");
  main.classList.add("content");
  const table = document.createElement("table");
  const trHead = document.createElement("tr");
  addTd(trHead, arrayObject[0], false);
  table.append(trHead);
  for (let i = 0; i < arrayObject.length; i += 1) {
    const tr = document.createElement("tr");
    tr.dataset.id = arrayObject[i].id;
    tr.dataset.title = arrayObject[i].title;
    tr.dataset.year = arrayObject[i].year;
    tr.dataset.imdb = arrayObject[i].imdb;
    addTd(tr, arrayObject[i]);
    table.append(tr);
  }
  main.append(table);
  return main;
}
function sorted(element, generator) {
  const arrayTr = element.querySelectorAll("tr");
  const arraySort = Array.from(arrayTr);
  const titleFunc = generator.next().value;
  arraySort.sort(titleFunc.title);
  return {
    arraySort,
    params: titleFunc.params
  };
}
function compareIdBig(a, b) {
  const result = a.dataset.id - b.dataset.id;
  if (result > 1) return 1;
  if (result === 0) return 0;
  if (result < 1) return -1;
}
function compareIdLow(a, b) {
  const x = Number(a.dataset.id);
  const y = Number(b.dataset.id);
  if (x > y) return -1;
  if (x === y) return 0;
  if (x < y) return 1;
}
function compareTitleBig(a, b) {
  if (a.dataset.title > b.dataset.title) return 1;
  if (a.dataset.title === b.dataset.title) return 0;
  if (a.dataset.title < b.dataset.title) return -1;
}
function compareTitleLow(a, b) {
  if (a.dataset.title > b.dataset.title) return -1;
  if (a.dataset.title === b.dataset.title) return 0;
  if (a.dataset.title < b.dataset.title) return 1;
}
function compareYearBig(a, b) {
  const x = Number(a.dataset.year);
  const y = Number(b.dataset.year);
  if (x > y) return 1;
  if (x === y) return 0;
  if (x < y) return -1;
}
function compareYearLow(a, b) {
  const x = Number(a.dataset.year);
  const y = Number(b.dataset.year);
  if (x > y) return -1;
  if (x === y) return 0;
  if (x < y) return 1;
}
function compareImdbBig(a, b) {
  const x = Number(a.dataset.imdb);
  const y = Number(b.dataset.imdb);
  if (x > y) return 1;
  if (x === y) return 0;
  if (x < y) return -1;
}
function compareImdbLow(a, b) {
  const x = Number(a.dataset.imdb);
  const y = Number(b.dataset.imdb);
  if (x > y) return -1;
  if (x === y) return 0;
  if (x < y) return 1;
}
function* generatorSortedDataset() {
  const result = [{
    title: compareIdBig,
    params: {
      index: 0,
      statusIncrease: true
    }
  }, {
    title: compareIdLow,
    params: {
      index: 0,
      statusIncrease: false
    }
  }, {
    title: compareTitleBig,
    params: {
      index: 1,
      statusIncrease: true
    }
  }, {
    title: compareTitleLow,
    params: {
      index: 1,
      statusIncrease: false
    }
  }, {
    title: compareYearBig,
    params: {
      index: 2,
      statusIncrease: true
    }
  }, {
    title: compareYearLow,
    params: {
      index: 2,
      statusIncrease: false
    }
  }, {
    title: compareImdbBig,
    params: {
      index: 3,
      statusIncrease: true
    }
  }, {
    title: compareImdbLow,
    params: {
      index: 3,
      statusIncrease: false
    }
  }];
  let count = 0;
  for (let i = 0; i < i + 1; i += 1) {
    yield result[count];
    count += 1;
    if (count === result.length) {
      count = 0;
    }
  }
}
function changeBackground(params) {
  const td = document.querySelectorAll("td")[params.index];
  td.classList.add("sorted");
  // td.textContent += params.statusIncrease ? " \u{1F813}" : " \u{1F811}";
  td.textContent += params.statusIncrease ? " ↓" : " ↑";
}
;// CONCATENATED MODULE: ./src/js/memory.js
function memory_compaireAfterPoint(text) {
  const number = Number(text);
  let result = "imdb: ";
  const value = String(number);
  const point = value.includes(".");
  if (point) {
    const index = value.includes(".");
    const afterPoint = value.slice(index + 1);
    result += afterPoint.length === 1 ? `${value}0` : value.slice(0, index + 3);
  } else {
    result += `${value}.00`;
  }
  return result;
}
function memory_addTd(tr, object, status = true) {
  const id = `#${object.id}`;
  const {
    title
  } = object;
  const year = `(${object.year})`;
  const imdb = memory_compaireAfterPoint(object.imdb);
  const arrayValue = [id, title, year, imdb];
  const arrayTitle = ["id", "title", "year", "imdb"];
  const array = status ? arrayValue : arrayTitle;
  for (let i = 0; i < array.length; i += 1) {
    const td = document.createElement("td");
    td.textContent = array[i];
    tr.append(td);
  }
}
function createMain(arrayObject) {
  const main = document.createElement("main");
  main.classList.add("content");
  const table = document.createElement("table");
  const trHead = document.createElement("tr");
  memory_addTd(trHead, arrayObject[0], false);
  table.append(trHead);
  for (let i = 0; i < arrayObject.length; i += 1) {
    const tr = document.createElement("tr");
    memory_addTd(tr, arrayObject[i]);
    table.append(tr);
  }
  main.append(table);
  return main;
}
function sortedMemory(data, generator) {
  const titleFunc = generator.next().value;
  data.sort(titleFunc.title);
  return titleFunc.params;
}
function memory_compareIdBig(a, b) {
  const result = a.id - b.id;
  if (result > 1) return 1;
  if (result === 0) return 0;
  if (result < 0) return -1;
}
function memory_compareIdLow(a, b) {
  if (a.id > b.id) return -1;
  if (a.id === b.id) return 0;
  if (a.id < b.id) return 1;
}
function memory_compareTitleBig(a, b) {
  if (a.title > b.title) return 1;
  if (a.title === b.title) return 0;
  if (a.title < b.title) return -1;
}
function memory_compareTitleLow(a, b) {
  if (a.title > b.title) return -1;
  if (a.title === b.title) return 0;
  if (a.title < b.title) return 1;
}
function memory_compareYearBig(a, b) {
  if (a.year > b.year) return 1;
  if (a.year === b.year) return 0;
  if (a.year < b.year) return -1;
}
function memory_compareYearLow(a, b) {
  if (a.year > b.year) return -1;
  if (a.year === b.year) return 0;
  if (a.year < b.year) return 1;
}
function memory_compareImdbBig(a, b) {
  if (a.imdb > b.imdb) return 1;
  if (a.imdb === b.imdb) return 0;
  if (a.imdb < b.imdb) return -1;
}
function memory_compareImdbLow(a, b) {
  if (a.imdb > b.imdb) return -1;
  if (a.imdb === b.imdb) return 0;
  if (a.imdb < b.imdb) return 1;
}
function* generatorSortedMemory() {
  const result = [{
    title: memory_compareIdBig,
    params: {
      index: 0,
      statusIncrease: true
    }
  }, {
    title: memory_compareIdLow,
    params: {
      index: 0,
      statusIncrease: false
    }
  }, {
    title: memory_compareTitleBig,
    params: {
      index: 1,
      statusIncrease: true
    }
  }, {
    title: memory_compareTitleLow,
    params: {
      index: 1,
      statusIncrease: false
    }
  }, {
    title: memory_compareYearBig,
    params: {
      index: 2,
      statusIncrease: true
    }
  }, {
    title: memory_compareYearLow,
    params: {
      index: 2,
      statusIncrease: false
    }
  }, {
    title: memory_compareImdbBig,
    params: {
      index: 3,
      statusIncrease: true
    }
  }, {
    title: memory_compareImdbLow,
    params: {
      index: 3,
      statusIncrease: false
    }
  }];
  let count = 0;
  for (let i = 0; i < i + 1; i += 1) {
    yield result[count];
    count += 1;
    if (count === result.length) {
      count = 0;
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js



function createLinks() {
  const main = document.createElement("main");
  main.classList.add("content");
  const listTask = [runTask1, runTask2, runTask3];
  for (let i = 0; i < 3; i += 1) {
    const link = document.createElement("a");
    link.textContent = `Задача ${i + 1}`;
    main.append(link);
    link.addEventListener("click", listTask[i]);
  }
  return main;
}
function addButton(mainDiv, idTimer) {
  const btn = document.createElement("button");
  btn.textContent = "Return";
  mainDiv.append(btn);
  btn.addEventListener("click", () => {
    clearInterval(idTimer);
    const body = document.querySelector("body");
    body.innerHTML = "";
    const main = createLinks();
    body.append(main);
  });
}
const body = document.querySelector("body");
const mainDiv = createLinks();
body.append(mainDiv);
function runTask1() {
  body.innerHTML = "";
  const main = getMain(16);
  body.append(main);
  const arrayHole = main.querySelectorAll(".hole");
  let oldIndex;
  let index = nextIndex(arrayHole, oldIndex);
  oldIndex = index;
  let div = arrayHole[index];
  div.classList.add("hole_has-mole");
  const idTimer = setInterval(() => {
    div.classList.remove("hole_has-mole");
    index = nextIndex(arrayHole, oldIndex);
    oldIndex = index;
    div = arrayHole[index];
    div.classList.add("hole_has-mole");
  }, 1000);
  addButton(main, idTimer);
}
function runTask2() {
  body.innerHTML = "";
  let main = createMainDataset(data);
  body.append(main);
  const generator = generatorSortedDataset();
  const idTimer = setInterval(() => {
    const {
      arraySort,
      params
    } = sorted(main, generator);
    body.innerHTML = "";
    let array = [];
    arraySort.forEach(item => array.push(item.dataset));
    array = array.slice(1);
    main = createMainDataset(array);
    body.append(main);
    addButton(main, idTimer);
    changeBackground(params);
  }, 2000);
  addButton(main, idTimer);
}
function runTask3() {
  body.innerHTML = "";
  let main = createMain(data);
  body.append(main);
  const generator = generatorSortedMemory();
  const idTimer = setInterval(() => {
    const params = sortedMemory(data, generator);
    body.innerHTML = "";
    main = createMain(data);
    body.append(main);
    addButton(main, idTimer);
    changeBackground(params);
  }, 2000);
  addButton(main, idTimer);
}
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;