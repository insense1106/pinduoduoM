export default {
  path: '/home/shop',
  component: () => {
    return import('../views/homeChildren/shop/shop');
  },
  children: [
    {
      path: '/home/shop/login',
      component: () => {
        return import('../views/homeChildren/shop/login');
      }
    },
    {
      path: '/home/shop/goodslist/:category',
      component: () => {
        return import('../views/homeChildren/shop/goodslist/goodslist');
      }
    },
    {
      path: '/home/shop/detail',
      component: () => {
        return import('../views/homeChildren/shop/detail/detail');
      }
    },
    {
      path: '/home/shop/pay',
      component: () => {
        return import('../views/homeChildren/shop/pay/pay');
      }
    }
  ]
};
