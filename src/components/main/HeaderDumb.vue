<script setup lang="ts">
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import TitleSoftware from "./TitleSoftware.vue";

const paintStore = usePaintStore();
const { isMenuVisible } = storeToRefs(paintStore);
</script>
<template>
  <div
    class="absolute top-0 left-0 h-[60px] w-full grid grid-cols-3 sm:grid-cols-12 text-center drop-shadow-lg border-b-[1px]"
  >
    <TitleSoftware class="col-span-2 sm:col-span-11 text-left ml-10 mt-2" />
    <v-btn variant="text" @click="isMenuVisible = true" height="100%">
      <v-icon icon="mdi-menu" class="text-right" size="30"></v-icon>
    </v-btn>
  </div>
</template>
