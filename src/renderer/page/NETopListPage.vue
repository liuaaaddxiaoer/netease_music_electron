<template>
  <div class="container">
    <div class="org">
      <h3>官方榜</h3>
      <li v-for="(item, index) of org" :key="index" class="item">
        <div class="avatar_container">
          <div class="bg"></div>
          <img :src="item.coverImgUrl || item.coverUrl" alt="ok" />
        </div>
        <div class="recommend" v-loading="!isLoadings[index]">
          <div
            :class="index % 2 == 0 ? item_class_odd : item_class_even"
            v-for="(item, index) in items[index]"
            :key="index"
            @click="getURL(item.id)"
          >
            <span class="rank">{{index + 1}}</span>
            <span class="percentage">-</span>
            <span class="name">{{item.name}}</span>
            <span class="user">{{item.ar && item.ar[0] && item.ar[0].name}}</span>
          </div>
          <button>
            查看更多
            <i class="iconfont icon-youjiantou" />
          </button>
        </div>
      </li>
    </div>
    <div class="global">
      <h3>全球榜</h3>
      <div class="global_container">
        <div class="globla_item" v-for="(item, index) of global" :key="index">
          <div class="avatar_container">
            <img
              :src="item.coverImgUrl || item.coverUrl"
              alt="ok"
              draggable="false"
              contenteditable="false"
            />
            <span>
              <i />
            </span>
          </div>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from "../utils";
import { mapActions } from "vuex";

export default {
  name: "NETopListPage",
  data() {
    return {
      org: [], // 官方榜
      global: [], // 全球榜
      items: [[], [], [], [], []],
      isLoadings: [0, 0, 0, 0, 0],
      item_class_even: ["recom_item", "recom_item_even"],
      item_class_odd: ["recom_item", "recom_item_odd"]
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

          // 全球榜取剩下的
          this.global = res.list.slice(4);

          // 歌手榜
          if (res.artistToplist) {
            // 这里设置-1让歌手榜单的接口不一样设置-1请求时候根据-1请求歌手榜数据
            res.artistToplist.idx = -1;
            res.artistToplist.coverImgUrl = res.artistToplist.coverUrl;
            // 追加歌手榜
            this.org.push(res.artistToplist);
          }

          // 加载前5个榜单需要的数据
          this.loadSingleTopData();
        }
      });
    },

    // 加载各个榜单的数据
    loadSingleTopData() {
      if (this.org && this.org.length > 0) {
        this.org.forEach((item, index) => {
          // 加载数据
          this.$http
            .singleTopData(item.idx)
            .then(res => {
              // 触发vue数组变动检测
              let datas = [];
              if (res.playlist) {
                datas = res.playlist.tracks;
              } else {
                if (res.list) {
                  datas = res.list.artists;
                }
              }
              datas = datas.filter((value, index) => {
                return index < 5;
              });
              this.$set(this.items, index, datas);
            })
            .finally(() => {
              // 触发vue数组变动检测
              this.$set(this.isLoadings, index, 1);
            });
        });
      }
    },

    /// actions
    ...mapActions(["getURL"])
  }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  padding: 30px;
  .org {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      padding: 10px 0;
      .avatar_container {
        display: flex;
        position: relative;
        height: 160px;
        border-radius: 4px;
        overflow: hidden;
        .bg {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          // TODO
          // background: red;
        }
        img {
          width: 160px;
          height: 160px;
          object-fit: cover;
        }
      }
      .recommend {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 40px;
        padding-right: 0;

        .recom_item:nth-child(-n + 3) {
          .rank {
            color: red;
          }
        }

        .recom_item:nth-child(n + 4) {
          .rank {
            color: #999;
          }
        }

        .recom_item {
          cursor: pointer;
          padding: 6px 10px;
          display: flex;
          border-radius: 5px;
          width: 100%;
          align-items: center;
          .name {
            flex: 1;
            font-size: 13px;
            color: #333;
          }

          .user {
            font-size: 13px;
            color: #999;
          }

          .percentage {
            color: #aeaeae;
            font-size: 10px;
            padding: 0 12px;
          }

          &:hover {
            background: #f5f7fa;
          }
        }
        .recom_item_odd {
          background: #fafafa;
        }

        .recom_item_even {
          background: white;
        }
      }

      button {
        cursor: pointer;
        font-size: 13px;
        color: #999;
        padding: 8px;
        i {
          font-size: 12px;
        }
      }
    }
  }
}

.global {
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
}
.global_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 10px;

  .globla_item {
    display: flex;
    margin-right: 25px;

    margin-bottom: 40px;
    flex-direction: column;

    overflow: hidden;
    .avatar_container {
      overflow: hidden;
      font-size: 16px;
      img {
        border-radius: 5px;
      }
    }
    span {
      color: #999;
      font-size: 13px;
    }
  }

  @media all and (min-width: 1080px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }

    .globla_item {
      width: calc((100% - 100px) / 5);
      height: calc((100% - 100px) / 5);
    }

    .globla_item:nth-child(5n) {
      margin-right: 0;
    }
  }

  @media all and (max-width: 1080px) {
    // width: 10em;

    .globla_item {
      width: calc((100% - 75px) / 4);
      height: calc((100% - 75px) / 4);
    }

    img {
      width: 100%;
      height: 100%;
    }

    .globla_item:nth-child(4n) {
      margin-right: 0;
    }
  }
}
</style>