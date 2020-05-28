<template>
  <div class="m3content">
    <div class="nav" v-if="nav">
      <router-link
        to="/home/music/rank"
        :class="{ active: $route.path.includes('rank') }"
        >排行榜</router-link
      >
      <router-link
        to="/home/music/recommend"
        :class="{ active: $route.path.includes('recommend') }"
        >推荐</router-link
      >
    </div>

    <transition>
      <!-- <keep-alive> -->
      <router-view class="routerview"></router-view>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'm3content',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      nav2: state => state.music.nav_show
    }),
    // ...mapGetters('music', ['getters_nav_show'])
    ...mapGetters('music', { nav: 'getters_nav_show' })
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.m3content
    .nav
        margin-top 10px
        font-size 1rem
        text-align center
        margin-bottom 10px
        a
            margin 50px



.active
  color darkgreen
.routerview
  transition all 1s
.v-enter
  transform  translateX(-100%)
.v-enter-to
  transform  translateX(0%)
.v-leave
  transform  translateX(0%)
.v-leave-to
  transform  translateX(100%)
.v-enter-active
  // background-color red
</style>
