<script setup lang="ts">
import { useDrawingStore } from "../../stores/paintStore";
import { storeToRefs } from "pinia";
import ColorItem from "./ColorItem.vue";

const drawingStore = useDrawingStore();
const { colorsLibrary, currentBrush } = storeToRefs(drawingStore);
</script>

<template>
  <div>
    <v-sheet
      elevation="0"
      v-if="colorsLibrary.length > 0"
      class="mx-auto my-auto bg-transparent"
      :max-width="'100%'"
    >
      <v-slide-group
        v-model="currentBrush.color"
        selected-class="bg-success"
        show-arrows
        center-active
      >
        <v-slide-group-item
          v-for="(color, idx) in colorsLibrary"
          :key="idx"
          v-slot="{ toggle }"
        >
          <ColorItem
            :color="color"
            @click="toggle"
            :idx="idx"
            :currentBrushColor="currentBrush.color"
          />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
