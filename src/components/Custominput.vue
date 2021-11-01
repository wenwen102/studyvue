<template>
  <input v-bind:value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: 'Custominput',
  props: ['value'],
};
</script>

<style scoped>
#cachea {
  border: 1px solid rgb(124, 39, 24);
}
</style>
