<template>
  <div class="p4detail">
    <div class="box">
      <div class="title1">
        <h1>小米10 Pro</h1>
        <p style="color:grey">
          <span style="color:orange">「分期享6期免息，低至834元起/期」 </span>
          骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 /
          双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 /
          对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi
          6 / 超强VC液冷散热 / 4500mAh大电量 / 多功能NFC
        </p>
        <h2>小米自营</h2>
        <h1 class="price">4999元</h1>
      </div>
      <div class="title2">
        <i class="icon-pencil" />
        <span>{{ address || '请选择地址' }}</span>
        <span @click="show_location">
          <router-link to="" class="change">修改地址</router-link>
        </span>
        <div class="ad">有现货 🙂</div>
        <p5location
          :close="close"
          @address_fn="address_fn"
          @close_p5="close_p5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import p5location from './p5location';
export default {
  name: 'p4detail',
  components: { p5location },
  props: {},
  data() {
    return {
      close: false,
      address: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    show_location() {
      this.close = true;
    },
    address_fn(address) {
      this.address = address;
    },
    close_p5() {
      this.close = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.p4detail
  .box
    margin-left 50px
    margin-right 50px
    .title1

      border-bottom 1px solid grey
      h1
        font-weight 200
        margin-bottom 10px
      p
        span
      h2
        color orange
        margin-top 15px
        font-size 1rem
        font-weight 500
      .price
        font-weight 500
        margin-top 20px
        color orangered
    .title2
        position relative
        margin-top 40px
        height 100px
        box-sizing border-box
        padding-top 30px
        padding-left 40px
        border 1px solid
        font-size 1rem
        i
          color darkred
        span
          margin-left 10px
        .change
          margin-left 10px
          color red
        .ad
          padding-left 1.5rem
          padding-top 0.5rem
          color red
          font-weight 600
</style>
