<template>
  <div>
    <div class="box">
      <router-link to="/movie/willing">即将上映</router-link>
      <router-link to="/movie/doing">正在上映</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
import axios from"axios"
export default {
 data() {
   return {
     
   }
 },
 created() {
  this.getCount()
 },
 methods: {
  getCount(){
    // const box=document.querySelector(".box")
    const main=document.querySelector(".main")
    // console.log(document.querySelector(".box"))
    main.addEventListener("scroll",function(e){
      if(e.target.scrollTop>50){
        document.querySelector(".box").classList.add("top")
      }else{
       document.querySelector(".box").classList.remove("top")
      }
    })
  }
 },
}
</script>

<style lang="scss">
.box{
  width: 100%;
  height: 30px;
  background: #ffffff;
  // border: 1px solid #cccccc;
  line-height: 30px;
  a{
    margin: 30px;
  }
}

.top{
  position: fixed;
  top: 50px;
}
</style>