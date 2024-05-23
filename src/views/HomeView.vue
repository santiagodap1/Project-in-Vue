<template>
  <div class="home">
    <div class="container-imagem">
      <div class="container1">
        <h1>Your best option rigth here rigth now </h1>
        <router-link :to="`/recipes`">
          <button class="button-78" role="button"> see more</button>
          </router-link>
      </div>
    </div>


    <h1 id="subtitle">You can see our recipes by this categories</h1>
    <div class="categories">
      <div class="categorie" v-for="categorie in categories" :key="categorie.idCategory">

        <img :src="categorie.strCategoryThumb">
        <h1>{{ categorie.strCategory }}</h1>
        <h5> {{ categorie.strCategoryDescription }}</h5>

      </div>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<style scoped>
#subtitle {
  display: flex;
  justify-content: center;
  color: #ff742f;
}

.categories {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

.categorie {
  width: 36%;
  color: #cfcfcf;
  margin-top: 30px;
  background-color: #25252564;
  border-radius: 6%;
  padding: 20px;
  transition: 0.4s;
}

.categories :hover{
  background-color: rgb(168, 89, 0);
  transition: 0.4s;
}

.container-imagem {
  width: 100%;
  height: 700px;
  max-height: 800px;
  overflow: hidden;
  background-image: url('../assets/jonathan-borba-8l8Yl2ruUsg-unsplash3.jpg');
  background-size: cover;
  background-position: 0 -150px;
}

.container1 {
  margin-top: 20%;
  margin-left: 10%;
}


.button-78 {
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Eina01, sans-serif;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 19px 26px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;
}

@media (min-width: 768px) {
  .button-78 {
    padding: 19px 32px;
  }
}

.button-78:before,
.button-78:after {
  border-radius: 80px;
}

.button-78:before {
  background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}

.button-78:after {
  background-color: initial;
  background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
  bottom: 4px;
  content: "";
  display: block;
  left: 4px;
  overflow: hidden;
  position: absolute;
  right: 4px;
  top: 4px;
  transition: all 100ms ease-out;
  z-index: -1;
}

.button-78:hover:not(:disabled):before {
  background: linear-gradient(92.83deg, rgb(255, 116, 38) 0%, rgb(249, 58, 19) 100%);
}

.button-78:hover:not(:disabled):after {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition-timing-function: ease-in;
  opacity: 0;
}

.button-78:active:not(:disabled) {
  color: #ccc;
}

.button-78:active:not(:disabled):before {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
}

.button-78:active:not(:disabled):after {
  background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
  bottom: 4px;
  left: 4px;
  right: 4px;
  top: 4px;
}

.button-78:disabled {
  cursor: default;
  opacity: .24;
}
</style>

<script setup>

import { getCategories, categories } from '../scripts/categoriesCall'

getCategories();

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>
