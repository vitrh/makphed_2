<template>
  <div>
    <CategoryNav />
    <div class="flex flex-col py-8 sm:py-12 max-w-6xl mx-auto">
      <h2 id="specials" class="text-2xl font-bold text-white text-center">
        Unsere aktuellen Specials
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3 w-full">
        <MenuItem v-for="item in menuItems" :key="item.id" :menuItem="item" />
      </div>

      <div class="w-full">
        <div class="p-8 rounded-lg">
          <div
            v-for="category in menuCategories"
            :key="category.sectionId"
            :id="category.sectionId"
            class="mb-8"
          >
            <div>
              <h2 class="text-2xl font-semibold text-white">
                {{ category.name }}
              </h2>
              <hr class="my-4 border-gray-600" />
            </div>
            <p v-if="category.description" class="text-sm text-gray-400 mb-2">
              {{ category.description }}
            </p>
            <p
              v-if="category.prices && category.prices.length"
              class="flex flex-wrap items-end justify-end gap-4 text-gray-400 sm:gap-8"
            >
              <span
                v-for="(price, index) in category.prices"
                :key="index"
                class="text-white"
              >
                <span class="text-base text-gray-400">{{ price.topping }}</span>
                <span class="mx-1"></span>
                <span class="font-bold whitespace-nowrap"
                  >{{ price.price.toFixed(2).replace(".", ",") }}€</span
                >
              </span>
            </p>
            <div class="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2">
              <div
                v-for="item in category.items"
                :key="item.id"
                class="py-2 rounded-lg"
              >
                <h3 class="text-base font-bold text-white">{{ item.name }}</h3>
                <p class="text-base text-gray-400">{{ item.description }}</p>
                <ul class="mt-2">
                  <li
                    v-for="price in item.prices"
                    :key="price.topping"
                    class="flex justify-between text-gray-300"
                  >
                    <span>{{ price.topping }}</span>
                    <span class="font-bold whitespace-nowrap"
                      >{{ price.price.toFixed(2).replace(".", ",") }} €</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";
import CategoryNav from "./CategoryNav.vue";

const menuCategories = [
  {
    name: "Vorspeisen",
    sectionId: "vorspeisen",
    description: "A selection of appetizers to start your meal.",
    items: [
      {
        id: 1,
        name: "1. Tom Yam",
        description:
          "Sauer-scharfe Zitronengrassuppe mit Champignons, Tomaten, Zwiebeln, Galgant, Limettenblättern und Koriander",
        prices: [
          { topping: "Tofu", price: 4.5 },
          { topping: "Huhn", price: 5.0 },
          { topping: "Garnelen", price: 5.5 },
        ],
      },
      {
        id: 2,
        name: "2. Tom Kha",
        description:
          "Kokosmilchsuppe mit Champignons, Tomaten, Zwiebeln, Galgant, Limettenblättern, Zitronengras und Koriander",
        prices: [
          { topping: "Tofu", price: 4.5 },
          { topping: "Huhn", price: 5.0 },
          { topping: "Garnelen", price: 5.5 },
        ],
      },
      {
        id: 3,
        name: "3. Wan Tan Thod",
        description:
          "5 frittierte Wan Tan Teigtaschen gefüllt mit Hähnchenfleisch und Gemüse. Serviert mit Kohlsalat und Sweet-Chili Dip",
        prices: [{ topping: "", price: 5.5 }],
      },
      {
        id: 4,
        name: "4. Crispy Tofu Sticks",
        description:
          "3 Tofuspieße mit Kohlsalat und hausgemachter Erdnusssauce",
        prices: [{ topping: "", price: 5.0 }],
      },
      {
        id: 5,
        name: "5. Gai Thod Lao",
        description:
          "5 frittierte Hähnchenflügel mit Kohlsalat und laotischem Tomaten-Chilli Dip",
        prices: [{ topping: "", price: 5.5 }],
      },
      {
        id: 6,
        name: "6. Yam Wunsen",
        description:
          "Scharf-würziger Glasnudelsalat mit Tomate, Zwiebel, Frühlingszwiebeln, Koriander und Erdnüssen",
        prices: [
          { topping: "Tofu", price: 7.0 },
          { topping: "Rind", price: 8.0 },
          { topping: "Garnelen", price: 8.5 },
        ],
      },
    ],
  },
  {
    name: "Hauptgerichte",
    sectionId: "hauptgerichte",
    description: "",
    items: [
      {
        id: 7,
        name: "7. Pho Lao",
        description:
          "Reisbandnudelsuppe mit Sojasprossen, Thai-Basilikum, Koriander und Frühlingszwiebeln",
        prices: [
          { topping: "Tofu", price: 8.5 },
          { topping: "Huhn", price: 9.0 },
          { topping: "Rind und Rindfleischbällchen", price: 9.5 },
        ],
      },
    ],
  },
  {
    name: "Nudeln & Reis",
    sectionId: "nudeln",
    description: "Wähle dein Topping",
    prices: [
      { topping: "Tofu", price: 9 },
      { topping: "Huhn", price: 10 },
      { topping: "Rind", price: 11.0 },
      { topping: "Garnelen", price: 11.5 },
      { topping: "Ente", price: 12.0 },
    ],
    items: [
      {
        id: 8,
        name: "8. Pad Thai",
        description:
          "Gebratene Reisbandnudeln mit einer pikanten Sauce, Ei, Sojasprossen, Frühlingszwiebeln und Erdnüssen",
        prices: [],
      },
      {
        id: 9,
        name: "9. Pad See Ew",
        description:
          "Gebratene breite Reisbandnudeln in dunkler Sojasauce mit Ei, Pak Choi, Chinakohl, Sojasprossen und Erdnüssen",
        prices: [],
      },
      {
        id: 10,
        name: "10. Khao Pad",
        description:
          "Gebratener Reis mit Ei, Erbsen, Möhren, Zwiebeln, Frühlingszwiebeln und Röstzwiebeln",
        prices: [],
      },
    ],
  },
  {
    name: "Reisgerichte",
    sectionId: "reisgerichte",
    description: "Serviert mit Reis",
    prices: [
      { topping: "Tofu", price: 9 },
      { topping: "Huhn", price: 10 },
      { topping: "Rind", price: 11.0 },
      { topping: "Garnelen", price: 11.5 },
      { topping: "Ente", price: 12.0 },
    ],
    items: [
      {
        id: 11,
        name: "11. Gaeng Phed",
        description:
          "Rotes Curry mit Kokosmilch, Paprika, Bambus, Bohnen, Auberginen und Thai-Basilikum",
        prices: [],
      },
      {
        id: 12,
        name: "12. Gaeng Kiew Wan",
        description:
          "Grünes Curry mit Kokosmilch, Paprika, Bambus, Bohnen, Auberginen und Thai-Basilikum",
        prices: [],
      },
      {
        id: 13,
        name: "13. Gaeng Massaman",
        description:
          "Massaman Curry mit Kokosmilch, Paprika, Zwiebeln, Kartoffeln, Möhren, Erbsen und Erdnüssen",
        prices: [],
      },
      {
        id: 14,
        name: "14. Gaeng Panang",
        description:
          "Panang Curry mit Kokosmilch, Paprika, Bohnen, Möhren, Erbsen und Zitronenblätter",
        prices: [],
      },
      {
        id: 15,
        name: "15. Pad Krapao",
        description:
          "Mit Krapao-Blättern, frischem Chilli, Bohnen, Paprika und Zwiebeln. Empfohlen mit Spiegelei (+2€)",
        prices: [],
      },
      {
        id: 16,
        name: "16. Pad Khing",
        description:
          "Gemüsepfanne mit Morcheln, Paprika, Möhren, Zwiebeln, Knoblauch und Ingwer",
        prices: [],
      },
      {
        id: 17,
        name: "17. Pad Med Mamuang",
        description:
          "Glasiertes Wokgemüse mit Cashewnüssen, Paprika, Zwiebeln, getrockneter Chili, Knoblauch und Frühlingszwiebeln",
        prices: [],
      },
      {
        id: 18,
        name: "18. Pad Phak",
        description:
          "Wokgemüse mit Champignons, Paprika, Zwiebeln, Chinakohl, Pak Choi, Brokkoli, Knoblauch und Koriander",
        prices: [],
      },
    ],
  },
  {
    name: "Klebreisgerichte",
    sectionId: "klebreis",
    description: "Serviert mit traditionellem Klebreis",
    items: [
      {
        id: 19,
        name: "19. Som Tam",
        description:
          "Scharf-würziger Papayasalat mit Thailändischen Schlangenbohnen, Tomaten, Knoblauch, Chili, Fischsauce, getrockneten Garnelen und Erdnüssen",
        prices: [
          { topping: "Tam Thai", price: 11.0 },
          { topping: "Tam Lao (mit fermentierter Fischsauce)", price: 11.0 },
        ],
      },
      {
        id: 20,
        name: "20. Laab",
        description:
          "Scharf-würziger Salat mit Chillipulver, roten Zwiebeln, Koriander, Frühlingszwiebeln, Minze, Galgant und gerösteten Klebreiskörnern",
        prices: [
          { topping: "Tofu", price: 10.5 },
          { topping: "Huhn", price: 11 },
          { topping: "Ente", price: 12.5 },
        ],
      },
      {
        id: 21,
        name: "21. Nam Tok",
        description:
          "Scharf-würziger Rindfleischsalat mit Chillipulver, roten Zwiebeln, Koriander, Frühlingszwiebeln, Minze, Galgant und gerösteten Klebreiskörnern",
        prices: [{ topping: "", price: 12.5 }],
      },
    ],
  },
  {
    name: "Dessert",
    sectionId: "dessert",
    description: "",
    items: [
      {
        id: 22,
        name: "Banana Balls",
        description:
          "Gebackene Banane im Sesam-Kokos-Mantel mit Honig und Schokosauce",
        prices: [{ topping: "", price: 4.5 }],
      },
      {
        id: 23,
        name: "Thai Coconut Ice Cream Bun",
        description:
          "Hausgemachtes Kokosnusseis serviert in einem Milchbrötchen mit Erdnüssen",
        prices: [{ topping: "", price: 5.5 }],
      },
    ],
  },
  {
    name: "Extras",
    sectionId: "extras",
    description: "",
    items: [
      {
        id: 24,
        name: "",
        description: "",
        prices: [
          { topping: "Portion Reis", price: 2 },
          { topping: "Portion Klebreis", price: 2.5 },
          { topping: "Portion Reisbandnudeln", price: 2 },
          { topping: "Spiegelei", price: 2 },
        ],
      },
    ],
  },
];

const menuItems = [
  {
    id: 1,
    name: "S1. Pad Khi Mao",
    description:
      "Gebratene, scharf-würzige breite Reisbandnudeln mit Möhren, Brokkoli, Thai-Basilikum, Chili und Knoblauch",
    prices: [
      { topping: "Tofu", price: 10 },
      { topping: "Huhn", price: 11 },
      { topping: "Rind", price: 12 },
      { topping: "Garnelen", price: 12.5 },
      { topping: "Ente", price: 13 },
    ],
  },
  {
    id: 2,
    name: "S2. Khua Mee",
    description:
      "Gebratene dünne Reisbandnudeln in Sojasauce mit Ei, Pak Choi, Sprossen, Karottenstreifen, Frühlingszwiebeln und Koriander",
    prices: [
      { topping: "Tofu", price: 10 },
      { topping: "Huhn", price: 11 },
      { topping: "Rind", price: 12 },
      { topping: "Ente", price: 13 },
    ],
  },
  {
    id: 3,
    name: "S3. Khao Soi",
    description:
      "Kokos-Curry Nudelsuppe mit Koriander, roten Zwiebeln, eingelegtem Senfkohl und Limette",
    prices: [
      { topping: "Tofu", price: 10 },
      { topping: "Huhn", price: 11 },
      { topping: "Rind", price: 12 },
    ],
  },
];
</script>
