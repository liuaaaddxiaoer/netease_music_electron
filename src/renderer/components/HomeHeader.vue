<template>
  <el-row type="flex" class="container">
    <el-col :span="6">1</el-col>
    <el-col :span="12">2</el-col>
    <el-col :span="6" class="tool">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索" />
      </div>
      <i class="iconfont icon-bofang" />
      <i class="iconfont icon-youjian" />
      <i class="iconfont icon-pifu" />
      <i class="iconfont icon-banbenqiehuan" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  margin-bottom: 60px;
  z-index: 100000;
}

.el-row {
  min-height: 60px;
  background: red;
}
.tool {
  padding-right: 20px;
  display: flex;
  align-items: center;
  .search {
    display: flex;
    background: rgb(230, 230, 230);
    padding: 8px;
    height: 30px;
    align-items: center;
    border-radius: 15px;
    color: rgb(49, 49, 49);
    i {
      margin-left: 0;
      margin-right: 5px;
      font-size: 15px;
    }
    input {
      font-size: 15px;
      width: 120px;
    }
  }
  .iconfont {
    font-size: 20px;
    margin-left: 20px;
  }
}
</style>>
