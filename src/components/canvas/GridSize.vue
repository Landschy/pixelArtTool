<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDrawingStore } from "@/stores/paintStore";

const drawingStore = useDrawingStore();
const { gridSize } = storeToRefs(drawingStore);
</script>
<template>
  <div>
    <v-slider
      v-model="gridSize"
      :min="8"
      :max="32"
      :step="2"
      thumb-label
    ></v-slider>
    Current Size: {{ gridSize }} x {{ gridSize }}
  </div>
</template>
