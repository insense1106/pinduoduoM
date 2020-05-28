<template>
  <div>
    <div class="header">
      <div class="item">
        <slot name="s1">默认内容</slot>
      </div>
      <div class="item">
        <slot name="s2">默认内容</slot>
      </div>
      <div class="item">
        <slot name="s3">默认内容</slot>
      </div>
      <div class="item">
        <slot name="s4">默认内容</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navheader',
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
.header {
  display: flex;
  justify-content: space-between;
}
</style>
