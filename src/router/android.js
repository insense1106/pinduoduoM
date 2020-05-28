export default {
  path: '/home/Android',
  component: () => {
    return import('../views/homeChildren/android/Android');
  },
  children: [
    {
      path: '/home/Android/ad1',
      component: () => {
        return import('../views/homeChildren/android/ad1');
      }
    },
    {
      path: '/home/Android/ad2',
      component: () => {
        return import('../views/homeChildren/android/ad2');
      }
    },
    {
      path: '/home/Android/ad3',
      component: () => {
        return import('../views/homeChildren/android/ad3');
      }
    },
    {
      path: '/home/Android/ad4',
      component: () => {
        return import('../views/homeChildren/android/ad4');
      }
    },
    {
      path: '/home/Android/ad5',
      component: () => {
        return import('../views/homeChildren/android/ad5');
      }
    },
    {
      path: '/home/Android/ad6',
      component: () => {
        return import('../views/homeChildren/android/ad6');
      }
    },
    {
      path: '/home/Android/ad7',
      component: () => {
        return import('../views/homeChildren/android/ad7');
      }
    },
    {
      path: '/home/Android/ad8/:id',
      component: () => {
        return import('../views/homeChildren/android/ad8');
      },
      beforeEnter: (to, from, next) => {
        // ...
        console.log('路由独享守卫beforeEnter 写在route匹配规则中 ');
        next();
      }
    },
    {
      path: '/home/Android/ad9',
      component: () => {
        return import('../views/homeChildren/android/ad9');
      }
    },
    {
      path: '/home/Android/ad10',
      component: () => {
        return import('../views/homeChildren/android/ad10');
      }
    },
    {
      path: '/home/Android/ad11',
      component: () => {
        return import('../views/homeChildren/android/ad11');
      }
    },
    {
      path: '/home/Android/ad12',
      component: () => {
        return import('../views/homeChildren/android/ad12');
      }
    },
    {
      path: '/home/Android/Loading',
      component: () => {
        return import('../views/homeChildren/android/Loading');
      }
    },
    {
      path: '/home/Android/ad13',
      component: () => {
        return import('../views/homeChildren/android/ad13');
      }
    },
    {
      path: '/home/Android/ad14',
      component: () => {
        return import('../views/homeChildren/android/ad14');
      }
    },
    {
      path: '/home/Android',
      redirect: '/home/Android/ad1'
    }
  ]
};
