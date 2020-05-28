<template>
  <div class="root">
    <Swiper class="swiper-container" :options="swiper_options">
      <Swiper-slide
        class="slide"
        v-for="(item, index) in list_img"
        :key="index"
      >
        <router-link to="/home/shop/pay">
          <img :src="item.img" alt="#" />
        </router-link>
      </Swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'g2swiper',
  components: { Swiper, SwiperSlide },
  props: {},
  data() {
    return {
      swiper_options: {
        speed: 1000,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: true
      },
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
      let res = await this.$http.get('http://localhost:80/xiaomi/g2swiper');
      this.list_img = res.data.g2swiper;
    }
  }
};
</script>

<style lang="stylus" scoped>
.root
    .swiper-container
        .slide
            img
                width:100%
                height 500px
</style>
