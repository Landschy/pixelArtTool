<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDrawingStore } from "@/stores/paintStore";
import ToolSelect from "../tools/ToolSelect.vue";

const drawingStore = useDrawingStore();
const { iconType } = storeToRefs(drawingStore);
</script>
<template>
  <div>
    <ToolSelect :icon="iconType.brush" val="brush" />
    <ToolSelect :icon="iconType.fill" val="fill" />
  </div>
</template>
