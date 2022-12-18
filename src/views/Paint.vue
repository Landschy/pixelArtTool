<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import GridDisplay from "@/components/canvas/GridDisplay.vue";
import CurrentConfig from "@/components/color/CurrentConfig.vue";

const paintStore = usePaintStore();
const toScreenShot: any = ref(null);
const { canvasRef, currentDrawer, isMenuVisible } = storeToRefs(paintStore);
const handleOnButtonDownload = () => {
  currentDrawer.value = [2];
  isMenuVisible.value = true;
};
onMounted(() => {
  canvasRef.value = toScreenShot.value;
});
</script>
<template>
  <main>
    <CurrentConfig />
    <div
      class="max-w-[90vw] mx-auto max-h-[90vw] w-[30rem] h-[30rem] 2xl:w-[45rem] 2xl:h-[45rem] text-center"
    >
      <div ref="toScreenShot" class="w-full h-full">
        <GridDisplay />
      </div>
      You can even
      <v-btn @click="handleOnButtonDownload"> download </v-btn>
      it!
    </div>
  </main>
</template>
