<template>
  <div class="food">
    <div class="box">
      <h1>f1listitem组件</h1>
      <f1listitem />
      <h1>f3ad组件</h1>
      <f3ad />
      <h1>f2listgoods组件</h1>
      <f2listgoods />
      <h1>f4page组件</h1>
      <f4page />
    </div>
  </div>
</template>

<script>
import f1listitem from './f1listitem';
import f2listgoods from './f2listgoods';
import f3ad from './f3ad';
import f4page from './f4page';
export default {
  name: 'food',
  components: { f1listitem, f2listgoods, f3ad, f4page },
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
.food
    // width 100%
    // height 90vh
    // background-color green
    // overflow hidden
    padding-bottom 2rem
    h1
      margin-top 1rem
      text-align center
</style>
