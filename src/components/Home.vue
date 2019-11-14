<template>
  <div class="list">
    <p>{{ bookCount }}件の読書情報が記録されています。</p>
    <!-- BookInfoコンポーネントを使って書籍情報を一覧表示。idをキーとする -->
    <!-- linkableやbook属性で子コンポーネントのBookInfoに値を渡す(down props) -->
    <BookInfo v-for="(b, i) of books" :linkable="true" :book="b" :index="i + 1" :key="b.id"></BookInfo>

    <div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="bookCount"
        :page-size="3"
        @current-change="onchange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BookInfo from "@/components/BookInfo.vue";

export default {
  name: "home",
  // 登録済みのレビュー情報
  data() {
    return {
      books: []
    };
  },
  // ローカルコンポーネントを登録
  componets: {
    BookInfo
  },
  // ゲッターを算出プロパティに紐付け
  computed: mapGetters(["bookCount", "getRangeByPage"]),
  methods: {
    // ページ切り替え時に書籍情報をを再セットする
    onchange(page) {
      this.books = this.getRangeByPage(page);
    }
  },
  // 初期化時に１ページ目のレビュー情報を取得
  mounted() {
    this.books = this.getRangeByPage(1);
  }
};
</script>