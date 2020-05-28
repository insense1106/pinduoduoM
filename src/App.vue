<template>
  <div id="app">
    <bottomnavbar class="bottomnavbar">
      <template #name1>
        <h4 :class="{ 'slot-item': $route.path.includes('/home') }">主菜单1</h4>
      </template>
      <template #name2>
        <h4 :class="{ 'slot-item': $route.path.includes('/tree') }">主菜单2</h4>
      </template>
      <template #name3>
        <h4 :class="{ 'slot-item': '/river' === $route.path }">主菜单3</h4>
      </template>
      <template #name4>
        <h4 :class="{ 'slot-item': '/house' === $route.path }">主菜单4</h4>
      </template>
      <template #name5>
        <h4 :class="{ 'slot-item': '/' === $route.path }">前进</h4>
      </template>
      <template #name6>
        <h4 :class="{ 'slot-item': '/' === $route.path }">后退</h4>
      </template>
    </bottomnavbar>
    <transition>
      <router-view class="routerview" />
    </transition>
  </div>
</template>

<style lang="stylus" scoped>
#app {
  width: 100%;
  // overflow hidden
}

.slot-item {
  background-color: rgb(51, 192, 150);
}
.routerview
  transition all 1s
.v-enter
  transform translateX(-100%)
.v-enter-to
  transform translateX(0%)
</style>
