<template>
  <div class="house" ref="house">
    <h1>h2x2list</h1>
    <h2x2list />
    <h1>rank</h1>
    <rank />
  </div>
</template>

<script>
import h2x2list from './h2x2list';
import rank from './rank';
// import { utils_debounce } from '../../../assets/utils/utils';
export default {
  name: 'house',
  components: { h2x2list, rank },
  props: {},
  data() {
    return {
      touch_start: null,
      touch_move: null,
      touch_end: null,
      cpt_width: null,
      ratio: null
    };
  },
  computed: {
    computed_slide() {
      return {
        // transform: 'translateX(' + this.ratio + '%)'
        left: this.ratio + '%'
      };
    }
  },

  created() {},
  mounted() {
    this.listener_bind__event();
    this.get_cpt_width();
  },
  destroyed() {
    this.removeEventListener();
  },
  methods: {
    listener_bind__event() {
      this.$el.addEventListener('touchstart', this.handler_start_touch, {
        passive: true
      });
      this.$el.addEventListener(
        'touchmove',
        // utils_debounce(this.handler_move_touch, 1),
        this.handler_move_touch,
        false
      );
      this.$el.addEventListener('touchend', this.handler_end_touch, false);
    },
    handler_start_touch(e) {
      this.touch_start = e.touches[0].pageX;
    },
    handler_move_touch(e) {
      this.touch_move = e.touches[0].pageX;
      // this.touch_move < 0 ? (this.touch_move = 0) : 1;
      // this.touch_move > this.cpt_width ? (this.touch_move = this.cpt_width) : 1;
      this.init_data();
      this.ratio >= 99 ? this.$router.push('/tree/hot') : 0;
    },
    handler_end_touch(e) {
      this.touch_end = e.changedTouches[0].pageX;
      this.$el.removeEventListener('touchmove', this.handler_move_touch, false);
    },
    get_cpt_width() {
      this.cpt_width = this.$el.offsetWidth;
    },
    init_data() {
      this.ratio = (this.touch_move - this.touch_start) / this.cpt_width;
      this.ratio = this.ratio * 100;
      //   this.ratio = Math.abs(this.ratio);
      this.ratio = Math.floor(this.ratio);
      console.log(this.ratio);
    },
    removeEventListener() {
      this.$el.removeEventListener('touchstart', this.handler_start_touch, {
        passive: true
      });
      this.$el.removeEventListener(
        'touchmove',
        // utils_debounce(this.handler_move_touch, 1),
        this.handler_move_touch,
        false
      );
      this.$el.removeEventListener('touchend', this.handler_end_touch, false);
    }
  },
  watch: {}
};
</script>

<style lang="stylus" scoped>
.house
    margin auto
    text-align center
    // background-color grey
    // position absolute
    // left 50%
    // transform translateX(-50%)
</style>
