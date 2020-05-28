<template>
  <div class="sellerlist">
    <div class="box">
      <div class="content">
        <ul>
          <li v-for="(item, index) in 15" :key="index"></li>
        </ul>
      </div>
      <hr />
      <div class="detail">
        <ul>
          <li v-for="(item, index) in 20" :key="index"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sellerlist',
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
// @import '@/assets/css/mixin_global'
.sellerlist
    // margin-bottom 10rem
    padding 0.5rem
    .box
        .content
                ul
                    display flex
                    justify-content space-around
                    flex-wrap wrap
                    height 10rem
                    overflow-y scroll
                    // outline 1px solid

                    li
                        width 6rem
                        height 4rem
                        margin 0.5rem 0
                        background-color grey
        .detail
            ul
                li
                    width 80%
                    height 8rem
                    background-color grey
                    margin 0.5rem auto
</style>
