<template>
  <div class="smain">
    <div class="cpt" v-if="!$route.path.includes('shop/')">
      <router-link to="/home/shop/detail">123</router-link>

      <s1bar />
      <sswiper />
      <safterswiper />
      <s2after />
      <s3ad />
      <s4listgoods />
      <s5service />
    </div>
  </div>
</template>
<script>
import s1bar from './s1bar';
import sswiper from './sswiper';
import s2after from './s2after';
import s3ad from './s3ad';
import s4listgoods from './s4listgoods';
import s5service from './s5service';
import safterswiper from './safterswiper';
export default {
  name: 'smain',
  components: {
    sswiper,
    safterswiper,
    s2after,
    s3ad,
    s4listgoods,
    s5service,
    s1bar
  },
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

<style lang="stylus" scoped></style>
