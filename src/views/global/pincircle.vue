<template>
  <div class="pincircle" @click="fn_pincircle()">
    <i class="icon-folder-upload"></i>
  </div>
</template>

<script>
export default {
  name: 'pincircle',
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
    fn_pincircle() {
      this.$router.push({ name: 'customercircle', params: { id: 123 } });
    }
  }
};
</script>

<style lang="stylus" scoped>
.pincircle
    position fixed
    // border 1px solid
    top 0rem
    right 4rem
    width 2rem
    height 2rem
    z-index 999
    border-bottom 1px solid
    background-color darkgrey
    opacity 0.6
    border-radius 80%
    // text-align center
    // line-height 3rem
    font-size 1rem
    display flex
    justify-content center
    align-items center
    i
        color darkgreen
</style>
