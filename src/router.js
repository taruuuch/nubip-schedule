import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/group',
      name: 'Group',
      component: () => import('./views/Schedule.vue'),
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: () => import('./views/Schedule.vue'),
    },
    {
      path: '/api',
      name: 'Api',
      component: () => import('./views/Api.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),
    },
  ],
});
