<script setup lang="ts">
import { useDrawingStore } from "../../stores/counter";
import { storeToRefs } from "pinia";
const highlightSquare = (e: MouseEvent) => {
  //HighLight opacity 80
  console.log("HIGHLIGH", e.target);
};
const paintSquare = (e: MouseEvent) => {
  //Actually paint 100
  console.log("PAINT", e.target);
};
const drawingStore = useDrawingStore();
const { gridSize } = storeToRefs(drawingStore);
</script>
<template>
  <div class="gridMain mx-auto border-2 border-black">
    <div
      class="border-[1px]"
      v-for="i in gridSize * gridSize"
      :key="i"
      @mouseover="highlightSquare"
      @click="paintSquare"
    ></div>
  </div>
</template>
<style lang="css" scoped>
.gridMain {
  display: grid;
  max-height: 90vw;
  max-width: 90vw;
  height: 50rem;
  width: 50rem;
  grid-template-columns: repeat(v-bind(gridSize), 1fr);
  grid-template-rows: repeat(v-bind(gridSize), 1fr);
}
</style>
