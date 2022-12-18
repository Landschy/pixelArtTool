<script lang="ts" setup>
import { useDrawingStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";

const drawingStore = useDrawingStore();
const { currentAlert } = storeToRefs(drawingStore);

const props = defineProps<{
  error: string;
}>();
</script>

<template>
  <div
    v-if="props.error == currentAlert.name"
    class="transition-1 rounded-md bg-red w-40 h-10 drop-shadow-lg"
  >
    <slot name="title"> </slot>
    <slot name="code">
      {{ currentAlert }}
    </slot>
    <slot name="text"> </slot>
  </div>
</template>
