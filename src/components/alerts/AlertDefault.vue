<script lang="ts" setup>
import { computed } from "vue";
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";

const paintStore = usePaintStore();
const { currentAlert } = storeToRefs(paintStore);
const color = computed(() => {
  return currentAlert.value.color;
});
</script>

<template>
  <div
    v-if="currentAlert.name != ''"
    class="alertColor absolute top-0 right-0 text-white grid grid-cols-2 transition-1 rounded-sm w-full sm:w-[400px] z-[1050] h-[100px] drop-shadow-lg align-middle py-3 px-5"
  >
    <slot name="code">
      <div class="text-sm">
        <v-icon :icon="currentAlert.icon"></v-icon>
        {{ currentAlert.name ? currentAlert.name + "!" : "Code" }}
      </div>
    </slot>
    <slot name="text">
      <div class="text-md text-center col-span-2">
        {{ currentAlert.text ? currentAlert.text : "This is the description" }}
      </div>
    </slot>
  </div>
</template>
<style lang="css">
.alertColor {
  background-color: v-bind(color);
  background: v-bind(color);
}
</style>
