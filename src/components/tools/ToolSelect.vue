<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDrawingStore } from "@/stores/counter";
const drawingStore = useDrawingStore();
const { currentBrush } = storeToRefs(drawingStore);

const props = defineProps<{
  icon: string;
  val: "brush" | "fill";
}>();
</script>
<template>
  <v-btn
    @click="currentBrush.type = props.val"
    :variant="currentBrush.type == props.val ? 'outlined' : 'plain'"
  >
    {{ props.val }}
    <v-icon :icon="props.icon" />
  </v-btn>
</template>
