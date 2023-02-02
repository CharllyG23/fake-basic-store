<template>
  <router-link target='_blank' :to="{name: 'product', params:{ id: products.id}}">
    <div class="cards">
      <div class="card">
        <div class="card_image">
          <img :src="products.image" alt="produtos" />
        </div>
        <div class="card_content">
          <h2 class="card_title">{{ products.title }}</h2>
          <h2 class="card_price py-4">{{ products.price }}</h2>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
    products: {
      type: Object,
      default: {},
    }
  })

  const validationProducts = computed(() => {
    if (!props.products ) {
      return ''
    }
    return props.products
  })


</script>

<style lang="scss" scoped>
@import './StoreCardProduct-style.scss';
</style>