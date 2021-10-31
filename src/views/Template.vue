<template>
  <div id="template">
    <p>
      1. 在组件中使用v-model
      <customInput
        v-bind:value="searchText"
        v-on:input="searchText = $event"
      ></customInput>
    </p>
  </div>
</template>

<script>
import Custominput from '@/components/Custominput.vue';

export default {
  name: 'Template',
  components: { customInput: Custominput },
  data() {
    return {
      searchText: '',
    };
  },
};
</script>

<style></style>
