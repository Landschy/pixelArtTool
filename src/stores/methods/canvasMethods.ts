import type { Color } from "csstype";
import type { Ref } from "vue";
import { ref } from "vue";
import { toHex } from "./toHex";

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
  if (el) {
    onmousedown = () => {
      mouseState++;
    };
    onmouseup = () => {
      mouseState--;
    };
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
          paintSquare(id, color);
        }
        break;
      case "fill":
        break;
      case "eraser":
        if (mouseState != 0) {
          unPaintClass(el);
        }
        break;
    }
  }
};

export const paintSquare = (id: number, color: Color) => {
  const el = getGridElement(id);
  if (el) {
    const currentColor = el.style.backgroundColor;
    const isNewColor = toHex(currentColor) != color;
    const isPainted = checkPainted(el);
    paintClass(el, color);
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
