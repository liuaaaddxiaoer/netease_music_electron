import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'
import Http from '../http/ajax'
import { GET_URL } from './constants'
import { Message } from 'element-ui'

// 节流
// import { throttle } from 'throttle-debounce'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    currentURL: '',  /// 当前播放的URL
  },

  mutations: {

    /// 请求MP3URL
    [GET_URL](state, id) {
      // 更新当前播放的URL
      state.currentURL = id
    }
  },

  actions: {
    /// 请求MP3URL
    async [GET_URL]({ commit, state }, id) {
      console.log(22)
      // 触发mutations
      let res = await Http.getSongURL(id)
      // 如果请求成功
      if (res.code == 200 && res.data && res.data[0]) {
        let url = res.data[0].url
        if (url) {
          commit('getURL', url)
        } else {
          Message({
            offset: 100,
            message: 'URL为空',
            type: 'error',
          })
        }
      } else {
        Message({
          offset: 100,
          message: '出错了',
          type: 'error',
        })
      }
    }
  },


  modules,
  plugins: [
    createPersistedState(),
    // createSharedMutations()  // 不注释有问题 解决方案 https://blog.csdn.net/weixin_30532759/article/details/94877480
  ],
  strict: process.env.NODE_ENV !== 'production'
})
