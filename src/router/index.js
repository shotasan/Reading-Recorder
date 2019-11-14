import Vue from 'vue'
import VueRouter from 'vue-router'
import BookSearch from '../components/BookSearch.vue'
import BookForm from '../components/BookForm.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  // トップページ（登録済みレビューの一覧）
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // 検索フォーム
  {
    path: '/search',
    name: 'search',
    component: BookSearch
  },
  // レビュー用フォーム
  {
    path: '/form',
    name: 'form',
    component: BookForm
  },
  // 受け皿
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
