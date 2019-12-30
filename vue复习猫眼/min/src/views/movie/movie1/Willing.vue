<template>
  <div>
    <dl v-for="(item,index) in arr" :key="index">
      <dd>
        <img :src="item.img" alt="">
      </dd>
      <dt>
        {{item.nm}}
      </dt>
    </dl>
  </div>
</template>

<script>
import axios from"axios"
export default {
   data() {
   return {
     arr:[]
   }
 },
 created() {
   this.getData()
 },
 methods: {
   getData(){
     axios.get("/mock/index.json").then(res=>{
       console.log(res.data.movieList)
       this.arr=res.data.movieList
     })
   }
 },
}
</script>

<style>

</style>