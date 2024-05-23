<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

  <footer>
    <div class="container">
      <div class="footer-section about">
        <h2>About Us</h2>
        <p>
          We are a leading provider of delicious recipes and cooking tips. Join our community and explore a wide range of meals and culinary experiences.
        </p>
      </div>
      <div class="footer-section links">
        <h2>Useful Links</h2>
        <router-link to="/" style="color: orange;">Home</router-link> |
      <router-link to="/favorites" style="color: orange;">favorites</router-link> |
      <router-link to="/recipes" style="color: orange;">Recipes</router-link>
      </div>
      <div class="footer-section social">
        <h2>Our Social</h2>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2024 knowYourFoods
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
footer {
  background-color: #252525;
  color: white;
  padding: 40px 0;
  text-align: center;
  margin-top: 40px;
  
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: auto;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-section h2 {
  margin-bottom: 15px;
  font-size: 1.2em;
  border-bottom: 1px solid white;
  padding-bottom: 5px;
}

.footer-section p, 
.footer-section ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.social-links a {
  color: white;
  font-size: 1.5em;
  margin: 0 10px;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #f39c12;
}

.footer-bottom {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid white;
}
</style>
