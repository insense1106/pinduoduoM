<template>
  <div class="toast">
    <div class="box" ref="box">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  components: {},
  props: {
    msg: {
      type: String,
      default() {
        return '';
      }
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
    handler_toggle_animation() {
      //   this.$refs.box.classList.add('box2');
    }
  }
};
</script>

<style lang="stylus" scoped>
.toast
    font-size 0.4rem
    color black
    .box
        position fixed
        height 2rem
        width 50%
        top 0
        left 25%
        opacity 1
        margin  auto
        // background-color blue
        border-radius 2rem
        line-height 2rem
        animation-name slide_up
        animation-duration 3.1s
        transition all 1s
        z-index 1000

        animation-iteration-count infinite


@keyframes slide_up {
    0%{
        opacity 0
        // top 50%
        transform translateY(150%)
        }
     30%{
            opacity 1
            transform translateY(0%)
            // top 40%
         }
     50%{
            opacity 1
            transform translateY(0%)
            // background-color white
            // top 40%
         }
     80%{
            opacity 1
            transform translateY(0%)
            // top 40%
         }
    100%{
        transform translateY(-100%)
        opacity 0
        // top 30%
        }

}
</style>
