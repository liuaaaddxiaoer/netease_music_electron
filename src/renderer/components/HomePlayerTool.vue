<template>
  <div class="container">
    <div class="player_container"></div>
    <div class="play_pause_container">
      <i class="iconfont icon-bofang"></i>
      <i class="iconfont icon-bofang"></i>
      <i class="iconfont icon-bofang"></i>
      <i class="iconfont icon-bofang"></i>
      <i class="iconfont icon-bofang"></i>
    </div>
    <div class="volume_container">
      <audio :src="currentURL" autoplay controls></audio>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomePlayerTool",
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentURL"])
  }
};
</script>

<style scoped lang="less">
.container {
  height: 60px;
  background: cyan;
  width: 100%;
  position: fixed;
  z-index: 100000;
  left: 0;
  bottom: 0;
  display: flex;
  .player_container {
    width: 30%;
  }
  .volume_container {
    width: 30%;
  }
  .play_pause_container {
    flex: 1;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 25px;
      margin-right: 20px;
    }
  }
}
</style>