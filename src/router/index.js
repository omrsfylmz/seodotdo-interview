import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: () => import("@/views/Home"),
  },
  {
    name: "notFound",
    path: "/:catchAll(.*)",
    component: () => import("@/views/PageNotFound"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
