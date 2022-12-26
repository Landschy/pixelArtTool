import type { Color } from "csstype";

export const resetGrid = () => {
  const items = document.querySelectorAll<HTMLElement>(".painted");
  items.forEach((x) => {
    x.style.backgroundColor = "#ffffff";
    x.classList.remove("painted");
  });
};

export const fillGrid = (color: Color) => {
  const grid = document.querySelectorAll<HTMLElement>("[class *= 'painted']");
  grid.forEach((x) => {
    x.style.backgroundColor = color;
    x.classList.remove("painted");
  });
};
