<template>
  <div class="root">
    <div class="nav">
      <div class="logo">
        <router-link to="/home/shop">
          <i class="icon-backward2"></i>
          <i class="icon-forward3"></i>
        </router-link>
      </div>
      <div class="tab">
        <ul>
          <li class="li1" v-for="(item, index) in list_header" :key="index">
            <router-link class="a1" to=""
              >{{ item.content_name }}
              <div class="list_child" v-if="item.list_child">
                <ul>
                  <li
                    class="li2"
                    v-for="(item2, index) in item.list_child"
                    :key="index"
                  >
                    <router-link to="">
                      {{ item2.name }}
                    </router-link>
                    <i class="icon-forward3" />
                  </li>
                </ul>
              </div>
              <div class="list_img" v-if="item.list_img">
                <ul>
                  <li
                    class="li3"
                    v-for="(item3, index) in item.list_img"
                    :key="index"
                  >
                    <img class="img3" :src="item3.img" alt="#" />
                    <span>{{ item3.name }}</span>
                    <span>{{ item3.price }}</span>
                  </li>
                </ul>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="search"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'g1header',
  components: {},
  props: {},
  data() {
    return {
      list_header: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.http();
  },
  mounted() {},
  methods: {
    //
    async http() {
      let res = await this.$http.get('http://localhost:80/xiaomi/g1header');
      // let res2 = await this.$xiaomi('/g1header');
      this.list_header = res.data.list_header;
      // console.log(res2);
    }
  }
};
</script>

<style lang="stylus" scoped>
.root
    .nav
        position relative
        height 40px
        // background-color lightblue
        outline 1px solid
        display flex
        .logo
            margin-left 60px
            margin-right 60px
            a
                display inline-block
                background-color orange
                width 2.5rem
                overflow hidden
                i
                    font-size 2.5rem
                    transition all 0.5s
                &:hover
                    i:first-child
                        margin-left -2.5rem
        .tab
            ul
                display flex
                .li1
                    margin-left 30px
                    height  40px
                    .a1
                        font-size 1rem
                        line-height 40px
                    &:hover
                        .a1
                            color red
                        .list_child
                            opacity 1
                            height 420px
                            color black
                            transition height 1.5s .3s
                            .li2
                                &:hover
                                    color red
                                    a
                                        color red
                        .list_img
                            opacity 1
                            height 212px



                    .list_child
                        position absolute
                        background-color lightblue
                        left 60px
                        width 300px
                        opacity 0
                        // height 420px
                        height 0px
                        transition all 0.8s
                        outline 1px solid orange
                        z-index 999
                        ul
                            height 100%
                            flex-direction column
                            // padding 10px 10px
                            font-size 1rem
                            li
                                height 20%
                                overflow hidden
                                a
                                    float left
                                    display inline
                                    &:hover
                                        color red
                                i
                                    margin-top 10px
                                    display inline
                                    float right
                    .list_img
                        position absolute
                        left 0
                        outline 1px grey solid
                        height 0
                        background-color white
                        opacity 0
                        transition all 1s .5s
                        background-color  #eee
                        width 100%
                        z-index 999
                        ul
                            height 100%
                            display flex
                            .li3
                                overflow hidden
                                flex 1
                                display flex
                                flex-direction column
                                height 100%
                                border-right 1px solid grey
                                text-align center
                                box-sizing border-box
                                .img3
                                    height 80%
                                span
                                    display inline-block
                                    height 20%
                                    &:last-child
                                         margin-top -15px
</style>
