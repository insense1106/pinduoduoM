<template>
  <div class="login">
    <form @submit.prevent="handler_submit" method="post">
      <!-- user_name -->
      <div>
        <span>User</span>
        <input v-model="user" type="text" name="user" id="user" />
      </div>
      <!-- password -->
      <div>
        <span>password</span>
        <input v-model="pw" type="text" name="pw" id="pw" />
      </div>
      <!-- code -->
      <div>
        <span>code</span>
        <input v-model="code" type="text" name="code" id="code" />
        <button
          class="send_code"
          @click.prevent="handler_send_code"
          :disabled="flag_code"
        >
          {{ send_code }}😄😄{{ time_count }}
        </button>
      </div>
      <div>
        <input class="submit" type="submit" value="Login" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  props: {},
  data() {
    return {
      user: ``,
      pw: ``,
      code: ``,
      time_count: 30,
      flag_code: false,
      send_code: 'send'
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    // request_login
    async handler_submit() {
      // let form_data = new FormData(e.target);
      // console.log(this.user);
      // form_data.append('user', this.user);
      // form_data.append('pw', this.pw);
      // form_data.append('');
      // let form_data = JSON.stringify({ user: this.user, pw: this.pw });
      let form_data = { user: this.user, pw: this.pw };
      console.log(form_data);
      let res2 = await this.$request.xiaomi_login(form_data);
      console.log(res2);

      let reg = /^\d{3,4}$/;
      // if the code is right
      if (!reg.test(this.code) || this.send_code != this.code) {
        alert(`${this.code} is  not right`);
        console.log(this.code + `----code is not right`);
        return;
      }
    },
    // request_code
    async handler_send_code() {
      this.send_code = await this.$request.xiaomi_code();
      // 验证send_code

      this.flag_code = true;
      let timer_inter = setInterval(() => {
        this.time_count--;
      }, 1000);
      setTimeout(() => {
        clearInterval(timer_inter);
        this.flag_code = false;
        this.time_count = 30;
      }, 30000);
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
    color black
    padding-top 1rem
    width 20rem
    &>form
      font-size 1rem
      width 80%
      margin auto
      background-color lightgrey
      &>div
        margin-top 1rem
        display flex
        justify-content space-between
        position relative
        .submit
          width 4rem
          height 2rem
.send_code
  position absolute
  right 0
</style>
