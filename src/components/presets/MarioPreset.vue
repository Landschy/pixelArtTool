<script setup lang="ts">
import { Mario, drawFigure } from "@/stores/methods/presetsLibrary";
import { storeToRefs } from "pinia";

import { usePaintStore } from "@/stores/paintStore";

const paintStore = usePaintStore();
const { gridSize } = storeToRefs(paintStore);
const drawMario = () => {
  gridSize.value = 22;
  drawFigure(Mario);
};
</script>

<template>
  <div>
    <v-btn
      width="100%"
      @click="drawMario"
      prepend-icon="mdi-plus"
      variant="elevated"
      color="red"
    >
      MARIO
    </v-btn>
  </div>
</template>
