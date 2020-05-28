<template>
  <div class="root">
    <div class="header">
      <span class="text_left">
        手机
      </span>
      <span class="text_right">查看全部 <i class="icon-forward3"></i> </span>
    </div>
    <div class="shop">
      <div class="left"></div>
      <div class="right">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li class="line" />

          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ad6',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
colors =black lightblue orange cyan #eee brown orangered lightyellow darkgreen green
num=0
computed(a)
     a = a+1
.root
    .header
        font-size 1.3rem
        overflow hidden
        .text_left
            float left
        .text_right
            float right

            i
                display inline-block
                background-color grey
                border-radius 50%
                vertical-align middle
    .shop
        height  614px
        background-color $c2
        .left
            height 100%
            width 234px
            background-color blue
            float left
        .right
            height 100%
            overflow hidden
            ul
                height 100%
                li
                    height 49.5%
                    margin-left 10px
                    width 23.9%
                    background-color red
                    float left
                    for i in 1 2 3 4 6 7 8 9
                        &:nth-child({i})
                            background-color colors[i]
                .line
                    height 10px
                    width 100%
                    background-color white
</style>
