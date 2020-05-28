<template>
  <div class="comprehensive_comment">
    <div class="box">
      <div class="content">
        <div class="item1">
          <h1>商品所属店铺评价</h1>
          <h1>查看全部 <i class="icon-pencil"></i></h1>
        </div>
        <hr />
        <div class="item2">
          <ul>
            <li v-for="(item, index) in 6" :key="index">
              <span>质量很好{{ item }}</span>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comprehensive_comment',
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
.comprehensive_comment
    .box
        .content
            .item1
                display flex
                justify-content space-between
            .item2
                ul
                    display flex
                    width 20rem
                    flex-wrap wrap
                    justify-content space-around
                    li
                        flex-basis 6rem
                        margin 0.2rem 0
                        background-color lightgrey
                        font-size 0.6rem
                        border-radius 2rem
                        color black
</style>
