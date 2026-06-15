<template>
  <main class="min-h-screen bg-white text-zinc-900 antialiased dark:bg-[#060606] dark:text-zinc-100">
    <section class="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div class="space-y-8 max-w-3xl">
        <div class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          Headless E-Commerce Platform
        </div>
        
        <h1 class="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-950 dark:text-white">
          Toko online modern dengan performa maksimal.
        </h1>
        
        <p class="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Pemisahan frontend dan backend untuk checkout super cepat, kebebasan UI, dan skalabilitas tak terbatas.
        </p>

        <div class="flex gap-4 pt-4">
          <button class="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Mulai Katalog
          </button>
          <button class="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition px-6 py-2.5 text-sm font-medium">
            Pelajari lebih lanjut &rarr;
          </button>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="i in 4" :key="i" class="group border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl hover:border-zinc-300 dark:hover:border-zinc-700 transition">
          <div class="h-10 w-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-zinc-600 dark:text-zinc-400">
            <div class="w-5 h-5 bg-zinc-400 rounded-sm"></div>
          </div>
          <h3 class="text-lg font-medium">Integrasi Payment Gateway</h3>
          <p class="mt-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Dukung pembayaran lokal dan internasional dengan pengalaman checkout yang mulus.
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 pb-32">
      <div class="border-t border-zinc-200 dark:border-zinc-800 pt-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div v-for="stat in stats" :key="stat.brand">
            <div class="text-3xl font-semibold tracking-tight">{{ stat.value }}</div>
            <div class="text-sm text-zinc-500 mt-1">{{ stat.desc }}</div>
            <div class="text-xs text-zinc-400 mt-4 font-mono uppercase tracking-widest">{{ stat.brand }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const stats = [
  { value: '37%', desc: 'lower bounce rate', brand: 'Desenio' },
  { value: '50%', desc: 'better Core Web Vitals', brand: 'Hydrow' },
  { value: '30%', desc: 'increased conversions', brand: 'Chico\'s' },
  { value: '77%', desc: 'in page speed', brand: 'Neo' }
]
</script>