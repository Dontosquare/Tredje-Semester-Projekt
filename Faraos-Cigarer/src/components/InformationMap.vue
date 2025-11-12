<script setup>

</script>

<template>
    <nav class="breadcrumbs">
        <RouterLink class="breadcrumbs__text" to="/">Forside</RouterLink>
        <p class="breadcrumbs__text">></p>
        <RouterLink class="breadcrumbs__text" to="/Butikker">Butikker</RouterLink>
        <p class="breadcrumbs__text">></p>
        <RouterLink class="breadcrumbs__text" to="/Information">Odense</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.breadcrumbs {
    display: flex;
    justify-content: flex-start;

    p {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

}

.breadcrumbs__text {
    font-size: 1rem;
    color: $color-anubis-black;
    text-decoration: none;
    font-family: $font-play;
}
</style>
