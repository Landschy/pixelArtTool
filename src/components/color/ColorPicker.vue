<script setup lang="ts">
import { usePaintStore } from "../../stores/paintStore";
import { storeToRefs } from "pinia";

const paintStore = usePaintStore();
const { currentBrush, isToAdd } = storeToRefs(paintStore);
</script>
<template>
  <div v-if="isToAdd" class="text-center align-middle justify-center w-full">
    <v-color-picker
      v-model="currentBrush.toAdd"
      :modes="['hexa']"
    ></v-color-picker>
  </div>
</template>
