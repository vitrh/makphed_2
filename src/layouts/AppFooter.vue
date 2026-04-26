<template>
  <footer class="bg-red-950" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="px-6 py-8 mx-auto max-w-7xl sm:pt-24 lg:px-16 lg:pt-8">
      <div class="items-center justify-start hidden lg:flex lg:mb-4">
        <RouterLink to="/">
          <img class="h-16" src="/img/Logo.png" alt="Mak Phed" />
        </RouterLink>
      </div>
      <div class="xl:grid xl:grid-cols-3 xl:gap-12">
        <div class="space-y-4">
          <p class="text-base font-bold leading-6">
            Authentische Aromen Thailands & Laos
          </p>
          <p class="text-sm text-gray-300">
            Erlebe die frische und gesunde Küche Südostasiens – inspiriert von
            den traditionellen Rezepten Thailands und Laos. Bei Mak Phed
            servieren wir dir aromatische Currys, würzige Salate und duftende
            Reisgerichte, die Körper und Geist in Einklang bringen.
          </p>
          <p class="text-sm text-gray-300">
            Folge uns auf Social Media und bleib immer auf dem Laufenden über
            neue Gerichte, Specials und exklusive Events aus der Welt der
            laotisch-thailändischen Küche!
          </p>
          <div class="flex space-x-6">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-gray-200"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
          <div class="text-sm font-semibold leading-6 text-gray-300 uppercase">
            <div class="flex items-center space-x-2 hover:text-white">
              <MapPinIcon class="w-4 h-4" />
              <a href="https://g.co/kgs/orfFwnp" target="_blank"
                >Mak Phed - Jonasstraße 35 - 12053 Berlin</a
              >
            </div>
            <div class="flex items-center space-x-2">
              <PhoneIcon class="w-4 h-4" />
              <p class="hover:text-white">
                Tel: <a href="tel:+493069577314">+49 (0) 30 695 773 14</a>
              </p>
            </div>
            <div class="flex items-center space-x-2">
              <InboxIcon class="w-4 h-4" />
              <p class="hover:text-white">
                E-Mail: <a href="mailto:info@makphed.de">info@makphed.de</a>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-8 mt-12 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="space-y-4">
              <h3
                class="text-base font-semibold leading-6 text-white uppercase"
              >
                Öffnungszeiten
              </h3>
              <p class="text-sm text-gray-300">
                Mak Phed ist für euch von Sonntag bis Freitag da.
              </p>
              <div class="flex flex-col">
                <p class="text-sm text-gray-300">Sonntag bis Freitag</p>
                <p class="text-sm text-gray-300">12:00 bis 21:00 Uhr</p>
              </div>
              <div>
                <p class="text-sm text-gray-300">Samstag: geschlossen</p>
              </div>
              <div class="pt-2 border-t border-white/10">
                <p class="text-sm text-gray-400 italic">
                  Keine Reservierung möglich — walk-in only
                </p>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <div class="space-y-4">
                <h3
                  class="text-base font-semibold leading-6 text-white uppercase"
                >
                  Rechtliches
                </h3>
                <ul role="list" class="space-y-2">
                  <li v-for="item in navigation.legal" :key="item.name">
                    <RouterLink
                      :to="item.href"
                      class="text-sm text-gray-300 hover:text-white"
                    >
                      {{ item.name }}
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-8 mt-16 border-t border-white/10 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-300">&copy; 2023 Makphed</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";
import { RouterLink } from "vue-router";
import { MapPinIcon } from "@heroicons/vue/20/solid";
import { InboxIcon, PhoneIcon } from "@heroicons/vue/16/solid";

const navigation = {
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/mak.phed/",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};
</script>
