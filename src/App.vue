<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">介绍</router-link> |
      <router-link to="/instance">Vue实例</router-link>|
      <router-link to="/syntax">模板语法</router-link>|
      <router-link to="/template">组件</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
