<template>
  <div class="hot">
    <div class="box">
      <t13swiper class="t13swiper" />
      <t14bar class="t14bar" />
      <h1tabbar class="h1tabbar" />
      <h2list class="h2list" />
    </div>
  </div>
</template>

<script>
import h2list from './h2list';
import h1tabbar from './h1tabbar';
import t14bar from './t14bar';
import t13swiper from './t13swiper';
export default {
  name: 'hot',
  components: { t13swiper, t14bar, h1tabbar, h2list },
  props: {},
  data() {
    return {};
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
.hot
  width 20rem
</style>
