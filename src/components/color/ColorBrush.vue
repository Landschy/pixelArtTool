<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePaintStore } from "@/stores/paintStore";
import ToolSelect from "../tools/ToolSelect.vue";

const paintStore = usePaintStore();
const { iconType } = storeToRefs(paintStore);
</script>
<template>
  <div class="py-2">
    <ToolSelect :icon="iconType.eraser" val="eraser" />
    <ToolSelect :icon="iconType.brush" val="brush" />
  </div>
</template>
