import type { Color } from "csstype";
import type { Ref } from "vue";
import { ref } from "vue";
import { fillGrid } from "./paintMethods";

export const squareToPaint: Ref<HTMLElement | null> = ref(null);

const paintClass = (el: HTMLElement, color: Color) => {
  el.classList.add("painted");
  el.style.backgroundColor = color;
};
export const unPaintClass = (el: HTMLElement) => {
  el.classList.remove("painted");
  el.style.backgroundColor = "#ffffff";
};
const checkPainted = (el: HTMLElement) => {
  return el.classList.contains("painted");
};
const getGridElement = (id: number) => {
  const elId = `gridElement${id}`;
  const el = document.getElementById(elId);
  return el;
};

const paintHighlight = (el: HTMLElement, color: Color) => {
  if (el) {
    squareToPaint.value = el;
    if (checkPainted(el)) {
      squareToPaint.value.style.opacity = "0.5";
    } else {
      squareToPaint.value.style.backgroundColor = color;
    }
  }
};
let mouseState = 0;
export const highlightSquare = (id: number, color: Color, brush: string) => {
  const el = getGridElement(id);
  if (!el) {
    return;
  }
  onmousedown = () => {
    mouseState++;
    highlightSquare(id, color, brush);
  };
  onmouseup = () => {
    mouseState--;
  };
  squareToPaint.value = el;

  switch (brush) {
    case "brush":
      if (mouseState != 0) {
        paintSquare(id, color, brush);
      } else {
        paintHighlight(el, color);
      }
      break;
    case "eraser":
      if (mouseState != 0) {
        unPaintClass(el);
      } else {
        paintHighlight(el, "#ffffff");
      }
      break;
  }
};

export const paintSquare = (
  id: number,
  color: Color,
  brush: string = "brush",
  size?: number
) => {
  const el = getGridElement(id);
  if (el) {
    switch (brush) {
      case "brush":
        paintClass(el, color);
        break;
      case "fill":
        fillGrid(el, color, size ? size : 8);
        break;
      case "eraser":
        unPaintClass(el);
        break;
    }
  }
};
export const rangePaint = (start: number, size: number, color: Color) => {
  for (let i = 0; i <= size; i++) {
    paintSquare(start + i, color);
  }
};

export const resetSquare = () => {
  const elToReset = squareToPaint.value;
  if (elToReset) {
    const isPainted = checkPainted(elToReset);
    if (isPainted) {
      elToReset.style.opacity = "1";
    } else {
      elToReset.style.backgroundColor = "#ffffff";
    }
  }
};
