<template>
  <div class="m01return " v-if="return_show">
    <div class="box" @click="back()">
      <img src="./assets/icon-back.svg" alt="back" />
      <span>返回</span>
    </div>
    <hr />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'm01return',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      return_show: state => {
        return state.music.return_show;
      }
    })
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="stylus" scoped>
.m01return
    width 100%
    height 30px
    // line-height 30px
    .box
        height 100%
        cursor pointer
        display inline-block
        img
            height 100%
        span
            line-height 30px
            vertical-align top
            font-size 1rem
            // padding-left 4px
            color black
            font-weight 700
</style>
