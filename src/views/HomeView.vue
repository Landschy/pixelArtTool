<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import GridDisplay from "@/components/canvas/GridDisplay.vue";

const paintStore = usePaintStore();
const toScreenShot: any = ref(null);
const { canvasRef } = storeToRefs(paintStore);
onMounted(() => {
  canvasRef.value = toScreenShot.value;
});
</script>
<template>
  <main>
    <div
      class="max-w-[90vw] mx-auto max-h-[90vw] w-[30rem] h-[30rem] 2xl:w-[45rem] 2xl:h-[45rem] text-center"
    >
      <div ref="toScreenShot" class="w-full h-full">
        <GridDisplay />
      </div>
    </div>
  </main>
</template>
