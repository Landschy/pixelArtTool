import type { Color } from "csstype";
import { toHex } from "./toHex";

const gridElements = "[id *= 'gridElement']";

export const resetGrid = () => {
  const items = document.querySelectorAll<HTMLElement>(gridElements);
  items.forEach((x) => {
    x.classList.remove("painted");
    x.style.backgroundColor = "#ffffff";
  });
};

const reshape = (array: HTMLElement[], size: number) => {
  const tmp = [];
  for (let i = 0; i < array.length; i += size) {
    tmp.push(array.slice(i, i + size));
  }
  return tmp;
};

const get2DGrid = (size: number) => {
  const elements = document.querySelectorAll<HTMLElement>(
    "[id *= 'gridElement']"
  );
  return reshape(Array.from(elements), size);
};

const findIndex = (grid: HTMLElement[][], id: string) => {
  const index = { x: 1, y: 1 };
  grid.map((rows, i) => {
    rows.map((el, j) => {
      if (el.id == id) {
        index.x = j;
        index.y = i;
        return;
      }
    });
  });
  return index;
};

let grid: HTMLElement[][];
export const fillGrid = (el: HTMLElement, color: Color, size: number) => {
  grid = get2DGrid(size);
  const index = findIndex(grid, el.id);
  const currentColor = toHex(el.style.backgroundColor);
  floodFill(index, size, currentColor, color);
};

const floodFill = (
  index: { x: number; y: number },
  size: number,
  currentColor: Color,
  newColor: Color
) => {
  const isOutsideRange =
    index.x < 0 || index.x >= size || index.y >= size || index.y < 0;

  if (isOutsideRange) {
    return;
  }

  const presentColor = toHex(grid[index.x][index.y].style.backgroundColor);
  if (presentColor != currentColor) {
    return;
  }
  if (presentColor == newColor) {
    return;
  }
  if (presentColor == currentColor) {
    grid[index.x][index.y].style.backgroundColor = newColor;
    grid[index.x][index.y].classList.add("painted");
  }
  floodFill({ ...index, x: index.x - 1 }, size, currentColor, newColor);
  floodFill({ ...index, x: index.x + 1 }, size, currentColor, newColor);
  floodFill({ ...index, y: index.y - 1 }, size, currentColor, newColor);
  floodFill({ ...index, y: index.y + 1 }, size, currentColor, newColor);
  floodFill({ x: index.x - 1, y: index.y - 1 }, size, currentColor, newColor);
  floodFill({ x: index.x - 1, y: index.y + 1 }, size, currentColor, newColor);
  floodFill({ x: index.x + 1, y: index.y - 1 }, size, currentColor, newColor);
  floodFill({ x: index.x + 1, y: index.y + 1 }, size, currentColor, newColor);
};
