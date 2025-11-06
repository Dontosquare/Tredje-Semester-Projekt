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
      name: "Stores",
      component: () => import("../views/StoresView.vue"),
    },
    {
      path: "/Information",
      name: "Information",
      component: () => import("../views/InformationView.vue"),
    },
  ],
});

export default router;
