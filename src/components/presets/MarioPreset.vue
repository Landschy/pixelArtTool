<script setup lang="ts">
import type { Color } from "csstype";
import { nextTick } from "vue";
import { usePaintStore } from "@/stores/paintStore";
import { paintSquare } from "@/stores/methods/canvasMethods";
import { resetGrid } from "@/stores/methods/paintMethods";
import { storeToRefs } from "pinia";
const paintStore = usePaintStore();

const { gridSize } = storeToRefs(paintStore);
const newSize = 22;

const rangePaint = (start: number, size: number, color: Color) => {
  for (let i = 0; i <= size; i++) {
    paintSquare(start + i, color);
  }
};

const drawMario = () => {
  gridSize.value = newSize;
  resetGrid();
  nextTick(() => {
    paintPattern();
  });
};

const paintPattern = async () => {
  const skin = "#ffe370";
  const black = "black";
  const red = "red";
  const blue = "blue";
  const brown = "brown";
  const yellow = "yellow";

  rangePaint(74, 6, red);
  rangePaint(95, 10, red);
  rangePaint(117, 3, brown);
  rangePaint(120, 3, skin);
  rangePaint(123, 0, black);
  rangePaint(124, 0, skin);
  rangePaint(138, 0, brown);
  rangePaint(139, 0, skin);
  rangePaint(140, 0, brown);
  rangePaint(141, 3, skin);
  rangePaint(145, 0, black);
  rangePaint(146, 2, skin);
  rangePaint(160, 0, brown);
  rangePaint(161, 0, skin);
  rangePaint(162, 1, brown);
  rangePaint(164, 3, skin);
  rangePaint(168, 0, black);
  rangePaint(169, 2, skin);
  rangePaint(182, 1, brown);
  rangePaint(184, 4, skin);
  rangePaint(189, 3, black);
  rangePaint(206, 7, skin);
  rangePaint(227, 1, red);
  rangePaint(229, 0, blue);
  rangePaint(230, 3, red);
  rangePaint(248, 2, red);
  rangePaint(251, 0, blue);
  rangePaint(252, 1, red);
  rangePaint(254, 0, blue);
  rangePaint(255, 2, red);
  rangePaint(269, 3, red);
  rangePaint(273, 3, blue);
  rangePaint(277, 3, red);
  rangePaint(291, 1, skin);
  rangePaint(293, 0, red);
  rangePaint(294, 0, blue);
  rangePaint(295, 0, yellow);
  rangePaint(296, 1, blue);
  rangePaint(298, 0, yellow);
  rangePaint(299, 0, blue);
  rangePaint(300, 0, red);
  rangePaint(301, 1, skin);
  rangePaint(313, 2, skin);
  rangePaint(316, 5, blue);
  rangePaint(322, 2, skin);
  rangePaint(335, 1, skin);
  rangePaint(337, 7, blue);
  rangePaint(345, 1, skin);
  rangePaint(359, 2, blue);
  rangePaint(364, 2, blue);
  rangePaint(380, 2, brown);
  rangePaint(387, 2, brown);
  rangePaint(401, 3, brown);
  rangePaint(409, 3, brown);
};
</script>

<template>
  <div>
    <v-btn @click="drawMario" prepend-icon="mdi-plus"> SET MARIO </v-btn>
  </div>
</template>
