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
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue'),
    },
    {
      path: '/styleguide',
      name: 'styleguide',
      component: () => import(/* webpackChunkName: "styleguide" */ './views/Styleguide.vue'),
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: () => import(/* webpackChunkName: "excercises" */ './views/Exercises.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/SearchResults.vue'),
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
