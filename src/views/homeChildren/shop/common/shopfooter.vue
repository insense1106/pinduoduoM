<template>
  <div>
    <div class="footer">
      <a href="javascript:;" class="logo">
        <img src="../assets/img/bear.jpg" alt="#" />
        <div>小米商城</div>
      </a>
      <div class="link">
        <a href="javascript:;">我家的小黑狗</a>
        <a href="javascript:;">我家的小黑狗</a>
        <a href="javascript:;">我家的小黑狗</a>
        <a href="javascript:;">我家的小黑狗我家的小黑狗</a>
      </div>
      <div class="copyright">
        copyright@2019 <a href="javascript:;">mi.future.com</a> All Rights
        Reserved
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopfooter',
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
.footer
    width 100vw
    // position fixed
    // bottom 15px
    text-align center
    background-color $c4
    padding-bottom 10px
    .logo
        display inline-block
        margin-top 20px
        text-decoration none
        img
            width 70px
            height 50px
        div
            color grey
            font-size 0.8rem
    .link
        margin-top 20px
        a
            color grey
            text-decoration none
            display inline-block
            padding-right 10px
            padding-left 10px
            border-right 1px solid
        a:last-child
            border none
    .copyright
        margin-top 10px
        a
            color $c5
            text-decoration none
</style>
