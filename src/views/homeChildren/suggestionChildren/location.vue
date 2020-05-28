<template>
  <div class="location">
    <button class="button_back_top" @click="button_back_top" v-if="button">
      返回顶部
    </button>
    <!-- 右边索引栏 -->
    <div class="right_nav">
      <ul>
        <li
          v-for="(item, index) in newCityList"
          :key="index"
          @click="click_right_index(item, index)"
        >
          <h5 v-text="item.index"></h5>
        </li>
      </ul>
    </div>
    <!-- 城市 -->
    <scroll class="scroll" ref="scroll" @scroll_emit="scroll_emit">
      <!-- 热点城市 -->
      <div class="hotcity" v-if="res">
        <h4 class="hot-h4">热点城市</h4>
        <ul>
          <li
            v-for="(item, index) in hotCityList"
            :key="index"
            @click="click_hot_city(item)"
          >
            <a>
              <h4 v-text="item.nm"></h4>
            </a>
          </li>
        </ul>
      </div>

      <!-- 城市列表 -->
      <div class="citylist">
        <div
          class="citylist-wrapper"
          v-for="(item, index) in newCityList"
          :key="index"
        >
          <!-- 索引 -->
          <h4
            class="index"
            v-text="item.index"
            @click="click_city_index(item, index)"
            ref="city_index"
          ></h4>
          <ul>
            <!-- 城市 -->
            <li
              class="city-item"
              v-for="(item2, index) in item.city"
              :key="index"
              @click="click_current_city_name(item2)"
            >
              <h5 v-text="item2.nm"></h5>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <!-- 测试 vuex -->
    <!-- <h4>{{ $store.state.movie.city }}</h4> -->
  </div>
</template>
<script>
import scroll from '../../../components/betterScroll/scroll';
export default {
  name: 'location',
  components: { scroll },
  data() {
    return {
      list_city: [],
      res: {},
      hotCityList: null,
      newCityList: null,
      button: false
    };
  },
  computed: {},
  watch: {
    button() {
      this.$nextTick();
    }
  },
  created() {
    //组件初始化时  加载数据
    this.http();
    // console.log(this.$store.state.movie);

    //组件初始化且 dom渲染完成后,弹框
    this.$nextTick(() => {
      // this.$toast.judge_show(`请选择城市,3秒后本窗口自动关闭`);
    });
  },
  mounted() {},
  methods: {
    // 网络请求
    async http() {
      this.res = await this.$request.movie_cityList();
      if (this.res.data.status === 0) {
        // console.log('城市数据获取成功');
        this.list_city = this.res.data.data.cities;
        if (this.list_city.length == 0) {
          return console.log(`this.list_city.length数据不正确`);
        }
        this.newCityList = this.operate_data()[0];
        this.hotCityList = this.operate_data()[1];
      }
    },
    // 修正数据
    operate_data() {
      let newCityList = [];
      let hotCityList = [];
      // debugger
      if (this.list_city.length > 0) {
        for (let item of this.list_city) {
          item = typeof item === 'string' ? JSON.parse(item) : item;
          if (item.isHot) {
            // 判断热点城市
            hotCityList.push(item);
            //添加至数组中
          }
          //对item进行排序处理, a-z的顺序
          //获取item的py的首个字母
          let code1 = item.py.substring(0, 1).toUpperCase();

          if (has_exist(code1)) {
            newCityList.forEach(item2 => {
              item2.index == code1 ? item2.city.push(item) : null;
            });
          } else {
            newCityList.push({ index: code1, city: [item] });
          }
        }
      }

      function has_exist(code1) {
        return newCityList.some(item => {
          return item.index == code1;
        });
      }
      //排序处理
      newCityList.sort((a, b) => {
        return a.index < b.index ? -1 : 1;
      });
      return [newCityList, hotCityList];
    },
    //滚动事件
    scroll_emit(p) {
      p.y <= -750 ? (this.button = true) : (this.button = false);
    },
    //选中城市分类的Index
    click_city_index(item, index) {
      console.log(item.index);
      //获取当前index对应的dom对象 的相对高度
      let coordinate_y = this.$refs.city_index[index].offsetTop;
      //滚动至该dom对象的坐标
      this.$refs.scroll.bs.scrollTo(0, -coordinate_y);
    },
    //点击返回顶部
    button_back_top() {
      this.$refs.scroll.scroll_to_top();
      this.button = false;
    },
    //选中右边 索引栏
    click_right_index(item, index) {
      this.click_city_index(item, index);
    },
    //选中城市
    click_current_city_name(item) {
      this.$store.commit('movie/set_city_name', item);
      this.$router.push('/home/suggsetion/nowplaying/' + item.id);
    },
    // 选中 热点城市
    click_hot_city(item) {
      this.$store.commit('movie/set_city_name', item);
    }
  }
};
</script>

<style scoped>
@keyframes toggle {
  from {
    transform: translateX(100%);
    animation: toggle 2s;
  }
  to {
    transform: translateX(0%);
  }
}
.location {
  animation: toggle 2s;
}
.hotcity {
  background-color: rgb(163, 218, 218);
  cursor: wait;
}
.hotcity h4 {
  color: rgb(206, 19, 19);
}
.hotcity ul {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-left: auto;
  margin-top: 20px;
}
.hotcity ul li {
  list-style: none;
  flex-basis: 29%;
}
.hotcity ul li h4 {
  border-bottom: 1px solid;
  display: inline-block;
  color: black;
  margin: 10px 0;
}
.hot-h4 {
  margin: 0;
}
.scroll {
  /* height: calc(100%-145px); */
  height: 500px;
  overflow: hidden;
}
/**
如果父元素存在transform属性, 则固定定位无效
 */
button {
  position: fixed;
  bottom: 250px;
  right: 0;
  z-index: 3;
  border-radius: 5px;
  background-color: rgb(223, 241, 206);
}
.right_nav {
  position: fixed;
  right: 0;
  z-index: 2;
  /* top: 255px; */
  background-color: rgb(236, 193, 193);
  height: 60%;
}

.right_nav ul {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: scroll;
}
.right_nav ul li {
  list-style: none;
  width: 30px;
  text-align: center;
}
</style>
