<template>
  <div class="category">
    <h2 class="category_title">{{ $route.params.type.toUpperCase() }}</h2>
    <div class="category_content overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-11 md:gap-y-8">
      <div class="category_product" v-for="product in categories" :key="product.id">
        <a
          class=""
          @click="$router.push({ path: '/product/' + product.id })"
        >
          <store-card-product
            :products="product" 
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import StoreCardProduct from '../../components/StoreCardProduct/StoreCardProduct.vue';
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const categories = ref([])
const categoryType = route.params.type

const fetchCategory = ( categoryTypeParams ) =>{
  fetch(`https://fakestoreapi.com/products/category/${categoryTypeParams}`)
    .then(res=>res.json())
    .then(json=>{
      categories.value = json
    })
}

watch(route, (value) => {
  fetchCategory(value.params.type)
})

onMounted(()=>{
  fetchCategory(categoryType)
})
</script>
<style lang="scss" scoped>
@import './CategoryView-style.scss';
</style>