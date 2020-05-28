<template>
  <div class="p6select" v-if="p6select">
    <div class="select">
      <span @click="toggle_province">{{ current_province }}</span>
      <span @click="toggle_city">----{{ current_city }}</span>
      <span @click="toggle_area">----{{ current_area }}</span>
      <button @click="over">确定</button>
    </div>
    <div class="content">
      <ul class="city" v-if="flag_area">
        <li
          v-for="(item, index) in list_area"
          :key="index"
          @click="select_area(item)"
        >
          <span>{{ item || '' }}</span>
          <hr />
        </li>
      </ul>
      <ul class="city" v-if="flag_city">
        <li
          v-for="(item, index) in list_city"
          :key="index"
          @click="select_city(item)"
        >
          <span>{{ item.city_name }}</span>
          <hr />
        </li>
      </ul>
      <ul v-if="flag_province">
        <li
          v-for="(item, index) in location_data_object"
          :key="index"
          @click="select_province(item)"
        >
          <span>
            {{ item.name }}
          </span>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p6select',
  components: {},
  props: {
    p6select: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      list: null,
      location_data_object: null,
      province: [],
      list_city: [],
      list_area: [],
      flag_province: true,
      flag_city: true,
      flag_area: false,
      current_province: null,
      current_city: null,
      current_area: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.http();
  },
  mounted() {},
  methods: {
    async http() {
      let res = await this.$http.get('http://localhost:80/xiaomi/location');
      this.location_data_object = res.data.location;
    },
    select_province(item) {
      this.current_province = item.name;
      this.list_city.length = 0;
      this.list_area.length = 0;
      //遍历 city
      for (let k_city in item.child) {
        let city_name = item.child[k_city].name;
        let list_city_area = item.child[k_city].child;
        this.list_city.push({ city_name, list_city_area });
      }
      this.flag_city = true;
      this.flag_province = false;
    },
    select_city(item) {
      console.log(item);
      this.list_area = item.list_city_area;
      this.current_city = item.city_name;
      this.flag_area = true;
      this.flag_city = false;
    },
    select_area(item) {
      this.current_area = item;
    },
    toggle_province() {
      this.flag_province = true;
      this.flag_city = false;
      this.flag_area = false;
    },
    toggle_city() {
      this.flag_area = false;
      this.flag_city = true;
      this.flag_province = false;
    },
    toggle_area() {
      this.flag_area = true;
      this.flag_city = false;
    },
    over() {
      let address =
        '地址:' + this.current_province + this.current_city + this.current_area;
      this.$emit('address_fn', address);
      //   return address;
    }
  }
};
</script>

<style lang="stylus" scoped>
.p6select
    position absolute
    width 100%
    height 100%
    outline 1px  solid red
    top -1px
    text-align left
    background-color white
    box-sizing border-box
    padding 20px 60px
    .select
        border-bottom 1px solid red
    .content
        ul
            display flex
            flex-wrap wrap
            li
                text-overflow ellipsis
                margin-left 20px
                &:hover
                    color red
</style>
