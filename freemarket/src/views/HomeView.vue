<template>
  <Header />
  <div class="home">
    <img src="https://placehold.jp/1000x150.png" alt="" />
    <div class="list-container">
      <section v-for="good in goods" :key="good">
        <img src="https://placehold.jp/200x200.png" alt="" />
        <p>￥{{ good.price }}</p>
        <h3>{{ good.name }}</h3>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import db from "@/firebase/firebase.js";

export default {
  name: "HomeView",
  components: {
    Header,
  },
  data() {
    return {
      goods: [],
    };
  },
  mounted: function () {
    db.collection("goods")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.goods.push({ name: doc.data().name, price: doc.data().price });
        });
      });
  },
};
</script>

<style>
div.home > img {
  border-radius: 2vh;
}

.home {
  margin-top: 2vh;
}

.home .list-container {
  margin-top: 8vh;
}

.home .list-container section {
  position: relative;
}

.home .list-container p {
  margin: 0;
  position: absolute;
  bottom: 10%;
  left: 0;
  background: #eee;
  padding: 0.5rem;
  padding-right: 2rem;
  border-bottom-right-radius: 100vh;
  border-top-right-radius: 100vh;
  opacity: 0.8;
  color: #aaa;
  font-size: 1.3rem;
}

.home .list-container section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 18.1%;
}

.home .list-container h3 {
  margin: 0;
  margin-top: 1vh;
  font-weight: normal;
  font-size: 0.8rem;
}

.home .list-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.home .list-container section {
  margin-top: 3vh;
}

.home .list-container section:not(:first-child) {
  margin-left: 2vw;
}

.home .list-container section:nth-child(6n) {
  margin-left: 0;
}

@media screen and (min-width: 1500px) {
  .home {
    width: 1300px;
    margin-left: auto;
    margin-right: auto;
  }

  div.home > img {
    width: 1300px;
  }
}
</style>
