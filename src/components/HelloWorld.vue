<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
  msg: string;
}>();

const { msg: message } = toRefs(props);
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ message }}</h1>
    <h3>
      You’ve successfully created a project with TEST {{ message }}
      <a href="https://vuejs.org/" target="_blank">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped></style>
