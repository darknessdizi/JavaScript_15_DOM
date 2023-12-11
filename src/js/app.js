import { nextIndex, getMain } from "./game";
import {
  createMainDataset,
  data,
  sorted,
  changeBackground,
  generatorSortedDataset,
} from "./dataAtribut";
import { createMain, generatorSortedMemory, sortedMemory } from "./memory";

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
    const { arraySort, params } = sorted(main, generator);
    body.innerHTML = "";
    let array = [];
    arraySort.forEach((item) => array.push(item.dataset));
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
