<template>
  <div class="backtop" @click="fn_backtop()">
    <i class="icon-arrow-up2"></i>
  </div>
</template>

<script>
export default {
  name: 'backtop',
  components: {},
  props: {
    handler_backtop: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    fn_backtop() {
      this.handler_backtop();
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mixin_global';
.backtop
    position fixed
    right 1rem
    bottom 5rem
    height 3rem
    width 3rem
    background-color black
    opacity 0.6
    z-index 980
    flex_all_center()
    i
        font-size 1rem
</style>
