<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
  msg: string;
}>();

const { msg: message } = toRefs(props);
</script>

<template>
  <div class="greetings">
    <h1 class="rounded-md">{{ message }}</h1>
  </div>
</template>

<style scoped></style>
