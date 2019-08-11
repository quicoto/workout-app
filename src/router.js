import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/styleguide',
      name: 'styleguide',
      component: () => import(/* webpackChunkName: "about" */ './views/Styleguide.vue'),
    },
    {
      path: '/profile/:user_id',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
    },
  ],
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
