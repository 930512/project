<template>
  <div class="home">
   <input type="text" v-model="inputValue">
   <button @click="bindEvent">确定</button>
   <ul>
     <li v-for="(item,index) in getData" :key="index">
       {{item}}
     </li>
   </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'home', 
  data() {
    return {
      inputValue:"",
      // list:[]
    }
  },
  watch: {
    
  },
  computed: {
    ...mapState({
      list:state=>state.list
    })
  },
  methods: {
    bindEvent(){
      // this.list.push(this.inputValue)
      // this.$store.commit("inputEvent",this.inputValue)
      //dispatch只能提交给action
      this.$store.dispatch("inputEvent",this.inputValue)
      this.inputValue=""
    }
  },
  computed: {
    getData(){
      return this.$store.state.list
    }
  },
  components: {
    HelloWorld
  }
}
</script>
