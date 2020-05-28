export default {
  path: '/home/suggestion',
  name: 'suggestion',
  component: () =>
    import('../views/homeChildren/suggestionChildren/suggestion.vue'),
  children: [
    {
      path: '/home/suggestion/location',
      components: {
        default: () =>
          import('../views/homeChildren/suggestionChildren/location.vue'),
        sec: () =>
          import('../views/homeChildren/suggestionChildren/nowplaying.vue')
      }
    },
    {
      path: '/home/suggestion/nowplaying/:id',
      components: {
        sec: () =>
          import('../views/homeChildren/suggestionChildren/nowplaying.vue')
      },
      //路由传参
      props: route => {
        // return { id: route.params.id }
        console.log(route);

        // return id = 2
      }
    },
    {
      path: '/home/suggestion/nowplaying',
      redirect: '/home/suggestion/nowplaying/1'
    },
    {
      path: '/home/suggestion/comingplaying',
      component: () =>
        import('../views/homeChildren/suggestionChildren/comingplaying.vue')
    },
    {
      path: '/home/suggestion/search',
      component: () =>
        import('../views/homeChildren/suggestionChildren/search.vue')
    },
    {
      path: '/home/suggestion',
      redirect: '/home/suggestion/location'
    }
  ]
};
