<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="socials-section">
    <div class="socials-section__facebook">
      <FontAwesomeIcon :icon="faFacebook" />
      <p>FACEBOOK</p>
    </div>
    <div class="socials-section__instagram">
      <FontAwesomeIcon :icon="faInstagram" />
      <p>INSTAGRAM</p>
    </div>
    <div class="socials-section__tiktok">
      <FontAwesomeIcon :icon="faTiktok" />
      <p>TIKTOK</p>
    </div>
    <div class="socials-section__twitter">
      <FontAwesomeIcon :icon="faXTwitter" />
      <p>TWITTER</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.socials-section__facebook {
  width: 100%;
  height: 5rem;
  background-color: $color-anubis-black;
  color: $color-pharaos-gold;
  font-family: $font-boogaloo;
  font-size: 2.44rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.socials-section__instagram {
  width: 100%;
  height: 5rem;
  background-color: $color-pharaos-gold;
  color: $color-newspaper-white;
  -webkit-text-stroke: 0.1rem $color-anubis-black;
  font-family: $font-boogaloo;
  font-size: 2.44rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.socials-section__tiktok {
  width: 100%;
  height: 5rem;
  background-color: $color-anubis-black;
  color: $color-pharaos-gold;
  font-family: $font-boogaloo;
  font-size: 2.44rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.socials-section__twitter {
  width: 100%;
  height: 5rem;
  background-color: $color-pharaos-gold;
  color: $color-newspaper-white;
  -webkit-text-stroke: 0.1rem $color-anubis-black;
  font-family: $font-boogaloo;
  font-size: 2.44rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.socials-section__instagram :deep(svg),
.socials-section__twitter :deep(svg) {
  stroke: $color-anubis-black; // outline-farve
  stroke-width: 1rem; // tykkelse – justér!
}
</style>
