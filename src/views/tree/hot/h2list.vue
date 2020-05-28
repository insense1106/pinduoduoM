<template>
  <div class="h2list">
    <div class="box">
      <ul>
        <li v-for="(item, index) in 10" :key="index">
          <div class="image">
            <img src="./img1.jpg" alt="" />
          </div>
          <div class="text">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h2list',
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
.h2list
    width 100vw
    height 100vh
    .box
        width 100%
        ul
            width 100%
            li
                padding 0.5rem
                display flex
                .image
                  img
                    width 25vw
                    height 30vh



                .text
                    display flex
                    flex-direction column
                    justify-content center
                    font-size 1rem
</style>
