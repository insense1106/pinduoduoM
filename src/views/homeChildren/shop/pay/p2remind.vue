<template>
  <div class="p2remind">
    <div class="box">
      <span class="text1">
        <span class="textc1">为方便您购买,请提前登录 😄 </span>
        <router-link class="textc2" to=""
          >立即登录<i class="textc3 icon-arrow-right2"
        /></router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p2remind',
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
.p2remind
    .box
        text-align center
        padding 10px 0
        box-shadow 0px 0px 5px 1px grey inset
        .text1
            position relative
            color grey
            font-size 1rem
            vertical-align center
            .textc2
                vertical-align bottom
                color black
                &:hover
                    color red
                .textc3
                    position absolute
                    top 1px
                    right -21px
</style>
