<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { usePaintStore } from "@/stores/paintStore";
const paintStore = usePaintStore();
const { currentBrush } = storeToRefs(paintStore);

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
