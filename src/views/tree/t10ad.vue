<template>
  <div class="t10ad" v-if="show" @click="is_show()">
    <div class="box">
      <h1>点击关闭</h1>
      <h1>{{ count }} 秒 之后 将会关闭广告</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 't10ad',
  components: {},
  props: {},
  data() {
    return {
      count: 2,
      show: true
    };
  },
  computed: {},
  watch: {},
  created() {
    this.remmind_time();
  },
  mounted() {},
  destroyed() {},
  methods: {
    remmind_time() {
      let interval = setInterval(() => {
        this.count -= 1;
        // console.log('setInterval还在执行');
      }, 1000);
      let timer = setTimeout(() => {
        clearInterval(interval);
      }, 2000);
      this.count == 0 ? clearTimeout(timer) : 0;
    },
    is_show() {
      this.show = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.t10ad
    color red
    .box
        position fixed
        width 100%
        height 96%
        background-color darkblue
        top 0%
        left 50%
        transform translate(-50%)
        z-index 999
</style>
