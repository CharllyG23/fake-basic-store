<template>
    <store-header />
    <main>
        <router-view></router-view>
    </main>
    <store-footer />
</template>
<script setup>
import StoreHeader from '../components/StoreHeader/StoreHeader.vue';
import StoreFooter from '../components/StoreFooter/StoreFooter.vue';
</script>