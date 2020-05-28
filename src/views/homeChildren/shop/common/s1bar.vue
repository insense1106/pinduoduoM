<template>
  <div class="root">
    <div class="container2">
      <div class="logo">
        <a href="javascript:;"></a>
      </div>
      <div class="link">
        <a class="la" href="javascript:;">
          即将上映
          <div class="children">
            <ul>
              <li class="product" v-for="(item, index) in list[0]" :key="index">
                <!-- target="_blank" -->
                <a href="javascript:;">
                  <div class="pro-img">
                    <img :src="item.img | img_filter('100.110')" alt="#" />
                  </div>
                  <div class="pro-name" v-text="item.nm"></div>
                  <div class="pro-price" v-text="item.rt"></div>
                </a>
              </li>
            </ul>
          </div>
        </a>

        <a class="la" href="javascript:;"
          >Redmi红米
          <div class="children">
            <ul>
              <li class="product" v-for="(item, index) in list[1]" :key="index">
                <!-- target="_blank" -->
                <a href="javascript:;">
                  <div class="pro-img">
                    <img :src="item.img | img_filter('100.110')" alt="#" />
                  </div>
                  <div class="pro-name" v-text="item.nm"></div>
                  <div class="pro-price" v-text="item.rt"></div>
                </a>
              </li>
            </ul>
          </div>
        </a>
        <a class="la" href="javascript:;"
          >电视
          <div class="children">
            <ul>
              <li class="product" v-for="(item, index) in list[2]" :key="index">
                <!-- target="_blank" -->
                <a href="javascript:;">
                  <div class="pro-img">
                    <img :src="item.img | img_filter('100.110')" alt="#" />
                  </div>
                  <div class="pro-name" v-text="item.nm"></div>
                  <div class="pro-price" v-text="item.rt"></div>
                </a>
              </li>
            </ul></div
        ></a>
      </div>
      <div class="other">
        <input type="text" placeholder="搜索" list="list" />
        <datalist id="list">
          <option value="历史记录1"></option>
          <option value="历史记录2"></option>
        </datalist>
        <i class="icon-search" @click="search"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's1bar',
  components: {},
  props: {},
  data() {
    return { list: [], user: null };
  },
  computed: {},
  watch: {},
  created() {
    this.http_server(2);
    this.http_server(3);
    this.http_server(4);
  },
  mounted() {},
  methods: {
    search() {
      // console.log('search');
    },
    //http
    async http_server(id) {
      let res = await this.$movie.nowplaying_movie(id);
      res.data.msg == 'ok'
        ? this.list.push(
            res.data.data.movieList
              .sort((a, b) => {
                a - b;
                return 0.5 - Math.random();
              })
              .slice(0, 6)
          )
        : console.log(res.data.msg);
    }
    //login}
  },
  filters: {
    img_filter(url, size) {
      return url.replace(/w\.h/g, size);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './mixin'
.root
    .container2
        background: conic-gradient(
            #9ed110,
            #50b517,
            #179067,
            #3c5279,
            #9f49ac,
            #cc42a2,
            #ff3ba7,
            #ec783a,
            #a36d36,
            #a37615,
            #ffcc00,
            #928e0e
        );
        display: flex;
        justify-content: space-between;
        height: 112px;
        align-items: center;
        position relative

        .logo
            display: inline-block;
            width: 55px;
            height: 55px;
            overflow: hidden;
            a
                display: inline-block;
                width: 110px;
                height: 100%;
        .logo a:before
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('../assets/img/bear.jpg') no-repeat center;
            background-size: 55px;
            transition: margin 0.3s;
         .logo a:after
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('../assets/img/dog.jpg') no-repeat center;
            background-size: 55px;
        .logo a:hover:before
            margin-left: -55px;
            transition: margin 0.3s;
        .link
            .la
                font-size 1rem
                text-decoration none
                &:hover
                    color red
                    .children
                        opacity 1
                        height 220px
                        z-index 990
                .children
                    position absolute
                    top:112px
                    left 0
                    width 100vw
                    border 1px solid $c3
                    box-shadow   0px 13px 14px 0px $c4
                    background-color $c11
                    // down shadow
                    // box-shadow   0px -3px 4px 0px $c4
                    /*上边阴影  红色*/
                    // display none
                    height 0
                    opacity 0
                    overflow hidden
                    // visibility hidden
                    transition all 0.5s 0.5s
                    .product
                        float left
                        width 16.6%
                        height 220px
                        font-size 12px
                        text-align center
                        a
                            display inline-block
                            color black
                            position relative
                            &:hover
                                color red

                            &:after
                                content ' '
                                position absolute
                                height 110px
                                border-left 1px solid grey
                                top 20px
                                right -50px

                            .pro-img
                                height 137px
                                img
                                    height 110px
                                    margin-top 26px
                            .pro-name
                                margin px 0  8px 0
                                font-size 31px
                            .pro-price
                                font-size 31px

        .other
             background-color: #fff;

        .other input
            box-sizing: border-box;
            padding-left: 8px;
            width: 100px;
            border: none
            &:focus
                outline: none;
</style>
