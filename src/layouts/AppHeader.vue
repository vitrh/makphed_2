<template>
  <TransitionRoot as="template" :show="mobileMenuOpen">
    <Dialog class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <DialogPanel
            class="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto shadow-xl bg-red-950"
          >
            <div class="flex px-4 pt-5 pb-2">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 -m-2 text-white rounded-md"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="w-6 h-6 text-white" aria-hidden="true" />
              </button>
            </div>

            <div class="px-4 py-6 space-y-6 border-t border-gray-200">
              <div
                v-for="page in mobileNavigation.pages"
                :key="page.name"
                class="flow-root"
              >
                <template v-if="page.external">
                  <a
                    :href="page.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block p-2 -m-2 font-medium tracking-widest text-white uppercase"
                    @click="mobileMenuOpen = false"
                    >{{ page.name }}
                  </a>
                </template>
                <template v-else>
                  <RouterLink
                    :to="page.href"
                    class="block p-2 -m-2 font-medium tracking-widest uppercase transition"
                    :class="
                      $route.path === page.href ? 'text-red-300' : 'text-white'
                    "
                    @click="mobileMenuOpen = false"
                    >{{ page.name }}</RouterLink
                  >
                </template>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <header class="sticky top-0 z-10 transition-opacity duration-500 ease-out">
    <nav aria-label="Top">
      <transition name="fade">
        <SocialHeader v-if="showSocialHeader" />
      </transition>
      <div
        class="transition-opacity duration-500 ease-out bg-red-950 bg-opacity-70"
      >
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <!-- Logo desktop -->
            <div class="hidden lg:flex lg:items-center">
              <RouterLink to="/">
                <span class="sr-only">Mak Phed</span>
                <img
                  class="w-auto h-10"
                  src="/img/Logo.png"
                  alt="Mak Phed Logo"
                />
              </RouterLink>
            </div>

            <!-- Mobile: hamburger -->
            <div class="flex items-center flex-1 lg:hidden">
              <button
                type="button"
                class="p-2 -ml-2 text-white rounded-md"
                @click="mobileMenuOpen = true"
              >
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Mobile: logo -->
            <div class="flex flex-col items-start lg:hidden">
              <RouterLink to="/">
                <span class="sr-only">makphed</span>
              </RouterLink>
            </div>

            <!-- Desktop nav links -->
            <div class="flex items-center justify-end flex-1">
              <div class="hidden h-full lg:flex">
                <PopoverGroup class="ml-8">
                  <div class="flex justify-center h-full space-x-8">
                    <template v-for="page in navigation.pages" :key="page.name">
                      <template v-if="page.external">
                        <a
                          :href="page.href"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="flex flex-col items-center text-base font-medium tracking-wider text-gray-200 transition duration-300 group"
                        >
                          {{ page.name }}
                          <div
                            class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"
                          ></div>
                        </a>
                      </template>
                      <template v-else>
                        <RouterLink
                          :to="page.href"
                          class="flex flex-col items-center text-base font-medium tracking-wider transition duration-300 group"
                          :class="
                            $route.path === page.href
                              ? 'text-white'
                              : 'text-gray-200'
                          "
                        >
                          {{ page.name }}
                          <div
                            class="h-[2px] transition-all duration-500"
                            :class="
                              $route.path === page.href
                                ? 'bg-white w-full'
                                : 'bg-white w-0 group-hover:w-full'
                            "
                          ></div>
                        </RouterLink>
                      </template>
                    </template>
                  </div>
                </PopoverGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
  PopoverGroup,
} from "@headlessui/vue";
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import SocialHeader from "./SocialHeader.vue";

const route = useRoute();

const navigation = {
  pages: [
    { name: "Startseite", href: "/" },
    { name: "Speisekarte", href: "/speisekarte" },
    { name: "Kontakt", href: "/kontakt" },
  ],
};

const mobileNavigation = {
  pages: [
    { name: "Startseite", href: "/" },
    { name: "Speisekarte", href: "/speisekarte" },
    {
      name: "Online bestellen",
      href: "https://wolt.com/de/deu/berlin/restaurant/mak-phed",
      external: true,
    },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Anfahrt", href: "https://g.co/kgs/orfFwnp", external: true },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mak.phed/",
      external: true,
    },
  ],
};

const mobileMenuOpen = ref(false);
const scrollY = ref(0);
const showSocialHeader = ref(true);

const handleScroll = () => {
  scrollY.value = window.scrollY;
  showSocialHeader.value = scrollY.value < 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
