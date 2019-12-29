<template>
  <div id="app">
    <HomeHeader />
    <el-row class="sectionContainer" type="flex">
      <el-col :span="6">
        <HomeSidebar />
      </el-col>
      <el-col :span="18">
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

<style>
#app {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.sectionContainer {
  height: 100%;
}
</style>
