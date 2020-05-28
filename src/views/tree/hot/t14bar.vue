<template>
  <div class="t14bar">
    <div class="box">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 't14bar',
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
.t14bar
    padding 0.5rem 0
    color black
    .box
        height 2rem
        display flex
        justify-content space-around
        .left
            width 3rem
            height 100%
            background-color darkred
        .right
            width 3rem
            height 100%
            background-color darkred
</style>
