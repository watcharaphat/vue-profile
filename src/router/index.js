import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/components/Profile';
import ContentApp from '@/components/ContentApp';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Profile,
    },
    {
      path: '/content/',
      component: ContentApp,
    },
  ],
});
