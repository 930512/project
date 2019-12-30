import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {//同步
    inputEvent(state,val){
      state.list.push(val)
    }
  },
  actions: {//异步
    inputEvent({commit},val){
      commit("inputEvent",val)
    }
  },
  getters:{
    
  },
  modules: {
  }
})
