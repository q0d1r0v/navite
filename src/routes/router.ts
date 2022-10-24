import { createRouter, createWebHistory } from 'vue-router';

// pages
import homePage from '~/pages/home-page.vue';

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
  ],
});

export default router;
