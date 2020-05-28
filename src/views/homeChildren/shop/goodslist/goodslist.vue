<template>
  <div>
    <g1header />
    <g2swiper />
    <g3display />
    <hr />
    <div v-if="false" class="box">
      <ul>
        <li v-for="(item, index) in list_category" :key="index">
          <img :src="item.img" alt="#" />
          <span v-text="item.msg"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import g1header from './g1header';
import g2swiper from './g2swiper';
import g3display from './g3display';
export default {
  name: 'goodslist',
  components: { g1header, g2swiper, g3display },
  props: {},
  data() {
    return {
      category: null,
      res: null,
      list_category: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.category = this.$route.params.category;
    this.http1();
  },
  mounted() {},
  methods: {
    async http1() {
      this.res = await this.$http.get('http://localhost:80/xiaomi/goodslist');
      let data = this.res.data;

      this.list_category = data.data;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
