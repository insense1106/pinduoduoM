<template>
  <div class="m11toast">
    <div class="box">
      <div class="msg1">当前歌曲----{{ $store.state.music.songname }}</div>
      <div class="msg2">
        <span>下一首播放 </span>
      </div>
      <div class="msg3">
        <span>添加到播放列表 </span>
      </div>
      <div class="msg4" @click="cancel()">
        <span>取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm11toast',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    cancel() {
      this.$store.commit('music/update_toast_bottom', false);
    }
  }
};
</script>

<style lang="stylus" scoped>
.m11toast
    .box
        width 100%
        display flex
        flex-direction column
        div
            border-bottom 1px solid
            height 30px
            line-height 30px
</style>
