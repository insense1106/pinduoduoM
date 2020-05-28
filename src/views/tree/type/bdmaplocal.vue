<template>
  <div class="bdmaplocal">
    <baidumap
      class="map_container"
      :ak="ak"
      :zoom="zoom"
      :center="center"
      @ready="handler"
    >
      <BmScale />
      <BmNavigation />
      <BmMarkerClusterer />
      <BmMarker />
      <BmInfoWindow />
    </baidumap>
  </div>
</template>

<script>
import baidumap from 'vue-baidu-map/components/map/Map.vue';
import BmScale from 'vue-baidu-map/components/controls/Scale';
import BmNavigation from 'vue-baidu-map/components/controls/Navigation';
import BmMarkerClusterer from 'vue-baidu-map/components/extra/MarkerClusterer';
import BmMarker from 'vue-baidu-map/components/overlays/Marker';
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow';
export default {
  name: 'bdmaplocal',
  components: {
    baidumap,
    BmScale,
    BmNavigation,
    BmMarkerClusterer,
    BmMarker,
    BmInfoWindow
  },
  props: {},
  data() {
    return {
      ak: 'a4MZkha6OgaX59M8yRsKTb0Ssvz1YynB',
      center: { lng: 0, lat: 0 },
      zoom: 5
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    handler({ BMap, map }) {
      console.log('BmInfoWindow');

      console.log(BMap, map);
      this.center.lng = 116;
      this.center.lat = 39;
    }
  }
};
</script>

<style lang="stylus" scoped>
.bdmaplocal
    color black
    .map_container
        height 20rem
</style>
