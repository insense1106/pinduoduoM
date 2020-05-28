<template>
  <div class="type">
    <list />
  </div>
</template>

<script>
import list from './list';

export default {
  name: 'type',
  components: { list },
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
.type
    padding-top 1rem
    color black
</style>
