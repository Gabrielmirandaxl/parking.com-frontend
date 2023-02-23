<template>
    <HeaderVue />
    <router-view />
</template>

<script>
import HeaderVue from './components/header/Header.vue';

export default {
    name: 'App',
    components: {
        HeaderVue,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
