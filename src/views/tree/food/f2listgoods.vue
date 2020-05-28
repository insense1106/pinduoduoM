<template>
  <div class="f2listgoods">
    <div class="box">
      <div class="content">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div class="item">
              <span>作者:{{ item.author }}</span>
              <span>主题:{{ item.dissname }}</span>
              <span>播放量:{{ item.listennum }}</span>
            </div>
            <div class="item"><img :src="item.imgurl" alt="" /></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'f2listgoods',
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
      this.list = await this.$request.music_hotdiss_list();
    }
  }
};
</script>

<style lang="stylus" scoped>
.f2listgoods
    margin-top 1rem
    .box
        .content
            ul
                li
                    display flex
                    justify-content space-between
                    margin 1rem
                    .item
                        width 40%
                        height 4rem
                        border 1px solid
                        display flex
                        flex-direction column
                        justify-content center
                        font-size 0.7rem
                        text-align left
                        &:last-child
                            img
                                width 100%
                                height 100%
</style>
