<script lang="ts" setup>
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import ColorItem from "./ColorItem.vue";

const paintStore = usePaintStore();
const { currentToPaint, currentBrush } = storeToRefs(paintStore);
</script>
<template>
  <div class="w-full sm:w-[15rem] left-10 top-60 pa-2 grid grid-cols-1 pa-5">
    <div class="mb-5 pa-0">
      <h3 class="mb-1 text-grey text-lg">Current Color</h3>
      <ColorItem
        :color="currentToPaint"
        :idx="50"
        :current-brush-color="currentBrush.color"
      />
      {{ currentToPaint }}
      <v-divider></v-divider>
    </div>
    <div class="mb-5 pa-0">
      <h3 class="mb-1 text-grey text-lg"># in Library</h3>
      {{ currentBrush.color + 1 }}
      <v-divider></v-divider>
    </div>
    <div class="mb-5 pa-0">
      <h3 class="mb-1 text-grey text-lg">Tool Type</h3>
      {{ currentBrush.type }}
      <v-divider></v-divider>
    </div>
  </div>
</template>
