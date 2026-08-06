<script setup lang="ts">
import gsap from 'gsap'

// SEO Implementation
useSeoMeta({
  title: 'NLFTs — Komunitas Developer & Startup Teknologi Indonesia',
  ogTitle: 'NLFTs — Komunitas Developer & Startup Teknologi Indonesia',
  description: 'NLFTs adalah startup berbasis komunitas developer open-source terbesar di Indonesia. Bergabung dengan 100+ developer aktif, kolaborasi proyek, dan bangun teknologi generasi berikutnya bersama.',
  ogDescription: 'Komunitas developer open-source Indonesia. 100+ kontributor aktif, proyek open-source, dan ekosistem teknologi modern berbasis Nuxt, Vue, TypeScript.',
  ogImage: 'https://nlfts.dev/og/main.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogUrl: 'https://nlfts.dev',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'NLFTs — Komunitas Developer Indonesia',
  twitterDescription: 'Startup berbasis komunitas developer open-source Indonesia. Bergabung dengan 100+ developer aktif.',
  twitterImage: 'https://nlfts.dev/og/main.png',
})


const copied = ref(false)

const copyCommand = async () => {
  try {
    await navigator.clipboard.writeText('npm install nlfts-devtools')
    copied.value = true

    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error(err)
  }
}

</script>

<template>
<main>
  <div class="relative overflow-hidden selection:bg-emerald-500/20 bg-white text-gray-950 dark:bg-[#09090b] dark:text-white">
  <!-- Hero Section -->
  <section class="relative min-h-screen flex flex-col justify-between px-6 sm:px-16 py-12 bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 transition-colors duration-500 overflow-hidden">
    
    <!-- Top Bar / Minimal Brand -->
    <div class="w-full flex items-center justify-between z-10 text-xs tracking-[0.2em] uppercase font-mono text-neutral-500 dark:text-neutral-400">
      <span>2026</span>
    </div>

    <!-- Center Content: Asymmetric, Architectural Layout -->
    <div class="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end my-auto z-10">
      
      <!-- Left Hero Statement -->
      <div class="lg:col-span-8">
        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.95]">
          Radical <br>
          <span class="font-normal tracking-normal text-neutral-400 dark:text-neutral-500">Community.</span>
        </h1>

        <div class="mt-10">
          <button
            @click="copyCommand"
            class="group inline-flex items-center gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 transition-all hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
          >
            <code class="font-mono text-sm text-neutral-700 dark:text-neutral-300">
              npm install nlfts-devtools
            </code>

            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950"
            >
              <Icon
                :name="copied ? 'lucide:check' : 'lucide:copy'"
                class="h-4 w-4"
              />
            </div>
          </button>

          <p
            class="mt-2 text-xs text-neutral-500 transition-opacity"
            :class="copied ? 'opacity-100' : 'opacity-0'"
          >
            Command berhasil disalin.
          </p>
        </div>

      </div>

      <!-- Right Supporting Info & Actions -->
      <div class="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-8">
        <p class="text-sm sm:text-base font-light text-neutral-600 dark:text-neutral-400 max-w-sm lg:text-right leading-relaxed">
          Setiap kode yang Anda bagikan dan setiap diskusi yang Anda ikuti membantu Indonesia menjadi lebih mandiri secara teknologi.
        </p>
        
        <div class="flex items-center space-x-6 text-sm font-medium">
          <a href="/terhubung" class="group relative py-2 inline-flex items-center gap-2 overflow-hidden">
            <span class="relative z-10 transition-colors duration-300">Bergabung</span>
            <span class="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-900 dark:bg-neutral-100"></div>
          </a>
          <a href="/contact" class="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300">
            Kontak
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Abstract Structural Line -->
    <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-neutral-200 dark:border-neutral-900 text-xs text-neutral-400 dark:text-neutral-60 z-10">
      <div>Grantara Indonesia</div>
      <div>PrataRyn</div>
      <div>Vuxilabs</div>
      <div>GG-Boys</div>
    </div>

  </section>
</div>

  <ProfileSection />
  <BlogSection />
  <DevSection />
  <TestimonialsSection />
  <Cta />
</main>
</template>
<style scoped>
::selection {
  background: rgba(16, 185, 129, 0.3);
  color: inherit;
}
</style>
