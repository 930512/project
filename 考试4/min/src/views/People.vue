<template>
  <div>
    <input type="text" v-model="value"/><button @click="bindEvent()">确定</button>
    <dl v-for="(item) in arr" :key="item.id">
      <dd>
        <img :src="item.img"/>
      </dd>
      <dt>
        {{item.name}}
      </dt>
    </dl>
  </div>
</template>

<script>
import data from "../../public/mock/index"
export default {
  data() {
    return {
      list:[],
      value:"",
      arr:[]
    }
  },
  // watch(input){
  //   console.log(input)
  // },
  created() {
    this.list=data.arr    
  // console.log(this.list)
  },
  methods: {
    bindEvent(){
      this.arr=this.list
      if(this.value!==""){
        let goods=this.list.filter(val=>{
        return val.name.includes(this.value)
      })
      this.arr=goods
      this.value=""
      }else{
         this.arr=this.list
      }
    }
  },
}
</script>

<style>
dl{
  width: 100%;
  height: 150px;
  display: flex;
  margin-top: 5px;
}
dd{
  width: 30%;
  height: 100%;
}
img{
  width: 100%;
  height: 100%;
}
dt{
  width: 70%;
  height: 100%;
  margin-left: 10px;
}
</style>