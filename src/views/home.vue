<template>
  <div class="root">
    <div class="tabbar border-1px">
      <router-link
        to="/home/page"
        :class="{ active: $route.path.includes('page') }"
        >首页</router-link
      >
      <router-link
        to="/home/Android"
        :class="{ active: $route.path.includes('Android') }"
        >CSS</router-link
      >
      <router-link
        to="/home/houduan"
        :class="{ active: $route.path.includes('houduan') }"
        >JDapp</router-link
      >
      <router-link
        to="/home/qianduan"
        :class="{ active: $route.path.includes('qianduan') }"
        >前端</router-link
      >
      <router-link
        to="/home/music"
        :class="{ active: $route.path.includes('music') }"
        >音乐</router-link
      >
      <router-link
        to="/home/suggestion"
        :class="{ active: $route.path.includes('suggestion') }"
        >电影</router-link
      >
      <router-link
        to="/home/functioncomponent"
        :class="{ active: $route.path.includes('functioncomponent') }"
        >函数组件</router-link
      >
      <router-link
        to="/home/neteasecloud"
        :class="{ active: $route.path.includes('neteasecloud') }"
        >网易云</router-link
      >
      <router-link
        to="/home/shop"
        :class="{ active: $route.path.includes('shop') }"
        >商城</router-link
      >
      <router-link
        to="/home/question"
        :class="{ active: $route.path.includes('question') }"
        >题库</router-link
      >
    </div>
    <transition>
      <router-view class="routerview"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handlerChange(item, index) {
      this.$router.push(this.sub_route_list[index]);
      console.log(this.sub_route_list[index]);
    }
  }
};
</script>

<style lang="stylus" scoped>
.root
  width 20rem
  .tabbar
    display: flex;
    flex-wrap: wrap;
    font-size: 0.5rem;
    &>a
      margin 0 0.13rem

.active {
  color: red;
}
.border-1px {
  border-bottom: 4px solid;
}
@media (max-width: 960px) {
  .border-1px {
    border-bottom: 1px solid;
  }
}



.routerview
  transition all 1s
  background-color #fff
  position absolute
  animation slide 2s

@keyframes slide {
    0%{
        transform translateX(-100%)
    }
    100%{
        transform translateX(0%)
    }
}
.v-enter
  transform translateX(-100%)
.v-enter-to
  transform translateX(0%)
.v-leave
  transform translateX(0%)
.v-leave-to
  transform translateX(100%)
</style>
