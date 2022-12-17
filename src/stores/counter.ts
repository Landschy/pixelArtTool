import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Ref } from "vue";

export const useDrawingStore = defineStore("Drawing", () => {
  const currentBrush = ref({
    type: "",
    color: 0,
    toAdd: "#000000",
  });
  const gridSize = ref(8);
  const iconType = ref({
    brush: "mdi-brush",
    fill: "mdi-format-color-fill",
  });
  const isToAdd = ref(false);
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
  const addtoLibrary = (c: string) => {
    const present = colorsLibrary.value.find((x) => {
      return x === c;
    });
    if (!present) {
      colorsLibrary.value.push(c);
      currentBrush.value.color = colorsLibrary.value.length - 1;
    }
  };
  const currentToPaint = computed(() => {
    return colorsLibrary.value[currentBrush.value.color];
  });

  return {
    currentBrush,
    colorsLibrary,
    addtoLibrary,
    changeColor,
    currentToPaint,
    isToAdd,
    iconType,
    gridSize,
  };
});
