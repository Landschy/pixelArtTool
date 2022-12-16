import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDrawingStore = defineStore("Drawing", () => {
  const active = ref("red");
  const color = ref({ id: "1", value: "green" });
  const colors = ref([]);
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const increment = () => {
    count.value++;
  };
  return {
    count,
    doubleCount,
    increment,
  };
});
