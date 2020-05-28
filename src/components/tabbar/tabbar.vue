<template>
  <div class="root">
    <div class="header" @click="test">
      <div class="item ">
        <slot name="slot1">默认内容</slot>
      </div>
      <div class="item ">
        <slot name="slot2">默认内容</slot>
      </div>
      <div class="item ">
        <slot name="slot3">默认内容</slot>
      </div>
      <div class="item ">
        <slot name="slot4">默认内容</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  components: {},
  props: {},
  data() {
    return {
      msg: 123
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    test() {
      console.log(this.$route.path);
    }
  }
};
</script>

<style scoped>
.root {
  width: 100%;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background: rgb(207, 166, 166);
}
.item {
  height: 100%;
  flex: 1;
  background-color: #eee;
  line-height: 40px;
  text-align: center;
}
</style>
