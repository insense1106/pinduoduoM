<template>
  <div class="music">
    <m01return />
    <m0animation
      class="loadding_animation"
      v-if="$store.state.music.animation_loading"
    />
    <m1search />
    <m2betterscroll class="better-scroll">
      <m3content> </m3content>
    </m2betterscroll>

    <m11toast
      class="toast "
      :class="{ active: $store.state.music.transition != 0 }"
      v-if="$store.state.music.toast_bottom"
    />
    <m4playbar class="m4playbar" />
  </div>
</template>

<script>
import m4playbar from './m4playbar.vue';
import m1search from './m1search.vue';
import m2betterscroll from './m2betterscroll.vue';
import m3content from './m3content.vue';
import m0animation from './m0animation.vue';
import m01return from './m01return.vue';
import m11toast from './m11toast.vue';

export default {
  name: 'music',
  components: {
    m1search,
    m2betterscroll,
    m3content,
    m0animation,
    m01return,
    m11toast,
    m4playbar
  },
  data() {
    return {
      animation_loading: false
    };
  },
  computed: {},
  watch: {},
  created() {
    // console.log(this.$store.state.music.animation_loading);
  },
  mounted() {},
  methods: {}
};
// @media screen and (max-width:500px){
//     body{
//       width 500px
//     }
// }
</script>

<style lang="stylus" scoped>
.music
  position relative
  width 20rem
  // margin 0 auto
  // padding-top 200px
  .loadding_animation
    position fixed
    top 10
    left 0
    width 100%
    z-index 1
  .better-scroll
    height calc(100vh - 186px)
    overflow hidden
    position relative
    z-index 2
  .toast
      position absolute
      bottom 0.01rem
      width 100%
      // opacity 0
      z-index 2
      text-align center
      background-color  lightblue
      // transition opacity 2.3s
  .active
      // transition opacity 1.3s
      animation active 0.2s
      position absolute
      bottom 0.01rem
      opacity 1


@keyframes active {
  0%{
    transform translateY(100px)
  }
  10%{
    transform translateY(90px)
  }
  20%{
    transform translateY(80px)
  }
  30%{
    transform translateY(70px)
  }
  40%{
    transform translateY(60px)
  }
  50%{
    transform translateY(50px)
  }
  60%{
    transform translateY(45px)
  }
  70%{
    transform translateY(40px)
  }
  80%{
    transform translateY(35px)
  }
  90%{
    transform translateY(25px)
  }
  95%{
    transform translateY(15px)
  }
  100%{
    transform translateY(10px)
  }
}
</style>
