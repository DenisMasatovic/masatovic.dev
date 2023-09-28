import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/LandingPage/LandingPage.vue"),
  },
  {
    path: "/workspace",
    name: "Workspace",
    component: () => import("@/components/Workspace/MyWorkspace.vue"),
  },
  {
    path: "/projekte",
    name: "Projekte",
    component: () => import("@/components/Projects/ProjectsList.vue"),
  },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
