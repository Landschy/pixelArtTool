<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/main/HeaderDumb.vue";
import Footer from "./components/main/FooterDumb.vue";
import Menu from "./components/main/MenuSmart.vue";
import AlertDefault from "./components/alerts/AlertDefault.vue";
document.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);
</script>

<template>
  <v-app>
    <AlertDefault />
    <Menu />
    <v-main class="px-1 md:px-8 py-5 align-center w-full grid">
      <Header />
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>
