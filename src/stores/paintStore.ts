import type { Ref } from "vue";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { resetGrid } from "./methods/paintMethods";
import { canvasRef, renderToImage } from "./methods/renderToImage";
import { currentAlert, throwAlert } from "./methods/alertMethods";
import {
  squareToPaint,
  highlightSquare,
  paintSquare,
  resetSquare,
} from "./methods/canvasMethods";
export const usePaintStore = defineStore("Drawing", () => {
  const gridSize = ref(8);
  const currentBrush = ref({
    type: "brush",
    color: 0,
    toAdd: "#000000",
  });
  const isMenuVisible = ref(false);
  const iconType = ref({
    brush: "mdi-brush",
    fill: "mdi-format-color-fill",
  });
  const colorsLibrary: Ref<string[]> = ref([
    "#464646",
    "#68e895",
    "#a168d9",
    "#a9a9a9",
    "#1f98a5",
    "#f5a6f5",
    "#896584",
    "#229945",
    "#a6f9d5",
    "#f8f865",
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
    canvasRef,
    renderToImage,
    resetGrid,
    squareToPaint,
    highlightSquare,
    paintSquare,
    resetSquare,
    isMenuVisible,
  };
});
