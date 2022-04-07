import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import StorePage from '@/pages/StorePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/store',
    name: 'store',
    component: StorePage,
  },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: HomePage,
  // },
  // {
  //   path: '/checkout',
  //   name: 'checkout',
  //   component: HomePage,
  // },
  // {
  //   path: '/thankyou',
  //   name: 'thank-you',
  //   component: HomePage,
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
