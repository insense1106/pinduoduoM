<template>
  <div class="root">
    <div class="container">
      <div class="swiper-box">
        <div class="ss-menu">
          <ul class="ss-menu-wrapper">
            <li class="ss-menu-wrapper-item">
              <router-link to="/home/shop/goodslist/c1" class="ss-item-a"
                >手机电话卡
              </router-link>
              <div class="ss-children">
                <ul v-for="(list, index) in list_menu_child" :key="index">
                  <li v-for="(item, index) in list" :key="index">
                    <a class="ss-children-a" href="javascript:;">
                      <img :src="item.img" alt="#" />
                      <span class="name">
                        {{ item.name }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="ss-menu-wrapper-item">
              <router-link
                to="/home/shop/goodslist/c2"
                class="ss-item-a"
                href="javascript:;"
                >电视盒子</router-link
              >
              <div class="ss-children">
                <ul v-for="(list, index) in list_menu_child" :key="index">
                  <li v-for="(item, index) in list" :key="index">
                    <a class="ss-children-a" href="javascript:;">
                      <img :src="item.img" alt="#" />
                      <span class="name">
                        {{ item.name }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="ss-menu-wrapper-item">
              <router-link
                to="/home/shop/goodslist/c3"
                class="ss-item-a"
                href="javascript:;"
                >笔记本电脑</router-link
              >
              <div class="ss-children">
                <ul v-for="(list, index) in list_menu_child" :key="index">
                  <li v-for="(item, index) in list" :key="index">
                    <a class="ss-children-a" href="javascript:;">
                      <img :src="item.img" alt="#" />
                      <span class="name">
                        {{ item.name }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="ss-menu-wrapper-item">
              <router-link
                to="/home/shop/goodslist/c4"
                class="ss-item-a"
                href="javascript:;"
                >平板电脑</router-link
              >
              <div class="ss-children">
                <ul v-for="(list, index) in list_menu_child" :key="index">
                  <li v-for="(item, index) in list" :key="index">
                    <a class="ss-children-a" href="javascript:;">
                      <img :src="item.img" alt="#" />
                      <span class="name">
                        {{ item.name }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="ss-menu-wrapper-item">
              <router-link
                to="/home/shop/goodslist/c5"
                class="ss-item-a"
                href="javascript:;"
                >家电插线板</router-link
              >
              <div class="ss-children">
                <ul v-for="(list, index) in list_menu_child" :key="index">
                  <li v-for="(item, index) in list" :key="index">
                    <a class="ss-children-a" href="javascript:;">
                      <img :src="item.img" alt="#" />
                      <span class="name">
                        {{ item.name }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="ss-menu-wrapper-item">
              <router-link
                to="/home/shop/goodslist/c6"
                class="ss-item-a"
                href="javascript:;"
                >出行穿戴</router-link
              >
              <div class="ss-children">
                <ul v-for="(list, index) in list_menu_child" :key="index">
                  <li v-for="(item, index) in list" :key="index">
                    <a class="ss-children-a" href="javascript:;">
                      <img :src="item.img" alt="#" />
                      <span class="name">
                        {{ item.name }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="ss-menu-wrapper-item">
              <router-link
                to="/home/shop/goodslist/c7"
                class="ss-item-a"
                href="javascript:;"
                >电源配件</router-link
              >
              <div class="ss-children">
                <ul v-for="(list, index) in list_menu_child" :key="index">
                  <li v-for="(item, index) in list" :key="index">
                    <a class="ss-children-a" href="javascript:;">
                      <img :src="item.img" alt="#" />
                      <span class="name">
                        {{ item.name }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="ss-menu-wrapper-item">
              <router-link
                to="/home/shop/goodslist/c8"
                class="ss-item-a"
                href="javascript:;"
                >智能路由器</router-link
              >
              <div class="ss-children">
                <ul v-for="(list, index) in list_menu_child" :key="index">
                  <li v-for="(item, index) in list" :key="index">
                    <a class="ss-children-a" href="javascript:;">
                      <img :src="item.img" alt="#" />
                      <span class="name">
                        {{ item.name }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <Swiper class="swiper-container" :options="swiper_options">
          <Swiper-slide
            class="slide"
            v-for="(item, index) in list_swiper_img"
            :key="index"
          >
            <a href="javascript:;">
              <img :src="item.img" alt="#" />
            </a>
          </Swiper-slide>
        </Swiper>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'sswiper',
  components: { Swiper, SwiperSlide },
  props: {},
  data() {
    return {
      swiper_options: {
        speed: 1000,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      list_swiper_img: [
        {
          id: 42,
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bd4174b8c5aad67a64864a5716ad152.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
        },
        {
          id: 43,
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/68b0ed7a659fa394384f13aaa7cc85dc.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
        },
        {
          id: 44,
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a38b1d56409913d5dc869023ade36d94.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
        },
        {
          id: 45,
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4aa0cbfad7de34618c4bebdbdeee4e1.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
        }
      ],
      list_menu_child: [
        [
          {
            img: require('../assets/img/b1.jpg'),
            id: 31,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 32,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b1.jpg'),
            id: 33,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 34,
            name: '心向往之'
          }
        ],
        [
          {
            img: require('../assets/img/b1.jpg'),
            id: 31,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 32,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b1.jpg'),
            id: 33,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 34,
            name: '心向往之'
          }
        ],
        [
          {
            img: require('../assets/img/b1.jpg'),
            id: 31,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 32,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b1.jpg'),
            id: 33,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 34,
            name: '心向往之'
          }
        ],
        [
          {
            img: require('../assets/img/b1.jpg'),
            id: 31,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 32,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b1.jpg'),
            id: 33,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 34,
            name: '心向往之'
          }
        ],
        [
          {
            img: require('../assets/img/b1.jpg'),
            id: 31,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 32,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b1.jpg'),
            id: 33,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 34,
            name: '心向往之'
          }
        ],
        [
          {
            img: require('../assets/img/b1.jpg'),
            id: 31,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 32,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b1.jpg'),
            id: 33,
            name: '心向往之'
          },
          {
            img: require('../assets/img/b2.jpg'),
            id: 34,
            name: '心向往之'
          }
        ]
      ]
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
@import('./mixin');
.root
    .swiper-box
        position relative
        margin-bottom 30px
        .ss-menu
            position absolute
            width 224px
            height 451px
            z-index 9
            padding-top 26px
            padding-bottom 26px
            box-sizing border-box
            // background-color #aee2e07a
            .ss-menu-wrapper
                position relative
                .ss-menu-wrapper-item
                    height 50px
                    .ss-item-a
                        position relative
                        font-size 1rem
                        color $c5
                        line-height 50px
                        padding-left 30px
                        text-decoration none
                        display block
                        &:after
                            content ' '
                            bgimg(25,25,'../assets/img/arrowright.jpg')
                            position absolute
                            top 13px
                            right 0
                    &:hover
                        background-color $c3
                        .ss-children
                            background-color $c3
                            height 451px
                            opacity 1



                    .ss-children
                        position absolute
                        left 224px
                        top -27px
                        width 80vw
                        z-index 20
                        height 0
                        opacity 0
                        overflow hidden
                        // height 451px
                        background-color $c7
                        transition all 1.5s  0.3s
                        outline 2 px solid $c1
                        ul
                            height 10%
                            margin-top 23px
                            display flex
                            justify-content space-around

                            li
                                flex 1
                                .ss-children-a
                                    text-decoration none
                                    text-align center
                                    display block
                                    height 100%
                                    img
                                        width  34px
                                        margin-right 10px
                                        vertical-align middle
                                        padding-bottom 10px




        .swiper-container
            height 451px
            .slide
                text-align center
                // background-color $c4
                img
                    height 100%;
        .swiper-pagination
            transform scaleX(4.5)
            position absolute
            left 50%
            transform translateX(-50%)
        .swiper-button-prev
            left 234px
</style>
