<template>
  <div class="p5location" v-if="close">
    <div class="close">
      <i class="icon-camera" @click="close_location" />
    </div>
    <div class="search">
      <i class="icon-search" />
      <input type="text" placeholder="输入乡镇设社区 或者 商圈名称" />
    </div>
    <div class="select">
      <span @click="select_location">
        <router-link to="">手动选择地址</router-link>
      </span>
    </div>
    <p6select @address_fn="address_fn" :p6select="p6select" />
    <div class="mylocation">
      <span>用户{{ address }}</span>
    </div>
    <div class="remind">现在<span>登录</span>,可以根据地址快速定位</div>
  </div>
</template>

<script>
import p6select from './p6select';
export default {
  name: 'p5location',
  components: { p6select },
  props: {
    close: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      p6select: false,
      address: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    close_location() {
      this.$emit('close_p5');
    },
    select_location() {
      this.p6select = true;
      console.log('select_location');
    },
    address_fn(address) {
      console.log(address);

      if (!address.includes('null')) {
        this.address = address;
        this.p6select = false;
        this.$emit('address_fn', this.address);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.p5location
    position absolute
    left 0
    top 0
    width 100%
    background-color white
    outline 1px solid
    height 300px
    display flex
    flex-direction column
    text-align center
    padding-top 10px
    .close
        text-align right
        padding-right 10px
        padding-bottom 10px
    .search
        height 10%
        // margin-bottom 10px
        position relative
        i
            font-size 1rem
            position absolute
            left 70px
            top 10px
        input
            height 125%
            width 80%
            box-sizing border-box
            padding-left 30px
    .select
            width 80%
            text-align right
            margin-top 10px
            margin-left 65px
            padding 10px 0
            border-bottom 1px solid orange
        a
            color black
    .mylocation
            text-align left
            padding-left 65px
            padding-top 20px
    .remind
            margin-top 30px
            span
                color red
                font-weight 300
</style>
