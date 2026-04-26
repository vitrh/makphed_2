<template>
  <AppLayout>
    <Head
      title="Impressum – Mak Phed"
      description="Impressum von Mak Phed, Jonasstraße 35, 12053 Berlin."
      canonical="https://makphed.de/impressum"
    />
    <div class="min-h-screen bg-gray-100">
      <div class="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-white shadow-md sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h1 class="text-3xl font-semibold text-gray-900">Impressum</h1>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="px-4 py-5 bg-gray-50 sm:px-6">
                <h2 class="text-xl font-semibold text-gray-800">
                  VERANTWORTLICHKEIT NACH § 5 DDG
                </h2>
                <p class="mt-8 text-sm text-gray-900">
                  <strong>Hiep Trinh</strong>
                </p>
              </div>

              <div class="px-4 py-5 bg-white sm:px-6">
                <h2 class="text-xl font-semibold text-gray-800">KONTAKT</h2>
                <p class="mt-8 text-sm text-gray-900">
                  <strong>Mak Phed</strong><br />
                  Jonasstraße 35<br />
                  12053 Berlin
                </p>
                <p class="mt-8 text-sm text-gray-900">
                  Telefon: 030 69577314<br />
                  E-Mail:
                  <a href="mailto:info@makphed.de" class="text-blue-500"
                    >info@makphed.de</a
                  ><br />
                  Internet:
                  <a
                    href="http://www.makphed.de"
                    class="text-blue-500"
                    target="_blank"
                    >www.makphed.de</a
                  >
                </p>
                <p class="mt-8 text-sm text-gray-900">
                  VERTRETEN DURCH:<br />Hiep Trinh
                </p>
              </div>

              <div class="px-4 py-5 bg-white sm:px-6">
                <h2 class="text-xl font-semibold text-gray-800">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p class="mt-8 text-sm text-gray-900">
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                <p class="mt-8 text-sm text-gray-900">Quelle: e-recht24.de</p>
              </div>

              <div class="px-4 py-5 bg-white sm:px-6">
                <h2 class="text-xl font-semibold text-gray-800 uppercase">
                  Haftungsausschluss
                </h2>
                <h3 class="mt-8 text-lg font-semibold text-gray-800 uppercase">
                  Haftung für Inhalte
                </h3>
                <p class="mt-8 text-sm text-gray-900">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                  Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich.
                </p>
                <h3 class="mt-8 text-lg font-semibold text-gray-800 uppercase">
                  Haftung für Links
                </h3>
                <p class="mt-8 text-sm text-gray-900">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>
                <h3 class="mt-8 text-lg font-semibold text-gray-800 uppercase">
                  Urheberrecht
                </h3>
                <p class="mt-8 text-sm text-gray-900">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue";
import Head from "../components/Head.vue";
</script>
