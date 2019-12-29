import Http from './index'
import { TOP_LIST } from './url'


export default {

  /**
   *排行榜
   *
   * @returns Promise
   */
  topList() {
    return Http.get(TOP_LIST)
  }
}