<template>
  <div class="f1listitem">
    <div class="box">
      <div class="content">
        <ul>
          <li ref="li" v-for="(item, index) in 21" :key="index">
            <div class="item">item--</div>
            <div class="item">item--</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="scroll_box" :style="scroll_box_width_computed">
      <div class="bar" :style="scroll_bar_width_computed"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listitem',
  components: {},
  props: {},
  data() {
    return {
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      contentW: null,
      scroll_bar_box_width: 8,
      scroll_bar_width: null,
      touch_start: null,
      touch_move: null,
      touch_end: null,
      last_scroll_distance: 0,
      scroll_slide_distance: 0,
      direction: null,
      actual_scroll_distance: 0
    };
  },
  computed: {
    scroll_bar_width_computed() {
      this.handler_actual_distance();

      //   console.log('实际滚动距离' + this.actual_scroll_distance);

      return {
        width: this.scroll_bar_width + 'rem',
        left: this.actual_scroll_distance + 'rem'
      };
    },
    scroll_box_width_computed() {
      return {
        width: this.scroll_bar_box_width + 'rem'
      };
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.get_content_width();
      this.bind_event();
    });
  },
  destroyed() {
    this.remove_event();
  },
  methods: {
    get_content_width() {
      this.$refs.li.forEach(item => {
        this.contentW += item.offsetWidth;
      });
      this.get_scroll_bar_width();
      console.log(this.contentW);
    },
    get_scroll_bar_width() {
      this.scroll_bar_width =
        this.scroll_bar_box_width * (this.screenW / this.contentW);
    },
    remove_event() {
      this.$el.removeEventListener('touchstart', this.handler_begin_touch, {
        passive: true
      });
      this.$el.removeEventListener('touchmove', this.handler_in_touch, false);
      this.$el.removeEventListener('touchend', this.handler_end_touch, false);
    },
    bind_event() {
      this.$el.addEventListener('touchstart', this.handler_begin_touch, {
        passive: true
      });
      this.$el.addEventListener('touchmove', this.handler_in_touch, false);
      this.$el.addEventListener('touchend', this.handler_end_touch, false);
    },
    handler_begin_touch(e) {
      this.touch_start = e.touches[0].pageX;
    },
    handler_in_touch(e) {
      this.touch_move = e.touches[0].pageX;
      this.slide_distance = this.touch_move - this.touch_start;
      this.handler_direction();
      //滚轴移动距离
      this.scroll_slide_distance = -(
        (this.scroll_bar_box_width * this.slide_distance) /
        this.contentW
      );

      this.actual_scroll_distance =
        this.scroll_slide_distance + this.last_scroll_distance;
    },
    handler_end_touch(e) {
      this.touch_end = e.changedTouches[0].pageX;
      this.last_scroll_distance =
        this.last_scroll_distance + this.scroll_slide_distance;
    },
    handler_direction() {
      this.direction = this.touch_move - this.touch_start;
      //   this.direction < 0 ? console.log('move left') : console.log('move right');
    },

    handler_actual_distance() {
      if (this.actual_scroll_distance <= 0) {
        this.actual_scroll_distance = 0;
      } else if (
        this.actual_scroll_distance + this.scroll_bar_width >=
        this.scroll_bar_box_width
      ) {
        this.actual_scroll_distance =
          this.scroll_bar_box_width - this.scroll_bar_width;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.f1listitem
    width 100%
    margin-top 1rem
    .box
        border 1px solid red
        display flex
        align-items center
        overflow hidden
        height 6.5rem
        .content
            overflow-x  scroll
            ul
                display flex
                flex-direction nowrap
                li

                    .item
                        margin 1rem
                        height 2rem
                        width 2rem
                        border 1px solid black
                        background-image url('https://pic4.zhimg.com/v2-b5aef68f91e7f60572a527044167bd70_1200x500.jpg')
    .scroll_box
        height 0.5rem
        border 1px solid
        margin auto
        margin-top 0.1rem
        position relative
        border-radius 2rem
        .bar
            position absolute
            border-radius 2rem
            height 100%
            background-color black
</style>
