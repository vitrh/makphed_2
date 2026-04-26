<template>
  <div
    class="sticky top-20 z-10 bg-stone-900 border-b border-stone-700 overflow-x-auto"
  >
    <div class="flex gap-x-1 px-4 py-2 max-w-6xl mx-auto">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="scrollTo(category.id)"
        class="whitespace-nowrap px-3 py-1.5 text-sm font-medium rounded-md transition"
        :class="
          activeCategory === category.id
            ? 'bg-red-950 text-white'
            : 'text-gray-400 hover:text-white hover:bg-stone-800'
        "
      >
        {{ category.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const categories = [
  { id: "specials", label: "Specials" },
  { id: "vorspeisen", label: "Vorspeisen" },
  { id: "hauptgerichte", label: "Hauptgerichte" },
  { id: "nudeln", label: "Nudeln & Reis" },
  { id: "reisgerichte", label: "Reisgerichte" },
  { id: "klebreis", label: "Klebreisgerichte" },
  { id: "dessert", label: "Dessert" },
  { id: "extras", label: "Extras" },
];

const activeCategory = ref("specials");

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 140;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const handleScroll = () => {
  for (const category of [...categories].reverse()) {
    const el = document.getElementById(category.id);
    if (el && el.getBoundingClientRect().top <= 170) {
      activeCategory.value = category.id;
      break;
    }
  }
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
