<script setup lang="ts">
import { usePaintStore } from "@/stores/paintStore";
import { Shadow, drawFigure } from "@/stores/methods/presetsLibrary";
import { storeToRefs } from "pinia";
const paintStore = usePaintStore();
const { gridSize } = storeToRefs(paintStore);
const drawShadow = () => {
  gridSize.value = 30;
  drawFigure(Shadow);
};
</script>

<template>
  <div>
    <v-btn
      width="100%"
      @click="drawShadow"
      prepend-icon="mdi-plus"
      variant="elevated"
      color="black"
    >
      Shadow
    </v-btn>
  </div>
</template>
