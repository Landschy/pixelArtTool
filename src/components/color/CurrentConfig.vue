<script lang="ts" setup>
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import ColorBrush from "./ColorBrush.vue";
import ColorLibrary from "./ColorLibrary.vue";

const paintStore = usePaintStore();
const { isMenuVisible, currentDrawer } = storeToRefs(paintStore);
const handeOnButtonSettings = () => {
  isMenuVisible.value = true;
  currentDrawer.value = [0, 1];
};
</script>
<template>
  <div
    class="lg:absolute top-10 w-full sm:w-[20rem] left-10 mt-8 top-0 pa-2 grid grid-cols-1 pa-5"
  >
    <div
      class="mb-1 pa-0 rounded-md border-2 drop-shadow-lg opacity-100 text-black pa-5"
    >
      <h2 class="uppercase font-bold text-xl">Quick Selection</h2>
      <div class="pa-0">
        <h3 class="mb-1 text-grey text-lg">Colors</h3>
        <div class="mb-5 pa-0 text-left">
          <ColorLibrary class="my-2" />
          <v-divider></v-divider>
        </div>
        <h3 class="mb-1 text-grey text-lg">Tools</h3>
        <div class="mb-5 pa-0 text-left">
          <ColorBrush />
          <v-divider></v-divider>
        </div>
      </div>
    </div>

    <v-btn variant="elevated" color="success" @click="handeOnButtonSettings">
      More Settings
    </v-btn>
  </div>
</template>
