<template>
  <div class="m321swiper">
    <swiper class="swiper" :options="swiper_options">
      <slide class="slide" v-for="(item, index) in list" :key="index">
        <img :src="item" alt="" />
      </slide>
    </swiper>
    <div class="swiper-pagination nation"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'm321swiper',
  components: { swiper: Swiper, slide: SwiperSlide },
  props: {},
  data() {
    return {
      swiper_options: {
        speed: 2000,
        autoplay: {
          delay: 500,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      list: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.http();
  },
  mounted() {},
  destroyed() {},
  methods: {
    async http() {
      // https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg
      let res = await this.$music('/fcg_first_yqq.fcg', {
        params: {
          format: 'jsonp',
          tpl: 'v12',
          page: 'other',
          rnd: 0,
          g_tk: new Date().getTime(),
          loginUin: 0,
          hostUin: 0,
          inCharset: 'utf8',
          outCharset: 'GB2312',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
        }
      });
      //   console.log(res.data);
      let res2 = res.data;
      let res3 = res2.substring(18);
      let res4 = res3.split('');
      res4.pop();
      let res6 = res4.join('');
      let res7 = JSON.parse(res6);
      //   console.log(res7.data.focus);
      let res8 = res7.data.focus;
      res8.forEach(item => {
        this.list.push(item.pic);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.m321swiper
    color red
    .swiper
        height 200px
        .slide
            // margin 0 10px
            img
                height 100%
                width 100%
</style>
