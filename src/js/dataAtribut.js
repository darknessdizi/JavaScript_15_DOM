export const data = [
  {
    id: 26,
    title: "Побег из Шоушенка",
    imdb: "9.30",
    year: 1994,
  },
  {
    id: 25,
    title: "Крёстный отец",
    imdb: "9.20",
    year: 1972,
  },
  {
    id: 27,
    title: "Крёстный отец 2",
    imdb: "9.00",
    year: 1974,
  },
  {
    id: 1047,
    title: "Тёмный рыцарь",
    imdb: "9.00",
    year: 2008,
  },
  {
    id: 223,
    title: "Криминальное чтиво",
    imdb: "8.90",
    year: 1994,
  },
  {
    id: 5678,
    title: "Угарное чтиво",
    imdb: "8.91678",
    year: 2023,
  },
  {
    id: 123,
    title: "Так себе фильм",
    imdb: "8.",
    year: 2023,
  },
];

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

export function createMainDataset(arrayObject) {
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

export function sorted(element, generator) {
  const arrayTr = element.querySelectorAll("tr");
  const arraySort = Array.from(arrayTr);
  const titleFunc = generator.next().value;
  arraySort.sort(titleFunc.title);
  return {
    arraySort,
    params: titleFunc.params,
  };
}

function compareIdBig(a, b) {
  const result = a.dataset.id - b.dataset.id;
  if (result > 1) return 1;
  if (result === 0) return 0;
  return -1;
}

function compareIdLow(a, b) {
  const x = Number(a.dataset.id);
  const y = Number(b.dataset.id);
  if (x > y) return -1;
  if (x === y) return 0;
  return 1;
}

function compareTitleBig(a, b) {
  if (a.dataset.title > b.dataset.title) return 1;
  if (a.dataset.title === b.dataset.title) return 0;
  return -1;
}

function compareTitleLow(a, b) {
  if (a.dataset.title > b.dataset.title) return -1;
  if (a.dataset.title === b.dataset.title) return 0;
  return 1;
}

function compareYearBig(a, b) {
  const x = Number(a.dataset.year);
  const y = Number(b.dataset.year);
  if (x > y) return 1;
  if (x === y) return 0;
  return -1;
}

function compareYearLow(a, b) {
  const x = Number(a.dataset.year);
  const y = Number(b.dataset.year);
  if (x > y) return -1;
  if (x === y) return 0;
  return 1;
}

function compareImdbBig(a, b) {
  const x = Number(a.dataset.imdb);
  const y = Number(b.dataset.imdb);
  if (x > y) return 1;
  if (x === y) return 0;
  return -1;
}

function compareImdbLow(a, b) {
  const x = Number(a.dataset.imdb);
  const y = Number(b.dataset.imdb);
  if (x > y) return -1;
  if (x === y) return 0;
  return 1;
}

export function* generatorSortedDataset() {
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

export function changeBackground(params) {
  const td = document.querySelectorAll("td")[params.index];
  td.classList.add("sorted");
  td.textContent += params.statusIncrease ? " 1" : " 2";
}
