<script lang="ts" setup>
import { usePaintStore } from "../../stores/paintStore";
import { storeToRefs } from "pinia";

const paintStore = usePaintStore();
const { currentBrush, isToAdd } = storeToRefs(paintStore);
const addtoLibrary = paintStore.addtoLibrary;
</script>

<template>
  <div class="grid grid-cols-8">
    <v-btn
      v-if="isToAdd"
      :color="'success'"
      variant="elevated"
      :class="!isToAdd ? '' : 'col-span-6'"
      @click="() => addtoLibrary(currentBrush.toAdd)"
    >
      <span>Add</span>
      <v-icon size="28" icon="mdi-plus" />
    </v-btn>
    <v-btn
      :class="!isToAdd ? 'col-span-8' : 'col-span-2'"
      :color="!isToAdd ? 'primary' : 'error'"
      :variant="!isToAdd ? 'tonal' : 'elevated'"
      @click="isToAdd = !isToAdd"
    >
      <span v-if="!isToAdd">Add New</span>
      <div v-else>
        <v-icon size="28" icon="mdi-close" />
      </div>
    </v-btn>
  </div>
</template>
