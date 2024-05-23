import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorites',
    name: 'favorites',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/FavoritesView.vue')
    }
  }
  ,
  {
    path: '/recipes',
    name: 'recipes',
   
    component: function () {
      return import('../views/RecipesView.vue')
    }
  }
  ,
  {
    path: '/recipes/area/:area',
    name: 'recipes by area',
   
    component: function () {
      return import('../views/RecipesView.vue')
    }
  }
  ,
  {
    path: '/recipes/categorie/:categorie',
    name: 'recipes by categorie',
   
    component: function () {
      return import('../views/RecipesView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
