<template>
  <div class="container">
    <div class="player_container"></div>
    <div class="play_pause_container">
      <i class="like size"></i>
      <i class="prev size"></i>
      <i :class="play" @click="togglePlayer"></i>
      <i class="next size"></i>
      <i class="iconfont icon-fenxiang-"></i>
      <div class="ok"></div>
    </div>
    <div class="volume_container">
      <audio :src="currentURL" autoplay controls ref="audio"></audio>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomePlayerTool",
  data() {
    return {
      play: "pause"
    };
  },
  computed: {
    ...mapState(["currentURL"])
  },
  methods: {
    // 播放暂停
    togglePlayer() {
      let player = this.$refs.audio;
      if (player.paused) {
        player.play();
        this.play = "pause";
      } else {
        this.play = "play";

        player.pause();
      }
    }
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
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      font-size: 25px;
      margin-right: 25px;
    }

    i.like {
      background: url("../assets/images/MiniPlayerDislikeButton.png") no-repeat
        center center;
      width: 22px;
      height: 22px;
      margin-right: 40px;
    }

    .prev {
      background: url("../assets/images/MiniPlayerRewindButton.png") no-repeat
        center center;
    }

    .next {
      background: url("../assets/images/MiniPlayerFastForwardButton.png")
        no-repeat center center;
      margin-right: 40px;
    }

    .size {
      background-size: cover;
      width: 16px;
      height: 18px;
    }

    .play {
      background: url("../assets/images/MiniPlayerPlayButton.png"),
        no-repeat center center;
      background-size: cover;
      width: 45px;
      height: 45px;
    }

    .pause {
      background: url("../assets/images/MiniPlayerPauseButton.png"),
        no-repeat center center;
      background-size: cover;
      width: 45px;
      height: 45px;
    }
  }
}
</style>