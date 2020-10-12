import { createRouter, createWebHistory } from "vue-router";
import Page from "../views/Page.vue";
import User from "../views/User.vue";
import Tag from "../views/Tag.vue";

const routes = [
  {
    path: "/",
    name: "Page",
    component: Page
  },
  {
    path: "/user/:userId",
    name: "User",
    component: User
  },
  {
    path: "/tag/:tagId",
    name: "Tag",
    component: Tag
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
