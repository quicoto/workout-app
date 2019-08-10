import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
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
  ],
});
