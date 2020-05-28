<template>
  <div class="box">
    <div class="person-wrap" ref="personWrap">
      <ul class="person-list" ref="li1">
        <li
          class="person-item"
          :class="{ current: currentIndex === index }"
          v-for="(item, index) in 7"
          :key="index"
          @click="select(index, $event)"
        >
          第{{ item }}块
        </li>
      </ul>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content" ref="li2">
        <div v-for="(item, index) in 7" :key="index">第{{ item }}块</div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';

export default {
  name: 'better_scroll',

  data() {
    return {
      currentIndex: 0, //当前显示的下标
      listHeight: [],
      scrollY: 0,
      menuIndexChange: true
    };
  },
  created() {
    this.$nextTick(() => {
      this._initScroll();
      this.personScroll();
      this.height();
    });
  },
  mounted() {},
  methods: {
    // 横轴初始化
    personScroll() {
      // 动态设置宽度
      let width = this.width();
      this.$refs.li1.style.width = width + 'px';
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical',
            bounce: false
          });
        } else {
          this.scroll.refresh();
        }
      });
    },

    //新建滚动实例  并监听竖轴滚动的高度
    _initScroll() {
      this.wrapperScroll = new BScroll(this.$refs.wrapper, {
        click: true, //better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
        probeType: 3, //这个属性设置之后可以监听得到了
        bounce: false
      });

      //监听滚动事件
      this.wrapperScroll.on('scroll', pos => {
        // 当允许滚动并滚动的y轴小于0
        if (this.menuIndexChange && pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y)); //滚动距离
          //   console.log(this.scrollY);

          // 循环每一个模块距离顶部的高度
          for (let i = 0; i < this.listHeight.length; i++) {
            let height1 = this.listHeight[i];
            let height2 = this.listHeight[i + 1];
            if (
              !height2 ||
              (this.scrollY >= height1 && this.scrollY < height2)
            ) {
              //   console.log(i);

              this._followScroll(i); //横轴动画移动
              this.currentIndex = i;
              return;
            }
          }
        }
      });
    },
    //获取横轴宽度
    width() {
      let wrap1 = this.$refs.li1.children;
      let sum = 0;
      for (var i = 0; i < wrap1.length; i++) {
        sum += wrap1[i].offsetWidth;
      }
      return sum + wrap1.length * 16 * 2;
    },
    //获取竖轴每个模块的高度
    height() {
      let wrap2 = this.$refs.li2.children;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < wrap2.length; i++) {
        let item = wrap2[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },

    //  点击横轴滚动
    select(index, event) {
      // PC页面时,点击不会被 better-scroll阻止事件,初始化,给 better-scroll派发事件,使移动端拥有点击事件,因此切换到PC端时,点击事件会被执行两次,
      if (!event._constructed) {
        return;
      }

      this.currentIndex = index; //改变点击的当前样式
      this.menuIndexChange = false; //禁用竖轴滚动  防止横竖轴都改变index  解决运动时listenScroll依然监听的bug

      //横纵向右偏移16
      this._followScroll(index); //横轴动画移动

      //竖轴滚到响应位置
      let wrap2 = this.$refs.li2.children;
      let el = wrap2[index];
      this.wrapperScroll.scrollToElement(el, 300);

      //竖轴滚动结束后在允许动画
      this.wrapperScroll.on('scrollEnd', () => {
        this.menuIndexChange = true;
      });
    },

    // 横轴滚动到当前元素并向右移动16px
    _followScroll(index) {
      let wrap1 = this.$refs.li1.children;
      let el = wrap1[index];
      if (index < wrap1.length / 2) {
        this.scroll.scrollToElement(el, 300, -16, 0);
      }
    }
  }
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  width: 100%;
  height: 100%;
}
.person-wrap {
  overflow: hidden;
  height: 38px;
  .person-list {
    list-style-type: none;
    .person-item {
      float: left;
      line-height: 36px;
      margin: 0 16px;
      white-space: nowrap;
    }
    .current {
      color: #004299;
      border-bottom: 2px solid #004299;
    }
  }
}
.wrapper {
  height: 600px;
  background: pink;
  overflow: hidden;
  .content {
    display: block;
    div {
      height: 200px;
      border-bottom: 1px solid red;
      text-align: center;
      line-height: 200px;
      &:last-of-type {
        height: 600px;
      }
    }
  }
}
</style>
