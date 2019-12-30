<template>
<div>
  <div class="block">
    <span class="demonstration">加班日期</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
   <div class="block">
    <span class="demonstration">加班起始时间</span>
    <el-date-picker
      v-model="value2"
      type="monthrange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份">
    </el-date-picker>
  </div>
  <input type="file">
</div>
</template>

<script>
export default {
   data() {
      return {
        value1: '',
        value2:""
      };
    }
}
</script>

<style>
.block{
  margin: 30px 0;
}
</style>