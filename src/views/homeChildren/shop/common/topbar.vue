<template>
  <div class="root" v-if="$route.path.includes('shop')">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城 </a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="!user" @click="login()">登录</a>
          <a href="javascript:;" v-if="!user">注册</a>
          <a href="javascript:;" v-if="user">{{ user }}</a>
          <a href="javascript:;" v-if="user">我的订单</a>
          <a href="javascript:;"> <i class="icon-search"></i> 购物车</a>
        </div>
      </div>

      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  components: {},
  props: {},
  data() {
    return {
      user: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    //搜索

    login() {
      this.$router.push('/home/shop/login');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import url('../../../../assets/css/var.css');
@import './mixin.styl'
.container
  background-color: var(--bgc8);
  display: flex;
  justify-content: space-between;
  height: 39px;
  line-height: 39px;
a
  text-decoration: none;
  color: rgba(255, 255, 255, 0.89);
  font-size: 0.5rem;
  padding-left: 10px;

.topbar-user a:last-child
  display: inline-block;
  width: 59px;
  vertical-align: top;
  // background-color var(--bg4)
  bg(var(--bg4))
  text-align: center;
</style>
