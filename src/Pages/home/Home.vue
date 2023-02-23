<template>
    <section class="home">
        <FormVue />
    </section>
</template>

<script>
import FormVue from '../../components/form/Form.vue';

export default {
    name: 'Home',
    components: {
        FormVue,
    },
};
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;
}
</style>
