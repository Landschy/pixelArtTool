import type { Color } from "csstype";
import type { Ref } from "vue";
import { ref, nextTick } from "vue";
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

let mouseState = 0;
export const highlightSquare = (id: number, color: Color, brush: string) => {
  const el = getGridElement(id);
  onmousedown = () => {
    mouseState++;
  };
  onmouseup = () => {
    mouseState--;
  };
  if (el) {
    squareToPaint.value = el;
    switch (brush) {
      case "brush":
        if (mouseState === 0) {
          if (checkPainted(el)) {
            squareToPaint.value.style.opacity = "0.5";
          } else {
            squareToPaint.value.style.backgroundColor = color;
          }
        } else {
          paintSquare(id, color, brush);
        }
        break;
      case "eraser":
        if (mouseState != 0) {
          unPaintClass(el);
        }
        break;
    }
  }
};

export const paintSquare = (
  id: number,
  color: Color,
  brush: string = "brush"
) => {
  const el = getGridElement(id);
  if (el) {
    switch (brush) {
      case "brush":
        paintClass(el, color);
        break;
      case "fill":
        fillGrid(el, color);
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
