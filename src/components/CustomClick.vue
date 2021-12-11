<template>
  <!-- 点击该按钮触发父子组件的数据同步 -->
  <div class="share-btn" @click="confirm">
    点击我这个子组件, 给父组件传递一个false
  </div>
</template>

<script>
export default {
  name: 'CustomClick',
  props: ['value'],
  methods: {
    confirm() {
      // 双向数据绑定父组件:value对应的值
      // 通过$emit触发父组件input事件，第二个参数为传递给父组件的值，这里传递了一个false值
      // 即触发父组件的input事件，并将传递的值‘false’赋值给msg
      this.$emit('input', false);
    },
  },
};
</script>

<style scoped>
.share-btn {
  border: 1px solid rgb(124, 39, 24);
}
</style>
