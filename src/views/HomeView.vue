<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useDrawingStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import GridDisplay from "@/components/canvas/GridDisplay.vue";

const drawingStore = useDrawingStore();
const toScreenShot: any = ref(null);
const { canvasRef } = storeToRefs(drawingStore);
onMounted(() => {
  canvasRef.value = toScreenShot.value;
});
</script>
<template>
  <main>
    <div
      class="max-w-[90vw] mx-auto max-h-[90vw] w-[30rem] h-[30rem] 2xl:w-[50rem] 2xl:h-[50rem] text-center"
    >
      <div ref="toScreenShot" class="w-full h-full">
        <GridDisplay />
      </div>
    </div>
  </main>
</template>
