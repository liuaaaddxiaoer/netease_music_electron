<template>
  <el-row class="container">
    <el-col :span="6"></el-col>
  </el-row>
</template>

<script>
export default {
  name: "HomePlayerTool",
  data() {
    return {};
  }
};
</script>

<style scoped>
.el-row {
  height: 60px;
  background: cyan;
}
.container {
  width: 100%;
  position: fixed;
  z-index: 100000;
  left: 0;
  bottom: 0;
}
</style>