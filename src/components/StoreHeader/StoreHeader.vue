<template>
    <header>
        <router-link to="/">
            <img :src="store" alt="store" width="120" class="logo"/>
        </router-link>
        <ul class="nav">
            <li><a href="#">Eletrônico</a></li>
            <li><a href="#">Jóias</a></li>
            <li><a href="#">Roupas para Homen</a></li>
            <li><a href="#">Roupas Femeninas</a></li>
            <li><button><icon-bag /></button>5</li>
            <li>
                <div class="search">
                    <input type="text" class="search__Term" placeholder="Busca">
                    <button type="submit" class="search__Button">
                        <icon-search />
                    </button>
                </div>
            </li>
        </ul>
    </header>
</template>
<script setup>
import IconSearch from '../icons/IconSearch.vue';
import store from '../../assets/image/logo-store.svg';
import IconBag from '../../components/icons/IconBag.vue';
</script>
<style lang="scss" scoped>
@import './StoreHeader-style.scss';
</style>
