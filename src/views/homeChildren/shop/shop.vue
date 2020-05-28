<template>
  <div>
    <div class="all" v-if="true">
      <topbar />
      <smain />
    </div>

    <router-view></router-view>
    <sfooter class="footer"></sfooter>
  </div>
</template>

<script>
import topbar from './common/topbar';
import sfooter from './common/shopfooter';
import smain from './common/smain';

export default {
  name: 'shop',
  components: { topbar, sfooter, smain },
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

<style scoped></style>
