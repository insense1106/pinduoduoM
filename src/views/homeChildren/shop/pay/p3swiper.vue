<template>
  <div class="p3swiper">
    <swiper class="swiper-container" :options="swiper_options">
      <slide class="slide" v-for="(item, index) in list_img" :key="index">
        <img :src="item.img" alt="#" />
      </slide>
    </swiper>
    <div class="swiper-pagination nation"></div>

    <div class="swiper-button-prev button"></div>
    <div class="swiper-button-next button"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'p3swiper',
  components: { swiper: Swiper, slide: SwiperSlide },
  props: {},
  data() {
    return {
      list_img: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.http();
  },
  mounted() {},
  methods: {
    async http() {
      let res = await this.$http.get('http://localhost:80/xiaomi/p3swiper');
      this.list_img = res.data.p3swiper;
      console.log(this.list_img);
    }
  }
};
</script>

<style lang="stylus" scoped>
.p3swiper
        position relative
        height 40%
        width 100%
        margin auto
        .swiper-container
            width 80%
            height 100%
            margin 0 20px
            margin auto
            .slide
                height 100%
                img
                    height 100%
            a
                margin-left 20px
        .button
            padding 0 50px
            &:hover
                color black
        .nation
            position absolute
            left 50%
            transform translateX(-50%)
</style>
