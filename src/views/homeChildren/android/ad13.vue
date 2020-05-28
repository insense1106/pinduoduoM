<template>
  <div class="ad13">
    <h1>
      1获取html标签
    </h1>
    <h1>2 设置字体大小</h1>
    <h1>3 其它标签的尺寸全部都要相对于html标签</h1>
    <h1>4 这样在屏幕尺寸改变时， 保证显示的比例不变</h1>
  </div>
</template>

<script>
export default {
  name: 'ad13',
  components: {},
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
.ad13
    p
        font-size 1rem
</style>
