<template functional>
  <div class="list">
    <div
      class="item"
      v-for="item in props.list"
      :key="item.id"
      @click="props.itemClick(item)"
    >
      <p>这是函数式组件</p>
      <p>{{ item.title }}</p>
      <p>{{ item.content }}</p>
    </div>
  </div>
</template>
<script>
/**
 * 函数式组件是无状态，它无法实例化，没有任何的生命周期和方法。
 * 创建函数式组件也很简单，只需要在模板添加 functional 声明即可。
 * 一般适合只依赖于 外部数据 的变化而变化的组件
 * 因其轻量，渲染性能也会有所提高。
 *组件需要的一切都是通过 context 参数传递。
    它是一个上下文对象，具体属性查看文档。
    这里 props 是一个包含所有绑定属性的对象。
 */
</script>
