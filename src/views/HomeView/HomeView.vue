<template>
    <store-header />
    <main class="pt-20">
       <div class="banner">
            <img :src="banner" alt="Banner" class="banner__img">
       </div>
    </main>
    <!-- <store-footer /> -->
</template>
<script setup>
import StoreHeader from '../../components/StoreHeader/StoreHeader.vue';
import StoreFooter from '../../components/StoreFooter/StoreFooter.vue';
import banner from '../../assets/image/banner.jpg'
</script>
<style lang="scss" scoped>
.banner{
    @apply w-full relative pt-16 lg:pt-0;
    img{
        @apply overflow-hidden max-h-[450px] w-full;
    }
}
</style>

