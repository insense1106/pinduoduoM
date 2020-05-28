<template>
  <div class="root">
    <header>
      <span class="title">
        小米闪购
      </span>
      <span class="controller">
        <i class="left icon-backward2" @click="move_left" />
        <i class="right icon-forward3" @click="move_right" />
      </span>
    </header>
    <div class="s2after-wrapper">
      <div class="time">
        <div class="round">
          <span>14:00场</span>
        </div>
        <div class="logo">
          <img
            src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ%0AbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp%0Abj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6%0AeD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1%0AMTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo%0AdHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw%0AdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv%0AIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS%0AZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD%0AcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j%0AZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1%0AbWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N%0AOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy%0AQzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF%0AOEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht%0AcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE%0AcHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf%0AS48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY%0AjRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN%0AJbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL%0AijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7%0AKnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L%0AbN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc%0AxDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V%0AkBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU%0AKc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E%0AcnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ%0A7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII="
            alt=""
          />
        </div>
        <div class="msg">
          <span>距离结束还有</span>
        </div>
        <div class="timercounter">
          <span class="hour t1">
            {{ time.h | formate(0) }}<span v-text="time.h" />
          </span>
          :
          <span class="miniute t1">
            {{ time.m | formate(0) }}<span v-text="time.m" />
          </span>
          :
          <span class="second t1">
            {{ time.s | formate(0) }}<span v-text="time.s" />
          </span>
        </div>
      </div>
      <div class="slide-wrapper" ref="slide_wrapper" @scroll="scroll">
        <ul ref="slide_ul">
          <li v-for="(item, index) in list_slide" :key="index">
            <img :src="item.img" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's2after',
  components: {},
  props: {},
  data() {
    return {
      list_slide: [
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        },
        {
          img:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340'
        }
      ],
      time: {
        h: 23,
        m: 59,
        s: 60
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.count_time();
  },
  methods: {
    move_left() {
      let timer = null;
      if (this.$refs.slide_ul.scrollLeft > 0) {
        timer = setInterval(() => {
          this.$refs.slide_ul.scrollLeft -= 20;
        }, 7);
      }

      setTimeout(() => {
        clearInterval(timer);
      }, 1500);
    },
    move_right() {
      let timer = setInterval(() => {
        this.$refs.slide_ul.scrollLeft += 20;
      }, 7);
      setTimeout(() => {
        clearInterval(timer);
      }, 500);
    },
    scroll(e) {
      console.log(e.target.offsetTop);
      console.log(e.target.scrollLeft);
      console.log(e);
    },
    count_time() {
      let timer = null;
      timer = setInterval(() => {
        if (this.time.h >= 0) {
          this.time.s -= 1;
        }

        if (this.time.s < 0 && this.time.m > 0) {
          this.time.m -= 1;
          this.time.s = 60;
        }

        if (this.time.m == 0 && this.time.h > 0) {
          this.time.h -= 1;
          this.time.m = 59;
        }
        if (this.time.h == 0 && this.time.m == 0 && this.time.s == 0) {
          this.time.h = 0;
          this.time.s = 0;
          this.time.m = 0;
          clear();
        }
      }, 1000);
      function clear() {
        clearInterval(timer);
      }
    }
  },
  filters: {
    formate(time) {
      return time < 10 ? 0 : '';
    }
  }
};
</script>

<style lang="stylus" scoped>
@import('./mixin');
.root
    header
        color white
        padding 5px 0
        font-size 1rem
        margin-left 10px
        .title
            background-color grey
        .controller
            float right
            color grey
            margin-right 10px
            background-color darkorange
            .left
                margin-right 10px
            .left:hover
                color red
            .right:hover
                color red

    .s2after-wrapper
        height 300px
        .time
            float left
            width 389px
            height 100%
            box-sizing border-box
            margin-left 10px
            padding-top 39px
            background-color $c1
            border 1px solid
            text-align center
            .round
                padding-top 15px
                font-size 1.4rem
                color orange
            .logo
                margin 25px 0
            .msg
                font-size 1.2rem
                color orange
            .timercounter
                padding-top 15px
                color black
                font-size 1.5rem
                // background-color $c5
                .t1
                    background-color $c4
                    padding 0 10px



        .slide-wrapper
            width calc(100%-400px)
            height 100%
            overflow hidden
            ul
                height 100%
                margin-left 20px
                display flex
                overflow hidden
                li
                    flex 1
                    margin-left 10px
                    border-top 2px solid red
                    img
                        height 300px
</style>
