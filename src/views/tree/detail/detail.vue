<template>
  <div class="detail" @scroll="fn_scroll()">
    <whitebar v-show="flag_whitebar" />

    <toast2 :msg="msg" class="toast2" v-if="flag_toast2" />

    <routerback />
    <paybar :goods="data" />
    <pincircle />
    <backtop :handler_backtop="handler_backtop" v-if="flag_backtop" />
    <loading v-if="flag" />
    <div
      ref="full_screen"
      class="full_screen"
      @click="handler_normal_screen()"
      v-if="flag_full_screen"
    >
      <swiper>
        <swiper-slide>
          <img :src="data.pic" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="data.pic" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="data.pic" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="box" v-else>
      <betterscroll
        class="betterscroll"
        ref="bs"
        :handler_scroll="handler_scroll"
      >
        <h1>detail组件</h1>
        <div class="content">
          <div class="top" v-if="data" ref="top" @click="handler_full_screen()">
            <!-- <h1>{{ $route.params }}##</h1> -->
            <!-- <h1>{{ data }}##</h1> -->
            <swiper class="swiper">
              <swiper-slide class="slide">
                <img :src="data.pic" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img :src="data.pic" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img :src="data.pic" alt="" />
              </swiper-slide>
            </swiper>
          </div>

          <div class="goods_text">
            <span>商品价格---功能----</span>
          </div>
          <h1>pindan 组件</h1>
          <hr />
          <betterscroll class="bs_pindan">
            <pindan />
          </betterscroll>
          <h1>comments 组件</h1>
          <comments />
          <h1>comprehensive_comment 组件</h1>
          <comprehensive />
          <h1>seller 组件</h1>
          <seller />
          <h1>sellerlist组件</h1>
          <sellerlist />
          <hr />
        </div>
      </betterscroll>
      <h1>
        ### 需求 # 1 点击收藏 改变样式 # 2 点击联系客服 跳转路由 # 3 点击购买
        弹出选项框 # 3-1 弹出选项框后, 根据选中数据,跳转支付页面
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import pindan from './pindan';
import comments from './comments';
import comprehensive from './comprehensive_comment';
import seller from './seller';
import sellerlist from './sellerlist';
export default {
  name: 'detail',
  components: {
    pindan,
    comments,
    comprehensive,
    seller,
    sellerlist,
    Swiper,
    SwiperSlide
  },
  props: {},
  data() {
    return {
      data: null,
      flag: false,
      flag_whitebar: false,
      flag_full_screen: false,
      flag_backtop: false,
      msg: null,
      flag_toast2: false
    };
  },
  computed: {
    ...mapGetters('music', { item: 'getters_detail_item' })
  },
  watch: {},
  created() {
    // 获取当前商品
    this.data = JSON.parse(localStorage.getItem('item2'));
  },
  mounted() {
    this.msg = '----😄😄😄😄😄---';
  },
  updated() {},
  destroyed() {},
  methods: {
    fn_scroll() {},
    // better-scroll listen 滚动事件
    handler_scroll(position) {
      //! 这种判断很消耗性能,可以优化
      if (position.y < -10) {
        this.flag_whitebar = true;
        this.flag_toast2 = true;
      } else {
        this.flag_whitebar = false;
        this.flag_toast2 = false;
      }
      position.y < -700
        ? (this.flag_backtop = true)
        : (this.flag_backtop = false);
    },
    // 轮播图全屏
    handler_full_screen() {
      this.flag_full_screen = true;
    },
    // 取消全屏
    handler_normal_screen() {
      this.$refs.full_screen.classList.remove('mixin_full_screen');
      this.flag_full_screen = false;
    },
    // 返回页面顶部
    handler_backtop() {
      this.$refs.bs.scrollTop();
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/mixin_global'
.detail
    padding-top 1rem
    padding-bottom 1rem
    position fixed
    z-index 950
    width 20rem
    top 0
    background-color white
    text-align center
    .toast2
    .box
        .betterscroll
            height 30rem
            overflow hidden
            .content
                .top
                    text-align center
                    img
                        width 17rem
                        height 8rem
                .goods_text
                    font-size 0.5rem
    .full_screen
        full_screen()
        flex_all_center()
</style>
