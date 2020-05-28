<template>
  <div class="root">
    <h1>动画</h1>
    <button @click="click">contorol</button>
    <hr />
    <div ref="b1">
      <div class="point"></div>
    </div>
    <div class="box">
      <div class="point"></div>
    </div>
    <div class="box">
      <div class="point"></div>
    </div>
    <div class="box">
      <div class="point"></div>
    </div>
    <div class="box">
      <div class="point"></div>
    </div>
    <div class="box">
      <div class="point"></div>
    </div>
    <div class="box">
      <div class="point"></div>
    </div>
    <div class="box">
      <div class="point"></div>
    </div>
    <div class="box">
      <div class="point"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ad7',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    click() {
      this.$refs.b1.classList.add('box');
      setTimeout(() => {
        this.$refs.b1.classList.remove('box');
      }, 3000);
    }
  }
};
</script>

<style lang="stylus" scoped>
colors =black lightblue orange cyan #eee brown orangered lightyellow darkgreen green
num=0
computed(a)
     a = a+1
.root
  .box
    .point
      width 100px
      height 100px
      border-radius 50%
      background-color red
      animation-name animation1
      // animation-timing-function ease
      animation-timing-function cubic-bezier(0,0,1,1)
      animation-duration 2s
      animation-delay .1s
      animation-iteration-count 2
      // animation-iteration-count infinite
      animation-direction alternate
      // animation-direction normal
      // animation-play-state: paused;
      // animation-play-state: running;
@keyframes animation1 {
  0% {

  }
  10% {
        background-color blue
  }
  20% {
        background-color yellow
  }
 30% {
        background-color orange
        // margin-left 100px
  }
  40% {
        background-color purple
        // margin-top 100px
  }
  50% {
        background-color brown
  }
  70% {
        background-color cyan
  }
  100%{
    margin-left 1200px
  }

}
</style>
