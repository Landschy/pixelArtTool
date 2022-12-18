<script setup lang="ts">
import { usePaintStore } from "../../stores/paintStore";
import { storeToRefs } from "pinia";

const paintStore = usePaintStore();
const { gridSize, currentToPaint } = storeToRefs(paintStore);
const { highlightSquare, paintSquare, resetSquare } = paintStore;
</script>
<template>
  <div
    class="gridMain w-full h-full mx-auto my-auto border-2 border-black hover:cursor-pointer bg-white"
  >
    <div
      class="border-[1px]"
      v-for="i in gridSize * gridSize"
      :key="i"
      :id="`gridElement${i}`"
      @mouseover="() => highlightSquare(i)"
      @mouseleave="resetSquare"
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
