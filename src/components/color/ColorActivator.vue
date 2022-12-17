<script lang="ts" setup>
import { useDrawingStore } from "../../stores/counter";
import { storeToRefs } from "pinia";

const drawingStore = useDrawingStore();
const { currentBrush, isToAdd } = storeToRefs(drawingStore);
const addtoLibrary = drawingStore.addtoLibrary;
</script>

<template>
  <div class="grid grid-cols-2">
    <v-btn
      v-if="isToAdd"
      :color="'success'"
      variant="elevated"
      @click="() => addtoLibrary(currentBrush.toAdd)"
    >
      <span>Add</span>
      <v-icon size="28" icon="mdi-plus" />
    </v-btn>
    <v-btn
      :color="!isToAdd ? 'primary' : 'error'"
      :variant="!isToAdd ? 'tonal' : 'elevated'"
      @click="isToAdd = !isToAdd"
    >
      <span v-if="!isToAdd">Add New</span>
      <div v-else>
        <span>Close</span>
        <v-icon size="28" icon="mdi-close" />
      </div>
    </v-btn>
  </div>
</template>
