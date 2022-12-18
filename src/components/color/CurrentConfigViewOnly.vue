<script lang="ts" setup>
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";

const paintStore = usePaintStore();
const { currentBrush, currentToPaint } = storeToRefs(paintStore);
</script>

<template>
  <div>
    <div
      class="mb-1 pa-0 rounded-md border-2 drop-shadow-lg opacity-100 text-black pa-5"
    >
      <h2 class="uppercase font-bold text-xl">View ONLY</h2>
      <div class="pa-0">
        <h3 class="mb-1 text-grey text-lg">Current Color</h3>
        <ColorItem
          :color="currentToPaint"
          :idx="50"
          :current-brush-color="currentBrush.color"
        />
        {{ currentToPaint }}
      </div>
      <v-divider color="white"></v-divider>
      <div class="pa-0">
        <h3 class="disabled text-grey mb-1 text-lg">Find in Library</h3>
        {{ currentBrush.color + 1 }}
      </div>
      <v-divider color="white"></v-divider>
      <div class="pa-0">
        <h3 class="mb-1 text-grey text-lg">Tool Type</h3>
        {{ currentBrush.type }}
        <v-divider color="white"></v-divider>
      </div>
    </div>
  </div>
</template>
