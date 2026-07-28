<script setup lang="ts">
useSeoMeta({
  title: 'Donasi — Dukung NLFTs, Komunitas Developer Indonesia',
  ogTitle: 'Donasi — Dukung NLFTs, Komunitas Developer Indonesia',
  description: 'Dukung pertumbuhan NLFTs — komunitas developer open-source terbesar di Indonesia. Setiap kontribusi membantu kami menjaga infrastruktur, konten, dan ekosistem tetap hidup.',
  ogDescription: 'Dukung NLFTs melalui Kreate, Saweria, Buy Me a Coffee, Afdian, atau GitHub Sponsors. Dana 100% untuk operasional & pengembangan.',
  ogImage: 'https://nlfts.dev/og/donasi.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogUrl: 'https://nlfts.dev/donasi',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Donasi — Dukung NLFTs',
  twitterDescription: 'Setiap kontribusi membantu kami menjaga komunitas developer Indonesia tetap terbuka dan berkembang.',
  twitterImage: 'https://nlfts.dev/og/donasi.png',
})

const platforms = [
  {
    id: 'kreate',
    name: 'Kreate.gg',
    desc: 'Platform kreator lokal Indonesia. Dukung dengan top-up virtual yang fleksibel.',
    url: 'https://kreate.gg/nlfts',
    tag: 'Local · IDR',
    icon: 'layers',
  },
  {
    id: 'saweria',
    name: 'Saweria',
    desc: 'Cara paling mudah mendukung kreator Indonesia. Transfer langsung, langsung terima.',
    url: 'https://saweria.co/nlfts',
    tag: 'Local · IDR',
    icon: 'heart',
  },
  {
    id: 'bmc',
    name: 'Buy Me a Coffee',
    desc: 'Platform donasi global. Dukung sekali atau berlangganan bulanan.',
    url: 'https://buymeacoffee.com/nlfts',
    tag: 'Global · USD',
    icon: 'coffee',
  },
  {
    id: 'afdian',
    name: 'Afdian',
    desc: 'Platform dukungan kreator populer di Asia. Cocok untuk pendukung dari kawasan Asia.',
    url: 'https://afdian.com/nlfts',
    tag: 'Asia · CNY',
    icon: 'smile',
  },
  {
    id: 'github',
    name: 'GitHub Sponsors',
    desc: 'Dukung langsung lewat GitHub. Fee 0%, 100% masuk ke pengembang.',
    url: 'https://github.com/sponsors/nlfts',
    tag: 'Global · USD',
    icon: 'github',
  },
]

const stats = [
  { value: '100%', label: 'Dana untuk operasional & infrastruktur' },
  { value: 'Open', label: 'Kode sumber bebas diakses siapa saja' },
  { value: '0%', label: 'Fee platform untuk GitHub Sponsors' },
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-white transition-colors">

    <!-- ── HERO ─────────────────────────────────────────────── -->
    <section class="mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
      <div class="flex flex-col gap-6 max-w-2xl">
        <p class="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-500">
          Support our work
        </p>
        <h1 class="text-4xl sm:text-5xl md:text-[56px] font-semibold tracking-tight leading-[1.08] text-zinc-950 dark:text-white">
          Bantu kami terus<br />
          <span class="text-zinc-400 dark:text-zinc-500 font-light">membangun hal yang bermakna.</span>
        </h1>
        <p class="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
          Setiap kontribusi — berapapun — membantu kami menjaga proyek ini tetap hidup, terbuka, dan berkembang untuk komunitas developer Indonesia.
        </p>
      </div>
    </section>

    <!-- ── DIVIDER ──────────────────────────────────────────── -->
    <div class="border-t border-zinc-200 dark:border-zinc-800" />

    <!-- ── PLATFORMS ────────────────────────────────────────── -->
    <section class="mx-auto max-w-5xl px-6 py-16">
      <div class="flex items-center gap-4 mb-10">
        <span class="text-[11px] font-medium tracking-[0.14em] uppercase text-zinc-400 dark:text-zinc-500 shrink-0">Pilih Platform</span>
        <div class="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
      </div>

      <!-- Platform Grid — bordered cells ala Vercel -->
      <div class="relative border border-zinc-200 dark:border-zinc-800">
        <!-- corner marks -->
        <div class="absolute -top-[9px] -left-[9px] flex h-[18px] w-[18px] items-center justify-center pointer-events-none select-none">
          <div class="absolute h-full w-px bg-zinc-400 dark:bg-zinc-600" />
          <div class="absolute h-px w-full bg-zinc-400 dark:bg-zinc-600" />
        </div>
        <div class="absolute -bottom-[9px] -right-[9px] flex h-[18px] w-[18px] items-center justify-center pointer-events-none select-none">
          <div class="absolute h-full w-px bg-zinc-400 dark:bg-zinc-600" />
          <div class="absolute h-px w-full bg-zinc-400 dark:bg-zinc-600" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 divide-zinc-200 dark:divide-zinc-800">
          <a
            v-for="(p, i) in platforms"
            :key="p.id"
            :href="p.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative flex flex-col gap-0 p-8 bg-white dark:bg-[#09090b] hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors duration-200"
            :class="{
              'sm:border-r border-zinc-200 dark:border-zinc-800': i % 3 !== 2,
              'border-b border-zinc-200 dark:border-zinc-800': i < 3
            }"
          >
            <!-- number -->
            <span class="text-[11px] font-mono text-zinc-300 dark:text-zinc-700 mb-6 tabular-nums block">
              0{{ i + 1 }}
            </span>

            <!-- icon -->
            <div class="mb-5">
              <!-- layers icon -->
              <svg v-if="p.icon === 'layers'" class="w-5 h-5 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <!-- heart icon -->
              <svg v-else-if="p.icon === 'heart'" class="w-5 h-5 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
              <!-- coffee icon -->
              <svg v-else-if="p.icon === 'coffee'" class="w-5 h-5 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/>
              </svg>
              <!-- smile icon -->
              <svg v-else-if="p.icon === 'smile'" class="w-5 h-5 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path stroke-linecap="round" d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9" stroke-linecap="round" stroke-width="2"/>
                <line x1="15" y1="9" x2="15.01" y2="9" stroke-linecap="round" stroke-width="2"/>
              </svg>
              <!-- github icon -->
              <svg v-else-if="p.icon === 'github'" class="w-5 h-5 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
            </div>

            <!-- content -->
            <div class="flex-1 space-y-2">
              <h2 class="text-sm font-semibold text-zinc-900 dark:text-white tracking-tight">{{ p.name }}</h2>
              <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ p.desc }}</p>
            </div>

            <!-- footer -->
            <div class="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
              <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-600">{{ p.tag }}</span>
              <svg
                class="w-4 h-4 text-zinc-400 dark:text-zinc-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-300"
                fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 16 16"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- ── DIVIDER ──────────────────────────────────────────── -->
    <div class="border-t border-zinc-200 dark:border-zinc-800" />

    <!-- ── STATS / TRANSPARANSI ──────────────────────────────── -->
    <section class="mx-auto max-w-5xl px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
        <div
          v-for="stat in stats"
          :key="stat.value"
          class="bg-white dark:bg-[#09090b] px-8 py-10 flex flex-col gap-2"
        >
          <span class="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">{{ stat.value }}</span>
          <span class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- ── DIVIDER ──────────────────────────────────────────── -->
    <div class="border-t border-zinc-200 dark:border-zinc-800" />

    <!-- ── FOOTER NOTE ───────────────────────────────────────── -->
    <footer class="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between">
      <span class="text-[12px] text-zinc-400 dark:text-zinc-600">
        NLFTs — Komunitas Developer Indonesia
      </span>
      <a
        href="https://nlfts.dev"
        class="text-[12px] text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
      >
        nlfts.dev
      </a>
    </footer>

  </div>
</template>
