<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDrawingStore } from "@/stores/counter";

const drawingStore = useDrawingStore();
const { currentBrush } = storeToRefs(drawingStore);

const props = defineProps<{
  icon: string;
  val: "brush" | "fill";
}>();

const { val } = props;
</script>
<template>
  <v-btn
    @click="currentBrush.type = val"
    :variant="currentBrush.type == val ? 'outlined' : 'plain'"
  >
    {{ val }}
    <v-icon :icon="icon" />
  </v-btn>
</template>
