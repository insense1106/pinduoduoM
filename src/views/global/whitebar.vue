<template>
  <div class="whitebar"></div>
</template>

<script>
export default {
  name: 'whitebar',
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
.whitebar
    position fixed
    z-index 950
    height 2.2rem
    width 20rem
    top 0
    left 0
    background-color #fff
    border-bottom 1px solid lightgrey
</style>
