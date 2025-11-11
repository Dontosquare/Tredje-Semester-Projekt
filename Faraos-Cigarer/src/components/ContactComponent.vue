<script setup></script>

<template>
  <div class="opening-hours">
    <p class="opening-hours__titel">ÅBNINGSTIDER</p>
    <ul class="opening-hours__text">
      <li>Hverdage: Mandag - Fredag: 10:00 - 18:00</li>
      <li>Weekendtider: Lørdag - 10:00 - 17:00 Søndag - 11:00 - 16:00</li>
      <li>
        *Faraos Cigarer holder dog søndagslukket, når søndag falder på en
        helligdag.
      </li>
    </ul>
  </div>

  <div class="contact">
    <p class="contact__titel">KONTAKT</p>
    <ul class="contact__text">
      <li>Faraos Cigarer - Odense Klostervej 3, 5000 Odense C</li>
      <li>Telefon: +45 65 91 97 01</li>
      <li>E-mail: Odense@faraos.dk</li>
    </ul>
  </div>

  <div class="closing-days">
    <p>Faraos Cigarer holder desuden lukket de følgende dage:</p>
    <ul>
      <li>Nytårsdag</li>
      <li>Skærtorsdag</li>
      <li>Langfredag</li>
      <li>Kristi Himmelfartsdag</li>
      <li>Grundlovsdag</li>
      <li>1. og 2. pinsedag</li>
      <li>Juleaftensdag</li>
      <li>1. og 2. juledag.</li>
      <li>Nytårsaftensdag (Lukker fra kl. 15)</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.opening-hours {
  background-color: $color-anubis-black;
}

.opening-hours p {
  color: $color-pharaos-gold;
  font-family: $font-boogaloo;
  font-size: 2.44rem;
}

.opening-hours ul {
  color: $color-newspaper-white;
  font-family: $font-play;
}

.contact {
  background-color: $color-pharaos-gold;
}

.contact p {
  color: $color-newspaper-white;
  font-family: $font-boogaloo;
  font-size: 2.44rem;
  -webkit-text-stroke: 0.1rem $color-anubis-black;
}

.contact ul {
  font-family: $font-play;
}

.closing-days {
  font-family: $font-play;
  color: $color-newspaper-white;
  background-color: $color-anubis-black;
}
</style>
