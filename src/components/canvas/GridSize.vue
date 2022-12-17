<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDrawingStore } from "@/stores/counter";

const drawingStore = useDrawingStore();
const { gridSize } = storeToRefs(drawingStore);
</script>
<template>
  <v-slider
    v-model="gridSize"
    :min="8"
    :max="64"
    :step="2"
    thumb-label
  ></v-slider>
</template>
