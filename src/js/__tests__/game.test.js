import { nextIndex, getMain } from "../game";

test("Тест на выбор следующего блока div", () => {
  let oldIndex;
  const arrayHole = ["hole1", "hole2", "hole3", "hole4"];
  const index = nextIndex(arrayHole, oldIndex);
  oldIndex = index;
  expect(index).toBeDefined();
});

test("Тест getMain (Создание HTMLElement)", () => {
  const main = getMain(16);
  expect(main).toBeDefined();
  expect(main).toBeInstanceOf(HTMLElement);
  expect(main.firstChild.childElementCount).toBe(16);
});
