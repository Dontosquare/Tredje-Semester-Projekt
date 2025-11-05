<script setup>
import { ref, onMounted } from "vue";

const slideIndex = ref(1);
let slides = [];
let dots = [];
let autoSlideInterval = null;

function showSlides(n) {
  if (n > slides.length) slideIndex.value = 1;
  if (n < 1) slideIndex.value = slides.length;

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex.value - 1].style.display = "block";
  dots[slideIndex.value - 1].classList.add("active");
}

function plusSlides(n) {
  showSlides(slideIndex.value + n);
}

function currentSlide(n) {
  showSlides((slideIndex.value = n));
}

onMounted(() => {
  slides = Array.from(document.getElementsByClassName("mySlides"));
  dots = Array.from(document.getElementsByClassName("dot"));
  showSlides(slideIndex.value);
  autoSlideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000);
});
</script>

<template>
  <div class="slideshow-container">
    <div class="mySlides fade">
      <div class="numbertext">1 / 3</div>
      <img src="../assets/image/mobil_slideshow_1.webp" />
    </div>

    <div class="mySlides fade">
      <div class="numbertext">2 / 3</div>
      <img src="../assets/image/mobil_slideshow_2.webp" />
    </div>

    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="../assets/image/mobil_slideshow_3.webp" />
    </div>

    <a class="prev" @click="plusSlides(-1)">❮</a>
    <a class="next" @click="plusSlides(1)">❯</a>
  </div>

  <br />

  <div style="text-align: center">
    <span class="dot" @click="currentSlide(1)"></span>
    <span class="dot" @click="currentSlide(2)"></span>
    <span class="dot" @click="currentSlide(3)"></span>
  </div>
</template>

<style scoped></style>
