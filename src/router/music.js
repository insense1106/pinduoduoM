export default {
  path: 'music',
  name: 'music',
  component: () => import('../views/homeChildren/music/music.vue'),
  children: [
    {
      path: '/home/music/rank',
      component: () => import('../views/homeChildren/music/m31rank')
    },
    {
      path: '/home/music/recommend',
      component: () => import('../views/homeChildren/music/m32recommend')
    },
    {
      path: '/home/music/rankdetail/:id',
      component: () => import('../views/homeChildren/music/m311detail')
    },
    // {
    //   path: '/home/music/playsong/:id',
    //   component: () =>
    //     import('../views/homeChildren/musicChildren/playsong.vue')
    // },
    // {
    //   path: '/home/music/mv',
    //   component: () => import('../views/homeChildren/musicChildren/mv.vue')
    // }
    {
      path: '/home/music',
      redirect: '/home/music/rank'
    }
  ]
};
