import { createRouter, createWebHistory } from 'vue-router';

// pages
import homePage from '~/pages/home-page.vue';
import notFoundPage from '../pages/not-found-page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'parent',
      children: [
        {
          path: '/',
          name: 'home',
          component: homePage,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFoundPage",
      component: notFoundPage
    }
  ],
});

export default router;
