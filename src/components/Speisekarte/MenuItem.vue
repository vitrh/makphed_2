<template>
  <div
    class="flex flex-col items-center justify-center p-6 bg-stone-800 transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl"
  >
    <div class="flex flex-col items-center w-full mt-2 space-y-4 text-center">
      <h1 class="text-lg font-bold text-white">{{ menuItem.name }}</h1>
      <p class="h-16 overflow-hidden text-sm text-gray-300">
        {{ menuItem.description }}
      </p>
      <ul class="w-full h-24 overflow-auto">
        <li
          v-for="price in menuItem.prices"
          :key="price.topping"
          class="flex justify-between text-sm text-gray-300"
        >
          <span>{{ price.topping }}</span>
          <span class="font-bold"
            >{{ price.price.toFixed(2).replace(".", ",") }} €</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menuItem: Object,
});
</script>
