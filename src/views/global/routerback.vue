<template>
  <div class="routerback" @click="routerback">
    <i class="icon-backward2"></i>
  </div>
</template>

<script>
export default {
  name: 'routerback',
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
  methods: {
    routerback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.routerback
    position fixed
    top 0rem
    left 0rem
    width 2rem
    height 2rem
    z-index 980
    border-bottom 1px solid
    background-color darkgrey
    opacity 0.6
    border-radius 80%
    font-size 1rem
    display flex
    justify-content center
    align-items center
    i
        margin-left -0.2rem
        color darkgreen
</style>
