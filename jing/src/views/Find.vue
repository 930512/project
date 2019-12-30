<template>
  <div>
    <div class="top">
      <div class="toop">
        <router-link to="/dealing/add">加班</router-link>
        <router-link to="/dealing/family">休假</router-link>
      </div>
    </div>
    <div class="bottom">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  created() {
  },
  methods: {
    
  },
}
</script>

<style>
.top{
  width: 100%;
  height: 100px;
  /* border: 1px solid #2a5f45; */
  text-align: center;
}
.toop{
  width: 50%;
  height: 35px;
   /* border: 1px solid #2a5f45; */
   border-radius: 10%;
   text-align: center;
   margin-left:100px;
   margin-top: 10px;
}
a{
  display: inline-block;
  width: 49%;
  height: 100%;
  border: 1px solid #2a5f45;
  border-radius: 10%;
  text-align: center;
  line-height: 35px;
  color: #2a5f45;
}

.router-link-active{
  background: #2a5f45;
  color: #ffffff;
}
.bottom{
  width: 100%;
  height: 500px;
}
</style>