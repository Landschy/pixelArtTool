<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDrawingStore } from "@/stores/counter";
import TheWelcome from "../components/TheWelcome.vue";
const drawingStore = useDrawingStore();
const { count } = storeToRefs(drawingStore);
console.log(count);
</script>

<template>
  <main>
    <TheWelcome />

    <div class="w-full mb-12">
      <div class="bg-[red] rounded-lg text-white">THIS IS A TEST</div>
    </div>
  </main>
</template>
