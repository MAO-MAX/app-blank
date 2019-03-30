import Vue from 'vue'
import Vuex from 'vuex'
import wx from './module/wx.js'
import {
  SET_POST_TYPE
} from './mutationTypes.js'

Vue.use(Vuex)

const state = {
  isUp: false
}

const mutations = {
  [SET_POST_TYPE] (state, data) {
    state.postType = data
  }
}

const actions = {}

export default new Vuex.Store({
  strict: false, // 请确保在发布环境下关闭严格模式，以避免性能损失。
  state,
  mutations,
  actions,
  modules: {
    wx
  }
})
