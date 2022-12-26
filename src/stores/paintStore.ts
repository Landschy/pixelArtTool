import type { Ref } from "vue";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { resetGrid } from "./methods/paintMethods";
import { currentAlert, throwAlert } from "./methods/alertMethods";
import {
  squareToPaint,
  highlightSquare,
  paintSquare,
  resetSquare,
} from "./methods/canvasMethods";

import type { Color } from "csstype";
export const usePaintStore = defineStore("Drawing", () => {
  const gridSize = ref(8);
  const currentBrush = ref({
    type: "brush",
    color: 0,
    toAdd: "#465184",
  });
  const isBeingHold = ref(false);
  const isMenuVisible = ref(false);
  const iconType = ref({
    brush: "mdi-brush",
    fill: "mdi-format-color-fill",
    eraser: "mdi-eraser",
  });
  const colorsLibrary: Ref<Color[]> = ref([
    "#464646",
    "#168725",
    "#ff6585",
    "#fa6518",
    "#aaf165",
  ]);
  const changeColor = (c: number) => {
    currentBrush.value.color = c;
  };
  const isToAdd = ref(false);
  const addtoLibrary = (c: string) => {
    const present = colorsLibrary.value.find((x) => {
      return x === c;
    });
    if (!present) {
      colorsLibrary.value.push(c);
      throwAlert("created", "New Color Added!", "#52BE49", "mdi-check");
    } else {
      throwAlert(
        "duplicated",
        "Color already in Library!",
        "#AE2600",
        "mdi-alert"
      );
    }
  };
  const currentToPaint = computed(() => {
    return colorsLibrary.value[currentBrush.value.color];
  });
  const currentDrawer = ref([1]);

  return {
    currentBrush,
    iconType,
    isToAdd,
    addtoLibrary,
    colorsLibrary,
    currentToPaint,
    changeColor,
    currentAlert,
    throwAlert,
    gridSize,
    resetGrid,
    squareToPaint,
    highlightSquare,
    paintSquare,
    resetSquare,
    isMenuVisible,
    currentDrawer,
    isBeingHold,
  };
});
