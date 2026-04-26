<template>
  <div class="bg-stone-900 text-[#EEEEEE]">
    <AppHeader />
    <main class="mx-auto my-0 lg:max-2xl">
      <slot></slot>
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import ScrollToTop from "../components/ScrollToTop.vue";
</script>
