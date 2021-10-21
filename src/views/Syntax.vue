<template>
  <div id="syntax">
    <p>
      1. Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue
      能够智能地计算出最少需要重新渲染多少组件，并把 DOM
      操作次数减到最少。如果熟悉虚拟 DOM 并且偏爱原生 JS
      也可以不用模板，直接写渲染<a
        href="https://cn.vuejs.org/v2/guide/render-function.html"
      >
        (render) 函数</a
      >。
    </p>
    <p>2. 文本 使用“Mustache”语法 (双大括号) 的文本插值：</p>
    <p>3. v-html 原始HTML<span v-html="rawHtml"></span></p>
    <p>4. 计算属性 vs 侦听属性 {{ firstName }}</p>
    <input type="text" v-model="fullNameComputed" />
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <p>5. 使用git</p>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
export default {
  name: 'Syntax',
  data() {
    return {
      rawHtml: '<p> 我是 v-html 原始HTML</p>',
      firstName: 'Foo',
      question: '你好吗?',
      // 在数据变化时执行异步或开销较大的操作时，watch是最有用的
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
    };
  },
  mounted() {
    console.log(this.question.indexOf('?')); // 3 输出?所在的index
    // this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)';
        return;
      }
      this.answer = 'Thinking...';
      var vm = this;
      axios
        .get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error;
        });
    },
  },
  computed: {
    fullNameComputed: {
      get: function () {
        return this.firstName + ' Bar';
      },
      set: function (newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        console.log(this.firstName);
      },
    },
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...';
      this.getAnswer();
    },
  },
};
</script>

<style>
p {
  text-align: left;
}
</style>
