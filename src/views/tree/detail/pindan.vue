<template>
  <div class="pindan">
    <div class="box">
      <div class="content">
        <div class="title">
          <span>描述文字描述文字</span>
          <span>描述文字描述文字</span>
        </div>
        <hr />
        <ul ref="ul">
          <li
            @click="slide_animation()"
            ref="li"
            v-for="(item, index) in 5"
            :key="index"
          >
            <div class="logo">
              <img src="./kanke.jpg" alt="#" />
              <span>用户名{{ item }}</span>
            </div>
            <div class="time">
              <div>2020/5/12--12:00</div>
              <button>去拼单</button>
            </div>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pindan',
  components: {},
  props: {},
  data() {
    return {
      dom1: null,
      dom2: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // this.slide_animation();
    this.dom1 = this.$refs.ul;
    this.dom2 = this.$refs.li;
  },
  destroyed() {},
  methods: {
    slide_animation() {
      console.log('slide_animation');
      let timer = setInterval(() => {
        this.dom1.classList.add('slide');
        // this.dom2.classList.add('slide');
      }, 500);
      setTimeout(() => {
        this.dom1.classList.remove('slide');
        clearInterval(timer);
      }, 2000);
    }
  }
};
</script>

<style lang="stylus" scoped>
.pindan
    margin-top  1rem
    .box
        .content
            // height 10rem
            ul
                transition all 1s
                height 6rem
                overflow-y scroll
                li
                    transition all 1s
                    display flex
                    justify-content space-between
                    padding 0.5rem
                    color red
                    .logo
                        width 5rem
                        height 2rem
                        display flex
                        align-items center
                        justify-content space-between
                        padding 0 0.5rem
                        img
                            width 43%
                            height 100%
                            border-radius 50%
                        span
                            font-size 0.5rem
                    .time
                        width 8rem
                        height 2rem
                        display flex
                        align-items center
                        justify-content space-between
                        button
                            height 1rem
                            width 2.5rem
                            background-color darkred
                            border-radius 0.2rem
                            border none
                            font-size 0.5rem
                            color white
            .title
                display flex
                justify-content space-between
                height 1rem
                font-size 0.8rem
.slide
    transform translateX(-100%)
    opacity 0
</style>
