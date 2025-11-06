import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Butikker",
      name: "Butikker",
      component: () => import("../views/ButikkerView.vue"),
    },
    {
      path: "/Aabningstider",
      name: "Aabningstider",
      component: () => import("../views/Aabningstiderview.vue"),
    },
  ],
});

export default router;
