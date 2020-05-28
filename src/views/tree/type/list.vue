<template>
  <div class="list">
    <div class="box">
      <div class="content">
        <!-- 横向菜单 -->
        <div class="align"></div>
        <div>
          <!-- 左菜单 -->
          <betterscroll class="bs1" ref="bs1">
            <div class="vertical">
              <ul ref="ul_left">
                <li
                  ref="li"
                  @click="handler_select(index)"
                  v-for="(item, index) in list_title"
                  :key="index"
                  :class="{ active: index === current_index }"
                >
                  <span>{{ index + '--' + item }}</span>
                </li>
              </ul>
            </div>
          </betterscroll>
          <!-- 右侧滚动内容区 -->
          <betterscroll class="bs2" :handler_scroll="handler_scroll" ref="bs2">
            <div class="vertical_content">
              <ul v-for="(list, index) in list_content" ref="ul" :key="index">
                <h1>{{ index + '---' + list.name }}</h1>
                <li v-for="(item, index) in list.tags" :key="index">
                  <h1>{{ item }}</h1>
                  <h1>{{ item }}</h1>
                </li>
              </ul>
            </div>
          </betterscroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  components: {},
  props: {},
  data() {
    return {
      list_title: [],
      list: null,
      list_content: [],
      current_index: 0,
      control_index: 0,
      flag_click: false
    };
  },
  computed: {},
  watch: {
    // 监听 control_index
    control_index() {
      // 只有在滚动右内容区 的情况下才会执行
      if (!this.flag_click) {
        // 如果当前显示区域已经到达底部 不必执行滚动操作  只改样式就行
        // 此处 <= 7 乃投机取巧  不是根本的解决办法
        if (this.control_index <= 7) {
          this.$refs.bs1.scroll_obj.scrollTo(
            0,
            -this.$refs.li[this.control_index].offsetTop,
            500
          );
        }
        this.current_index = this.control_index;
      }
    }
  },
  created() {
    this.http();
  },
  mounted() {},
  destroyed() {},
  methods: {
    // 网络请求
    async http() {
      let res = await this.$request.xiaomi_random_data();
      this.list = res.data.random_data;
      this.list.forEach(item => {
        this.list_title.push(item.name);
        let obj = { name: item.name, tags: item.tags };
        this.list_content.push(obj);
      });
    },
    // 左侧菜单栏 点击事件
    handler_select(index) {
      // 设定信号 表明是左菜单栏的点击事件
      this.flag_click = true;
      this.current_index = index;
      this.$refs.bs2.scroll_obj.scrollTo(
        0,
        -this.$refs.ul[index].offsetTop,
        800
      );
    },
    // 右侧内容区 滚动事件
    handler_scroll(p) {
      // 根据滚动距离 判定 应该显示的 element的index
      this.control_index = Math.floor(
        Math.abs(p.y) / this.$refs.ul[0].clientHeight
      );
      // 设定信号 表明是右内容区的滚动事件
      this.flag_click = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
// @import '../../../assets/css/mixin_global'
@import '~@/assets/css/mixin_global'
.list
  color black
  .box
    .content
        color black
        .align
          height 2rem
          background-color $c4
        &>div
          display flex
          .bs1
            height 15rem
            width 30%
            overflow hidden
            .vertical
              width 100%
              background-color $c2
              &>ul
                width 100%
                &>li
                  height 3rem
                  flex_all_center()
                  font-size 0.7rem

          .bs2
            width 70%
            height 15rem
            overflow hidden
            // background-color $c3
            .vertical_content
                display flex
                flex-direction column
                background-color lightblue
                &>ul
                  &>h1
                    color red
                    text-align center
                    height 2rem
                    line-height 2rem
                  &>li
                    // height 2rem
                    text-align center
                    background-color #f1e5f5
                    &>h1
                      height 4rem
.active
  color red
  border-left 2px solid red
  background-color #f1e5f5
</style>
