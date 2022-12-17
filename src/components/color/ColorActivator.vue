<script lang="ts" setup>
import { useDrawingStore } from "../../stores/counter";
import { storeToRefs } from "pinia";

const drawingStore = useDrawingStore();
const { currentBrush, isToAdd } = storeToRefs(drawingStore);
const addtoLibrary = drawingStore.addtoLibrary;
</script>

<template>
  <div>
    <v-btn
      v-if="isToAdd"
      variant="plain"
      @click="() => addtoLibrary(currentBrush.toAdd)"
    >
      Add Color
    </v-btn>
    <v-btn
      :color="!isToAdd ? 'primary' : 'error'"
      variant="elevated"
      @click="isToAdd = !isToAdd"
    >
      <span v-if="!isToAdd">New Color</span>
      <v-icon size="28" v-else icon="mdi-close" />
    </v-btn>
  </div>
</template>
