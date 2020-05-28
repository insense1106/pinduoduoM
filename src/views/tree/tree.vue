<template>
  <div class="tree" v-if="tree_show">
    <loading class="loading" v-if="loading"></loading>
    <loading class="loading2" v-if="loading2"></loading>
    <t10ad v-if="flag_ad" />
    <div class="fixed">
      <t11search />
      <t12tabbar />
    </div>
    <h3betterscroll
      :handler_pulldown="handler_pulldown"
      :handler_pullup="handler_pullup"
      :handler_scroller="handler_scroller"
      ref="bs"
      class="better_scroll"
    >
    </h3betterscroll>
    <transition>
      <router-view class="router_view"></router-view>
    </transition>
  </div>
</template>

<script>
import h3betterscroll from './hot/h3betterscroll';
import t12tabbar from './t12tabbar';
import t10ad from './t10ad';
import t11search from './t11search';
export default {
  name: 'tree',
  components: { t10ad, t11search, t12tabbar, h3betterscroll },
  data() {
    return {
      flag_ad: true,
      tree_show: true,
      loading: false,
      loading2: false
    };
  },
  computed: {},
  watch: {},
  created() {
    this.show_ad();
  },
  mounted() {
    this.bind_event();
   
  },
  methods: {
 
    show_ad() {
      setTimeout(() => {
        this.flag_ad = false;
      }, 1000);
    },
    handler_pulldown() {
      console.log('handler_pulldown');
    },
    handler_pullup() {
      console.log('handler_pullup');
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 1400);
    },
    handler_scroller(p) {
      // console.log('handler_scroller');
      // console.log(p.y);
      if (p.y > 0) {
        p.y > 64 ? (this.loading = true) : (this.loading = false);
      }
      //  else {
      //   p.y < -1335 ? (this.loading2 = true) : (this.loading2 = false);
      // }
    },
    bind_event() {
      this.$el.addEventListener('touchstart', this.handler_touch_start, false);
    },
    handler_touch_start(e) {
      // console.log(e.touches[0].pageX);
      return e;
    }
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  beforeRouteEnter(to, from, next) {
    next();
  }
};
</script>

<style lang="stylus" scoped>
.tree
  width 20rem
  padding-top 3rem
  margin 0  auto
  position relative

  .fixed
    // margin-top 1rem
    background-color #fff
    position fixed
    top 0
    width 20rem
    z-index 888
  .better_scroll
    // height calc(100vh - 4rem)
    // width 100%
  .router_view
    width 100%
    transition all 0.5s
    position absolute
    overflow hidden
  .loading
    top 10%
    transform scale(0.5)
  .loading2
    top 82%
    transform scale(0.5)
.v-enter
  transform translateX(-100%)
.v-enter-to
  transform translateX(0%)
.v-leave
  transform translateX(0%)
.v-leave-to
  transform translateX(100%)
</style>
