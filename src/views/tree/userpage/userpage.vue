<template>
  <div class="userpage">
    <div>
      <div class="header" v-order_name>
        <div class="name_phone">
          <span> <i class="icon-search" />风清扬</span>
          <span>131313131313</span>
        </div>
        <div class="address">
          <span>
            江苏省_徐州市_鼓楼区_九里三环北路与平山路交汇处东北侧 测试
          </span>
          <span>git 02</span>
        </div>
      </div>
      <div class="content"></div>
      <div class="pay">
        <h1>wx</h1>
        <h1>zfb</h1>
        <h1>zhaohaoyouzhifu</h1>
      </div>
      <button @click="handler_canvas">canvas</button>
    </div>
    <!-- <h1>{{ $store.state.music.list_pay_pdd }}</h1> -->
    <div>
      <!-- <h1>add new content</h1> -->
      <h1>delete the content</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg.data }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userpage',
  components: {},
  props: {},
  data() {
    return {
      canvas: null,
      msg: {}
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // this.handler_canvas();
  },
  destroyed() {},
  methods: {
    handler_canvas() {
      this.msg.data = `a1`;
      this.msg = { name: `tom` };
      console.log(this.msg);
    }
  },
  directives: {
    order_name: {
      // 钩子函数，被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
      inserted(el) {
        // el.focus();
        console.log(el);

        console.log(`el.focus`);
      },
      // 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
      bind(el, binding) {
        console.log('bind');
        console.log(binding);
      },
      // 所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。
      // 指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
      update() {
        console.log('update');
      }, // 所在组件的 VNode 及其孩子的 VNode 全部更新时调用。
      componentUpdated() {
        console.log('componentUpdated');
      },
      // 只调用一次，指令与元素解绑时调用。
      unbind() {
        console.log('unbind');
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.userpage
  color black
  padding-top  1rem
  .header
    background-color red
    padding 1rem
    .name_phone
        &>span
            &:first-child
                font-size 1rem
                font-weight bolder
            &:last-child
                margin-left 1rem
                font-size 1rem
    .address
        font-size 0.8rem
        background-color lightgreen
</style>
