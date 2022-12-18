<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/main/HeaderDumb.vue";
import Footer from "./components/main/FooterDumb.vue";
import Menu from "./components/main/MenuSmart.vue";
import AlertDefaultVue from "./components/alerts/AlertDefault.vue";
</script>

<template>
  <v-app>
    <Menu />
    <v-main class="px-1 md:px-8 py-5 align-center w-full">
      <Header />
      <AlertDefaultVue :error="'duplicated'"></AlertDefaultVue>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>
