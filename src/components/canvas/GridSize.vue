<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { usePaintStore } from "@/stores/paintStore";

const paintStore = usePaintStore();
const { gridSize } = storeToRefs(paintStore);
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
