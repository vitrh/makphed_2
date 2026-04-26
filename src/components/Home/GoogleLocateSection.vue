<template>
  <!-- Desktop: echte Karte -->
  <div class="hidden max-w-5xl mx-auto sm:mb-24 sm:flex">
    <GoogleMapLoader :googleApiKey="googleApiKey" />
  </div>

  <!-- Mobile: Button -->
  <div class="flex justify-center pb-12 sm:hidden">
    <a
      href="https://g.co/kgs/orfFwnp"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-x-2 px-6 py-3 text-base font-semibold text-white bg-red-950 rounded-lg hover:bg-red-900 transition"
    >
      <MapPinIcon class="w-5 h-5" />
      Anfahrt
    </a>
  </div>
</template>

<script setup>
import { MapPinIcon } from "@heroicons/vue/20/solid";
import GoogleMapLoader from "./GoogleMapLoader.vue";

const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
</script>
