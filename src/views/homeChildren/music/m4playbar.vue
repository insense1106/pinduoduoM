<template>
  <div class="m4playbar">
    <div class="box">
      <div class="left">
        <img src="./assets/Vue_Music_Blur.png" alt="" />
        <span>VUE MUSIC</span>
      </div>
      <div class="right" @click="toggle_flag()">
        <img src="./assets/icon-play.png" alt="play" v-if="flag" />
        <img src="./assets/icon-pause.png" alt="pause" v-else />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm4playbar',
  components: {},
  props: {},
  data() {
    return {
      flag: true
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    toggle_flag() {
      this.flag = !this.flag;
    }
  }
};
</script>

<style lang="stylus" scoped>
.m4playbar
    color black
    height 50px
    // margin 0 10px
    .box
        height 100%
        display flex
        justify-content space-between
        align-items center
        background-image: linear-gradient(right bottom ,darkred, lightblue);
        .left
            margin-left 10px
            display flex
            align-items center
            img
                height 30px
                width 30px
            span
                margin-left 10px
                font-size 1rem
        .right
            margin-right 10px
            img
                height 30px
                width 30px
                cursor pointer
</style>
