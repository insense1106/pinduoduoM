<template>
  <div class="f4page">
    <div class="box">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.pic" alt="#" @load="debounce_fn()" />
          <h1>{{ item.title }}</h1>
          <h1>{{ item.fid }}</h1>
          <h1>{{ item.type }}</h1>
          <h1>{{ item.usertype }}</h1>
          <h1>{{ item.packageid }}</h1>
          <h1>{{ item.id }}</h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { utils_debounce } from '../../../assets/utils/utils';
export default {
  name: 'f4page',
  components: {},
  props: {},
  data() {
    return {
      list: null,
      data2: null,
      timer: null,
      debounce_pointer: null
    };
  },
  computed: {},
  watch: {},
  created() {
    // this.http();
    this.http2();
  },
  mounted() {
    this.debounce_pointer = utils_debounce(this.img_has_load);
  },
  destroyed() {},
  methods: {
    async http2() {
      this.list = await this.$request.music_focus_list();
      //   Object.keys(this.list).forEach(item => {
      //     console.log(item);
      //   });
    },
    img_has_load() {
      console.log('img_has_load');
    },
    debounce_fn() {
      //   this.simple_debounce();
      this.debounce_pointer();
    },
    simple_debounce() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.img_has_load();
      }, 1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.f4page
    margin-top 1rem
    overflow hidden
    .box
        ul
            li


                img
                    width 100%
                    height 100%
                h1
                    overflow hidden
</style>
