<template>
  <Header />
  <div class="listing-container">
    <h1>商品の情報を入力</h1>
    <form>
      <h2>商品名</h2>
      <input v-model="name" placeholder="商品名(必須:40字まで)" />
      <h2>値段</h2>
      <input v-model="price" placeholder="値段" />
      <h2>商品説明</h2>
      <textarea
        v-model="message"
        placeholder="商品説明（必須:400文字まで）"
      ></textarea>
      <div id="select-box">
        <h3>商品の詳細</h3>
        <div id="select-bar">
          <section>
            <h2>カテゴリー</h2>
            <select v-model="selected">
              <option disabled value="">1つ選んでください</option>
              <option>服・アクセサリー</option>
              <option>楽器</option>
              <option>スポーツ用品</option>
            </select>
          </section>
          <section>
            <h2>状態</h2>
            <select v-model="selected">
              <option disabled value="">1つ選んでください</option>
              <option>服・アクセサリー</option>
              <option>楽器</option>
              <option>スポーツ用品</option>
            </select>
          </section>
        </div>
      </div>
      <a href="#">出品</a>
    </form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "ListingView",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      price: "",
    };
  },
};
</script>

<style>
.listing-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.listing-container form {
  width: 30vw;
}

.listing-container input,
.listing-container select {
  font-size: 1rem;
  width: 100%;
}

.listing-container textarea {
  font-size: 0.5rem;
  width: 100%;
  height: 20vh;
}

#select-box {
  display: flex;
}

#select-box h3 {
  margin-top: 3vh;
  width: 30%;
}

#select-bar {
  width: 70%;
}
</style>
