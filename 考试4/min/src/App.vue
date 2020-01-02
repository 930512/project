<template>
  <div id="app">
    <div class="header">
      消息
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link to="/mess">消息</router-link>
      <router-link to="/people">通讯录</router-link>
      <router-link to="/entry">空间</router-link>
    </div>
  </div>
</template>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header{
  width: 100%;
  height: 50px;
  background: pink;
  text-align: center;
  color: #ffffff;
  line-height: 50px;
  font-size: 20px;
}
.main{
  flex: 1;
  overflow: auto;
}
.footer{
  width: 100%;
  height: 50px;
  background: pink;
  a{
    display: inline-block;
    width: 33%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    &.router-link-exact-active {
      background: skyblue;
    }
  }
}
</style>
