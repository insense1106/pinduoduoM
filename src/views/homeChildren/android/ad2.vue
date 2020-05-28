<template>
  <div>
    <h2>
      上中下布局
    </h2>
    <div class="box">
      <div class="header"></div>
      <div class="content"></div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ad2',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
}

.content {
  background-color: rgb(238, 102, 102);
  /* height: 300px; */
  flex-grow: 1;
  /* flex: auto; */
  overflow: hidden;
  background-color: cyan;
}
.header {
  height: 100px;
  background-color: red;
}
</style>
