import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stored-countries",
    name: "Stored",
    component: () =>
      import(
        /* webpackChunkName: "StoredCountries" */ "@/views/StoredCountries.vue"
      ),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () =>
      import(
        /* webpackChunkName: "CountryDetail" */ "@/views/CountryDetail.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
