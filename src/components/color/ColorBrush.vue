<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePaintStore } from "@/stores/paintStore";
import ToolSelect from "../tools/ToolSelect.vue";

const paintStore = usePaintStore();
const { iconType } = storeToRefs(paintStore);
</script>
<template>
  <div>
    <ToolSelect :icon="iconType.brush" val="brush" />
  </div>
</template>
