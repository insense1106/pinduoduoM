export default {
  update_goods_price({ goods }, payload) {
    goods.price = payload;
  },
  vip_price({ goods }, payload) {
    goods.price = payload;
  },
  http_data1(state, payload) {
    state.vuex_list = payload;
  }
};
