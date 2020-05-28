export default {
  update_name(context, name) {
    return context.commit('set_city_name', name);
  },
  actions_list_pay_pdd(context, data) {

    return context.commit('update_list_pay_pdd', data);
  }
};
