<script setup lang="ts">
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";

const paintStore = usePaintStore();
const { isMenuVisible } = storeToRefs(paintStore);
</script>
<template>
  <nav
    class="absolute top-0 left-0 h-[60px] w-full text-right drop-shadow-lg border-b-[1px]"
  >
    <v-btn variant="text" @click="isMenuVisible = true" height="100%">
      <v-icon icon="mdi-menu" class="text-right" size="30"></v-icon>
    </v-btn>
  </nav>
</template>
