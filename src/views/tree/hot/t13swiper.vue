<template>
  <div class="t13swiper" :options="swiper_options">
    <swiper class="swiper">
      <slide class="slide"><img src="./img1.jpg" alt=""/></slide>
      <slide class="slide"><img src="./img2.jpg" alt=""/></slide>
      <slide class="slide"><img src="./img1.jpg" alt=""/></slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name: 't13swiper',
  components: { swiper: Swiper, slide: SwiperSlide },
  props: {},
  data() {
    return {
      swiper_options: {
        speed: 2000,
        loop: true,
        autoplay: true
      },
      autoplay: {
        delay: 500,
        stopOnLastSlide: true,
        disableOnInteraction: true
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.t13swiper
  color red
  height 5rem
  width 100%
  .swiper
    height 100%
    .slide
      height 100%
      width 100%
      img
        height 100%
        width 100%
</style>
