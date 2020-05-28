<template>
  <div class="m31rank" v-if="has_load">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <router-link
          class="link"
          :to="'/home/music/rankdetail/' + item.id"
          tag="div"
        >
          <div class="left">
            <img :src="item.picUrl" alt="#" />
            <span>{{ item.listenCount | count() }}</span>
          </div>
          <div class="right">
            <div class="box">
              <span class="toptitle">{{ item.topTitle }}</span>
              <ul>
                <li v-for="(item2, index) in item.songList" :key="index">
                  <span>{{ item2.songname }}</span>
                  <span>{{ item2.singername }}</span>
                </li>
              </ul>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'm31rank',
  components: {},
  props: {},
  data() {
    return {
      list: null,
      has_load: false
    };
  },
  computed: {},
  watch: {},
  created() {
    this.http2();
  },
  mounted() {},
  methods: {
    async http() {
      let res = await this.$http('http://localhost/music/rank');

      //   console.log(res.data);
      //   console.log(res.data.rank.data.topList[1]);
      //   this.list = res.data.rank.data;
      //   let list2 = JSON.parse(res.data.rank2);
      //   this.list = list2.data;
      this.list = res.data.rank.data.topList;
    },
    async http2() {
      let res = await this.$music('fcg_myqq_toplist.fcg');
      // https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg
      //   console.log(res.data);
      //   console.log(res.data.rank.data.topList[1]);
      //   this.list = res.data.rank.data;
      //   let list2 = JSON.parse(res.data.rank2);
      //   this.list = list2.data;
      //   console.log(res);
      //   console.log(typeof res.data);
      //   console.log(res.data);
      if (res) {
        this.has_load = true;
      }
      let res2 = res.data
        .substring(18)
        .split('')
        .reverse()
        .join('')
        .substring(1)
        .split('')
        .reverse()
        .join('');
      let res3 = JSON.parse(res2);
      //   console.log(typeof res3);
      //   console.log(res3);
      //   console.log(res3.data.topList);
      this.list = res3.data.topList;
      //   console.log(res.data(0));
      //   this.list = res.data.rank.data.topList;
    }
  },
  filters: {
    count(num) {
      return Math.round(num / 10000) + '万';
    }
  }
};
</script>

<style lang="stylus" scoped>
.m31rank
    // animation slide 2s
    ul
      li
        margin 10px 0
        border-radius 5px
        overflow hidden
        background-color lightgrey
        &:hover
            cursor pointer
        .link
            height 100px
            color black
            display flex
            .left
                position relative
                img
                    height 100px
                    width 100px
                span
                    position absolute
                    left 5px
                    bottom 5px
                    color white
                    z-index 9
            .right
                flex 1
                .box
                    margin 10px  0 0 10px
                    .toptitle
                        &:first-child
                            font-size 1rem
                    ul
                        li
                            padding 0
                            margin 3px 0
                            span
                                font-size 0.7rem
                                &:last-child
                                    margin-left 10px
                                    color orangered


@keyframes slide {
    0%{
        transform translateX(-100%)
    }
    100%{
        transform translateX(0%)
    }
}
</style>
