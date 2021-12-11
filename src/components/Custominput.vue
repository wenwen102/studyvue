<template>
  <input :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: 'Custominput',
  props: ['value'],
  methods: {
    // inputHandler() {
    //   this.$emit('input', this.value);
    // }, // 为什么这里不可? 会引发表单冲突
  },
};
</script>

<style scoped>
#cachea {
  border: 1px solid rgb(124, 39, 24);
}
</style>
