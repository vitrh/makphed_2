<template>
  <div
    :class="[
      'transition-opacity duration-1000 ease-linear',
      showNavbar ? 'bg-opacity-100 bg-red-950' : 'hidden',
    ]"
  >
    <div
      class="hidden max-w-full py-2 mx-auto lg:flex lg:items-center lg:justify-center"
    >
      <div
        class="flex items-center justify-center space-x-2 text-xs font-bold uppercase text-gray-300"
      >
        <a
          class="w-3 h-3 text-gray-300 hover:text-gray-200"
          href="https://www.instagram.com/mak.phed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="[&>svg]:h-3 [&>svg]:w-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </span>
        </a>
        <div class="flex items-center justify-center gap-x-2">
          <MapPinIcon class="w-3 h-3" />
          <a href="https://g.co/kgs/orfFwnp" target="_blank"
            >Mak Phed, Jonasstraße 35, 12053 Berlin</a
          >
        </div>
        <div class="flex items-center justify-center gap-x-2">
          <PhoneIcon class="w-3 h-3" />
          <a href="tel:+493069577314">TEL: +49 (0) 30 695 773 14</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon, MapPinIcon } from "@heroicons/vue/16/solid";
import { ref, onMounted, onUnmounted } from "vue";

const scrollY = ref(0);
const showNavbar = ref(true);

const handleScroll = () => {
  scrollY.value = window.scrollY;
  showNavbar.value = scrollY.value < 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
