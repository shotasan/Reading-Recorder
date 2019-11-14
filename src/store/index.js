import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { UPDATE_CURRENT, UPDATE_BOOK } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // レビュー＋書籍情報
    books: [],
    // 現在編集/選択中の書籍
    current: null
  },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
