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
          <div class="line" />

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <div class="line" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's4listgoods',
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
@import './mixin'
// $colors =black lightblue orange cyan #eee brown orangered lightyellow darkgreen green
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
        padding-top 20px
        .left
            height 100%
            margin-top 5px
            width 234px
            background-color $c1
            float left
            transition all 0.8s
            &:hover
              box-shadow 0px 10px 10px 5px grey
              margin-top -3px

        .right
            height 100%
            padding-bottom 5px
            overflow hidden
            ul
                height 100%
                // padding-top 5px
                // padding-bottom 10px

                li
                    height 49.5%
                    margin-left 10px
                    margin-top 5px
                    // margin-bottom 10px
                    width 23.9%
                    background-color red
                    float left
                    transition all 0.8s
                    for i in 1 2 3 4 6 7 8 9
                        &:nth-child({i})
                              background-color $colors[i]
                    &:hover
                      box-shadow    0px 10px 10px 5px grey;
                      background-color red
                      margin-top -5px
                      for i in 6 7 8 9
                        &:nth-child({i})
                          height 48%
                .line
                    height 10px
                    width 100%
                    background-color white
                    float left
</style>
