export default {
  path: '/tree',
  name: 'tree',
  component: () => import('../views/tree/tree.vue'),
  children: [
    {
      path: '/tree/hot',

      component: () => import('../views/tree/hot/hot')
    },
    {
      path: '/tree/food',

      component: () => import('../views/tree/food/food')
    },
    {
      path: '/tree/house',

      component: () => import('../views/tree/house/house')
    },
    {
      path: '/tree/detail',
      name: 'detail',
      component: () => import('../views/tree/detail/detail')
    },
    {
      path: '/tree/sellerpage',
      name: 'sellerpage',
      component: () => import('../views/tree/detail/sellerpage')
    },
    {
      path: '/tree/server',
      name: 'server',
      component: () => import('../views/tree/detail/server')
    },
    {
      path: '/tree/type',
      name: 'type',
      component: () => import('../views/tree/type/type')
    },
    {
      path: '/tree/baidumap',
      name: 'type',
      component: () => import('../views/tree/baidumap/baidumap')
    },
    //登录页
    {
      path: '/tree/login',
      name: 'login',
      component: () => import('../views/tree/login/login')
    },
    //
    {
      // path: '/tree/detail/:id',
      path: '/tree/customercircle',
      name: 'customercircle',
      component: () => import('../views/tree/customercircle')
    },
    // 用户页面
    {
      path: '/tree/userpage',
      name: 'userpage',
      component: () => import('../views/tree/userpage/userpage')
    },

    {
      path: '/tree',
      redirect: '/tree/hot'
    }
  ]
};
