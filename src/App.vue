<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/functional/Header.vue";
import Footer from "./components/functional/Footer.vue";
import Menu from "./components/functional/Menu.vue";
</script>

<template>
  <v-app>
    <Menu />
    <v-main>
      <Header />
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>
