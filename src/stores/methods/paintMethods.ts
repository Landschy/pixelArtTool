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
  const index = { x: 0, y: 0 };
  grid.map((rows, i) => {
    rows.map((el, j) => {
      if (el.id == id) {
        index.x = j;
        index.y = i;
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

  const presentColor = toHex(grid[index.y][index.x].style.backgroundColor);
  if (presentColor == newColor || presentColor != currentColor) {
    return;
  }

  grid[index.y][index.x].style.backgroundColor = newColor;
  grid[index.y][index.x].classList.add("painted");

  const offsets = [-1, 0, 1];
  for (const xOffsets of offsets) {
    for (const yOffsets of offsets) {
      if (xOffsets === 0 && yOffsets === 0) {
        continue;
      }
      floodFill(
        { x: index.x + xOffsets, y: index.y + yOffsets },
        size,
        currentColor,
        newColor
      );
    }
  }
};
