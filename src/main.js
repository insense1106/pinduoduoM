import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
// 全局样式
import './assets/css/reset.css';
import '../node_modules/swiper/css/swiper.css';
import './assets/font/style.css';
import './assets/font/style2.css';
import './views/homeChildren/shop/common/mixin.styl';
import 'element-ui/lib/theme-chalk/index.css';
//全局UI组件
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import toast from './components/toast/toast';
Vue.use(toast);
import loading from './views/homeChildren/android/Loading.vue';
Vue.component('loading', loading);
import betterscroll from './views/global/betterscroll';
Vue.component('betterscroll', betterscroll);
import routerback from './views/global/routerback';
Vue.component('routerback', routerback);
import pincircle from './views/global/pincircle';
Vue.component('pincircle', pincircle);
import whitebar from './views/global/whitebar';
Vue.component('whitebar', whitebar);
import bottomnavbar from './components/bottomNavbar/bottomnavbar.vue';
Vue.component('bottomnavbar', bottomnavbar);
import backtop from './views/global/backtop';
Vue.component('backtop', backtop);
import toast2 from './views/global/toast';
Vue.component('toast2', toast2);
import paybar from './views/global/paybar';
Vue.component('paybar', paybar);
import LyTab from 'ly-tab';
Vue.use(LyTab);
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  ak: 'a4MZkha6OgaX59M8yRsKTb0Ssvz1YynB'
});
import ElementUI from 'element-ui';
Vue.use(ElementUI);

//全局插件
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  error: require('./assets/logo.png'),
  loading: require('./assets/logo.png')
});

// 网络工具
import axios from 'axios';
import vuejsonp from 'vue-jsonp';
import movie from './assets/http/axios_movie.js';
import xiaomi from './assets/http/axios_xiaomi.js';
import music from './assets/http/axios_music.js';
import request from './assets/http/http.js';
import xiaojie from './assets/http/axios_xiaojie.js';
Vue.use(vuejsonp);
Vue.prototype.$http = axios;
Vue.prototype.$request = request;
Vue.prototype.$movie = movie;
Vue.prototype.$xiaomi = xiaomi;
Vue.prototype.$music = music;
Vue.prototype.$xiaojie = xiaojie;

// bug  提示
// import 'default-passive-events';
//---------------------------------------------------
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

let htmlwidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth; //浏览器兼容
console.log('屏幕宽度：' + htmlwidth); //iphone5:320 iphone6:375
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = htmlwidth / 20 + 'px';
//以iphone5为基础 iphone5默认字体大小为16px 320/16=20 即1rem字体大小是屏幕宽度的1/20
