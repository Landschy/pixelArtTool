<script lang="ts" setup>
import { ref } from "vue";
import GridSize from "../canvas/GridSize.vue";
import ColorActivator from "../color/ColorActivator.vue";
import ColorBrush from "../color/ColorBrush.vue";
import ColorLibrary from "../color/ColorLibrary.vue";
import ColorLibrarySwatch from "../color/ColorLibrarySwatch.vue";
import ColorPicker from "../color/ColorPicker.vue";
import DownloadForm from "../download/DownloadForm.vue";
const icon = ref(
  "https://www.dlf.pt/dfpng/middlepng/597-5970982_pokeball-pixel-png-transparent-png.png"
);
const currentDrawer = ref([0, 1, 2]);
</script>
<template>
  <v-navigation-drawer location="right" width="280" class="py-2">
    <v-list-item class="mb-5">
      <template #append>
        Pixel Art Tool
        <v-avatar :image="icon"></v-avatar>
      </template>
    </v-list-item>
    <v-divider></v-divider>
    <v-expansion-panels multiple v-model="currentDrawer" accordion>
      <v-expansion-panel hide-actions elevation="0">
        <template #title>
          <div>Tools</div>
        </template>
        <template #text>
          <h3 class="mb-1 text-lg">Grid Size</h3>
          <GridSize />
          <v-divider class="mb-5" />
          <h3 class="mb-2 text-lg">Quick Access</h3>
          <ColorLibrary class="my-2" />
          <v-divider class="mb-5" />
          <h3 class="mb-2 text-lg">Brush</h3>
          <ColorBrush class="my-2" />
          <v-divider class="mb-2" />
        </template>
      </v-expansion-panel>
      <v-expansion-panel hide-actions elevation="0">
        <template #title> Library </template>
        <template #text>
          <ColorLibrarySwatch />
          <ColorActivator class="mt-5 mb-1" />
          <ColorPicker />
        </template>
      </v-expansion-panel>
      <v-expansion-panel hide-actions elevation="0">
        <template #title> DOWNLOAD </template>
        <template #text>
          <DownloadForm />
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>
