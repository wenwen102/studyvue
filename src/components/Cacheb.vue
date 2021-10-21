<template>
  <div id="cacheb">缓存组件b "msg.length != 12"</div>
</template>

<script>
export default {
  name: 'Cacheb',
  activated() {
    console.log('activated 被 keep-alive 缓存的组件激活时调用。(组件b');
  },
  deactivated() {
    console.log('deactivated 被 keep-alive 缓存的组件失活时调用。(组件b');
  },
};
</script>

<style>
#cacheb {
  border: 1px solid rgb(18, 173, 70);
}
</style>
