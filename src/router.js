import Vue from 'vue';
import firebase from 'firebase/app';
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
      meta: {
        title: 'Thorkout',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue'),
      meta: {
        title: 'Admin',
      },
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: () => import(/* webpackChunkName: "exercises" */ './views/Exercises.vue'),
      meta: {
        title: 'Exercises',
      },
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: () => import(/* webpackChunkName: "workouts" */ './views/Workouts.vue'),
      meta: {
        title: 'Workouts',
      },
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/SearchResults.vue'),
      meta: {
        title: 'Search',
      },
    },
    {
      path: '/profile/:user_id',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
      meta: {
        title: 'Profile',
      },
    },
    {
      path: '/start/:workout_id',
      name: 'start',
      component: () => import(/* webpackChunkName: "start" */ './views/Start.vue'),
      meta: {
        title: 'Start',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Is the user logged in?
  if (to.name !== 'login' && !firebase.auth().currentUser) {
    // eslint-disable-next-line no-console
    console.log('redirecting....');

    // No, redirect to login
    next('login');
  } else {
    next();
  }
});

router.afterEach((to) => {
  document.title = `${to.meta.title} - Workout like Thor`;

  window.scrollTo(0, 0);
});

export default router;
