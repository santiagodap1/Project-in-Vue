import { ref } from 'vue';
import axios from 'axios';

export const categories = ref([]);

export const getCategories = async () => {
  try {
    
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      categories.value = response.data.categories;
    
  } catch (error) {
    console.log(error);
  }
};

