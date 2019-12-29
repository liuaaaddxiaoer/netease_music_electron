<template>
  <div>
    <div class="org">
      <h3>官方榜</h3>
      <li v-for="(item, index) of org" :key="index">
        <div class="item_container">
          <div class="avatar_container">
            <img :src="item.coverImgUrl || item.coverUrl" alt />
          </div>
        </div>
      </li>
    </div>
    <div class="global">
      <h3>全球榜</h3>
    </div>
  </div>
</template>

<script>
import Utils from "../utils";

export default {
  name: "NETopListPage",
  data() {
    return {
      org: [], // 官方榜
      global: [] // 全球榜
    };
  },

  created() {
    // 获取排行榜数据
    this.loadTopListData();
  },

  methods: {
    /// 获取排行榜数据
    loadTopListData() {
      this.$http.topList().then(res => {
        // 取前4个拼接 artistToplist 第一个一共5个
        if (res.code == 200) {
          res.list = res.list.map(value => {
            value.idx = Utils.topListIdx(value.name || "");
            return value;
          });

          // 取前4个
          this.org = res.list.slice(0, 4);
        }
      });
    }
  }
};
</script>

<style>
</style>