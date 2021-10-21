<template>
  <div class="instance">
    <p>
      1. 虽然没有完全遵循 MVVM 模型，但是 Vue
      的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel) 表示 Vue
      实例。
    </p>
    <p>
      2. Vue实例还暴露了一些属性与方法。有前缀 $ 来与用户定义的属性区分开。
      <a href="https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B-property"
        >vue实例的属性和方法。</a
      >
      vm.$data；vm.$el；vm.$watch('a', f)
    </p>
    <p>
      3. 每个 Vue 实例在被创建时都要经过一系列的初始化过程，如
      设置数据监听、编译模板、将实例挂载到DOM 并在数据变化时更新 DOM
      等。同时在这个过程中也会运行一些叫做 “生命周期钩子” 的函数，如
      created、mounted、updated 和
      destroyed。用户可在生命周的不同阶段添加自己的代码。（生命周期钩子的 this
      上下文指向调用它的 Vue 实例，so 不要在选项 property
      或回调上使用箭头函数。）
    </p>
    <p>
      4. 试一试beforeUpdate和updated
      <input type="text" v-model="msg" />
    </p>
    <p>5. 试一试动态组件。activated 和 deactivated钩子</p>
    <keep-alive>
      <Cachea v-if="msg.length == 12"></Cachea>
      <Cacheb v-else></Cacheb>
    </keep-alive>
    <hr />
    <img src="@/assets/lifecycle.jpg" style="width: 400px" />
  </div>
</template>

<script>
import Cachea from '@/components/Cachea.vue';
import Cacheb from '@/components/Cacheb.vue';
export default {
  name: 'Instance',
  components: { Cachea, Cacheb },
  data() {
    return {
      a: 3,
      msg: 'beforeUpdate',
    };
  },
  methods: {},
  beforeCreate() {
    console.log('beforeCreate 在实例初始化之初，组件的属性生效之前同步调用。');
  },

  created() {
    console.log(
      'created 实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，且 $el property 目前尚不可用。可发送ajax请求',
    );
  },
  beforeMount() {
    console.log(
      'beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。该钩子在服务器端渲染期间不被调用。',
    );
  },
  mounted() {
    console.log(
      'mounted 实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。Note: mounted 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick',
    );
    this.$nextTick(function () {
      // 仅在整个视图都被渲染之后才会运行的代码
      console.log(
        'nextTick 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。https://cn.vuejs.org/v2/api/#vm-nextTick',
      );
    });
  },
  beforeUpdate() {
    console.log(
      'beforeUpdate 在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。',
      this.msg,
    );
  },
  updated() {
    console.log(
      'updated 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。Note: updated 不会保证所有的子组件也都被重新渲染完毕。如果你希望等到整个视图都渲染完毕，可以在 updated 里使用 vm.$nextTick：',
      this.msg,
    );
  },
  beforeDestroy() {
    console.log('beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。');
  },
  destroyed() {
    console.log(
      'destroyed 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。',
    );
  },
};
</script>

<style scoped>
.instance p {
  text-align: left;
}
</style>
