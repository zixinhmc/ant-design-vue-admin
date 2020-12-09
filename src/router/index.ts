import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '/@/views/sys/login/Login.vue';

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: [
    {
      path: '/',
      component: Login,
    },
  ],
});

export default router;
