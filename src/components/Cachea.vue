<template>
  <div id="cachea">缓存组件a "msg.length == 12"</div>
</template>

<script>
export default {
  name: 'Cachea',
  activated() {
    console.log('activated 被 keep-alive 缓存的组件激活时调用。(组件a');
  },
  deactivated() {
    console.log('deactivate d 被 keep-alive 缓存的组件失活时调用。(组件a');
  },
};
</script>

<style>
#cachea {
  border: 1px solid rgb(124, 39, 24);
}
</style>
