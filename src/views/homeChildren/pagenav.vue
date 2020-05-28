<template>
  <div class="pagenav">
    <div class="nav">
      <div class="item">
        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>

        <a>
          <img src="./img/fj1.jpg" alt="" />
          <span>文字介绍</span>
        </a>
      </div>
      <div class="nav-bottom">
        <div class="nav-bottom-inner" :style="inner_style_bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagenav',
  components: {},
  data() {
    return {
      // ping mu kuan du
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      //gun dong nei rong de kuan du
      scroll_content_width: 780,
      //gun dong tiao bei jing chang du
      bgBarW: 100,
      //gun dong tiao chang du
      bar_x_width: 0,
      // qi dian
      start_x: 0,
      end_flag: 0,
      // move distance
      bar_move_width: 0
    };
  },
  computed: {
    inner_style_bar() {
      return {
        width: `${this.bar_x_width}px`,
        left: `${this.bar_move_width}px`
      };
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.get_bottom_bar_width();
    this.bind_event();
  },
  methods: {
    get_bottom_bar_width() {
      this.bar_x_width =
        this.bgBarW * (this.screenW / this.scroll_content_width);
      console.log(this.bar_x_width);
    },
    bind_event() {
      this.$el.addEventListener('touchstart', this.handle_touch_start, false);
      this.$el.addEventListener('touchmove', this.handle_touch_move, false);
      this.$el.addEventListener('touchend', this.handle_touch_end, false);
    },
    handle_touch_start(e) {
      let touch = e.touches[0];
      this.start_x = Number(touch.pageX);
    },
    handle_touch_move(e) {
      console.log('touch move ');
      let touch = e.touches[0];
      let move_touch = Number(touch.pageX) - this.start_x;
      this.bar_move_width = -(
        (this.bgBarW / this.scroll_content_width) * move_touch -
        this.end_flag
      );
      // deal edge
      if (this.bar_move_width <= 0) {
        this.bar_move_width = 0;
      } else if (this.bar_move_width >= this.bgBarW - this.bar_x_width) {
        this.bar_move_width = this.bgBarW - this.bar_x_width;
      }
    },
    handle_touch_end() {
      console.log('touch end ');
    }
  }
};
</script>

<style scoped>
.pagenav {
  /* width: 100%; */
  height: 180px;
  position: relative;
}
.nav {
  overflow-x: scroll;
}
.item {
  height: 180px;
  width: 780px;
  display: flex;
  flex-wrap: wrap;
}
a {
  padding-bottom: 10px;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  /* display: block; */
  width: 50%;
  height: 50%;
}
.nav-bottom {
  width: 100px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  bottom: 0;
}
.nav-bottom-inner {
  position: absolute;
  left: 0;
  height: 100%;
  background-color: orangered;
  width: 0;
}
</style>
