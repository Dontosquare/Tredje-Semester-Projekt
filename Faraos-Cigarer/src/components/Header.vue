<script setup></script>

<template>
  <header>
    <div class="header">
    <img class="header__logo" src="../assets/image/faraos-logo.webp" alt="Faraos Cigarer Logo" />
    <p class="header__icon">test</p>
    <input class="header__input" type="text" placeholder="søg" />
    </div>
  </header>
</template>

<style scoped>
.header{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.header__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Boogaloo';
}

.header__input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 50%;
}

.header__icon {
    display: flex;
    flex-wrap: nowrap;
}
</style>