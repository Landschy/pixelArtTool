<script setup lang="ts">
import { usePaintStore } from "@/stores/paintStore";
import { Sonic, drawFigure } from "@/stores/methods/presetsLibrary";
import { storeToRefs } from "pinia";
const paintStore = usePaintStore();
const { gridSize } = storeToRefs(paintStore);
const drawSonic = () => {
  gridSize.value = 28;
  drawFigure(Sonic);
};
</script>

<template>
  <div>
    <v-btn
      width="100%"
      @click="drawSonic"
      prepend-icon="mdi-plus"
      variant="elevated"
      color="blue"
    >
      SONIC
    </v-btn>
  </div>
</template>
