<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from "vue";
import { storeToRefs } from "pinia";
import { useDrawingStore } from "@/stores/counter";

const drawingStore = useDrawingStore();
const { count } = storeToRefs(drawingStore);
const colors: Ref<string[]> = ref([]);
const paintColor = ref(0);
const addtoList = (color: string) => {
  const present = colors.value.find((x) => {
    return x === color;
  });
  if (!present) {
    colors.value.push(color);
  }
};
const currentColorToPaint = computed(() => {
  return colors.value[paintColor.value];
});
</script>
<script lang="ts">
export default {
  data() {
    return {
      currentColorToAdd: "#3E764E",
      newColor: false,
      activeTool: "",
    };
  },
  computed: {
    classColor() {
      return "bg-[" + this.currentColorToAdd + "]";
    },
  },
  methods: {},
};
</script>
<template>
  <main>
    <div class="mx-1 my-2 h-24 p-2 grid grid-cols-1 md:grid-cols-3 text-center">
      <div class="grid grid-cols-1">
        <div class="grid grid-cols-2">
          <v-btn
            @click="activeTool = 'paint'"
            flat
            :variant="activeTool == 'paint' ? 'outlined' : 'plain'"
          >
            <v-icon icon="mdi-brush" />
          </v-btn>
          <v-btn
            :variant="activeTool == 'paintBLock' ? 'outlined' : 'plain'"
            flat
            @click="activeTool = 'paintBLock'"
          >
            Paint Bucket</v-btn
          >
        </div>
      </div>
      <!-- COLORS COMPONENT TO RENDER -->
      <div class="w-full grid col-span-2 grid-cols-6 md:grid-cols-8">
        <v-sheet
          elevation="0"
          v-if="colors.length > 0"
          class="mx-auto my-auto bg-transparent"
          max-width="800"
        >
          <v-slide-group
            v-model="paintColor"
            selected-class="bg-success"
            show-arrows
          >
            <v-slide-group-item
              v-for="(color, idx) in colors"
              :key="idx"
              v-slot="{ isSelected, toggle }"
            >
              <v-card
                flat
                :color="color"
                :border="isSelected ? 'red' : ''"
                class="mx-2"
                height="50"
                width="50"
                @click="toggle"
              >
                <div
                  class="h-full align-middle grid content-center justify-center"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="isSelected"
                      color="white"
                      size="28"
                      icon="mdi-check"
                      class="my-auto mx"
                    />
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
    <v-btn :elevation="2" @click="newColor = !newColor">New Color</v-btn>
    <div v-if="newColor" class="text-center align-middle justify-center">
      <div class="w-full h-full">
        <v-color-picker
          v-model="currentColorToAdd"
          hide-inputs
        ></v-color-picker>
      </div>
      <v-btn @click="() => addtoList(currentColorToAdd)">Assign</v-btn>
    </div>
    {{ currentColorToAdd }}
    {{ currentColorToPaint }}
  </main>
</template>
<style lang="css">
.currentColorToAdd {
  background-color: v-bind(currentColorToAdd);
}
</style>
