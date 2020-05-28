<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import bs from 'better-scroll';
export default {
  name: 'h3betterscroll',
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    },
    scroll_click: {
      type: Boolean,
      default: true
    },
    //下拉到底时 执行此函数
    handler_pulldown: {
      type: Function,
      default: function() {}
    },
    //上拉拉到底时 执行此函数
    handler_pullup: {
      type: Function,
      default: function() {}
    },
    //上拉拉到底时 执行此函数
    handler_scroll: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      scroll_obj: null,
      testmessage: 'test----------message'
    };
  },
  mounted() {
    this.scroll_obj = new bs(this.$refs.scroll, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: this.scroll_click,
      mouseWheel: true,
      pullDownRefresh: {
        threshold: 50,
        stop: 20
      },
      tap: true,
      startX: 0,
      scrollX: true,
      scrollY: false
    });
    // 滚轴 原始位置
    this.scroll_obj.scrollTo(0, 0);
    // 监听滚轴 坐标
    this.scroll_obj.on('scroll', position => {
      this.handler_scroll(position);
    });
    //上拉
    this.scroll_obj.on('pullingUp', () => {
      this.handler_pullup();
      this.scroll_obj.finishPullUp();
    });
    //下拉
    this.scroll_obj.on('pullingDown', () => {
      this.handler_pulldown();
      this.scroll_obj.finishPullDown();
    });
  },
  methods: {
    scrollTop() {
      this.scroll_obj.scrollTo(0, 0, 500);
    }
  }
};
</script>

<style scoped></style>
