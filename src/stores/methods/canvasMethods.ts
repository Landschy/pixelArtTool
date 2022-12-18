import type { Color } from "csstype";
import type { Ref } from "vue";
import { ref } from "vue";

export const squareToPaint: Ref<HTMLElement | null> = ref(null);
export const highlightSquare = (id: number) => {
  //HighLight opacity 80
  const elId = `gridElement${id}`;
  const el = document.getElementById(elId);
  if (el) {
    if (!el.classList.contains("painted")) {
      squareToPaint.value = el;
      squareToPaint.value.style.backgroundColor = "rgba(230,230,230,0.5)";
    }
  }
};
export const paintSquare = (id: number, color: Color) => {
  //Actually paint 100
  const elId = `gridElement${id}`;
  const el = document.getElementById(elId);
  if (el) {
    el.classList.add("painted");
    el.style.backgroundColor = color;
  }
};
export const resetSquare = () => {
  if (squareToPaint.value) {
    if (!squareToPaint.value.classList.contains("painted")) {
      squareToPaint.value.style.backgroundColor = "transparent";
    }
  }
};
