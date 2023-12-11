export function nextIndex(arrayHole, oldIndex) {
  let index = oldIndex;
  while (oldIndex === index) {
    index = Math.floor(Math.random() * arrayHole.length);
  }
  return index;
}

export function getMain(count) {
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
