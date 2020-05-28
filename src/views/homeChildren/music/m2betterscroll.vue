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
  name: 'm2betterscroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    scroll_click: {
      type: Boolean,
      default: false
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
      mouseWheel: true
    });
    this.scroll_obj.scrollTo(0, 0);
    this.scroll_obj.on('scroll', position => {
      this.$emit('scroll_emit', position);
      this.scroll_obj.on('pullingUp', () => {});
    });
  },
  methods: {
    finish_pull_up() {
      this.$emit('pullupload_emit');
    },
    scrollTop() {
      this.scroll_obj.scrollTo(0, 0, 500);
    }
  }
};
</script>

<style scoped></style>
