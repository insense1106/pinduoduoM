<template>
  <div class="m32recommend">
    <m321swiper />
    <h1>热门歌单</h1>
    <hr />
    <m322hotlist />
  </div>
</template>

<script>
import m321swiper from './m321swiper';
import m322hotlist from './m322hotlist';
export default {
  name: 'm32recommend',
  components: { m321swiper, m322hotlist },
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
.m32recommend
  // animation toggle 2s
  h1
    margin-top 20px
    text-align center
    font-size 1.5rem
    font-weight 500
    color black
@keyframes toggle {
  0%{
    transform translateX(100%)
  }
  100%{
    transform translateX(0%)
  }
}
</style>
