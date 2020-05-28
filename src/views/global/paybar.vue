<template>
  <div class="paybar">
    <div class="box">
      <div class="content">
        <ul>
          <!-- 店铺 收藏 联系客服 -->
          <li>
            <!-- 店铺 -->
            <div @click="handler_route_seller()">
              <i class="icon-camera"></i>
              <span>
                店铺
              </span>
            </div>
            <!-- 收藏 -->
            <div
              @click="handler_remmber_seller()"
              :class="{ active_remmber: flag_remmber }"
            >
              <i class="icon-pencil"></i>
              <span v-text="flag_remmber ? '已收藏' : '收藏'"> </span>
            </div>
            <!-- 联系客服 -->
            <div @click="handler_talk_server()">
              <i class="icon-circle-down"></i>
              <span>
                联系客服
              </span>
            </div>
          </li>
          <!-- 单独购买 发起拼单 -->
          <li @click="handler_single_pay">
            <span>$:1600</span>
            <span>单独购买</span>
            <!-- 显示支付页面 -->
            <div class="options" v-if="flag_options">
              <!-- 商品价格信息 -->
              <div class="close">
                <button @click.stop="handler_close">关闭</button>
              </div>
              <div class="bar1">
                <img src="./dogsee.jpg" alt="#" />
                <div class="text">
                  <span>价格:____{{ goods.fid }}</span>
                  <span>商品信息____:{{ goods.title }}</span>
                </div>
              </div>
              <!-- <button>{{ $store.state.music.list_pay_pdd }}</button> -->
              <hr />
              <!-- 商品类型信息 -->
              <div class="bar2">
                <span>类型</span>
                <div @click.stop>
                  <button>{{ goods.type }}</button>
                </div>
              </div>
              <hr />
              <!-- action="http://localhost:80/xiaomi/random_data" -->
              <!-- 表单 -->
              <form @submit.prevent="handler_submit" v-if="data">
                <!-- 单选框 -->
                <div
                  class="checkbox"
                  v-for="(item, index) in data"
                  :key="index"
                >
                  <input type="radio" name="price" :value="item.price" />价格{{
                    item.price
                  }}
                </div>

                <input type="submit" value="购买" />
              </form>
            </div>
          </li>
          <!-- 发起拼单 -->
          <li><span>$:1599</span> <span>发起拼单</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paybar',
  components: {},
  props: {
    goods: {
      type: Object,
      default() {
        return '';
      }
    }
  },
  data() {
    return { flag_options: false, flag_remmber: false, data: null };
  },
  computed: {},
  watch: {},
  created() {
    this.http();
    console.log(this.goods);
  },
  mounted() {},
  destroyed() {},
  methods: {
    handler_route_seller() {
      this.$router.push({ name: 'sellerpage' });
    },
    // 支付页面
    handler_single_pay() {
      this.flag_options = true;
      // this.$forceUpdate();
    },
    //收藏店铺
    handler_remmber_seller() {
      this.flag_remmber = !this.flag_remmber;
    },
    handler_talk_server() {
      this.$router.push({ name: 'server' });
    },
    // 获取 radio 数据
    async http() {
      let res = await this.$request.xiaomi_random_data();
      this.data = res.data.random_data.slice(0, 3);
    },
    // 购买 提交表单
    handler_submit(e) {
      // console.log(e);
      // let array_obj = [];
      // let obj = null;
      // 获取form对象
      // console.log(e.target);
      // 获取form 内部的控件 对象的集合
      // console.log(e.target.elements);
      // 遍历集合
      Object.values(e.target.elements).forEach(item => {
        // 判断 选中的 控件
        if (item.checked) {
          // 封装 选中控件的data
          // item
          // 发送数据至服务器
          this.$request
            .xiaomi_goods({
              name: item.name,
              price: item.value
            })
            .then(res => {
              // 请求服务器成功
              // res.data.user_data
              // 把数据保存到vuex
              this.$store.dispatch(
                'music/actions_list_pay_pdd',
                res.data.user_data
              );
              // 判断vuex数据 是否保存成功
              //跳转路由
              this.$router.push({ name: `userpage` });
            });

          // 根据 响应 进行页面跳转
        }
      });
      // console.log(array_obj);
    },
    handler_close() {
      this.flag_options = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mixin_global'
.paybar
    position fixed
    bottom 1.5rem
    background-color darkred
    left 0%
    width 100%
    z-index 990
    padding-bottom 4rem
    // margin-bottom 1rem
    .box
        .content
            position relative
            ul
                display flex
                li
                    height 3rem
                    background-color $c7
                    flex_all_center()
                    justify-content space-around
                    color black
                    font-size 0.7rem
                    .options
                        position absolute
                        top -300%
                        left 0
                        height 12rem
                        width 100%
                        animation-name slide_to_up
                        animation-duration 0.5s
                        animation-iteration-count 1
                        transition all 1s
                        background-color $c4
                        .bar1
                            flex_all_center()
                            // border-bottom 0.01rem solid
                            img
                                // align-self flex-start
                                position relative
                                top -20%
                                // left 10%

                                width 4rem
                                height 4rem
                            .text
                                display flex
                                flex-direction column
                                text-align left
                                padding 0.2rem
                                &>span:nth-child(1)
                                  color red
                        .bar2
                            flex_all_center_column()
                            // justify-content flex-start
                            padding 0 1rem
                            &>span
                              align-self flex-start

                            &>div
                              margin-top 0.5rem
                              align-self flex-start
                              &>button
                                margin-right 1rem
                                border none
                                border-radius 1rem
                                width 3rem
                        form
                            flex_all_center()
                            flex-wrap wrap
                            &>div
                              flex-basis 25%
                              height 1rem
                              margin 0.2rem 0.5rem
                              background-color $c3
                              &>input
                                height 1rem
                                // width 100%
                                // background-color $c1
                            &>input
                              width 5rem
                              height 2rem
                              background-color yellow
                    &>div
                        display flex
                        flex-direction column
                        i
                            margin-bottom 0.3rem
                    &:nth-child(1)
                        flex-basis 45%
                        flex_all_center()
                        justify-content space-around
                        color #fff
                    &:nth-child(2)
                        flex-basis 25%
                        flex-direction column
                        background-color red
                    &:nth-child(3)
                        flex-basis 35%
                        flex-direction column
@keyframes slide_to_up {
    0%{
        top 0%
        opacity 0
      }
    100%{
        top -300%
        opacity 1
      }
}
.active_remmber
  color blue
</style>
