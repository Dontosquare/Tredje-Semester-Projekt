<script setup>
import ContactComponent from "@/components/ContactComponent.vue";
</script>

<template>
  <div class="about">
    <h1>This is an information page</h1>
    <ContactComponent />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
