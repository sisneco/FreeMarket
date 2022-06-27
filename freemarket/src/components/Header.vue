<template>
  <div class="header">
    <!-- logo -->
    <h1>
      <router-link to="/"
        ><img src="@/assets/headerlogo.png" alt=""
      /></router-link>
    </h1>

    <!-- form -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    <form method="get" action="#" class="search_container">
      <input type="text" size="25" placeholder="キーワード検索" />
      <input type="submit" value="&#xf002;" />
    </form>

    <!-- menu -->
    <ul class="menu">
      <li class="first"><a href="#">お知らせ</a></li>
      <li><a href="#">お気に入り</a></li>
      <li><a href="#">会員登録</a></li>
      <li>
        <router-link to="/listing" class="btn listing">出品する</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AllHeader",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.header h1 {
  width: 10%;
  font-size: 2rem;
  margin: 0;
  margin-left: 2vw;
}

.header ul {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 0.8vw;
  margin-right: 2vw;
}

.header li {
  list-style: none;
}

.header ul li a {
  padding: 0.5rem 1rem;
  display: block;
  font-size: 0.8rem;
  text-decoration: none;
  color: black;
}

.header ul li a:hover {
  background: #eee;
}

.search_container {
  box-sizing: border-box;
  position: relative;
  border: 1px solid #999;
  padding: 3px 8px;
  border-radius: 20px;
  height: 2.3em;
  width: 40%;
  overflow: hidden;
}
.search_container input[type="text"] {
  width: 100%;
  border: none;
  display: block;
  height: 2em;
}
.search_container input[type="text"]:focus {
  outline: 0;
}
.search_container input[type="submit"] {
  cursor: pointer;
  font-family: FontAwesome;
  border: none;
  background: #3879d9;
  color: #fff;
  position: absolute;
  width: 3.5em;
  height: 3em;
  right: 0px;
  top: -3px;
  outline: none;
}

.btn {
  border-radius: 1vh;
  background: red;
  padding: 0.5rem 1rem;
}

.header .listing {
  background: #3879d9;
  color: #fff;
  font-weight: bold;
}

.header .listing:hover,
.search_container input[type="submit"]:hover {
  background: #3879d9;
  opacity: 0.8;
}
</style>
