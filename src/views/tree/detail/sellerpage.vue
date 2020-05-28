<template>
  <div class="sellerpage">
    <routerback />
    <betterscroll class="better-scroll" :handler_scroll="handler_scroll">
      <div class="seller_info">
        <div class="logo">
          <img src="./kanke.jpg" alt="" />
        </div>
        <div class="text">
          <span>万众一心</span>
          <span>退货包运费</span>
          <div class="text_child">
            <span>已拼10万+件</span>
            <span>787871人关注</span>
          </div>
        </div>
        <div class="activity">
          <div class="left">
            <span>$:3</span>
          </div>
          <div class="right">
            <div class="line"></div>
            <span>消费满39元返3元</span>
          </div>
        </div>
        <div class="comment">
          <span>舒服好看,没有色差,舒服好看,没有色差...</span>
          <span>
            <i class="icon-arrow-right2" />
          </span>
        </div>
      </div>
      <tabseller :flag_tabbar="flag_tabbar"></tabseller>
    </betterscroll>
  </div>
</template>

<script>
import tabseller from './tabseller';
export default {
  name: 'sellerpage',
  components: { tabseller },
  props: {},
  data() {
    return {
      flag_tabbar: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    handler_scroll(p) {
      // console.log(p.y);
      if (p.y < -204) {
        this.flag_tabbar = true;
      } else {
        this.flag_tabbar = false;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/mixin_global';
.sellerpage
  position fixed
  height 100vh
  width 100%
  // background-color red
  z-index 990
  color #fff
  padding-top 3rem
  top 0
  // filter: grayscale(100%)
  &:before
    top 0
    content ''
    position fixed
    background-image url('./kanke.jpg')
    opacity 1
    height 100%
    width 100%
    z-index -1
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(0.21rem);
  .better-scroll
    height 100%
    background-color #fff
    overflow hidden
    .seller_info
      font-size 0.8rem
      position relative
      background-color $c3
      flex_all_center()
      flex-direction column
      .logo
        img
          width 3rem
          height 3rem
      .text
        flex_all_center_column()
      .activity
        flex_all_center()
        // justify-content space-between
        font-size 0.5rem
        background-color $c1
        width 8rem
        border-radius 0.2rem
        height 1.5rem
      .comment
        width 100%
        color black
        align-self start
        flex_between()
        box-sizing border-box
        padding  0.5rem
</style>
