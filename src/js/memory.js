function compaireAfterPoint(text) {
  let result = "imdb: ";
  const value = String(text);
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
  const { title } = object;
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

export function createMain(arrayObject) {
  const main = document.createElement("main");
  main.classList.add("content");

  const table = document.createElement("table");
  const trHead = document.createElement("tr");
  addTd(trHead, arrayObject[0], false);
  table.append(trHead);

  for (let i = 0; i < arrayObject.length; i += 1) {
    const tr = document.createElement("tr");
    addTd(tr, arrayObject[i]);
    table.append(tr);
  }
  main.append(table);
  return main;
}

export function sortedMemory(data, generator) {
  const titleFunc = generator.next().value;
  data.sort(titleFunc.title);
  return titleFunc.params;
}

function compareIdBig(a, b) {
  const result = a.id - b.id;
  if (result > 1) return 1;
  if (result === 0) return 0;
  return -1;
}

function compareIdLow(a, b) {
  if (a.id > b.id) return -1;
  if (a.id === b.id) return 0;
  return 1;
}

function compareTitleBig(a, b) {
  if (a.title > b.title) return 1;
  if (a.title === b.title) return 0;
  return -1;
}

function compareTitleLow(a, b) {
  if (a.title > b.title) return -1;
  if (a.title === b.title) return 0;
  return 1;
}

function compareYearBig(a, b) {
  if (a.year > b.year) return 1;
  if (a.year === b.year) return 0;
  return -1;
}

function compareYearLow(a, b) {
  if (a.year > b.year) return -1;
  if (a.year === b.year) return 0;
  return 1;
}

function compareImdbBig(a, b) {
  if (a.imdb > b.imdb) return 1;
  if (a.imdb === b.imdb) return 0;
  return -1;
}

function compareImdbLow(a, b) {
  if (a.imdb > b.imdb) return -1;
  if (a.imdb === b.imdb) return 0;
  return 1;
}

export function* generatorSortedMemory() {
  const result = [
    { title: compareIdBig, params: { index: 0, statusIncrease: true } },
    { title: compareIdLow, params: { index: 0, statusIncrease: false } },
    { title: compareTitleBig, params: { index: 1, statusIncrease: true } },
    { title: compareTitleLow, params: { index: 1, statusIncrease: false } },
    { title: compareYearBig, params: { index: 2, statusIncrease: true } },
    { title: compareYearLow, params: { index: 2, statusIncrease: false } },
    { title: compareImdbBig, params: { index: 3, statusIncrease: true } },
    { title: compareImdbLow, params: { index: 3, statusIncrease: false } },
  ];
  let count = 0;
  for (let i = 0; i < i + 1; i += 1) {
    yield result[count];
    count += 1;
    if (count === result.length) {
      count = 0;
    }
  }
}
