<template>
  <div class="ad9">
    <hr />
    <h1>测试1</h1>
    <div
      class="test"
      :class="{ active: show }"
      :style="{ display: show ? 'block' : 'none' }"
      @touchend.prevent="emitEvent('on-click-menu', 'cancel')"
    >
      123 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123
    </div>
    <button @click="control">control</button>
    <hr />
    <h1>test2</h1>
    <h1>prevent 阻止默认行为</h1>
    <hr />
    <form
      @submit="submit_test()"
      action="http://localhost:80/xiaomi/location"
      method="get"
    >
      @submit="submit_test()"
      <br />
      <input type="submit" value="submit" />
    </form>
    <form
      @submit.prevent="submit_test2()"
      action="http://localhost:80/xiaomi/location"
    >
      @submit.prevent="submit_test2()" <br />
      <input type="submit" value="submit" />
    </form>
    <hr />
    <h1>vuex http v-for 123</h1>
    <hr />
    <div
      v-for="(item, index) in vuex_list"
      :key="index"
      @click="http_data()"
      v-text="item"
    ></div>
    <div @click="http_data()">
      <img src="../img/fj1.jpg" alt="" />
    </div>
    <div>
      <img src="../img/fj1.jpg" alt="" />
    </div>
    <div>
      <img src="../img/fj1.jpg" alt="" />
    </div>
    <div>
      <img src="../img/fj1.jpg" alt="" />
    </div>
    <hr />
  </div>
</template>

<script>
/**
      @touchend.prevent="emitEvent('on-click-menu', 'cancel')"
      @click="emitEvent('on-click-menu', 'cancel')"
 */
import { mapState } from 'vuex';
export default {
  name: 'ad9',
  components: {},
  props: {},
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapState({
      vuex_list: state => {
        return state.xiaomi.vuex_list;
      }
    })
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    control() {
      this.show = !this.show;
    },
    // ...args==> args = [xx,xx,xx,]
    emitEvent(...args) {
      args.forEach(element => {
        console.log(element);
      });
      console.log(args[0]);
      console.log(args[1]);
    },
    submit_test() {
      console.log('submit_test is execute');
    },
    submit_test2() {
      console.log('submit_test2 is execute');
    },
    async http_data() {
      let uri = 'http://localhost:80/xiaomi/vuex_list';
      let res = await this.$http(uri);
      // console.log(res.data.vuex_list);

      this.$store.dispatch('xiaomi/http_data1', res.data.vuex_list);
    }
  }
};
</script>

<style lang="stylus" scoped>
div > .active
    color red
.test
    color blue
hr
    border 2px solid
    background-color black
form
    font-size 2rem
</style>
