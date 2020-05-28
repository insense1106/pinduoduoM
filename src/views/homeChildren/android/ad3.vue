<template>
  <div>
    <h2>
      attr函数 :关键词#选择元素的属性值
    </h2>
    <a href="javascript:;" semon="哇哇哇">LINK</a>
    <hr />

    <hr />
  </div>
</template>

<script>
export default {
  name: 'ad3',
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
a:after {
  content: attr(href);
}
a:before {
  content: attr(semon);
}
a:hover {
  color: red;
}
</style>
