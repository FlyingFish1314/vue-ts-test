import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import localCache from "@/uitl/cache";
import { firstRoute } from "@/uitl/map-menu";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/myLogin.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main/myHome.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    console.log(!token);

    if (!token) {
      router.push("/login");
    } else {
      if (to.path === "/main" || to.path === "/main/") {
        console.log(firstRoute);
        return firstRoute?.path;
      }
    }
  }
});

export default router;
