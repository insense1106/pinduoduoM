export default {
  set_city_name({ city }, payload) {
    city.id = payload.id;
    city.name = payload.name;
  },
  update_animation_loading(state, boolean) {
    state.animation_loading = boolean;
  },
  update_toast_bottom(state, payload) {
    state.toast_bottom = payload;
  },
  update_transition(state, payload) {
    state.transition = payload;
  },
  update_songname(state, payload) {
    state.songname = payload;
  },
  update_nav_show(state, payload) {
    state.nav_show = payload;
  },
  update_search_show(state, payload) {
    state.search_show = payload;
  },
  update_return_show(state, payload) {
    state.return_show = payload;
  },
  update_detail_item(state, payload) {
    state.detail_item = payload;
  },
  update_list_pay_pdd(state, payload) {
    return new Promise((res, rej) => {
      state.list_pay_pdd.push(payload);
      res(true);
      rej(false);
    });
  }
};
