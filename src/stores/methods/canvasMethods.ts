import type { Color } from "csstype";
import type { Ref } from "vue";
import { ref } from "vue";
import { toHex } from "./toHex";

export const squareToPaint: Ref<HTMLElement | null> = ref(null);

const paintClass = (el: HTMLElement, color: Color) => {
  el.classList.add("painted");
  el.style.backgroundColor = color;
};
const unPaintClass = (el: HTMLElement) => {
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

export const highlightSquare = (id: number) => {
  const el = getGridElement(id);
  if (el) {
    squareToPaint.value = el;
    if (checkPainted(el)) {
      squareToPaint.value.style.opacity = "0.5";
    } else {
      squareToPaint.value.style.backgroundColor = "#464646";
    }
  }
};

export const paintSquare = (id: number, color: Color) => {
  const el = getGridElement(id);
  if (el) {
    const isPainted = checkPainted(el);
    const currentColor = el.style.backgroundColor;
    const isNewColor = toHex(currentColor) != color;
    if (isPainted) {
      if (isNewColor) {
        paintClass(el, color);
      } else {
        unPaintClass(el);
      }
    } else {
      paintClass(el, color);
    }
  }
};

export const resetSquare = () => {
  const elToReset = squareToPaint.value;
  if (elToReset) {
    if (checkPainted(elToReset)) {
      elToReset.style.opacity = "1";
    } else {
      elToReset.style.backgroundColor = "#ffffff";
    }
  }
};
