<template>
  <nav :style="{ position: $route.path === '/' ? 'absolute' : 'relative' }" style="display: flex; width: 89%;">

    <h1>knowYourFoods</h1>
    
    <div style="padding: 30px;">
      <router-link to="/">Home</router-link> |
      <router-link class="a" to="/favorites">favorites</router-link> |
      <router-link to="/recipes">Recipes</router-link>
    </div>
    <div style="margin-left: auto; display: flex; align-items: center;">
      <h1 v-if="isLoggedIn">{{ email }}</h1>
      <LogIn v-if="isLoggedIn == false"></LogIn>
      <button @click="toggleTheme">change theme</button>
      <button @click="handleSignOut" v-if="isLoggedIn" class="button-87">Sign out</button>
    </div>
  </nav>
  <router-view />
  <Footer></Footer>
</template>

<script setup>

import LogIn from '@/components/LogIn.vue'
import Footer from '@/components/Footer.vue'

import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter()

let isLightTheme = ref(false)

const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value;
  if (isLightTheme.value) {
    document.body.style.backgroundColor = 'white';
    document.querySelector('nav div').style.color = 'black';
  } else {
    document.body.style.backgroundColor = '';

    document.querySelector('nav div').style.color = '';
  }
};

import { isLoggedIn } from './scripts/auth';


import { email } from './scripts/auth';

let auth;
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      email.value = user.email;
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>

<style>
body {
  background-color: #0c0001;
  margin: 0;
  min-height: 100vh;
  
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #cfcfcf;
  height: 100%;
  width: 100%;
}

nav {
  display: flex;
  align-items: center;
  padding: 30px;
  color: #cfcfcf;
}

nav a {
  font-weight: bold;
  color: #cfcfcf;
}

nav a.router-link-exact-active {
  color: #FF512F;
}


.button-87 {
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-87:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.button-87:active {
  transform: scale(0.95);
}
</style>
