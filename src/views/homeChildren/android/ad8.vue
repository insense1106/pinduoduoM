<template>
  <div class="root">
    <h1>路由守卫案例</h1>
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
  methods: {},
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter------------------执行');
    // console.log(this); // 这里获取不到上下文
    next();
  },
  //  同一个组件，param不同的是触发,常用与同一个组件当传入不通参数时，展示不同的数据
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate ----------------执行');
    console.log(this.$route);
    console.log(this.$route.params.id);
    console.log(this.$route.params);
    console.log(this.$route.path);
    console.log(this.$route.meta);
    console.log(this.$route.matched);
    console.log(this.$route.query);
    next();
  },
  //  该组件离开跳转到另外的组件时触发该钩子,常应用于用户表单，当用户填了一部分内容，需要提醒用户是否离开页面
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave ------------------执行');

    // if (global.confirm('are you sure')) {
    //   }
    next();
  }
};
</script>

<style lang="stylus" scoped></style>
