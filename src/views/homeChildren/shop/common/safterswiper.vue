<template>
  <div class="root">
    <div class="wrapper">
      <div class="special">
        <ul>
          <li>
            <a class="special-a" href="javascript:;"
              ><i class="special-a-i icon-search"></i><span>企业团购</span></a
            >
          </li>
          <li>
            <a class="special-a" href="javascript:;"
              ><i class="special-a-i icon-search"></i><span>企业团购</span></a
            >
          </li>
          <li>
            <a class="special-a" href="javascript:;"
              ><i class="special-a-i icon-search"></i><span>企业团购</span></a
            >
          </li>
          <li>
            <a class="special-a" href="javascript:;"
              ><i class="special-a-i icon-search"></i><span>企业团购</span></a
            >
          </li>
          <li>
            <a class="special-a" href="javascript:;"
              ><i class="special-a-i icon-search"></i><span>企业团购</span></a
            >
          </li>
          <li>
            <a class="special-a" href="javascript:;"
              ><i class="special-a-i icon-search"></i><span>企业团购</span></a
            >
          </li>
        </ul>
      </div>
      <div class="item">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50beb6e77e316ff0637d79ad1869572e.jpg?w=632&h=340"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'safterswiper',
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
@import('./mixin')
.root
    height 150px
    .wrapper
        display flex
        justify-content space-around
        align-items center
        height 100%
        .special
            width 20%
            background-color $c1
            height 100%
            ul
                display flex
                flex-wrap wrap
                text-align center

                li
                    flex-basis 32%
                    margin-top 10px
                    .special-a
                        text-decoration none
                        .special-a-i
                            display block
                            font-size 2.1rem
                            color black
                        span
                            font-size 1rem
                            display block
                            color black
                    &:hover
                        .special-a-i
                        span
                            color $c3
                    &:nth-child(odd)
                        border-left 1px solid
                    &:nth-child(even)
                        border-left 1px solid



        .item
            flex 1
            height 100%
            background-color $c4
            box-sizing border-box
            margin-left 10px
            img
                width 100%
                height 100%
</style>
