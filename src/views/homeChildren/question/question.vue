<template>
  <div class="question">
    <header></header>
    <article v-if="list">
      <h1>题目序列号:{{ random }}</h1>
      <section>{{ list[random].question }}</section>
      <hr />
      <h1>答案</h1>
      <section v-if="flag_answer">{{ list[random].answer }}</section>
      <hr />
      <button @click="handler_random">NEXT</button>
      <button @click="handler_answer">答案</button>
    </article>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'question',
  components: {},
  props: {},
  data() {
    return {
      list: null,
      random: 0,
      flag_answer: false
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
      let res = await this.$request.xiaomi_question();
      this.list = res.data.question;
      this.$request.music_hotdiss_list();
    },
    handler_random() {
      this.random = ~~(Math.random() * this.list.length);
      this.flag_answer = false;
      //    res.data.match(/MusicJsonCallback\((\S*)/);
      //   let str = 'MusicJsonCallback({ab:123,cd:123})';
      //   let res = str.match(/MusicJsonCallback\((\S*)\)/);
      //   console.log(res[1]);
    },
    handler_answer() {
      this.flag_answer = !this.flag_answer;
    }
  }
};
</script>

<style lang="stylus" scoped>
.question
    width 100%
    color black
    header
    article
        position relative
        section
            padding 1rem
            font-size 1.5rem
            // color red
            &:nth-child(2n+1)
                color red
                font-size 1rem
        &>button
            width 3rem
            font-size 0.5rem
            height 1.5rem
            position fixed
            background-color darkred
            color white
            right 0
            top 1rem
            &:last-child
                right 4rem
                background-color green
</style>
