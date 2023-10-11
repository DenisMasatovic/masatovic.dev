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
  {
    path: "/projekte/:id",
    name: "project-details",
    component: () => import("@/components/Projects/ProjectDetails.vue"),
  },
  {
    path: "/techstack",
    name: "TechStack",
    component: () => import("@/components/TechStack/TechStack.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    component: () => import("@/components/Profile/ProfileWrapper.vue"),
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: () => import("@/components/Contact/ContactWrapper.vue"),
  },
  {
    path: "/partner",
    name: "Partner",
    component: () => import("@/components/Partners/PartnersWrapper.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
