<!-- <template>
  <div>
    <div class="px-4 py-6 mx-auto mt-8 mb-8 lg:px-24 lg:max-w-4xl max-w-7xl">
      <div class="flex flex-col leading-6 text-white gap-y-8">
        <h1 class="text-2xl uppercase">Speisekarte</h1>
        <div
          class="flex flex-col sm:flex-row sm:gap-x-4 gap-y-4"
          id="speisekarte"
        >
          <a
            v-for="(image, key) in imagesData"
            :key="key"
            :href="image.largeURL"
            :data-pswp-width="image.width"
            :data-pswp-height="image.height"
            target="_blank"
            rel="noreferrer"
          >
            <h1>{{ image.title }}</h1>
            <img :src="image.thumbnailURL" alt="" />
          </a>
        </div>
        <div class="flex flex-col gap-y-4">
          <p>Unsere Speisekarte können Sie sich hier als PDF herunterladen.</p>
          <a
            href="/img/flyer/speisekarte.pdf"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Speisekarte herunterladen
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { onMounted, onUnmounted } from "vue";

const imagesData = [
  {
    thumbnailURL: "/img/flyer/flyer1.jpg",
    largeURL: "/img/flyer/flyer1.jpg",
    width: 1000,
    height: 1500,
    title: "Deutsch",
  },
  {
    thumbnailURL: "/img/flyer/flyer2.jpg",
    largeURL: "/img/flyer/flyer2.jpg",
    width: 1000,
    height: 1500,
    title: "Englisch",
  },
];

let lightbox = null;

onMounted(() => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallery: "#speisekarte",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  }
});

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
});
</script> -->

<template>
  <div class="max-w-6xl mx-auto px-4 pt-12 pb-4 text-center">
    <h1 class="text-4xl font-bold text-white tracking-wide">Speisekarte</h1>
    <p class="mt-3 text-gray-400">Authentische Küche aus Thailand & Laos</p>
    <div class="flex justify-center gap-4 mt-6">
      <a
        href="/img/flyer/flyer1.jpg"
        target="_blank"
        rel="noreferrer"
        class="w-48 flex items-center justify-between px-5 py-2.5 text-sm font-semibold text-white bg-red-950 rounded-lg hover:bg-red-900 transition"
      >
        <span>🇩🇪 Speisekarte</span>
        <ArrowDownTrayIcon class="w-4 h-4" />
      </a>
      <a
        href="/img/flyer/flyer2.jpg"
        target="_blank"
        rel="noreferrer"
        class="w-48 flex items-center justify-between px-5 py-2.5 text-sm font-semibold text-white bg-red-950 rounded-lg hover:bg-red-900 transition"
      >
        <span>🇬🇧 Menu</span>
        <ArrowDownTrayIcon class="w-4 h-4" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";
</script>
