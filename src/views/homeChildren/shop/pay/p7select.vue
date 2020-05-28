<template>
  <div class="p7select">
    <div class="box">
      <header><span>选择版本</span></header>
      <div class="version">
        <ul>
          <li
            ref="version"
            v-for="(item, index) in list_version"
            :key="index"
            @click="select(index)"
          >
            <span>{{ item.msg }}</span>
          </li>
        </ul>
      </div>
      <div class="buy">
        <div class="text1">
          <span>小米笔记本15.6" 2019款 四核i5 8G 512G MX110 深空灰</span>
          <span>
            4299元
          </span>
        </div>
        <div class="price">
          <span>总价:{{ $store.state.xiaomi.goods.price }}元</span>
          <hr />
        </div>
      </div>
      <div class="button">
        <button>加入购物车</button>
        <div>
          <button>喜欢</button>
          <button @click="discount_vip_price">VIP价格</button>
        </div>
        <button @click="discount_price">会员价格</button>
      </div>
      <div class="server-msg">
        <h1>原价:{{ price }}</h1>
        <h1>原价:{{ get_price }}</h1>
        <h1>原价:{{ test }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'p7select',
  components: {},
  props: {},
  data() {
    return {
      list_version: null
    };
  },
  computed: {
    ...mapState({
      price: state => state.xiaomi.goods.price,
      menus: state => state.NotifyService.actionSheet.menus
    }),
    ...mapGetters('xiaomi', ['get_price', 'test'])
  },
  watch: {},
  created() {
    this.http();
  },
  mounted() {},
  methods: {
    async http() {
      let res = await this.$http.get('http://localhost:80/xiaomi/p7select');
      res
        ? (this.list_version = res.data.p7select)
        : console.log('res not exist');
    },
    select(index) {
      for (let item of this.$refs.version) {
        item.classList.remove('active');
      }
      this.$refs.version[index].classList.add('active');
    },
    discount_price() {
      this.$store.commit('xiaomi/update_goods_price', 100);
    },
    discount_vip_price() {
      this.$store.dispatch('xiaomi/vip_price', 998);
    }
  }
};
</script>

<style lang="stylus" scoped>
.p7select
    margin-top 30px
    padding-left 50px
    .box
        header
            font-size 2rem
            margin-bottom 20px
        .version
            ul
                display flex
                flex-wrap wrap
                li

                    flex-basis 45%
                    height 40px
                    // border 1px solid grey
                    outline 1px solid
                    line-height 40px
                    text-align center
                    font-size 1rem
                    &:nth-child(2)
                        margin-left 20px
                    &:last-child
                        margin-top 13px
                    &:hover
                        color red
        .buy
            height 120px
            background-color #f7f7f7
            width 94%
            margin-top 20px
            box-sizing border-box
            padding-right 20px
            padding-left 20px
            .text1
                padding-top 10px
                overflow hidden
                font-size 1rem
                padding-bottom 10px
                span
                    float left
                    &:last-child
                        float right
            .price
                span
                    font-size 2rem
                    color red
        .button
            margin-top 20px
            width 94%
            overflow hidden
            button
                font-size 1rem
                &:first-child
                    width 40%
                    height 50px
                    background-color #a7f1f1
                    float left
                &:last-child
                    width 25%
                    height 50px
                    background-color  #a7f1f1
                    float right
        .server-msg
            margin-top 20px
            width 94%
            height 100px
            background-color #d7f1f1
.active
    border 1.5px solid red
    color red
    background-color lightgrey
</style>
