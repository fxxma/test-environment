import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/Upload",
      name: "Upload",
      component: () => import("../views/Upload.vue"),
    },
  ],
});

export default router;
