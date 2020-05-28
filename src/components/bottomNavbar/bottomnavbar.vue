<template>
  <div class="bottomnavbar " id="bottomnavbar">
    <div class="wrapper">
      <div class="slot-wrapper" @click="home">
        <slot name="name1">默认</slot>
      </div>
      <div class="slot-wrapper" @click="tree">
        <slot name="name2">默认</slot>
      </div>
      <div class="slot-wrapper" @click="river">
        <slot name="name3">默认</slot>
      </div>
      <div class="slot-wrapper" @click="house">
        <slot name="name4">默认</slot>
      </div>
      <div class="slot-wrapper" @click="go">
        <slot name="name5">默认</slot>
      </div>
      <div class="slot-wrapper" @click="back">
        <slot name="name6">默认</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomnavbar',
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    tree() {
      console.log('tree-click');
      this.$router.push('/tree');
    },
    home() {
      this.$router.push('/home');
    },
    river() {
      this.$router.push('/river');
    },
    house() {
      this.$router.push('/house');
    },
    go() {
      this.$router.go(1);
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.bottomnavbar
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  .wrapper
    display: flex;
    align-items: center;
    background-color: rgb(26, 36, 37);
    .slot-wrapper
      border-radius 120px
      text-align: center;
      height 2rem
      line-height 2rem
      flex: 1;
      color: orangered;
</style>
