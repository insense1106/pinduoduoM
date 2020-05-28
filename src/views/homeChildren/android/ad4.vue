<template>
  <div class="ad4">
    <div class="input">
      input 下拉菜单const text = document.getElementById('text'); text.onclick =
      function (e) { console.log('onclick') } text.onfocus = function (e) {
      console.log('onfocus') } text.onmousedown = function (e) {
      console.log('onmousedown') } text.onmouseenter = function (e) {
      console.log('onmouseenter') } 作者：LinDaiDai_霖呆呆
      链接：https://juejin.im/post/5eb55ceb6fb9a0436748297d 来源：掘金
      著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
      <hr />
      <!-- datalist的id要与list属性名称一致 -->
      <input
        type="text"
        list="list"
        @click="fn_click()"
        @focus="fn_focus"
        @mousedown="fn_mousedown"
        @mouseenter="fn_mouseenter"
        @mouseleave="fn_mouseleave"
        @mouseout="fn_mouseout"
      />
      <datalist id="list">
        <option>male1</option>
        <option>female</option>
      </datalist>
      <hr />
    </div>

    stylus 函数 bgimg
    <hr />
    <a class="stylus" href="javascript:;">link</a>
    <div class="d1 ">2</div>
    <hr />
    <h1>上传图片</h1>
    <hr />
    <div class="img">
      <ul v-if="list.length > 0">
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.img" alt="" />
        </li>
        <li v-if="list.lengt > 5 ? false : true">
          <img src="../../../assets/logo.png" alt="" />
          <input type="file" name="img" @change="add_img" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ad4',
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          img: ''
        },
        {
          img: ''
        },
        {
          img: ''
        }
      ],
      law: {
        img: 'image/gif,image/jpeg,image/png,image/jpg'
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    add_img(event) {
      // let reader = new FileReader();
      let img1 = event.target.files[0];
      console.log(event.target.files);
      let type = img1.type;
      console.log(type);
      let size = img1.size;
      console.log(size);
      this.law.img.indexOf(type) == -1
        ? console.log('typer error')
        : console.log(`type correct`);
      size > 3131311
        ? console.log('请选择小于3m的图片')
        : console.log('img size is OK');
      // let uri = '';
      let form = new FormData();
      form.append('file', img1, img1.name);
      // this.$http.
    },
    fn_click() {
      console.log('fn_click');
    },
    fn_focus() {
      console.log('fn_focus');
    },
    fn_mousedown() {
      console.log('fn_mousedown');
    },
    fn_mouseenter() {
      console.log('fn_mouseenter');
    },
    fn_mouseleave() {
      console.log('fn_mouseleave');
    },
    fn_mouseout() {
      console.log('fn_mouseout');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './admixin.styl';
// @import url('./admixin.styl');
.ad4
  margin-left 100px
a:after
  content: attr(href);
a:before
  content: attr(semon);
a:hover
  color: red;
.stylus
  bg()
  bgimg(100,100,'./bear.jpg',540%)
</style>
