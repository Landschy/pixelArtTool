import type { Color } from "csstype";

export const resetGrid = () => {
  const items = document.querySelectorAll<HTMLElement>(".painted");
  items.forEach((x) => {
    x.style.backgroundColor = "#ffffff";
    x.classList.remove("painted");
  });
};

export const fillGrid = (el: HTMLElement, color: Color) => {
  const idStrip = el.id.replace("gridElement", "");

  const grid = document.querySelectorAll<HTMLElement>("[id $= 'gridElement']");
  grid.forEach((x) => {});
};
