<template>
  <div class="root">
    <h2 @click="test">函数式组件的父组件</h2>
    <fc :list="list2" :itemClick="itemClick"></fc>
    <router-view></router-view>
  </div>
</template>

<script>
import fc from './functioncomponent/functional';
export default {
  name: 'functioncomponent',
  components: { fc },
  data() {
    return {
      // 函数组件的props
      list: [
        {
          title: 'title',
          content: 'content'
        }
      ],
      list2: [
        {
          title: 'title',
          content: 'content'
        }
      ],
      currentItem: ''
    };
  },
  computed: {},
  watch: {
    list: {
      handler: 'handler_list',
      immediate: true,
      //初始时 立即监听
      deep: true
      //深度监听  能够监听对象内部属性的改变
    },
    list2: [
      'handler_list',
      function(nv, ov) {
        nv ? nv : ov;
        console.log('wathch数组');
        this.handler_list2();
      },
      {
        handler: 'handler_list3',
        immediate: true
      }
    ]
  },
  created() {},
  mounted() {},
  methods: {
    // 父子组件通信 函数
    itemClick(item) {
      console.log(item);
      item.title = 123;
      console.log('itemClick 函数');
    },
    // watch 监听
    handler_list() {
      //   console.log('list 初始时立刻监听');
      console.log('handler_list 函数');
    },
    handler_list2() {
      console.log('wathch数组');
      console.log('handler_list2 函数');
    },
    handler_list3() {
      console.log('wathch数组');
      console.log('handler_list2 函数');
    },
    test() {
      this.list2 = [123];
      //   this.list = { title: 'test', content: 123 };
      //   this.itemClick(this.list);
    }
  }
};
</script>

<style scoped>
.root {
  background-color: rgb(119, 109, 109);
}
/** 样式穿透 */
/deep/ .item {
  background-color: orange;
}
</style>
