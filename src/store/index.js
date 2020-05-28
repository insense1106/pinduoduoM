import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import movie from './movie/movie';
import music from './music/music';
import xiaomi from './xiaomi/xiaomi';
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    movie,
    music,
    xiaomi
  }
});
