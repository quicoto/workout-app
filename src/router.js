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
      component: () => import(/* webpackChunkName: "about" */ './views/Styleguide.vue'),
    },
  ],
});
