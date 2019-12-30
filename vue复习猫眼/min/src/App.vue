<template>
  <div id="app">
    <div class="header">
      我是头部
    </div>
    <div class="main">
      <router-view/>
    </div>
   <div class="footer">
     <FooterBar/>
   </div>
  </div>
</template>

<script>
import FooterBar from "./components/FooterBar"
export default {
  components:{
    FooterBar
  }
}
</script>

<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header{
    width: 100%;
    height: 50px;
    background: pink;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
  }
  .main{
    flex: 1;
    overflow: auto;
  }
   .footer{
    width: 100%;
    height: 50px;
    background: pink;

  }
}
</style>
