<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/functional/HeaderDumb.vue";
import Footer from "./components/functional/FooterDumb.vue";
import Menu from "./components/functional/MenuSmart.vue";
</script>

<template>
  <v-app>
    <Menu />
    <v-main class="px-1 md:px-8 py-5 align-center w-full">
      <Header />
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>
