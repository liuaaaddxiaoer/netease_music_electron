<template>
  <div id="app">
    <HomeHeader />
    <el-row class="sectionContainer">
      <el-col :span="6" class="side">
        <HomeSidebar />
      </el-col>
      <el-col :span="18" class="content">
        <router-view />
      </el-col>
    </el-row>
    <HomePlayerTool />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import HomePlayerTool from "@/components/HomePlayerTool";
import HomeSidebar from "@/components/HomeSidebar";

export default {
  name: "netease_vue_electron",
  components: {
    HomeHeader,
    HomePlayerTool,
    HomeSidebar
  }
};
</script>

<style lang="less" scoped>
#app {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.sectionContainer {
  padding: 60px 0;
  max-height: 100%;
  .side {
    height: calc(100vh - 2 * 60px);
    float: left;
    position: fixed;
  }
  .content {
    width: 100%;
    padding-left: 25%;
  }
}
</style>
