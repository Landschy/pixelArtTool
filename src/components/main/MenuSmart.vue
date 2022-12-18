<script lang="ts" setup>
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

import GridReset from "../canvas/GridReset.vue";
import GridSliderSelect from "../canvas/GridSliderSelect.vue";
import ColorActivator from "../color/ColorActivator.vue";
import ColorBrush from "../color/ColorBrush.vue";
import ColorLibrary from "../color/ColorLibrary.vue";
import ColorLibrarySwatch from "../color/ColorLibrarySwatch.vue";
import ColorPicker from "../color/ColorPicker.vue";
import DownloadForm from "../download/DownloadForm.vue";
import TitleSoftware from "./TitleSoftware.vue";

const paintStore = usePaintStore();
const { isMenuVisible, currentDrawer } = storeToRefs(paintStore);
</script>
<template>
  <div>
    <v-navigation-drawer
      v-model="isMenuVisible"
      location="right"
      width="400"
      class="py-2 z-40 h-screen"
      permanent
      touchless
    >
      <div
        class="absolute grid grid-cols-2 z-[1050] bg-white h-[3em] w-full text-center"
      >
        <TitleSoftware />
        <v-btn
          @click="isMenuVisible = false"
          variant="text"
          class="w-full h-full col-start-3 col-end-3 mr-6"
          size="40"
        >
          <v-icon size="30" icon="mdi-close"></v-icon>
        </v-btn>
      </div>
      <v-list-item class="mb-5 absolute top-0">
        <template #append> </template>
        <template #prepend> </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-expansion-panels multiple v-model="currentDrawer" variant="accordion">
        <v-expansion-panel elevation="0">
          <template #title>
            <div>Tools</div>
          </template>
          <template #text>
            <h3 class="mb-1 text-lg">Grid Size</h3>
            <GridSliderSelect />
            <GridReset />
            <v-divider class="mb-5" />
            <h3 class="mb-2 text-lg">Quick Access</h3>
            <ColorLibrary class="my-2" />
            <v-divider class="mb-5" />
            <h3 class="mb-2 text-lg">Brush</h3>
            <ColorBrush class="my-2" />
            <v-divider class="mb-2" />
          </template>
        </v-expansion-panel>
        <v-expansion-panel elevation="0">
          <template #title> Library </template>
          <template #text>
            <ColorLibrarySwatch />
            <ColorActivator class="mt-5 mb-1" />
            <ColorPicker />
          </template>
        </v-expansion-panel>
        <v-expansion-panel elevation="0">
          <template #title> Download </template>
          <template #text>
            <DownloadForm />
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </div>
</template>
