<script setup>
import Community1 from "@/assets/image/community_1.webp";
import Community2 from "@/assets/image/community_2.webp";
import Community3 from "@/assets/image/community_3.webp";

const billeder = [
  {
    image: Community1,
    title: "KLUB FARAOS",
  },
  {
    image: Community2,
    title: "FARAOS ER E-MÆRKET",
  },
  {
    image: Community3,
    title: "NYHEDER",
  },
];
</script>

<template>
  <div class="community-section">
    <div class="community-section__klub-faraos"></div>
    <div class="community-section__e-label"></div>
    <div class="community-section__news"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.community-section {
  display: flex;
  flex-direction: column;
}

.community-section__klub-faraos {
  width: 100%;
  height: 10rem;
  background-color: $color-pharaos-gold;
}

.community-section__e-label {
  width: 100%;
  height: 10rem;
  background-color: $color-anubis-black;
}

.community-section__news {
  width: 100%;
  height: 10rem;
  background-color: $color-pharaos-gold;
}
</style>
