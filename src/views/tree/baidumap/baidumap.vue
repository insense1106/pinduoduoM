<template>
  <div class="baidumap">
    <bdmap></bdmap>
  </div>
</template>

<script>
import bdmap from './bdmap';
export default {
  name: 'baidumap',
  components: { bdmap },
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
.baidumap
   color black
</style>
