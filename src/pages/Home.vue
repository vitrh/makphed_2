<template>
  <AppLayout>
    <Head
      title="Mak Phed – Authentisches Thai & Laos Restaurant Berlin"
      description="Willkommen bei Mak Phed – authentische thailändische und laotische Küche in Berlin Neukölln. Jonasstraße 35, 12053 Berlin. Geöffnet So–Fr 12–21 Uhr."
      canonical="https://makphed.de/"
    />
    <HeroSection />
    <AboutSection />
    <KontaktSection />
    <GoogleLocateSection />
  </AppLayout>
</template>

<script setup>
import { onMounted } from "vue";
import AppLayout from "../layouts/AppLayout.vue";
import Head from "../components/Head.vue";
import HeroSection from "../components/Home/HeroSection.vue";
import AboutSection from "../components/Home/AboutSection.vue";
import KontaktSection from "../components/Home/KontaktSection.vue";
import GoogleLocateSection from "../components/Home/GoogleLocateSection.vue";

onMounted(() => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Mak Phed",
    description:
      "Authentisches thailändisches und laotisches Restaurant in Berlin",
    url: "https://makphed.de",
    telephone: "+493069577314",
    email: "info@makphed.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jonasstraße 35",
      addressLocality: "Berlin",
      postalCode: "12053",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.47098363025102",
      longitude: "13.429932723108655",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "12:00",
        closes: "21:00",
      },
    ],
    servesCuisine: ["Thai", "Laotian"],
    priceRange: "€€",
    image: "https://makphed.de/img/Logo.png",
    logo: "https://makphed.de/img/Logo.png",
    sameAs: [
      "https://www.instagram.com/mak.phed/",
      "https://wolt.com/de/deu/berlin/restaurant/mak-phed",
    ],
  });
  document.head.appendChild(script);
});
</script>
