<template>
  <div class="bdmap">
    <div class="header">
      <div>
        <span>当前城市</span>
        <input type="text" v-model="city" @focus="handler_input_focus" /><button
          @click="handler_search"
        >
          确定
        </button>
      </div>

      <div>
        <span>地址</span> <input type="text" v-model="address" /><button>
          确定
        </button>
      </div>
      <div>
        <span>经纬度</span> <input type="text" v-model="info" /><button>
          确定
        </button>
      </div>
    </div>
    <div class="box">
      <baidu-map
        class="bm-view"
        :center="center"
        :zoom="zoom"
        @ready="baidu_init"
      >
        <!-- 比例尺 -->
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <!-- 缩放控件 -->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <!-- 地图类型 -->
        <bm-map-type
          :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
          anchor="BMAP_ANCHOR_TOP_LEFT"
          :offset="offset_bm_map_type"
        ></bm-map-type>
        <!-- 定位 -->
        <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="false"
          @locationSuccess="baidu_locationSuccess"
          @locationError="baidu_locationError"
        ></bm-geolocation>
        <!-- 城市列表 仅在容器尺寸较大时生效 -->
        <bm-city-list
          class="bm-city-list"
          anchor="BMAP_ANCHOR_BOTTOM_LEFT"
          :offset="offset_city_list"
          @changeBefore="baidu_changeBefore"
        ></bm-city-list>
        <!-- 全景 -->
        <!-- <bm-panorama></bm-panorama> -->
      </baidu-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bdmap',
  components: {},
  props: {},
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 5,
      city: '',
      address: '',
      offset_city_list: { width: 0, height: 50 },
      offset_bm_map_type: { width: 300, height: 100 },
      info: '----',
      current_center: null,
      demo: {}
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    // GEO
    async http(city) {
      let res = await this.$request.geocoder_city_name(city);
      console.log(res.data.result);
      if (res.data.result.location) {
        this.current_center = res.data.result.location;

        this.info =
          '精度' +
          this.current_center.lng.toFixed(2) +
          '  纬度' +
          this.current_center.lat.toFixed(2);
      }
    },
    // 初始化
    baidu_init({ BMap, map }) {
      this.demo.bmap = BMap;
      this.demo.map = map;
      this.center = this.current_center;
    },
    // 搜索
    async handler_search() {
      if (this.city != '') {
        await this.http(this.city);
        this.baidu_init(this.demo);
      }
    },
    // 定位
    baidu_locationSuccess(demo) {
      this.info =
        '精度' +
        demo.point.lng.toFixed(2) +
        '  纬度' +
        demo.point.lat.toFixed(2);

      this.city = demo.addressComponent.province + demo.addressComponent.city;
    },
    //定位失败
    baidu_locationError() {
      console.log('baidu_locationError');
    },
    // 城市列表
    baidu_changeBefore() {
      console.log('baidu_changeBefore');
    },
    handler_input_focus() {
      this.city = '';
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/mixin_global'
.bdmap
    padding-top 1rem
    color black
    .header
      margin-top  1rem
      &>div
        padding  0.5rem
        display flex
        justify-content space-between
        &>span
          flex-basis 20%
          font-size 0.7rem
          color $c1
        &>input
          flex-basis 60%
          margin-left 1rem
          border-radius 0.3rem
          border 0.03rem solid
          padding-left 1rem
          &:focus
            border $c4 solid
        &>button
          flex-basis 20%
          border-radius 0.3rem
          height 1.1rem
          margin-left 1rem
          background-color $c1
          border none
    .box
      .bm-view
          height 20rem
          // width 500%
</style>
