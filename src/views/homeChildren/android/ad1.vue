<template>
  <!-- 左固定布局 -->
  <div class="root">
    <h4>左固定 关键词:浮动, bfc, 前后位置</h4>
    <div class="box1">
      <div class="d1">
        float: left; height: 100%; width: 20%; background-color: rgb(97, 89,
        89);
      </div>
      <div class="d2">
        width: 80%; height: 100%; overflow: scroll; background-color: rgb(206,
        199, 199);
      </div>
    </div>
    <h4>右固定</h4>
    <div class="box1" @click="fn_geolocation">
      <div class="d11"></div>
      <div class="d12"></div>
    </div>
    <hr />
    <h4>无限动画</h4>
    <hr />
    <div
      class="infinite"
      @mouseover="fn_mouseover()"
      @mousemove="fn_test()"
    ></div>
    <h1>promise代理异步操作</h1>
    <form action="javascript:;" @submit="fn_submit()">
      <input type="submit" value="" />
    </form>
    <h1 @click="fn_test2()">test2</h1>
    <hr />
    <hr />
    <div class="linear"></div>
  </div>
</template>

<script>
export default {
  name: 'ad1',
  components: {},
  props: {},
  data() {
    return {
      list: null,
      random: 0
    };
  },
  computed: {
    random_index() {
      // return ~~(Math.random() * this.list.length);
      // this.random =  ~~(Math.random() * this.list.length);
      return this.random;
    }
  },
  watch: {},
  created() {
    // this.demo1000();
    // this.fn_geolocation();
    this.http();
  },
  mounted() {},
  methods: {
    fn_submit() {
      return new Promise(res => {
        setTimeout(() => {
          res('异步操作执行成功');
        }, 1000);
      }).then(res => {
        console.log(res);
      });
    },
    fn_mouseover() {
      console.log('fn_mouseover');
    },
    fn_test() {
      console.log('fn_test');
      console.log(this.$el);
    },
    fn_test2() {
      let arr3 = [
        { a: '1', b: '12' },
        { a: '0', b: '12' }
      ];
      // let arr4 = [
      //   { a: '2', b: '23' },
      //   { a: '0', b: '12' }
      // ];
      let arr5 = arr3.map(item => item.a);
      console.log(arr5);
    },
    demo1000() {
      console.log(0 % 6);
      console.log(1 % 6);
      console.log(2 % 6);
      console.log(3 % 6);
      console.log(4 % 6);
      console.log(5 % 6);
      console.log(6 % 6);
      console.log(7 % 6);
    },
    fn_geolocation() {
      console.log('fn_geolocation');
      window.navigator.geolocation.getCurrentPosition(
        this.success_callback,
        this.fail_callback
      );
    },
    success_callback(data) {
      console.log(data.coords);
    },
    fail_callback(data) {
      console.log(data);
    },
    async http() {
      let res = await this.$request.xiaomi_question();

      this.list = res.data.question;
      this.random = ~~(Math.random() * this.list.length);
      console.log(navigator.userAgent);
    },
    handler_random() {
      this.random = ~~(Math.random() * this.list.length);
    }
  }
};
</script>

<style lang="stylus" scoped>
.root
  padding-bottom 10rem
.linear
  margin auto
  width 5rem
  height 3rem
  background linear-gradient(90deg,red,blue,yellow,green,gray)
  background-size 400%
  border-radius 1rem
  position relative
  &:hover
    animation animation2 8s linear infinite
  &:before
    content ' '
    position absolute
    z-index -1
    background linear-gradient(90deg,red,blue,yellow,green,gray)
    background-size 400%
    border-radius 1rem
    filter blur(1rem)
    top -2%
    left -2%
    bottom -2%
    right -2%
    opacity 0
  &:hover:before
    opacity 1
    animation animation2 8s linear infinite

@keyframes animation2 {
  0%{
    background-position 0%
  }
  100%{
    background-position 500%
  }

}
.box1
  height: 110px;
  width 100%
  // overflow hidden
.d1 {
  float: left;
  height: 100%;
  width: 20%;
  background-color: rgb(97, 89, 89);
  // overflow: hidden;
}
.d2 {
  width: 60%;
  height: 100%;
  overflow: scroll;
  background-color: rgb(206, 199, 199);
}

.infinite
  height 5rem
  width 100%
  margin-left 10rem
  width 2rem
  overflow hidden
  // border-radius  50%
  background-color red
  // animation rotate 1s linear reverse
  animation-name rotate
  animation-duration 1s
  animation-iteration-count  infinite2
  animation-direction alternate
  transition all  1s

@keyframes rotate {
  0%{
    // transform rotate3d(0)
    transform translateX(-100%)
    opacity 0
  }
  100%{
    // transform rotate3d(1, 1, 1, 345deg)
    // transform rotate3d(360deg)
    transform translateX(0%)
    opacity 1
  }
}
</style>
