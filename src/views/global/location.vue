<template>
  <div class="location">
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'location',
  components: {},
  props: {},
  data() {
    return {
      list: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.http();
  },
  mounted() {},
  methods: {
    async http() {
      let res = await this.$http.get('http://localhost:80/xiaomi/location');
      this.list = res.data.location;
      console.log(this.list);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
