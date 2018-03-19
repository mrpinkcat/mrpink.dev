import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/start';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
    },
  ],
});
