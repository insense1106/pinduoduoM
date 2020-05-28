<template>
  <div class="p1nav">
    <div class="nav">
      <div class="left">
        <span class="text1">
          <span class="textc1">
            清苦
          </span>
          <span class="textc2">林中曲径</span></span
        >
      </div>
      <div class="right">
        <ul>
          <li v-for="(item, index) in list_title" :key="index">
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p1nav',
  components: {},
  props: {},
  data() {
    return {
      list_title: ['概述', '参数', 'F码通道', '用户评价', '咨询客服']
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.p1nav
    // margin-top 100px
    height 50px
    border-bottom 1px solid
    background-color #F1F2F3
    .nav
        display flex
        height 100%
        .left
            margin-left 40px
            flex 1
            height 100%
            .text1

                .textc1
                    border-right  1px solid grey
                    padding-right 5px
                    font-size 1rem
                .textc2
                    line-height 50px
                    font-size 1rem
                    margin-left 10px

        .right
            margin-right 100px
            height 100%
            ul
                li
                    margin-right 10px
                    height 100%
                    float left
                    font-size 1rem
                    span
                        line-height 50px
                        padding-right 10px
                        border-right 1px solid grey
                        &:hover
                            color red
                    &:last-child
                        span
                            &:last-child
                                border 0px
</style>
