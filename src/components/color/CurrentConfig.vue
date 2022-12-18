<script lang="ts" setup>
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import ColorItem from "./ColorItem.vue";
import ColorLibrary from "./ColorLibrary.vue";

const paintStore = usePaintStore();
const { currentToPaint, currentBrush, isMenuVisible } = storeToRefs(paintStore);
</script>
<template>
  <div
    class="sm:absolute top-10 w-full sm:w-[15rem] left-10 mt-8 top-0 pa-2 grid grid-cols-1 pa-5"
  >
    <div class="mb-5 pa-0 text-left">
      <ColorLibrary class="my-2" />
      <v-divider></v-divider>
    </div>
    <div
      class="mb-1 pa-0 rounded-md border-2 drop-shadow-lg opacity-100 text-black pa-5"
    >
      <h2 class="uppercase font-bold">View ONLY</h2>
      <div class="pa-0">
        <h3 class="mb-1 text-lg">Current Color</h3>
        <ColorItem
          :color="currentToPaint"
          :idx="50"
          :current-brush-color="currentBrush.color"
        />
        {{ currentToPaint }}
      </div>
      <v-divider color="white"></v-divider>
      <div class="pa-0">
        <h3 class="disabled mb-1 text-lg"># in Library</h3>
        {{ currentBrush.color + 1 }}
      </div>
      <v-divider color="white"></v-divider>
      <div class="pa-0">
        <h3 class="mb-1 text-lg">Tool Type</h3>
        {{ currentBrush.type }}
        <v-divider color="white"></v-divider>
      </div>
    </div>
    <v-btn variant="elevated" color="success" @click="isMenuVisible = true">
      More Settings
    </v-btn>
  </div>
</template>
