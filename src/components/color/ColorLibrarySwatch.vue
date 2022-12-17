<script setup lang="ts">
import { useDrawingStore } from "../../stores/counter";
import { storeToRefs } from "pinia";
import ColorItem from "./ColorItem.vue";

const drawingStore = useDrawingStore();
const { colorsLibrary, currentBrush } = storeToRefs(drawingStore);
const changeColor = drawingStore.changeColor;
</script>

<template>
  <div class="grid grid-cols-3 md:grid-cols-6 gap-1">
    <div
      v-for="(color, idx) in colorsLibrary"
      :key="idx"
      class="hover:cursor-pointer"
    >
      <ColorItem
        :color="color"
        :idx="idx"
        :current-brush-color="currentBrush.color"
        @click="() => changeColor(idx)"
      />
    </div>
  </div>
</template>
