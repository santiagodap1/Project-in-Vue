<template>


  <div class="recipes">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.idMeal">

      <h2>{{ recipe.strMeal }}</h2>
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
      <h4>Category: {{ recipe.strCategory }}</h4>
      <h4 v-if="recipe.strTags != null">Tags: {{ recipe.strTags }}</h4>
      <h4>Country: {{ recipe.strArea }}</h4>

      <button v-if="isLoggedIn == true && isFavoritesRoute == false" @click="addPostId(email, recipe.idMeal)">Add to
        favorites</button>
      <h4 v-if="isLoggedIn === false" style="color: red;">if you want to add it to favorites, you must log in</h4>

      <button v-if="isFavoritesRoute" @click="removePostId(email, recipe.idMeal), getFavorites(email)">remove from
        favorites</button>
      <button @click="showModal(recipe)">click to see how to prepare it</button>

      <div v-if="modalRecipe" class="modalRecipe">
        <button @click="modalRecipe = false">close</button>
        <h2>{{ selectedRecipe.strMeal }}</h2>
        <h4>Category: {{ selectedRecipe.strCategory }}</h4>
        <h4>Category: {{ selectedRecipe.strYoutube }}</h4>
        <h4 v-if="selectedRecipe.strTags != null">Tags: {{ selectedRecipe.strTags }}</h4>
        <h4>Country: {{ selectedRecipe.strArea }}</h4>
        <h4>ingredients:
          {{ selectedRecipe.strMeasure1 }} {{ selectedRecipe.strIngredient1 }}{{ selectedRecipe.strMeasure1 && selectedRecipe.strIngredient1 ? ',' : '' }}
          {{ selectedRecipe.strMeasure2 }} {{ selectedRecipe.strIngredient2 }}{{ selectedRecipe.strMeasure2 && selectedRecipe.strIngredient2 ? ',' : '' }}
          {{ selectedRecipe.strMeasure3 }} {{ selectedRecipe.strIngredient3 }}{{ selectedRecipe.strMeasure3 && selectedRecipe.strIngredient3 ? ',' : '' }}
          {{ selectedRecipe.strMeasure4 }} {{ selectedRecipe.strIngredient4 }}{{ selectedRecipe.strMeasure4 && selectedRecipe.strIngredient4 ? ',' : '' }}
          {{ selectedRecipe.strMeasure5 }} {{ selectedRecipe.strIngredient5 }}{{ selectedRecipe.strMeasure5 && selectedRecipe.strIngredient5 ? ',' : '' }}
          {{ selectedRecipe.strMeasure6 }} {{ selectedRecipe.strIngredient6 }}{{ selectedRecipe.strMeasure6 && selectedRecipe.strIngredient6 ? ',' : '' }}
          {{ selectedRecipe.strMeasure7 }} {{ selectedRecipe.strIngredient7 }}{{ selectedRecipe.strMeasure7 && selectedRecipe.strIngredient7 ? ',' : '' }}
          {{ selectedRecipe.strMeasure8 }} {{ selectedRecipe.strIngredient8 }}{{ selectedRecipe.strMeasure8 && selectedRecipe.strIngredient8 ? ',' : '' }}
          {{ selectedRecipe.strMeasure9 }} {{ selectedRecipe.strIngredient9 }}{{ selectedRecipe.strMeasure9 && selectedRecipe.strIngredient9 ? ',' : '' }}
          {{ selectedRecipe.strMeasure10 }} {{ selectedRecipe.strIngredient10 }}{{ selectedRecipe.strMeasure10 && selectedRecipe.strIngredient10 ? ',' : '' }}
          {{ selectedRecipe.strMeasure11 }} {{ selectedRecipe.strIngredient11 }}{{ selectedRecipe.strMeasure11 && selectedRecipe.strIngredient11 ? ',' : '' }}
          {{ selectedRecipe.strMeasure12 }} {{ selectedRecipe.strIngredient12 }}{{ selectedRecipe.strMeasure12 && selectedRecipe.strIngredient12 ? ',' : '' }}
          {{ selectedRecipe.strMeasure13 }} {{ selectedRecipe.strIngredient13 }}{{ selectedRecipe.strMeasure13 && selectedRecipe.strIngredient13 ? ',' : '' }}
          {{ selectedRecipe.strMeasure14 }} {{ selectedRecipe.strIngredient14 }}{{ selectedRecipe.strMeasure14 && selectedRecipe.strIngredient14 ? ',' : '' }}
          {{ selectedRecipe.strMeasure15 }} {{ selectedRecipe.strIngredient15 }}{{ selectedRecipe.strMeasure15 && selectedRecipe.strIngredient15 ? ',' : '' }}
          {{ selectedRecipe.strMeasure16 }} {{ selectedRecipe.strIngredient16 }}{{ selectedRecipe.strMeasure16 && selectedRecipe.strIngredient16 ? ',' : '' }}
          {{ selectedRecipe.strMeasure17 }} {{ selectedRecipe.strIngredient17 }}{{ selectedRecipe.strMeasure17 && selectedRecipe.strIngredient17 ? ',' : '' }}
          {{ selectedRecipe.strMeasure18 }} {{ selectedRecipe.strIngredient18 }}{{ selectedRecipe.strMeasure18 && selectedRecipe.strIngredient18 ? ',' : '' }}
          {{ selectedRecipe.strMeasure19 }} {{ selectedRecipe.strIngredient19 }}{{ selectedRecipe.strMeasure19 && selectedRecipe.strIngredient19 ? ',' : '' }}
          {{ selectedRecipe.strMeasure20 }} {{ selectedRecipe.strIngredient20 }}
        </h4>
        <h4>instructions: {{ selectedRecipe.strInstructions }}</h4>

      </div>

    </div>

  </div>
</template>



<script setup>
import { Teleport } from 'vue';
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { removePostId, addPostId } from '@/scripts/firebaseScripts';
const router = useRouter()
import { isLoggedIn, email } from '@/scripts/auth';
import {
  indiceAreas,
  indiceCategories,
  recipes,
  modalFilter,
  modalRecipe,
  get4RandomRecipe,
  areas,
  getAreas,
  categorieChosen,
  areaChosen,
  filterByCategorie,
  filterByArea,
  getFavorites,
  showModal,
  selectedRecipe
} from '@/scripts/recipesScript';

const RecipesComponent = {
  name: 'recipes',
};

import { useRoute } from 'vue-router';
const route = useRoute();

const isFavoritesRoute = computed(() => route.path === '/favorites');




</script>

<style scoped>
.modalRecipe {
  background-color: rgb(168, 89, 0);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 81%;
  height: 87%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3%;
  color: black;
  padding: 30px;
}

.recipes {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  transition: 0.4s;
}

.recipe {
  width: 36%;
  padding: 20px;
  margin-top: 30px;
  background-color: #252525ab;
  border-radius: 6%;
  transition: 0.4s;
}

.recipe img {
  width: 100%;
  border-radius: 6%;
}

.recipes :hover {
  background-color: rgb(168, 89, 0);
  transition: 0.4s;
}
</style>