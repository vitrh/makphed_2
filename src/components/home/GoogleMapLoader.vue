<template>
  <GoogleMap
    :api-key="googleApiKey"
    mapId="DEMO_MAP_ID"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="16"
    class="w-full"
  >
    <!-- <AdvancedMarker :options="markerOptions" :pin-options="pinOptions" /> -->
    <InfoWindow :options="markerOptions">
      <div
        style="
          background: white;
          color: black;

          border-radius: 5px;
        "
      >
        <h1>Mak Phed</h1>
        <p>Jonasstr. 35 12053 Berlin</p>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Jonasstr.%2035%0A12053%20Berlin"
          target="_blank"
          class="mt-2 text-blue-500 hover:underline"
          >Anfahrt</a
        >
      </div>
    </InfoWindow>
  </GoogleMap>
</template>
<script setup>
import { GoogleMap, InfoWindow } from "vue3-google-map";

const props = defineProps({
  googleApiKey: {
    type: String,
    required: true,
  },
});
const center = { lat: 52.47098363025102, lng: 13.429932723108655 };

const markerOptions = { position: center, title: "Mak Phed" };
</script>
