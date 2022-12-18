<script lang="ts" setup>
import { ref } from "vue";

const icon = ref(
  "https://www.dlf.pt/dfpng/middlepng/597-5970982_pokeball-pixel-png-transparent-png.png"
);
</script>
<template>
  <div>
    Pixel Art
    <v-avatar :image="icon"></v-avatar>
  </div>
</template>
