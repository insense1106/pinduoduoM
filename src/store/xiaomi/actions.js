// import Vue from 'vue';
export default {
  vip_price(context, price) {
    return context.commit('vip_price', price);
  },
  async http_data1(context, list) {
    context.commit('http_data1', list);
  }
};
