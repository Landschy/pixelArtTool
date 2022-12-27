<script setup lang="ts">
import { usePaintStore } from "../../stores/paintStore";
import {
  highlightSquare,
  paintSquare,
  resetSquare,
} from "../../stores/methods/canvasMethods";
import { storeToRefs } from "pinia";

const paintStore = usePaintStore();
const { gridSize, currentToPaint, currentBrush } = storeToRefs(paintStore);
</script>
<template>
  <div
    class="gridMain w-full h-full mx-auto my-auto hover:cursor-pointer bg-white"
    :style="{ cursor: `url(${currentBrush.type}.svg), auto` }"
  >
    <div
      v-for="i in gridSize * gridSize"
      class="border-[1px]"
      :key="i"
      :id="`gridElement${i}`"
      @click="() => paintSquare(i, currentToPaint, currentBrush.type)"
      @mouseover="() => highlightSquare(i, currentToPaint, currentBrush.type)"
      @mouseleave="resetSquare"
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
