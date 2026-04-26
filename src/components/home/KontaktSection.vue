<template>
  <div class="">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 sm:py-24 lg:px-8">
      <div class="relative overflow-hidden rounded-lg">
        <div
          class="relative px-6 py-32 bg-opacity-75 bg-stone-800 sm:px-12 sm:py-40 lg:px-16"
        >
          <div
            class="relative flex flex-col items-center max-w-3xl mx-auto text-center"
          >
            <h2
              class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              <span class="block sm:inline">Planen Sie ein Event?</span>
            </h2>
            <p class="mt-3 text-xl text-white">
              Verwöhnen Sie Ihre Gäste mit authentischen thailändischen und
              laotischen Spezialitäten!
              <strong>Mak Phed</strong> bietet erstklassiges Catering für
              Firmenfeiern, Hochzeiten, Geburtstage und andere besondere
              Anlässe. Lassen Sie uns Ihr Event mit exotischen Aromen und
              frischen Zutaten unvergesslich machen.
            </p>
            <RouterLink
              to="/kontakt"
              class="inline-block px-6 py-3 mt-5 text-lg font-semibold text-white transition bg-red-500 rounded-lg hover:bg-red-600"
            >
              Jetzt anfragen
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
