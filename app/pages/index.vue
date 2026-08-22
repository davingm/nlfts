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

const videoFrame = ref<HTMLIFrameElement | null>(null)
const videoPlaying = ref(true)

const toggleVideo = () => {
  const command = videoPlaying.value ? 'pauseVideo' : 'playVideo'
  videoFrame.value?.contentWindow?.postMessage(JSON.stringify({
    event: 'command',
    func: command,
    args: []
  }), '*')
  videoPlaying.value = !videoPlaying.value
}

</script>

<template>
<main>
  <div class="relative overflow-hidden bg-[#ededed] text-gray-950 dark:bg-[#090909] dark:text-white">
  <!-- Hero Section -->
  <section class="relative mx-1 mt-4 overflow-hidden rounded-[18px] bg-[#111111] px-4 pb-24 pt-12 text-white transition-colors duration-500 sm:mx-3 sm:mt-5 sm:pb-32 sm:pt-16">
    <div class="relative z-10 mx-auto flex max-w-[1500px] flex-col items-center text-center">
      <div class="flex items-center gap-3 text-sm font-medium sm:gap-4 sm:text-base">
        <span>World of the Day</span>
        <span class="rounded border border-zinc-400 px-2 py-1 font-normal leading-none dark:border-zinc-600">Aug 22, 2026</span>
        <span class="hidden sm:inline"> Developer Community</span>
      </div>

      <h1 class="mt-12 max-w-[1200px] text-[clamp(4.25rem,11.8vw,11.5rem)] font-bold uppercase leading-[0.83] tracking-[-0.07em] sm:mt-14">
        <span class="block">Never Say</span>
        <span class="block">Never</span>
      </h1>
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
