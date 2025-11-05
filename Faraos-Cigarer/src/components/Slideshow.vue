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

onBeforeUnmount(() => {
  clearInterval(autoSlideInterval);
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

<style scoped>
.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active,
.dot:hover {
  background-color: #717171;
}
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
