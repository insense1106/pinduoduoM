<template>
  <div class="ad11">
    <h1>{{ msg }}</h1>
    <h1 v-if="flag1">还剩{{ seconds }}秒</h1>
    <loading v-if="loading" />
  </div>
</template>

<script>
export default {
  name: 'ad11',
  components: {},
  props: {},
  data() {
    return {
      seconds: 5,
      loading: true,
      msg: '正在请求服务器数据,请等待',
      s: null,
      flag1: true
    };
  },
  computed: {},
  watch: {},
  created() {
    this.time();
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
      clearInterval(this.s);
      this.msg = '数据加载完毕';
      this.flag1 = false;
    }, 5000);
  },
  destroyed() {},
  methods: {
    time() {
      this.s = setInterval(() => {
        this.seconds -= 1;
      }, 1000);
    }
  }
};
</script>

<style lang="stylus" scoped>
.ad11
    color black
</style>
