import Vue from 'vue';
/* eslint-disable */
import VueRouter from 'vue-router';
import lyTab from 'ly-tab';
import home from './home';
import tree from './tree.js';

Vue.use(VueRouter);
Vue.use(lyTab);

const routes = [
  home,
  {
    path: '/house',
    name: 'house',
    component: () => {
      return import('../views/house.vue');
    }
  },
  {
    path: '/river',
    name: 'river',
    component: () => {
      return import('../views/river.vue');
    }
  },
  tree,
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  }
];

const router = new VueRouter({ routes, scrollBehavior });
router.beforeEach((to, from, next) => {
  // console.log('beforeEach----------- start execute');
  // if (to.meta.title) document.title = to.meta.title;
  //  在跳转路由时 总是让页面回到顶部
  // console.log('进入的路由对象');
  // console.log(to);
  // console.log(to.matched[0].path);
  // console.log('离开的路由对象');
  // console.log(from);

  document.documentElement.scrollTop = 0;
  next();
});
const scrollBehavior = function(to, from, savedPosition) {
  // return 期望滚动到哪个的位置

  return { x: 1000, y: -1000 };
};
router.beforeResolve((to, from, next) => {
  // console.log('beforeResolve----------- start execute');
  next();
});
router.afterEach((to, from) => {
  // console.log('afterEach 全局后置钩子');
});
router.onError(callback => {
  // 2.4.0新增 并不常用，了解一下就可以了
  // console.log(callback, 'callback');
});
export default router;
