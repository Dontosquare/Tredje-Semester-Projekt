<script setup></script>

<template>
  <div class="opening-hours">
    <p class="opening-hours__titel">ÅBNINGSTIDER</p>
    <ul class="opening-hours__text">
      <li>Hverdage: <br></br> Mandag - Fredag: 10:00 - 18:00</li>
      <li>Weekendtider:<br></br> Lørdag - 10:00 - 17:00 <br></br> Søndag - 11:00 - 16:00</li>
      <li>
        *Faraos Cigarer holder dog søndagslukket, når søndag falder på en
        helligdag.
      </li>
    </ul>
  </div>

  <div class="contact">
    <h3 class="contact__titel">KONTAKT</h3>
    <div class="contact__text">
      <p>Faraos Cigarer - Odense</p>
      <p>Klostervej 3,</p>
      <p>5000 Odense C</p>
      <p>Telefon:</p>
      <p>+45 65 91 97 01</p>
      <p>E-mail:</p>
      <p>Odense@faraos.dk</p>
    </div>
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
  margin: 2rem;
  padding: 2rem;
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
  padding-top: 0.5rem;
  list-style: none;
}

.opening-hours li {
  padding-top: 1rem;
}

.contact {
  margin: 2rem;
  padding: 2rem;
  background-color: $color-pharaos-gold;
}


.contact p {
  font-family: $font-play;
  padding-top: 1rem;
}

.contact h3 {
  color: $color-newspaper-white;
  font-family: $font-boogaloo;
  font-size: 2.44rem;
  -webkit-text-stroke: 0.1rem $color-anubis-black;
}

.closing-days {
  margin: 2rem;
  padding: 2rem;
  font-family: $font-play;
  color: $color-newspaper-white;
  background-color: $color-anubis-black;
}
.closing-days ul {
  padding-top: 1rem;
  padding-left: 1rem;
}
.closing-days li {
  padding-top: 1rem;
}
</style>
