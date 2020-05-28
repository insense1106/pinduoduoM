<template>
  <div class="android">
    <div class="tabbar">
      <router-link
        to="/home/Android/ad1"
        :class="{ active: $route.path.includes('ad1') }"
        >左固定</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad2') }"
        to="/home/Android/ad2"
        >弹性布局</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad3') }"
        to="/home/Android/ad3"
        >css函数</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad4') }"
        to="/home/Android/ad4"
        >input</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad5') }"
        to="/home/Android/ad5"
        >案例5</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad6') }"
        to="/home/Android/ad6"
        >案例6</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad7') }"
        to="/home/Android/ad7"
        >案例7</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad8/123') }"
        to="/home/Android/ad8/123"
        >路由守卫案例123</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad8/456') }"
        to="/home/Android/ad8/456"
        >路由守卫案例456</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad9') }"
        to="/home/Android/ad9"
        >测试</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad10') }"
        to="/home/Android/ad10"
        >渐变和滚动轴横轴</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('Loading') }"
        to="/home/Android/Loading"
        >Loading</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad11') }"
        to="/home/Android/ad11"
        >加载动画的显示与隐藏</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad13') }"
        to="/home/Android/ad13"
        >rem适配</router-link
      >
      <router-link
        :class="{ active: $route.path.includes('ad14') }"
        to="/home/Android/ad14"
        >better_scroll</router-link
      >
    </div>
    <transition name="fade2">
      <router-view class="routerview"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Android',
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
    console.log(this.$route.path);
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.android
  .tabbar
    display: flex;
    justify-content: space-around;
    font-size: 0.4rem;
    flex-wrap: wrap;
    width 100%
    background-color darkgrey

    a
      flex-basis: 10%;
      height 2rem
      justify-content center
      display flex
      align-items center
      text-decoration: none;
      // color: rgb(79, 11, 240);
      // background-color: #fff;
      outline 1px solid
      text-align center
      margin 0.1rem 0
.routerview
  transition all  1.4s
  position absolute


.fade2-enter
  transform translateX(-100%)
  opacity 0.3
.fade2-enter-to
  transform translateX(0%)
  opacity 1
.fade2-leave
  opacity 1
  transform translateX(0%)
.fade2-leave-to
  transform translateX(100%)
  opacity 0.3
.fade2-enter-active
  background-color red
.fade2-leave-actvie
.active{

}
.router-link-active
    color red
    background-color  blue

@keyframes  fade {
  0%{
    transform scale(0)
  }
  50%{
    transform scale(1.5)
  }
  100%{
    transform scale(1)
  }

}
</style>
