import { ref } from 'vue';
import axios from 'axios';
import { getCategories, categories } from '../scripts/categoriesCall'
import { isLoggedIn, email } from '@/scripts/auth';
import { removePostId, addPostId } from '@/scripts/firebaseScripts';


var indiceAreas = ref(0)
var indiceCategories = ref(0)

const recipes = ref([]);
var modalFilter = ref(false)


var modalRecipe = ref(false)

export var selectedRecipe =ref(null)
export const showModal = (recipe) => {
  selectedRecipe.value = recipe;
  modalRecipe.value = true
};
const get4RandomRecipe = async () => {
  try {
    for (let i = 0; i < 4; i++) {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
      recipes.value.push(response.data.meals[0]);
    }
  } catch (error) {
    console.log(error);
  }
};


var areas = ref([])

const getAreas = async () => {
  try {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    areas.value = response.data.meals;

  } catch (error) {
    console.log(error);
  }
};
getAreas()

var categorieChosen = ref("")
var areaChosen = ref("")



const filterByCategorie = async () => {
  try {
    recipes.value = []
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categorieChosen.value);
    for (let i = 0; i < response.data.meals.length; i++) {

      const response2 = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + response.data.meals[i].idMeal);
      recipes.value.push(response2.data.meals[0]);
    }
  } catch (error) {
    console.log(error);
  }
};

const filterByArea = async () => {
  try {
    recipes.value = []
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + areaChosen.value);
    for (let i = 0; i < response.data.meals.length; i++) {
      const response2 = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + response.data.meals[i].idMeal);
      recipes.value.push(response2.data.meals[0]);
    }
  } catch (error) {
    console.log(error);
  }
};

import db from '../firebase/init.js'
import { collection, query, where, getDocs } from 'firebase/firestore';


async function getFavorites(email) {
  try {
      const favoritesCollection = collection(db, 'favorites');

      
      const q = query(favoritesCollection, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      
      if (!querySnapshot.empty) {
          
          const doc = querySnapshot.docs[0];
          const data = doc.data();

          const postIds = data.postIds || [];

          recipes.value = [];
          
          for (let i = 0; i < postIds.length; i++) {
              const response = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + postIds[i]);
              if (response.data.meals && response.data.meals.length > 0) {
                  recipes.value.push(response.data.meals[0]);
              }
          }
          return recipes;
      } else {
          return [];
      }
  } catch (error) {
      console.error('Error getting favorites with recipes: ', error);
      return [];
  }
}



export {
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
  };