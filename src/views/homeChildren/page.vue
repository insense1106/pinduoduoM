<template>
  <div class="page">
    <!-- 导入swiper组件  轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./img/fj1.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="./img/fj2.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="./img/fj3.jpg" alt="" /></div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    <!-- navbar 轮播图下面的导航栏 -->
    <pagenav></pagenav>
    <!-- advertisement -->
    <div class="ad">
      <img src="./img/fj2.jpg" alt="#" width="100%" />
    </div>
    <!-- shop list -->
    <shoplist></shoplist>
  </div>
</template>

<script>
import shoplist from './page_shop_list';
import pagenav from './pagenav';
import Swiper from 'swiper';
export default {
  name: 'page',
  components: { pagenav, shoplist },
  data() {
    return {
      swiper: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.$nextTick(() => {
      //! 轮播图切换
      this.swiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 3500,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: true,
        // effect: 'cube',
        // cubeEffect: {
        //   slideShadows: true,
        //   shadow: true,
        //   shadowOffset: 100,
        //   shadowScale: 0.6
        // }, // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      });
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.page {
  height: 47px;
  width: 100%;
  background-color: rgba(216, 175, 175, 0.418);
}
img {
  width: 100%;
  height: 47px;
}
.ad {
  background-color: #fff;
  margin: 11px 0;
  padding: 5px;
}
</style>
