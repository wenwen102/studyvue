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
      <span>.lazy modifier:(v-bind+@change)</span>
      <input v-model.lazy="question" />
    </p>
    <p>{{ answer }}</p>
    <p>
      5. Class 与 Style 绑定: 表达式结果的类型除了字符串之外，还可以是对象"data,
      computed"或数组。PS :class 指令也可以与普通的 class attribute 共存。
    </p>
    <p>6. v-for</p>
    <div id="todo-list-example">
      <form @submit="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
        />
        <button>Add</button>
      </form>
      <ul>
        <li
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
        >
          {{ todo.title }}
          <button v-on:click="todos.splice(index, 1)">Remove</button>
        </li>
      </ul>
    </div>
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
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn',
        },
      ],
      nextTodoId: 4,
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
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = '';
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

<style scoped>
p {
  text-align: left;
}
</style>
