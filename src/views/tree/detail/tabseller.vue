<template>
  <div class="tabseller">
    <div class="tabbar" ref="tabbar">
      <ul>
        <li
          @click="handler_click(index)"
          v-for="(item, index) in 4"
          :key="index"
          :class="{ active: current_index == index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div ref="content" class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'tabseller',
  components: {},
  props: {
    flag_tabbar: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return { current_index: 0 };
  },
  computed: {},
  watch: {
    flag_tabbar() {
      console.log(this.flag_tabbar);
      if (this.flag_tabbar) {
        this.$refs.tabbar.classList.add('active_fixed');
      }
    }
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    handler_click(index) {
      this.current_index = index;

      this.$refs.content.classList.remove('content');
      this.$refs.content.classList.add('content_active');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/mixin_global';
.tabseller
    color black
    .tabbar
        height 2rem
        // flex_all_center_column()
        display flex
    .active_fixed
        position fixed
        width 100%
        top 10%
        z-index 999
        ul
            display flex
            width 100%
            justify-content space-around
            li
                line-height 2rem
                flex-basis 25%
                text-align center
                background-color $c5
                font-size 0.8rem
                // border-bottom 0.02rem solid
    .content
        height 100rem
        background-image: linear-gradient(to bottom, $c1 , $c2,$c3,$c4,$c5);
.active
    color white
    border-bottom 0.2rem solid  $c3
.content_active
    height 100rem
    background-color red
</style>
