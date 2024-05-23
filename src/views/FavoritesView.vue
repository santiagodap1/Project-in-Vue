<template>
  <div class="favorites" >
    <h1 v-if="isLoggedIn == false">To access this option you must be logged in</h1>
    <LogIn v-if="isLoggedIn == false" ></LogIn>
  </div>

  <div v-if="isLoggedIn">
    <RecipesComponent></RecipesComponent>
  </div>
</template>

<script setup>
import { isLoggedIn, email} from '@/scripts/auth';
import LogIn from '@/components/LogIn.vue'
import RecipesComponent from '@/components/Recipes'


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
  getFavorites
} from '@/scripts/recipesScript';
recipes.value = []
getFavorites(email.value);

</script>
<style>

</style>