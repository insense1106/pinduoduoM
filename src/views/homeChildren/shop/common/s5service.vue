<template>
  <div class="root">
    <div class="container2">
      <ul>
        <li><i class="icon-search"></i><span>预约维修废物</span></li>
        <li><i class="icon-search"></i><span>7天无理由退货</span></li>
        <li><i class="icon-search"></i><span>15天免费换货</span></li>
        <li><i class="icon-search"></i><span>预约维修服务</span></li>
        <li><i class="icon-search"></i><span>满150包邮</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 's5service',
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
.root
    .container2
        ul
            li
                width 19%
                display inline-block
                text-align center
                border-right 1px solid
                &:last-child
                    border none
                i
                    display inline-block
                    width 20px
                    height 19px
                    margin-right 5px
</style>
