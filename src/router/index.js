import Vue from 'vue';
import VueRouter from 'vue-router';
import Introduction from '../views/Introduction.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Introduction,
  },
  {
    path: '/instance',
    name: 'Instance',
    component: () => import('../views/Instance.vue'),
  },
  {
    path: '/syntax',
    name: 'Syntax',
    // component: Syntax,
    component: () => import('../views/Syntax.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
