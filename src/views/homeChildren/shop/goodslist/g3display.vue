<template>
  <div class="root">
    <h1>明星产品</h1>
    <div class="content">
      <router-link to="" class="a1">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b33b75a39248b5195c41c9a16bce9fb.jpg?w=1708&h=868"
          alt=""
        />
      </router-link>
      <div class="right">
        <router-link class="a2" to="">我家的小西蒙</router-link>
        <span class="text1"
          >双模5G，骁龙865，弹出全面屏，索尼6400万双光学防抖四摄</span
        >
        <span class="text2"><span class="price">3799</span>元 起</span>
        <router-link class="a3" to="">立刻购买</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'g3display',
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
    height 500px
    .content
        width 80%
        margin auto
        height 400px
        margin-top 1px
        transition all  .7s
        .a1
            display inline-block
            font-size 0
            width 70%
            height 100%
            text-align center
            img
                height 100%
                width 100%
        .right
            color black
            width 30%
            height 100%
            float right
            display flex
            flex-direction column
            text-align center
            box-sizing border-box
            padding 30px 30px
            .a2
                font-size 2rem
                margin-top 20px
                color red
            .text1
                padding-left 20px
                margin-top 20px
                font-size 0.9rem
            .text2
                margin-top 20px
                font-size 0.9rem
                .price
                    font-size 2rem
                    color red
            .a3
                margin-top 20px
                font-size 0.9rem

                padding-left 20px
                color grey


        &:hover
            margin-top -5px
            box-shadow 0px 0px 15px 5px black
</style>
