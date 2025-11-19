<!-- <script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <RouterLink class="button-wrapper" :class="{ 'button-wrapper-open': isOpen }" @click="toggleMenu" to="/#">
        <button class="category--button" :class="{ 'cat-button-open': isOpen }">
            KATEGORIER
        </button>

        <img class="category--image" src="../assets/icons/arrow-vector-icon.svg" alt="arrow"
            :class="{ 'cat-arrow-open': isOpen }" />
    </RouterLink>
</template>

<style lang="scss">
@import "../assets/main.scss";

.button-wrapper {
    background-color: $color-anubis-black;
    min-width: 6rem;
    box-shadow: 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-right: -1rem;
    z-index: 1;
}

.button-wrapper-open {
    background-color: #efd17a;
    border-bottom: 2rem solid #efd17a;
}

.category--button {
    background-color: $color-anubis-black;
    padding: 1rem;
    border: none;
    color: $color-newspaper-white;
    font-family: $font-boogaloo;
    font-size: 1rem;
    padding-right: 0rem;
}

.cat-button-open {
    background-color: #efd17a;
}

.category--image {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
    padding: 1rem;
    color: black;
}

.cat-arrow-open {
    transform: rotate(0deg);
}
</style> -->

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <div class="megamenu-container">
        <!-- CATEGORY BUTTON -->
        <button class="cat-button" :class="{ 'cat-button-open': isOpen }" @click="toggleMenu">
            KATEGORIER
            <img class="cat-arrow" src="../assets/icons/arrow-vector-icon.svg" alt="arrow"
                :class="{ 'cat-arrow-open': isOpen }" />
        </button>

        <!-- MEGA MENU -->
        <div class="megamenu" :class="{ 'megamenu-open': isOpen }">
            <ul>
                <li>Category A</li>
                <li>Category B</li>
                <li>Category C</li>
                <li>Category D</li>
                <li>Category E</li>
            </ul>
        </div>
        <div class="decoration" :class="{ 'decoration-open': isOpen }"></div>
    </div>
</template>

<style lang="scss">
@import "../assets/main.scss";

.megamenu-container {
    position: relative;
    display: inline-block;
}

.cat-button {
    background-color: $color-anubis-black;
    color: $color-newspaper-white;
    border: none;
    padding: 1rem;
    font-family: $font-boogaloo;
    font-size: 1rem;
    height: 3.1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    transition: background-color 0.3s ease;
    box-shadow: 0.3rem 0.3rem rgba(0, 0, 0, 0.25);

}

.cat-button-open {
    background-color: #efd17a;
}

.cat-arrow {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.cat-arrow-open {
    transform: rotate(0deg);
}

.megamenu {
    position: absolute;
    top: 120%;
    // left: 0;
    width: 100vw;
    margin-left: -2rem;
    min-width: 200px;
    background-color: $color-pharaos-gold;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
    opacity: 0;
    z-index: 100;
    padding: 1rem;
}

.megamenu-open {
    transform: scaleY(1);
    opacity: 1;
    box-shadow: 0rem 0.3rem rgba(0, 0, 0, 0.25);
}

.megamenu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.megamenu li {
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.megamenu li:hover {
    background-color: $color-tactical-blue;
}

.decoration {
    display: none;
    background-color: #efd17a;
    width: 8.9rem;
    height: 20rem;
    position: absolute;
    box-shadow: 0.3rem 0.3rem rgba(0, 0, 0, 0.25);
}

.decoration-open {
    display: block;
    transform: scaleY(1);
    transition: transform 0.1s ease;
}
</style>
