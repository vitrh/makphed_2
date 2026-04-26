<template>
  <AppLayout>
    <Head
      title="Speisekarte – Mak Phed"
      description="Entdecke die Speisekarte von Mak Phed – Pad Thai, Tom Yum, Curry, Som Tam und mehr. Authentische thailändische und laotische Gerichte in Berlin Neukölln."
      canonical="https://makphed.de/speisekarte"
    />
    <SpeisekarteHeroSection />
    <MenuSection />
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue";
import Head from "../components/Head.vue";
import SpeisekarteHeroSection from "../components/speisekarte/HeroSection.vue";
import MenuSection from "../components/speisekarte/MenuSection.vue";
</script>
