<script setup lang="ts">
import { useDrawingStore } from "../../stores/counter";
import { storeToRefs } from "pinia";
import ColorLibrary from "./ColorLibrary.vue";

const drawingStore = useDrawingStore();
const { currentBrush, isToAdd } = storeToRefs(drawingStore);
</script>
<template>
  <div v-if="isToAdd" class="text-center align-middle justify-center">
    <v-color-picker v-model="currentBrush.toAdd" hide-inputs></v-color-picker>
  </div>
</template>
