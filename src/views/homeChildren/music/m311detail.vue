<template>
  <div class="m311detail">
    <div class="img">
      <img src="#" alt="" />
    </div>
    <div>
      <span v-if="current_rank">{{ current_rank.ListName }}</span>
      <div class="play" @click="play()">
        <img src="./assets/icon-play.png" alt="" />
      </div>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="song">
          <div class="text">
            <span>{{ item.data.songname }}</span>
            <span>😂😂😂😂😂</span>
            <span>{{ item.data.singer | singer }}</span>
          </div>
          <div class="msg" @click="toast(item.data.songname)">
            <img src="./assets/icon-...black.png" alt="" />
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'm311detail',
  components: {},
  props: {},
  data() {
    return {
      list: null,
      current_rank: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.http();
    this.$store.commit('music/update_nav_show', false);
    this.$store.commit('music/update_search_show', false);
    this.$store.commit('music/update_return_show', true);
  },
  mounted() {},
  destroyed() {
    this.$store.commit('music/update_animation_loading', false);
    this.$store.commit('music/update_nav_show', true);
    this.$store.commit('music/update_search_show', true);
    this.$store.commit('music/update_return_show', false);
  },
  methods: {
    async http() {
      let res = await this.$music('fcg_v8_toplist_cp.fcg', {
        params: {
          topid: this.$route.params.id
        }
      });

      //   console.log(res);
      console.log(res.data);
      this.current_rank = res.data.topinfo;
      console.log(this.current_rank);

      this.list = res.data.songlist;
      this.vuex1();
      // console.log(this.list);
    },
    vuex1() {
      this.list != null
        ? this.$store.commit('music/update_animation_loading', true)
        : console.log('list ===null check the http');
    },
    play() {
      console.log('play the song');
    },
    toast(songname) {
      this.$store.commit('music/update_toast_bottom', true);
      this.$store.commit('music/update_transition', 1);
      this.$store.commit('music/update_songname', songname);
    }
  },
  filters: {
    singer(singer) {
      console.log(typeof singer);

      return typeof singer === 'string'
        ? singer
        : singer instanceof Array
        ? singername()
        : console.log('error about singer name');

      function singername() {
        let s = '';
        singer.forEach(element => {
          s += element.name;
        });
        return s;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.m311detail
    animation slide 2s
    // position relative
    // opacity 1
    color black
    // margin-top 200px
    .img
      text-align center
      height 200px

    div
      // padding 0 10px
      display flex
      justify-content space-between
      margin-left 10px
      span
        color red
        font-size 2rem
      .play
        margin-right 10px
        height 50px
        width 50px
        background-color lightgrey
        display flex
        border-radius 50%
        // text-align center
        // line-height 50px
        justify-content center
        align-items center
        img
          width 30px
          height 30px
    ul
      background-color white
      margin-left 30px
      font-size 0.8rem
      li
        list-style decimal
        .song
          display flex
          height 30px
          align-items center
          justify-content space-between
          margin-right 10px
          .text
            span
              line-height 30px
              font-size 0.8rem
              color black
              cursor pointer
          .msg
            cursor pointer
            img
              color red
              height 22px
              width 22px
              line-height 30px
              // vertical-align middle
@keyframes slide {
    0%{
        transform translateX(-100%)
    }
    100%{
        transform translateX(0%)
    }

}
</style>
