import music from './music.js';
import suggestion from './suggestion.js';
import Android from './android';
import shop from './shop';
export default {
  path: '/home',
  name: 'home',
  component: () => import('../views/home.vue'),
  children: [
    {
      path: '/home/page',
      name: '/home/page',
      component: () => import('../views/homeChildren/page.vue')
    },
    Android,
    {
      path: '/home/houduan',
      name: 'houduan',
      component: () => import('../views/homeChildren/houduan.vue')
    },
    {
      path: '/home/qianduan',
      name: 'qianduan',
      component: () => import('../views/homeChildren/qianduan.vue')
    },
    music,
    suggestion,
    {
      path: '/home/functioncomponent',
      name: 'functioncomponent',
      component: () => import('../views/homeChildren/functioncomponent.vue'),
      children: [
        {
          path: '/home/functioncomponent/functioncomponentchild',
          component: () =>
            import(
              '../views/homeChildren/functioncomponent/functioncomponentchild.vue'
            )
        },

        {
          path: '/home/functioncomponent',
          redirect: '/home/functioncomponent/functioncomponentchild'
        }
      ]
    },
    {
      path: '/home/neteasecloud',
      name: 'neteasecloud',
      component: () => import('../views/homeChildren/neteasecloud.vue')
    },
    {
      path: '/home/question',
      name: 'question',
      component: () => import('../views/homeChildren/question/question.vue')
    },
    shop,

    {
      path: '/home',
      redirect: '/home/page'
    }
  ]
};
