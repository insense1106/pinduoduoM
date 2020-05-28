<template>
  <div class="m1search" v-if="search">
    <form action="javascript:;">
      <input type="text" placeholder="搜索歌曲" /> <span>取消</span>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'm1search',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('music', { search: 'getters_search_show' })
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.m1search
    width 100%
    font-size 1.5rem
    form
        input
            width 70%

            box-sizing border-box
            padding 8px 40px
            border-radius 7px
            border none
            background lightgrey
            font-size 1.5rem
            margin 10px 20px 0 20px
        span
            vertical-align center
</style>
