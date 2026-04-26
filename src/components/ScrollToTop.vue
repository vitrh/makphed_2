<template>
  <Transition name="fade">
    <button
      v-if="visible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 p-3 bg-red-950 text-white rounded-full shadow-lg hover:bg-red-900 transition"
      aria-label="Nach oben scrollen"
    >
      <ChevronUpIcon class="w-5 h-5" />
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/24/outline";

const visible = ref(false);

const handleScroll = () => {
  visible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
