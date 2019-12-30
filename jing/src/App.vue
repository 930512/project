<template>
  <div id="app">
    <div class="nav">
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </div>
    <div class="header">
      <FooterBar/>
    </div>
    <div class="main">
      <router-view></router-view>
       <div class="task" @click="bindTask">
          +发起任务
      </div>
    </div>
    <div class="mask">
      <div class="bai" @click="bindBai">
        <span>
          <div class="fir" @click="bindFamily"></div>
          休假
        </span>
        <span>
          <div class="sec" @click="bindAdd"></div>
          加班
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import FooterBar from "./components/Footer"
export default {
  components:{
    FooterBar
  },
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    bindTask(){
      var mask=document.querySelector(".mask");
      mask.style.display="block"
    },
    bindBai(){
      var mask=document.querySelector(".mask");
      mask.style.display="none"
    },
    bindAdd(){
      this.$router.push({
        path:"/detail"
      })
    },
    bindFamily(){
      this.$router.push({
        path:"/detail"
      })
    },
  },
}
</script>
<style lang="scss">
.mask{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  display: none;
}
.bai{
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
}
.bai span{
  display: inline-block;
  width: 50%;
  height: 100%;
}
.fir{
  background: orange;
}
.sec{
  background: olivedrab;
}
.bai span div{
  display: inline-block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #cccccc;
  margin: 10px
}

html,body{
  width: 100%;
  height: 100%;
}
.task{
  width: 200px;
  height: 50px;
  background: #2a5f45;
  border-radius: 10%;
  line-height: 50px;
  font-size: 25px;
  color: #ffffff;
  position: fixed;
  right: 10px;
  bottom: 10px;
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
}
.header{
  width: 100%;
  height: 50px;
}

.main{
  flex: 1;
}
.van-tabbar--fixed {
  position: fixed;
  top: 46px;
}
.nav{
  width: 100%;
  height: 64px;
}
</style>
