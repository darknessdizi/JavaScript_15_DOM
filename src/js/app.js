function nextItem(arrayHole) {
  let index = oldIndex;
  while (oldIndex === index) {
    index = Math.floor(Math.random() * arrayHole.length);
  }
  const div = arrayHole[index];
  div.classList.add("hole_has-mole");
  oldIndex = index;
  return div;
}

const main = document.querySelector(".content");
const mainDiv = document.createElement("div");
mainDiv.classList.add("hole-game");
main.append(mainDiv);

for (let i = 0; i < 16; i += 1) {
  const element = document.createElement("div");
  element.classList.add("hole");
  mainDiv.append(element);
}

const arrayHole = main.querySelectorAll(".hole");

let oldIndex = undefined;
let div = nextItem(arrayHole);
let i = 0;

const idSetInterval = setInterval(() => {
  div.classList.remove("hole_has-mole");
  div = nextItem(arrayHole);

  i += 1;
  if (i === 50) {
    console.log("Конец");
    clearInterval(idSetInterval);
  }
}, 1000);
