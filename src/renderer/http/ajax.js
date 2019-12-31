import Http from './index'
import {
  TOP_LIST,
  TOP_LIST_IDX,
  TOP_ARTIST,
} from './url'


export default {

  /**
   *排行榜
   *
   * @returns Promise
   */
  topList() {
    return Http.get(TOP_LIST)
  },

  /**
   *请求单个榜单
   * @param idx 榜单id
   * @param limit 请求个数
   * @returns Promise
   */
  singleTopData(idx = 1, limit = 5) {
    return Http.get(idx == - 1 ? TOP_ARTIST : TOP_LIST_IDX, {
      "idx": idx,
      "limit": limit
    })
  },
}