<template>
  <div class="product">
    <div v-if="!loading">
      <h2 class="product_title">{{ product.title }}</h2>
      <div class="product_desc">
        <div class="product_desc_image">
          <img class="prod-img" :src="product.image" alt="produto">
        </div>
          <div class="product_desc_content">
            <div class="product_desc_info">
              <h1 class="description">Sobre este item</h1>
              <p>{{ product.description }}</p>
            </div>
            <div class="product_desc--edit">
              Quantidade:
              <div class="counter">
                  <button>
                    <span class="minus"></span>
                  </button>
                  <div>0</div>
                  <button>
                    <span class="plus">+</span>
                  </button>
              </div>
            </div>
            <span>Preço: <strong class="text-orange-400 text-xl ml-5">{{ product.price }}</strong></span>
           <div class="pt-14">
            <button class="btn">Adicionar</button>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id

const product = ref({})
const loading = ref(true)

const fetchProductId = () =>{
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>res.json())
    .then(json=>{
        product.value = json
        loading.value = false
    })
}

onMounted(()=>{
    fetchProductId()
    console.log(route.params.id)
})
</script>
<style lang="scss" scoped>
@import './ProductView-style.scss'
</style>