<template>
  <div class="h1tabbar">
    <div class="box">
      <ul>
        <li v-for="(item, index) in 21" :key="index">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h1tabbar',
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
  methods: {}
};
</script>

<style lang="stylus" scoped>
.h1tabbar
    color black
    width 100%
    .box
        overflow-x scroll
        ul
            display flex
            flex-wrap wrap
            justify-content space-around
            border 1px solid
            li
                width 5rem
                margin 0.2rem
                display flex
                justify-content center
                align-items center
                height 2rem
                background-color grey
                padding 0 0.5rem
                span
                    font-size 1rem
</style>
