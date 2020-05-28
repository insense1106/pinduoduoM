<template>
  <div class="t12tabbar" v-if="computed_display">
    <div class="box">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <router-link class="link" :to="item.path">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 't12tabbar',
  components: {},
  props: {},
  data() {
    return {
      list: [
        { path: '/tree/hot', name: '热门' },
        { path: '/tree/food', name: '食品' },
        { path: '/tree/house', name: '家纺' },
        { path: '/tree/type', name: '分类' },
        { path: '/tree/baidumap', name: '地图' },
        { path: '/tree/login', name: '登录' },
        { path: '/tree/goods', name: '热门' },
        { path: '/tree/goods', name: '热门' },
        { path: '/tree/goods', name: '热门' },
        { path: '/tree/goods', name: '热门' }
      ]
    };
  },
  computed: {
    computed_display() {
      return (
        !this.$route.path.includes('detail') &&
        !this.$route.path.includes('server')
      );
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.t12tabbar
  width 100%

  .box
    overflow-x scroll
    ul
      display flex
      width 200%

      li
        display flex
        flex-basis 20%
        height 2rem
        align-items center
        text-align: center;
        .link
          font-size 0.7rem
          // color black

.router-link-active
    color red
    border-bottom 0.1rem solid
</style>
