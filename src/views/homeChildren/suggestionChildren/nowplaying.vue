<template>
  <div class="nowplaying">
    <div class="content">
      <scroll
        class="better_scroll"
        @pullingup_emit="pullingup_emit"
        @scroll_emit="scroll_emit"
        @pullingDown="pullingDown"
        ref="scroll"
      >
        <div class="wrapper" v-for="(item, index) in movie_list" :key="index">
          <div class="left ">
            <img :src="item.img | formate_size('60.90')" alt="" />
          </div>
          <div class="center ">
            <h4 v-text="item.nm"></h4>
            <p class="star" v-text="'主演:' + item.star"></p>
            <p class="rt" v-text="item.rt"></p>
          </div>
          <div class="right "><button>预购</button></div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import scroll from '../../../components/betterScroll/scroll';
export default {
  name: 'nowplaying',
  components: { scroll },
  data() {
    return {
      movie_list: []
    };
  },
  props: ['id', 'name'],
  computed: {},
  watch: {},
  created() {
    // console.log(this.$route.params.id);
    console.log(this.id);

    this.http();
  },
  mounted() {},
  methods: {
    //网络请求
    async http() {
      let res = await this.$request.movie_nowplaying_movie(
        this.$route.params.id
      );
      console.log(res);

      if (res.data.status == 0) {
        this.movie_list = res.data.data.movieList;
      }
    },
    //滚动事件
    scroll_emit(p) {
      if (p.y > 284) {
        // console.log('下拉刷新');
      }
    },
    //上拉加载更多数据
    pullingup_emit() {
      console.log('上拉加载更多');
      // this.$refs.scroll.finishPullUp();
    },

    //下拉加载更多
    pullingDown() {
      console.log('下拉加载更多');
      // this.$refs.scroll.scroll_refresh(123);
      // this.$refs.scroll.finishPullDown();
    }
  },
  filters: {
    //图片尺寸过滤器
    formate_size(url, size) {
      return url.replace(/w\.h/g, size);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
@keyframes toggle {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
.nowplaying {
  animation: toggle 2s;
}
.nowplaying .wrapper {
  display: flex;
  align-items: center;
  padding: 10px 0 10px 10px;
}
.wrapper div {
  flex-basis: 30%;
}
button {
  background-color: rgb(243, 89, 89);
  position: relative;
  left: 90px;
}
.better_scroll {
  height: 670px;
  overflow: hidden;
}
</style>
