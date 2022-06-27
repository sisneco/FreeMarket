<template>
  <Header />
  <div class="listing-container">
    <h1>商品の情報を入力</h1>
    <h1>This is an about page</h1>
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
</style>
