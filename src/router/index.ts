import { createRouter, createWebHistory } from "vue-router";
import PaintPage from "../views/PaintPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PaintPage,
    },
  ],
});

export default router;
