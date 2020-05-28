<template>
  <div class="rank">
    <div class="box">
      <div class="content">
        <div class="left">
          <i class="icon-search"></i> <span>家居百货排行榜</span>
        </div>
        <div class="right">
          <span>高销量/好口碑</span><i class="icon-search" />
        </div>
      </div>
    </div>
    <div class="listbox">
      <ul v-if="list">
        <li v-for="(item, index) in list" :key="index">
          <div class="item">
            <img v-lazy="item.pic" alt="" />
            <span>{{ item.title }}</span>
          </div>
          <div class="item">
            <img v-lazy="item.pic" alt="" />
            <span>{{ item.title }}</span>
          </div>
          <div class="item">
            <img v-lazy="item.pic" alt="" />
            <span>{{ item.title }}</span>
          </div>
          <div class="item">
            <img v-lazy="item.pic" alt="" />
            <span>{{ item.title }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rank',
  components: {},
  props: {},
  data() {
    return { list: null };
  },
  computed: {},
  watch: {},
  created() {
    this.http();
  },
  mounted() {},
  destroyed() {},
  methods: {
    async http() {
      this.list = await this.$request.music_focus_list();
      // console.log(this.list);
    }
  }
};
</script>

<style lang="stylus" scoped>
.rank
    margin 1rem 0
    .box
        .content
            display flex
            justify-content space-between
            .content div
                display flex
                align-items center
            .left
                font-size 0.7rem
                i
                    color red
                    padding-right 1rem
            .right
                font-size 0.5rem
                span
                    margin-right 0.5rem
    .listbox
        ul
            display flex
            flex-wrap wrap
            li
                margin 1rem
                width 40%
                .item
                    width 100%
                    height 5rem
                    img
                        width 100%
                        height 80%
</style>
