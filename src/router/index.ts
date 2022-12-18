import { createRouter, createWebHistory } from "vue-router";
import Paint from "../views/Paint.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Paint,
    },
  ],
});

export default router;
