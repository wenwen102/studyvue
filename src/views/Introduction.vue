<template>
  <div class="introduction">
    <p>指令 (Directives) 是带有 v- 前缀的特殊 attribute。</p>
    <p v-bind:title="message">
      1. v-bind:title="message" 绑定元素
      attribute。鼠标悬停几秒钟查看此处动态绑定的提示信息;
    </p>
    <p v-if="seen">2. v-if="seen" 控制切换一个元素是否显示;</p>
    <p>3. v-for="(todo, index) in todos" 绑定数组 渲染一个项目列表:</p>
    <p v-for="(todo, index) in todos" :key="index">
      &#160;&#160; {{ index + 1 }}--{{ todo.text }}
    </p>
    <p>&#160;&#160;&#160;(PS: &amp;#160; 表示空格)</p>
    <p v-on:click="reverseMessage">
      4. v-on:click="reverseMessage" 添加事件监听器
    </p>
    <p>
      5. v-model 实现表单输入和应用状态之间的双向绑定<input
        type="text"
        v-model="message"
        style="width: 230px"
      />&#160;{{ message }}
    </p>
    <p>
      6. 组件:本质上是一个拥有预定义选项的一个 Vue 实例,
      可以用一个组件构建另一个组件模板。所有的 Vue 组件都是 Vue
      实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。
    </p>
    <p>
      7. 修饰符 (modifier) 是以半角句号 .
      指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent
      修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
    </p>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  data() {
    return {
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: '学习 JavaScript高程' },
        { text: '学习 Vue文档' },
        { text: '学习 WebGIS' },
      ],
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
};
</script>

<style scoped>
.introduction p {
  text-align: left;
}
</style>
