<template>
  <button class="button-8" @click="modalFilter = true;">Filter</button>
  <Teleport to="body">
    <div v-if="modalFilter" class="modalFilter">
      <h2 style="color: white;">click on the area or the categorie then click on filter</h2>
      <button @click="modalFilter = false">X</button>

      <div style="display: flex; height: 90vh;">
    
        <div>
          <div v-for="categorie in categories" :key="categorie.idCategory">
            <p @click="categorieChosen = categorie.strCategory" class="areaOrCategorie">{{ categorie.strCategory }}</p>

          </div>
          <router-link :to="`/recipes/categorie/${categorieChosen}`">
            <button @click="filterByCategorie">filter</button>
          </router-link>
          <h2 v-if="categorieChosen != ''">categorie Chosen: {{ categorieChosen }}</h2>
        </div>
        <div>
          <div v-for="area in areas">
            <p @click="areaChosen = area.strArea" class="areaOrCategorie">{{ area.strArea }}</p>

          </div>
          <router-link :to="`/recipes/area/${areaChosen}`">
            <button @click="filterByArea">filter</button>
          </router-link>
          <h2 v-if="areaChosen != ''">country Chosen: {{ areaChosen }}</h2>
        </div>
      </div>
    </div>

  </Teleport>


  <RecipesComponent></RecipesComponent>

  <button v-if="$route.name === 'recipes'" @click="get4RandomRecipe" class="button-8">mais</button>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { getCategories, categories } from '../scripts/categoriesCall'
import { isLoggedIn, email } from '@/scripts/auth';
import { removePostId, addPostId } from '@/scripts/firebaseScripts';
getCategories()

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
  filterByArea
} from '@/scripts/recipesScript';
recipes.value = []
get4RandomRecipe();

</script>


<style>


.modalFilter {
  background: #252525;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 37%;
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;

}

.areaOrCategorie {
  color: rgb(201, 201, 201);
}

.areaOrCategorie:hover {
  color: #b36500;
}

.button-8 {
  margin: 10px;
  padding: 7px 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  color: white;
  border-radius: 10px;
  font-weight: 700;
  background-color: #b36500;
  border: 0px;

}

.button-8:hover {
  padding: 17px;
}
</style>
