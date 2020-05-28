<template>
  <div class="shop-container">
    <ul class="shop-list">
      <li class="shop-list-item">
        <img src="./img/fj5.jpg" alt="" width="100%" />
        <h4 list-item-title>标题信息</h4>
        <div class="list-item-bottom">
          <span class="item-price">$26.9</span>
          <span class="item-counter">23649</span>
          <span class="item-user"
            ><img src="" alt=""/><img src="" alt=""
          /></span>
          <span>
            <button>去拼单</button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'page_shop_list',
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.shop-list-item {
  list-style: none;
}
img {
  width: 50%;
}
</style>
