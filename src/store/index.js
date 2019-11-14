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
  getters: {
    // 登録済みのレビュー数を取得
    bookCount(state) {
      return state.books.length
    },
    // 全てのレビュー情報を取得
    allBooks(state) {
      return state.books
    },
    // 指定されたページのレビュー情報を取得（引数にはページ番号を指定）
    getRangeByPage(state) {
      return page => {
        const SIZE = 3
        return state.books.slice((page - 1) * SIZE, (page - 1) * SIZE + SIZE)
      }
    },
    // 指定されたidのレビュー情報を取得
    getBookById(state) {
      // 引数のidで配列booksを検索
      return id => {
        return state.books.find(book => book.id === id)
      }
    },
    // 現在編集中の書籍情報を取得
    current(state) {
      return state.current
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
