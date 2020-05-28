<template>
  <div class="toast-root" v-show="isShow">
    <div class="header2">
      <span class="left">提示</span>
      <span class="right" @click="click_sure">取消</span>
    </div>
    <div class="container">
      <span class="text">{{ message }}</span>
    </div>
    <div class="toast-footer">
      <span @click="click_sure">确定</span>
      <span>取消</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  components: {},
  props: {},
  data() {
    return {
      message: '',
      isShow: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    judge_show(msg, duration = 5000) {
      this.isShow = true;
      this.message = msg;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration);
      //   clearTimeout(timer);
    },
    click_sure() {
      console.log('click_sure');
      this.isShow = false;
    }
  }
};
</script>

<style scoped>
.toast-root {
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(173, 167, 167);
  text-align: center;
  height: 150px;
}
.header2 {
  display: flex;

  height: 30px;
  justify-content: space-between;
  position: relative;
}
.container {
  background-color: rgb(247, 221, 221);
  height: 50px;
  text-align: center;
  padding-top: 25px;
}
.text {
  font-size: 2rem;
}
.toast-footer {
  text-align: center;
  padding-top: 10px;
}
.toast-footer span {
  margin-left: 30px;
  margin-right: 30px;
  border: 1px solid rgb(10, 10, 10);
  padding: 5px;
}
</style>
