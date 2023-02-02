<template>
    <header>
        <router-link to="/">
            <img :src="store" alt="store" width="120" class="logo"/>
        </router-link>
        <ul class="nav">
            <li>
                <div class="search">
                    <input type="text" class="search__Term" placeholder="Busca">
                    <button type="submit" class="search__Button">
                        <icon-search />
                    </button>
                </div>
            </li>
            <li><button><icon-bag /></button>5</li>
            <li><a @click="goToCategory('electronics')">Eletronics</a></li>
            <li><a @click="goToCategory('jewelery')">Jewelery</a></li>
            <li> <a @click="goToCategory(`men's clothing`)">Men's clothing</a></li>
            <li><a @click="goToCategory(`women's clothing`)">Women's clothing</a></li>
        </ul>
    </header>
</template>
<script setup>
import { computed } from 'vue';
import IconSearch from '../icons/IconSearch.vue';
import store from '../../assets/image/logo-store.svg';
import IconBag from '../../components/icons/IconBag.vue';
import { useRouter } from "vue-router";

const router = useRouter();

const goToCategory = (type) => {
    router.push({ path: '/product/category/' + type });
}
</script>
<style lang="scss" scoped>
@import './StoreHeader-style.scss';
</style>
