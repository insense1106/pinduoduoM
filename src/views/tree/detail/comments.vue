<template>
  <div class="comments">
    <div class="box">
      <div class="content">
        <div class="top">
          <h1>商品评价10万+</h1>
          <h1>查看全部 <i class="icon-pencil"></i></h1>
        </div>
        <hr />
        <div class="item2">
          <span>正品12333</span>
          <span>质量很好442312</span>
          <span>实用33333</span>
        </div>
        <hr />
        <div class="item3">
          <ul>
            <li v-for="(item, index) in 2" :key="index">
              <div class="logo">
                <img src="./kanke.jpg" alt="" /> <span>用户名</span>
              </div>
              <hr />
              <p>
                评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息
              </p>
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
  name: 'comments',
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
.comments
    padding 1rem
    .box
        .content
            .top
                display flex
                justify-content space-between
            .item2
                padding-top 0.2rem
                display flex
                justify-content space-around
                font-size 0.5rem
                span
                    background-color darkgreen
                    color #fff
            .item3
                ul
                    li
                        padding 0.2rem
                        .logo
                            display flex
                            align-items center
                            img
                                width 1rem
                                height 1rem
                                border-radius 50%
                            span
                                padding-left 0.4rem
                        p
                            padding 0.4rem
                            text-align left
                            // height 2rem
                            // overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
</style>
