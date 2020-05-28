<template>
  <div class="root">
    <!-- 选项栏 -->
    <!-- :class="{ active:$route.path.includes('location')  }" -->

    <div class="tabbar2">
      <router-link
        to="/home/suggestion/location"
        :class="{ active: $route.path.includes('location') }"
        >{{ $store.state.movie.city.nm }}</router-link
      >
      <router-link
        to="/home/suggestion/nowplaying"
        :class="{ active: $route.path.includes('nowplaying') }"
        >正在上映</router-link
      >
      <router-link
        to="/home/suggestion/comingplaying"
        :class="{ active: $route.path.includes('comingplaying') }"
        >即将上映</router-link
      >
      <router-link
        to="/home/suggestion/search"
        :class="{ active: $route.path.includes('search') }"
        >搜索</router-link
      >
    </div>
    <div class="routerview">
      <!-- 路由视图 -->

      <router-view class="default"></router-view>

      <router-view class="sec" name="sec"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'suggestion',
  components: {},
  data() {
    return {
      msg: 'asd123asd22asd33asd44'
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
h4 {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.active {
  color: red;
}
.tabbar {
  position: absolute;
  z-index: 999;
  top: 96px;
}
.routerview {
  /* background-color: rgb(131, 130, 130); */
}
.default {
  height: 70vh;
  display: block;
}
.sec {
  height: 40%;
}
.tabbar2 {
  display: flex;
  height: 40px;
}
.tabbar2 a {
  flex: 1;
  height: 100%;

  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  color: red;
}
</style>
