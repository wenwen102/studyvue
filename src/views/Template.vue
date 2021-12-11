<template>
  <div id="template">
    <p>
      1. 在组件中使用v-model [子组件必须: 1.props接收的属性名为value
      2.emit触发的必须为input]
      <custom-input
        v-model="searchText"
        v-on:focus.native="ifFocus = 'focused'"
      ></custom-input>
      <span>自定义组件的v-model{{ searchText }}</span>
    </p>
    <p>{{ ifFocus }}</p>
    <p>在一个组件的根元素上直接监听一个原生事件, 使用v-on的.native修饰符</p>
    <p>在组件中使用v-model实现父子组件的通信</p>
    <custom-click v-model="msg"> </custom-click>
    <p>{{ msg }}</p>

    <p>2. 插槽</p>
    <slot-case>我是一个插槽</slot-case>
    <slot-case>我是第二个插槽</slot-case>
    <p>3. JS浏览器获取本地IP</p>
    <p>4. el-checkbox-group 注意v-model不能绑定对象数组</p>
    <div v-for="item in filelist" :key="item.id">{{ item.title }}</div>
    <div class="checkbox-group-box" :key="checkKey">
      <!-- <el-checkbox-group v-model="filelist"> -->
      <div v-for="item in totallist" :key="item.id">
        <el-checkbox
          :label="item"
          :checked="indexOf(item, filelist)"
          @change="change(item, indexOf(item, checkList))"
        ></el-checkbox>
      </div>
      <!-- </el-checkbox-group> -->
      <el-button @click="confirm">确认</el-button>
      <el-button @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script>
import Custominput from '@/components/Custominput.vue';
import CustomClick from '@/components/CustomClick.vue';
import SlotCase from '@/components/SlotCase.vue';
import _ from 'lodash';
export default {
  name: 'Template',
  components: {
    'custom-input': Custominput,
    'slot-case': SlotCase,
    'custom-click': CustomClick,
  },
  mounted() {
    this.$nextTick(() => {
      this.checkList = _.cloneDeep(this.filelist);
    });
  },
  data() {
    return {
      checkKey: 100,
      searchText: '',
      msg: '',
      ifFocus: '',
      checkList: [], // 选中的列表
      totallist: [
        { title: 'zhu', id: 1 },
        { title: 'wen', id: 2 },
        { title: 'zhe', id: 3 },
        { title: 'you', id: 4 },
        { title: 'xiu', id: 5 },
      ],
      filelist: [
        { title: 'zhu', id: 1 },
        { title: 'wen', id: 2 },
        { title: 'zhe', id: 3 },
      ],
    };
  },
  methods: {
    indexOf(item, items) {
      items = JSON.stringify(items);
      item = JSON.stringify(item);
      if (items.indexOf(item) > -1) {
        return true;
      } else {
        return false;
      }
    },
    change(e, c) {
      if (c) {
        this.checkList.forEach((value, index, array) => {
          if (e.id == value.id) {
            this.checkList.splice(index, 1);
          }
        });
      } else {
        this.checkList.push(e);
      }
    },
    confirm() {
      console.log(this.checkList);
    },
    cancel() {
      this.checkList = _.cloneDeep(this.filelist);
      console.log(this.checkList);
      this.checkKey++;
    },
  },
};
</script>

<style scoped>
p {
  text-align: left;
}
.checkbox-group-box {
  border: 1px solid rgb(100, 46, 46);
}
</style>
