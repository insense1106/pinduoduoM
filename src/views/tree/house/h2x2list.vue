<template>
  <div class="h2x2list">
    <div class="box">
      <div class="content">
        <ul v-if="list">
          <li
            v-for="(item, index) in list"
            :key="index"
            @click="handler_toggle_img(index)"
          >
            <div class="top" @click="router_push(item)">
              <!-- v-lazy="'./img2.jpg' + item.pic" -->
              <img
                v-lazy="item.pic"
                alt=""
                ref="li"
                @load="handler_img_load(index)"
              />
              <span>{{ item.fid }}</span>
            </div>
          </li>
          <li><span>加载更多</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h2x2list',
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
  mounted() {
    this.handler_lazy_load();
  },
  destroyed() {},
  methods: {
    async http() {
      this.list = await this.$request.music_focus_list();
      this.list.forEach(item => {
        console.log(item);
      });
    },
    router_push(item) {
      // this.$router.push('/tree/detail/' + item.fid);
      // this.$router.push({ path: '/tree/detail', query: item });
      this.$router.push({ name: 'detail' });
      this.$store.commit('music/update_detail_item', item);
      localStorage.setItem('item2', JSON.stringify(item));
    },
    handler_lazy_load() {
      console.log(this.$refs.li);
    },
    handler_img_load(index) {
      console.log('handler_img_load' + index);
      // console.log(this.$refs.li[index].src);
      // this.$refs.li[index].src = this.list[index].pic;
    },
    handler_toggle_img() {
      // this.$refs.li[index].src = this.list[index].pic;
    }
  }
};
</script>

<style lang="stylus" scoped>
.h2x2list
    margin auto
    margin-bottom 1rem
    .box
        .content
            position relative
            ul
                display flex
                flex-wrap wrap
                width 140%
                height 9.6rem
                overflow hidden

                li
                    div
                        display flex
                        flex-direction column
                        height 4rem
                        width 4rem
                        padding 0.2rem
                        margin 0.2rem
                        img
                            width 100%
                            height 100%
                            transform scale(0.5)
                            border-radius 3rem
                    &:last-child
                        display flex
                        align-items center
                        height 5rem
                        width 5rem
                        background-color white
                        position absolute
                        right 0.5rem
                        bottom 0
                        justify-content center
                        span
                            border 1px solid blue
                            padding 0.2rem
                            font-size 1rem
</style>
