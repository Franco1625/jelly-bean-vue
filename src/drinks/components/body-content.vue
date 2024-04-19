<script setup>
import { onMounted, ref } from 'vue';
import { DrinkApiService } from '../services/drink-api.service.js';

const drinkApiService = new DrinkApiService();
const drinks = ref([]);

onMounted(async () => {
  drinks.value = await drinkApiService.getDrinks();
});
</script>

<template>

  <div class="cards">
    <div class="title">Store Products</div>
    <div class="cards-content">
      <div class="card" v-for="drink in drinks" :key="drink.flavorName">
        <h2>{{ drink.flavorName }}</h2>
        <p>Ingredients: {{ drink.ingredients }}</p>
        <p>GlutenFree: {{ drink.glutenFree }}</p>
        <p>SugarFree: {{ drink.sugarFree }}</p>
        <p>Seasonal: {{ drink.seasonal }}</p>
        <p>Kosher: {{ drink.kosher }}</p>
        <img :src="drink.imageUrl" alt="Drink Image" />
      </div>
    </div>
  </div>
</template>
<style scoped>

h2 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;

}
.title{

  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.cards {
  margin-top: 50px;
  margin-bottom: 50px;
}

.cards-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.card {
  width: 100%;
  box-sizing: border-box;
}

img{
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
  height: 200px;

}
</style>