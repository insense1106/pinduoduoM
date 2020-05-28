<template>
  <div class="t11search focus" ref="search" v-if="computed_display">
    <form action="">
      <input
        ref="input"
        type="text"
        placeholder="search content"
        @click="focus_in()"
        @blur="lose_focus()"
      />
      <i class="icon-search " ref="icon"></i>
    </form>
  </div>
</template>

<script>
export default {
  name: 't11search',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    computed_display() {
      return (
        !this.$route.path.includes('detail') &&
        !this.$route.path.includes('server')
      );
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    focus_in() {
      this.$refs.icon.classList.add('icon_active');
    },
    lose_focus() {
      this.$refs.icon.classList.remove('icon_active');
    }
  }
};
</script>

<style lang="stylus" scoped>
.t11search
    width 70%
    margin auto
    height 1.5rem
    padding-top 0.5rem
    form
        position relative
        height 100%
        input
            border-radius 0.3rem
            box-sizing border-box
            width 100%
            height 100%
            background-color lightgrey
            padding-left 30%
            display flex
            align-items center
            transition all 1s
            padding-top 0.2rem
            &::-webkit-input-placeholder
                    // color darkred
                    font-size 1rem
            &:focus
                width 80%
                outline none
                padding-left 1.5rem
                &::-webkit-input-placeholder
                    color darkred
                    font-size 1rem
        .icon-search
            position absolute
            left 50%
            top 50%
            transform translate(-450%,-45%)
            font-size 0.8rem
            transition all 1s

.active{
    width 90%
    transition all 1s
}
.icon_active{
    margin-left -3rem
    transition all 1s
}
.-webkit-input-placeholder{
    margin-left -5rem
    transition all 1s
}
</style>
