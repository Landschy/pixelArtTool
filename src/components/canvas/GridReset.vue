<script lang="ts" setup>
import { usePaintStore } from "@/stores/paintStore";

const paintStore = usePaintStore();
const { resetGrid } = paintStore;
</script>
<template>
  <v-btn class="my-5" @click="resetGrid" variant="elevated" color="error">
    Reset Draw
    <v-icon icon="mdi-refresh" />
  </v-btn>
</template>
