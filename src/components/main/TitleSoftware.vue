<script lang="ts" setup>
import { ref } from "vue";

const icon = ref("/bitjorge.png");
</script>
<template>
  <div>
    Pixel Art
    <v-avatar :image="icon"></v-avatar>
  </div>
</template>
