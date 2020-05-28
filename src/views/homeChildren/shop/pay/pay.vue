<template>
  <div class="pay">
    <g1header />
    <p1nav />
    <p2remind />
    <div class="box">
      <div class="left">
        <p3swiper />
      </div>
      <div class="right">
        <p4detail />
        <p7select />
      </div>
    </div>
  </div>
</template>

<script>
import g1header from '../goodslist/g1header';
import p1nav from './p1nav';
import p2remind from './p2remind';
import p3swiper from './p3swiper';
import p4detail from './p4detail';
import p7select from './p7select';
export default {
  name: 'pay',
  components: { p1nav, g1header, p2remind, p3swiper, p4detail, p7select },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.pay
    .box
        height 1200px
        display flex
        padding 10px
        .left
            margin 20px 80px
            width:40%
            height 100%
        .right
            margin 10px 0
            // height 100%
            width:60%
            // background-color blue
</style>
