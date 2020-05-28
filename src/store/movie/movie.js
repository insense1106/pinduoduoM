export default {
  namespaced: true,
  state: {
    city: { id: 1, nm: '北京' }
  },
  mutations: {
    set_city_name({ city }, payload) {
      city.id = payload.id;
      city.nm = payload.nm;
    }
  },
  actions: {},
  modules: {}
};
