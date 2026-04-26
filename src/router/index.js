import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Speisekarte from "../pages/Speisekarte.vue";
import Kontakt from "../pages/Kontakt.vue";
import Impressum from "../pages/Impressum.vue";
import Datenschutz from "../pages/Datenschutz.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/speisekarte", component: Speisekarte },
  { path: "/kontakt", component: Kontakt },
  { path: "/impressum", component: Impressum },
  { path: "/datenschutz", component: Datenschutz },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
