<template>
  <div class="seller">
    <div class="box">
      <div class="content">
        <div class="item1">
          <div class="logo">
            <img src="./kanke.jpg" alt="#" />
            <div class="logo_text">
              <span class="seller-name">商家名称</span>
              <div class="seller-detail">
                <span>商家数量:1</span>
                <span>已经销售数量:10万+</span>
              </div>
            </div>
          </div>
          <div class="button">
            <button>浏览更多</button>
          </div>
        </div>
        <hr />
        <div class="item2">
          <ul>
            <li v-for="(item, index) in 3" :key="index">
              <span> 描述相符 <i class="icon-checkmark"></i> </span>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seller',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/mixin_global'
.seller
    padding 0.5rem
    .box
        .content
            .item1
                flex_between()
                .logo
                    display flex
                    align-items center
                    img
                        height 1.5rem
                        width 1.5rem
                        border-radius 50%
                    .logo_text
                        font-size 0.7rem
                        padding-left 0.5rem
                        display flex
                        flex-direction column
                        .seller-name
                            font-weight bolder
                            text-align left
                            color darkred
                            font-size 0.7rem
                        .seller-detail
                            display flex
                            justify-content space-between
                            span:last-child
                                margin-left 1rem
                .button
                    button
                        border 0.01rem solid black
                        border-radius 0.2rem
                        color green
            .item2
                ul
                    display flex
                    justify-content space-between
                    li
                        flex-basis 25%
                        background-color darkgreen
                        color white
                        border-radius 0.5rem
                        font-size 0.6rem
            .test
                borderbottom()
</style>
