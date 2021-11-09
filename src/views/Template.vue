<template>
  <div id="template">
    <p>
      1. 在组件中使用v-model [子组件必须： 1.将其 value attribute 绑定到一个名叫
      value 的 prop 上 2.在其 input 事件被触发时，将新的值通过自定义的 input
      事件抛出]
      <custom-input v-model="searchText"></custom-input>
      <span>{{ searchText }}</span>
    </p>
    <p>2. 插槽</p>
    <slot-case>我是一个插槽</slot-case>
    <slot-case>我是第二个插槽</slot-case>
    <p>3. 我来尝试一下使用分支dev</p>
    <p>4. 冲突解决</p>
    <p>4.1 冲突冲突完成</p>
  </div>
</template>

<script>
import Custominput from '@/components/Custominput.vue';
import SlotCase from '@/components/SlotCase.vue';

export default {
  name: 'Template',
  components: { 'custom-input': Custominput, 'slot-case': SlotCase },
  data() {
    return {
      searchText: '',
    };
  },
};
</script>

<style scoped>
p {
  text-align: left;
}
</style>
