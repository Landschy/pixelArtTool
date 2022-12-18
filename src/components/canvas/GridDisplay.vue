<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { useDrawingStore } from "../../stores/paintStore";
import { storeToRefs } from "pinia";
import type { Color } from "csstype";
const squareToPaint: Ref<HTMLElement | null> = ref(null);
const highlightSquare = (id: number) => {
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
const paintSquare = (id: number, color: Color) => {
  //Actually paint 100
  const elId = `gridElement${id}`;
  const el = document.getElementById(elId);
  if (el) {
    el.classList.add("painted");
    el.style.backgroundColor = color;
  }
};
const resetSquare = (id: number) => {
  if (squareToPaint.value) {
    if (!squareToPaint.value.classList.contains("painted")) {
      squareToPaint.value.style.backgroundColor = "transparent";
    }
  }
};
const drawingStore = useDrawingStore();
const { gridSize, currentToPaint } = storeToRefs(drawingStore);
const { resetGrid } = drawingStore;
</script>
<template>
  <v-btn @click="resetGrid"> RESET</v-btn>
  <div class="gridMain w-full h-full mx-auto border-2 border-black">
    <div
      class="border-[1px]"
      v-for="i in gridSize * gridSize"
      :key="i"
      :id="`gridElement${i}`"
      @mouseover="() => highlightSquare(i)"
      @mouseleave="() => resetSquare(i)"
      @click="() => paintSquare(i, currentToPaint)"
    ></div>
  </div>
</template>
<style lang="css" scoped>
.gridMain {
  display: grid;
  max-height: 90vw;
  max-width: 90vw;
  grid-template-columns: repeat(v-bind(gridSize), 1fr);
  grid-template-rows: repeat(v-bind(gridSize), 1fr);
}
</style>
