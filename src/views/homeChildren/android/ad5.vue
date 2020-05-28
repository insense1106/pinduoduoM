<template>
  <div>
    <h2>list-item</h2>
    <hr />
    <div class="span4">
      <ul class="home-channel-list">
        <li>
          <a href="">1</a>
        </li>
        <li>
          <a href="">2</a>
        </li>
        <li>
          <a href="">3</a>
        </li>
        <li>
          <a href="">4</a>
        </li>
        <li>
          <a href="">5</a>
        </li>
        <li>
          <a href="">6</a>
        </li>
      </ul>
    </div>
    <hr />
    <div class="test">
      <ul class="home-channel-list">
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li><a href="">6</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ad5',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>

.span4
  width: 234px;
  ul
    // margin: 0;
    // padding: 3px;
    // list-style-type: none;
    // font-size: 12px;
    // text-align: center;
    // background: #5f5750;
    // &:before
      // content: " ";
      // display: table;
    li
      position: relative;
      float: left;
      width: 70px;
      height: 82px;
      padding: 0 3px;
      // display: list-item;
      // text-align: -webkit-match-parent;
      &:before
        top: -1px;
        left: 6px;
        width: 64px;
        height: 1px;
        position: absolute;
        content: " ";
        background: #665e57;
      // a
      //   display: block
      //   display: none
        // padding-top: 18px;
        // text-overflow: ellipsis;
        // color: #fff;
        // opacity: .7;
        // -webkit-transition: opacity .2s;
        // transition: opacity .2s;
        // &:after
        //   top: 6px;
        //   left: 0;
        //   width: 1px;
        //   height: 70px;
        //   position: absolute;
        //   content: " ";
        //   background: #665e57;
.test
  width 234px
  ul
    li
      position relative
      float left
      width 70px
      height 82px
      padding 0 3px
      // display: list-item;
      &:before
        content ' '
        background-color #665e57
        position absolute
        top -1px
        width 64px
        height 1px
        left 6px
</style>
