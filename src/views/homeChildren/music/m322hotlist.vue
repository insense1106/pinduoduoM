<template>
  <div class="m322hotlist">
    <div class="box">
      <ul v-if="list1">
        <li v-for="(item, index) in list1.list" :key="index">
          <div class="img">
            <img :src="item.imgurl" alt="" />
            <span>点击量:{{ item.listennum | count }}</span>
          </div>

          <span>{{ item.dissname }}</span>
          <span>{{ item.author }}</span>
        </li>
      </ul>
      <ul v-for="(list, index) in list2" :key="index">
        <li v-for="item in list" :key="item.vid">
          <div class="img">
            <img :src="item.picurl" alt="" />
            <span>点击量:{{ item.listennum | count }}</span>
          </div>

          <span>{{ item.pub_date }}</span>
          <span>{{ item.singer_name }}</span>
          <span>{{ item.mvdesc }}</span>
          <span>{{ item.mvtitle }}</span>
        </li>
      </ul>
      <ul v-if="list3">
        <li v-for="(item, index) in list3" :key="index">
          <div class="img">
            <img :src="item.pic" alt="" />
            <span>{{ item.count }}</span>
          </div>
          <span>{{ item.msg }}</span>
          <span>{{ item.msg2 }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm322hotlist',
  components: {},
  props: {},
  data() {
    return {
      list1: null,
      list2: null,
      list3: null
    };
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
      // https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg
      let res = await this.$music('/fcg_first_yqq.fcg', {
        params: {
          format: 'jsonp',
          tpl: 'v12',
          page: 'other',
          rnd: 0,
          g_tk: new Date().getTime(),
          loginUin: 0,
          hostUin: 0,
          inCharset: 'utf8',
          outCharset: 'GB2312',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
        }
      });
      //   console.log(res.data);
      let res2 = res.data;
      let res3 = res2.substring(18);
      let res4 = res3.split('');
      res4.pop();
      let res6 = res4.join('');
      let res7 = JSON.parse(res6);
      let demo1 = Object.values(res7.data);
      demo1.shift();
      this.list1 = demo1[0];
      console.log(this.list1);

      this.list2 = demo1[1];
      console.log(this.list2);

      this.list3 = demo1[2];
      console.log(this.list3);
    }
  },
  filters: {
    count(num) {
      let s = Math.round(num / 10000);
      return s + '万';
    }
  }
};
</script>

<style lang="stylus" scoped>
.m322hotlist
    color black
    .box
        ul
            display flex
            flex-wrap wrap
            li
                flex-basis 50%
                display flex
                flex-direction column
                .img
                    position relative
                    img
                        width 100%
                    span
                        position absolute
                        bottom 0
                        left 0
                        color white
                        font-size 1rem

                span
                    &:last-child
                        color grey
                        // font-size 1rem
</style>
