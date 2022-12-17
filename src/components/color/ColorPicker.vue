<script setup lang="ts">
import { useDrawingStore } from "../../stores/counter";
import { storeToRefs } from "pinia";

const drawingStore = useDrawingStore();
const { currentBrush, isToAdd } = storeToRefs(drawingStore);
</script>
<template>
  <div v-if="isToAdd" class="text-center align-middle justify-center w-full">
    <v-color-picker v-model="currentBrush.toAdd" hide-inputs></v-color-picker>
  </div>
</template>
