<template>
  <div class="wrapper" ref="scroll_native">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import betterScroll from 'better-scroll';
export default {
  name: 'Scroll',
  props: {},
  data() {
    return {
      bs: null,
      //better_scroll 初始参数
      pullDownRefresh: {
        // 出现 了 卡顿的bug
        threshold: 50,
        //threshold:配置顶部下拉的距离（threshold
        //  超过这个距离 触发下拉事件
        stop: 20
        // 回弹停留的距离
      },
      options: {
        probeType: 3,
        pullUpLoad: true,
        click: true,
        mouseWheel: true,
        pullDownRefresh: true
        //鼠标滚轮 替代 箭头 操作
      }
    };
  },
  created() {
    // console.log(`scroll 已经创建`);
  },
  mounted() {
    //初始化better-scroll对象 配置基本参数
    this.bs = new betterScroll(this.$refs.scroll_native, this.options);
    // mounted阶段 滚动到 0 0 坐标
    this.bs.scrollTo(0, 0);
    //监听 滚动事件
    this.bs.on('scroll', position => {
      this.$emit('scroll_emit', position);
      //监听 上拉事件
      this.bs.on('pullingUp', () => {
        this.$emit('pullingup_emit');
        this.finishPullUp();
      });
      //监听下拉事件
      this.bs.on(`pullingDown`, () => {
        this.$emit(`pullingDown`);
        this.finishPullDown();
      });
    });
  },
  methods: {
    scroll_to_top() {
      this.bs.scrollTo(0, 0, 500);
    },
    scroll_refresh(num) {
      console.log('refresh' + num);
      this.bs.refresh();
    },
    //取消只能监听一次的bug
    finishPullDown() {
      this.bs.finishPullDown();
    },
    //取消只能监听一次的bug
    finishPullUp() {
      this.bs.finishPullUp();
    }
  }
};
</script>

<style scoped>
.content {
  height: calc(100%+1px);
}
</style>
