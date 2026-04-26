<template>
  <div class="relative bg-stone-900 isolate">
    <!-- Hinweis Banner -->
    <div
      class="bg-stone-800 border-l-4 border-red-950 px-6 py-4 max-w-7xl mx-auto rounded-r-lg"
    >
      <div class="flex items-center gap-x-3">
        <InformationCircleIcon class="w-5 h-5 text-red-400 shrink-0" />
        <p class="text-sm text-gray-300">
          <strong class="text-white">Keine Reservierung möglich</strong> — komm
          einfach vorbei! Wir freuen uns auf dich.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
      <!-- Left side: contact info -->
      <div
        class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48"
      >
        <div class="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 w-full overflow-hidden bg-stone-900 -z-10 ring-1 ring-gray-900/10 lg:w-1/2"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-stone-200 [mask-image:radial-gradient(100%_100%_at_top_right,black,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="contact-pattern"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white" />
              <svg x="100%" y="-1" class="overflow-visible fill-stone-300">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#contact-pattern)"
              />
            </svg>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white">
            Kontaktieren Sie uns
          </h2>
          <p class="mt-6 text-lg leading-8 text-white">
            Treten Sie direkt mit uns in Verbindung oder senden Sie uns eine
            Nachricht über unser Kontaktformular. Wir freuen uns, von Ihnen zu
            hören!
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-white">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon
                  class="w-6 text-white h-7"
                  aria-hidden="true"
                />
              </dt>
              <dd>Jonasstraße 35<br />12053 Berlin</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="w-6 text-white h-7" aria-hidden="true" />
              </dt>
              <dd>
                <a class="hover:text-white" href="tel:+4903069577314"
                  >+49 (0) 30 695 773 14</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="w-6 text-white h-7" aria-hidden="true" />
              </dt>
              <dd>
                <a class="hover:text-white" href="mailto:info@makphed.de"
                  >info@makphed.de</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Right side: form or success -->
      <div v-if="!submitted">
        <form
          @submit.prevent="submitForm"
          class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div class="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <label
                  for="salutation"
                  class="block text-sm font-semibold leading-6 text-white"
                  >Anrede</label
                >
                <div class="mt-2.5">
                  <select
                    id="salutation"
                    v-model="form.salutation"
                    required
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    <option value="Divers">Divers</option>
                  </select>
                </div>
              </div>

              <div class="sm:col-start-1">
                <label
                  for="first-name"
                  class="block text-sm font-semibold leading-6 text-white"
                  >Vorname</label
                >
                <div class="mt-2.5">
                  <input
                    type="text"
                    id="first-name"
                    v-model="form.first_name"
                    required
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="last-name"
                  class="block text-sm font-semibold leading-6 text-white"
                  >Nachname</label
                >
                <div class="mt-2.5">
                  <input
                    type="text"
                    id="last-name"
                    v-model="form.last_name"
                    required
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-semibold leading-6 text-white"
                  >E-Mail</label
                >
                <div class="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    autocomplete="email"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm font-semibold leading-6 text-white"
                  >Nachricht</label
                >
                <div class="mt-2.5">
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="4"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>

              <div class="sm:col-span-2">
                <input
                  type="checkbox"
                  id="terms"
                  v-model="form.accepted_terms"
                  required
                  class="rounded shadow-sm"
                />
                <label for="terms" class="ml-2 text-sm text-white">
                  Ich habe die
                  <RouterLink
                    to="/datenschutz"
                    class="text-blue-500 hover:text-blue-700"
                    >Datenschutzerklärung</RouterLink
                  >
                  zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und
                  Daten zur Beantwortung meiner Anfrage elektronisch erhoben und
                  gespeichert werden. Hinweis: Sie können Ihre Einwilligung
                  jederzeit für die Zukunft per E-Mail an info@makphed.de
                  widerrufen.
                </label>
              </div>
            </div>

            <div class="flex justify-end mt-8">
              <button
                type="submit"
                :disabled="processing"
                class="rounded-md bg-red-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ processing ? "Wird gesendet..." : "Abschicken" }}
              </button>
            </div>

            <p v-if="error" class="mt-4 text-sm font-semibold text-red-400">
              {{ error }}
            </p>
          </div>
        </form>
      </div>

      <!-- Success -->
      <div v-else class="flex items-center justify-center">
        <div class="max-w-xl p-4 my-4 rounded-md sm:mt-0 bg-green-50">
          <div class="flex">
            <div class="shrink-0">
              <CheckCircleIcon
                class="w-5 h-5 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">
                Ihre Anfrage ist eingegangen.
              </h3>
              <div class="mt-2 text-sm text-green-700">
                <p>
                  Vielen Dank für Ihre Anfrage. Wir werden uns so schnell wie
                  möglich bei Ihnen melden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { RouterLink } from "vue-router";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

const WEB3FORMS_KEY = "e9c8a6be-e61e-4635-9dbf-7b469f77a0a9";

const submitted = ref(false);
const processing = ref(false);
const error = ref("");

const form = reactive({
  salutation: "",
  first_name: "",
  last_name: "",
  email: "",
  message: "",
  accepted_terms: false,
});

async function submitForm() {
  if (!form.accepted_terms) {
    error.value = "Bitte akzeptieren Sie die Datenschutzerklärung.";
    return;
  }

  processing.value = true;
  error.value = "";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: "Neue Kontaktanfrage – Mak Phed",
        salutation: form.salutation,
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        message: form.message,
      }),
    });

    if (response.ok) {
      submitted.value = true;
    } else {
      error.value =
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.";
    }
  } catch (e) {
    error.value = "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.";
  } finally {
    processing.value = false;
  }
}
</script>
