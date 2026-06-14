<script setup lang="ts">
useSeoMeta({
  title: 'Tim Kami - RakitWeb',
  description: 'Kenali tim di balik RakitWeb — developer, designer, dan engineer yang membangun solusi digital terbaik untuk bisnis Anda.',
  ogTitle: 'Tim Kami - RakitWeb',
  ogDescription: 'Kenali tim di balik RakitWeb — developer, designer, dan engineer yang membangun solusi digital terbaik untuk bisnis Anda.',
  ogImage: '/rakitweb.png'
})

const team = [
  {
    name: 'Kin You',
    role: 'Frontend Enginner',
    experience: 'Never Say Never',
    avatar: './team/Tsumugi.jpg',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Rakit+Dev&background=3b82f6&color=fff&size=200&bold=true',
    bio: 'Membangun produk digital dari nol hingga production. Spesialis web modern dan arsitektur server.',
    stacks: [
      { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' },
      { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: '#42B883' },
      { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
      { name: 'JavaScript', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
      { name: 'Next.js', icon: 'i-simple-icons-nextdotjs', color: '#000000' }
    ]
  },
  {
    name: 'Chandra',
    role: 'Founder of RakitWeb',
    experience: '2+ tahun pengalaman',
    avatar: './blog/kucing.png',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Web+Engineer&background=10b981&color=fff&size=200&bold=true',
    bio: 'Spesialis UI/UX dan performa frontend. Memastikan setiap pixel tampil sempurna di semua perangkat.',
    stacks: [
      { name: 'JavaScript', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
      { name: 'Next.js', icon: 'i-simple-icons-nextdotjs', color: '#000000' },
      { name: 'React Native', icon: 'i-simple-icons-react', color: '#61DAFB' },
      { name: 'Angular', icon: 'i-simple-icons-angular', color: '#DD0031' },
      { name: 'NestJS', icon: 'i-simple-icons-nestjs', color: '#E0234E' },
      { name: 'Flutter', icon: 'i-simple-icons-flutter', color: '#02569B' }
    ]
  },
  {
    name: 'Silo Kusuma',
    role: 'Backend & DevOps Engineer',
    experience: '2+ tahun pengalaman',
    avatar: './team/elaina.jpg',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Backend+Dev&background=8b5cf6&color=fff&size=200&bold=true',
    bio: 'Merancang arsitektur backend yang scalable dan reliable. Ahli dalam deployment dan optimasi server.',
    stacks: [
      { name: 'Java', icon: 'i-simple-icons-java', color: '#007396' },
      { name: 'Spring', icon: 'i-simple-icons-spring', color: '#6DB33F' },
      { name: 'ASP.NET', icon: 'i-simple-icons-dotnet', color: '#512BD4' },
      { name: 'Python', icon: 'i-simple-icons-python', color: '#3776AB' },
      { name: 'PHP', icon: 'i-simple-icons-php', color: '#777BB4' },
      { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' }
    ]
  },
  {
    name: 'Nizam',
    role: 'CI / CD',
    experience: '2+ tahun pengalaman',
    avatar: 'https://avatars.githubusercontent.com/u/webcraftidng?v=4',
    fallbackAvatar: 'https://ui-avatars.com/api/?name=Backend+Dev&background=8b5cf6&color=fff&size=200&bold=true',
    bio: 'Merancang arsitektur backend yang scalable dan reliable. Ahli dalam deployment dan optimasi server.',
    stacks: [
      { name: 'ASP.NET', icon: 'i-simple-icons-dotnet', color: '#512BD4' },
      { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' }
    ]
  },
  {
  name: 'Nafi',
  role: 'UI/UX Designer',
  experience: '1+ tahun pengalaman',
  avatar: './team/nafi.jpg',
  fallbackAvatar: 'https://ui-avatars.com/api/?name=Nafi&background=f59e0b&color=fff&size=200&bold=true',
  bio: 'Fokus menciptakan tampilan antarmuka yang modern, nyaman digunakan, dan memiliki identitas visual yang kuat.',
  stacks: [
    { name: 'Figma', icon: 'i-simple-icons-figma', color: '#F24E1E' },
    { name: 'Adobe XD', icon: 'i-simple-icons-adobexd', color: '#FF61F6' },
    { name: 'TailwindCSS', icon: 'i-simple-icons-tailwindcss', color: '#06B6D4' },
    { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: '#42B883' },
    { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' }
  ]
},
{
  name: 'Rizal',
  role: 'Fullstack Developer',
  experience: '2+ tahun pengalaman',
  avatar: './team/rizal.jpg',
  fallbackAvatar: 'https://ui-avatars.com/api/?name=Rizal&background=ef4444&color=fff&size=200&bold=true',
  bio: 'Mengembangkan sistem backend dan frontend dengan fokus pada performa, stabilitas, dan pengalaman pengguna yang optimal.',
  stacks: [
    { name: 'Laravel', icon: 'i-simple-icons-laravel', color: '#FF2D20' },
    { name: 'Node.js', icon: 'i-simple-icons-nodedotjs', color: '#339933' },
    { name: 'MySQL', icon: 'i-simple-icons-mysql', color: '#4479A1' },
    { name: 'Docker', icon: 'i-simple-icons-docker', color: '#2496ED' },
    { name: 'React', icon: 'i-simple-icons-react', color: '#61DAFB' }
  ]
}
]

const allStacks = [
  { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' },
  { name: 'JavaScript', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
  { name: 'PHP', icon: 'i-simple-icons-php', color: '#777BB4' },
  { name: 'Laravel', icon: 'i-simple-icons-laravel', color: '#FF2D20' },
  { name: 'Angular', icon: 'i-simple-icons-angular', color: '#DD0031' },
  { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
  { name: 'Next.js', icon: 'i-simple-icons-nextdotjs', color: '#000000' },
  { name: 'NestJS', icon: 'i-simple-icons-nestjs', color: '#E0234E' },
  { name: 'Java', icon: 'i-simple-icons-java', color: '#007396' },
  { name: 'Spring', icon: 'i-simple-icons-spring', color: '#6DB33F' },
  { name: 'Flutter', icon: 'i-simple-icons-flutter', color: '#02569B' },
  { name: 'React Native', icon: 'i-simple-icons-react', color: '#61DAFB' },
  { name: 'ASP.NET', icon: 'i-simple-icons-dotnet', color: '#512BD4' },
  { name: 'Python', icon: 'i-simple-icons-python', color: '#3776AB' }
]

const imgErrors = ref<Record<number, boolean>>({})
const onImgError = (idx: number) => { imgErrors.value[idx] = true }
</script>

<template>
<section class="pt-36 pb-16 px-4 sm:px-6">
  <UContainer>
    <div class="max-w-3xl">
      
      <h1 class="text-4xl sm:text-6xl font-normal tracking-tight text-zinc-900 dark:text-white leading-[1.08] mb-6">
        Orang-orang tangguh di balik sistem digital Anda.
      </h1>
      <p class="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl font-normal">
        Kami adalah tim kecil terdistribusi yang bergerak cepat — developer, engineer, dan creator yang fokus mendedikasikan presisi pada performa platform Anda.
      </p>
    </div>
  </UContainer>
</section>

<!-- ════════════════════════════════════════════════ -->
<!-- TEAM GRID (Subtle Grid Layout)                   -->
<!-- ════════════════════════════════════════════════ -->
<section class="py-12 px-4 sm:px-6">
  <UContainer>
    <!-- Grid layout dengan gap mini dan pembatas elegan -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800/80 rounded-xl overflow-hidden shadow-sm dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]">
      
      <!-- STREAMING_CHUNK: Rendering Team Member Cards... -->
      <div
        v-for="(member, idx) in team"
        :key="member.name"
        class="bg-white dark:bg-[#000000] p-8 flex flex-col justify-between gap-6 hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-all duration-300 group"
      >
        <div>
          <!-- Avatar & Core Info Header -->
          <div class="flex items-center gap-4 mb-6">
            <div class="relative shrink-0">
              <img
                :src="imgErrors[idx] ? member.fallbackAvatar : member.avatar"
                :alt="member.name"
                class="w-12 h-12 rounded-full object-cover border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 group-hover:scale-105 transition-transform duration-300"
                @error="onImgError(idx)"
              />
              <!-- Online Status Ring Indicator -->
              <div class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-[#000000]" />
            </div>
            
            <div class="flex-1 min-w-0">
              <h3 class="text-sm font-medium text-zinc-950 dark:text-zinc-50 truncate">{{ member.name }}</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{{ member.role }}</p>
              <p class="text-[9px] font-mono text-zinc-400 uppercase tracking-widest mt-1">{{ member.experience }}</p>
            </div>
          </div>

          <!-- Personal Biography Narrative -->
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal mb-6">
            {{ member.bio }}
          </p>
        </div>

        <!-- Technology Stack Mini Tags -->
        <div class="pt-6 border-t border-zinc-100 dark:border-zinc-900">
          <p class="text-[9px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3.5">Fokus Stack</p>
          <div class="flex flex-wrap gap-1.5">
            <div
              v-for="stack in member.stacks"
              :key="stack.name"
              class="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/80 hover:border-zinc-350 dark:hover:border-zinc-700 transition-all duration-150 cursor-default"
            >
              <UIcon :name="stack.icon" class="w-3.5 h-3.5 shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300" :style="{ color: stack.color }" />
              <span class="text-[10px] font-normal text-zinc-600 dark:text-zinc-400">{{ stack.name }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </UContainer>
</section>

<!-- ════════════════════════════════════════════════ -->
<!-- ECOSYSTEM ALL STACKS SECTION (Clean Grid)        -->
<!-- ════════════════════════════════════════════════ -->
<section class="py-16 px-4 sm:px-6">
  <UContainer>
    <div class="max-w-4xl mx-auto">
      <!-- Section Typography Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-100 dark:border-zinc-900 pb-8">
        <div>
          <p class="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">Arsitektur Ekosistem</p>
          <h2 class="text-xl sm:text-2xl font-normal tracking-tight text-zinc-950 dark:text-white">
            Teknologi yang kami kendalikan.
          </h2>
        </div>
        <p class="text-xs text-zinc-400 dark:text-zinc-500 max-w-xs leading-relaxed font-normal">
          Dari front-end interaktif hingga back-end, kami memilih tumpukan teknologi paling andal untuk performa platform yang mulus.
        </p>
      </div>

      <!-- STREAMING_CHUNK: Rendering Tech Ecosystem Badges... -->
      <div class="grid grid-cols-3 sm:grid-cols-7 gap-2">
        <div
          v-for="stack in allStacks"
          :key="stack.name"
          class="group flex flex-col items-center gap-2.5 p-4 rounded-lg bg-zinc-50/50 dark:bg-zinc-950/20 border border-zinc-200/40 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700/80 hover:bg-white dark:hover:bg-zinc-950 transition-all duration-150 cursor-default"
        >
          <!-- Warna asli ikon langsung menyala terang tanpa nunggu di-hover -->
          <UIcon :name="stack.icon" class="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-105" :style="{ color: stack.color }" />
          <span class="text-[10px] font-normal text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-zinc-300 transition-colors text-center leading-tight">{{ stack.name }}</span>
        </div>
      </div>
    </div>
  </UContainer>
</section>

<!-- ════════════════════════════════════════════════ -->
<!-- CALL TO ACTION (CTA - Vercel Dark Panel Look)    -->
<!-- ════════════════════════════════════════════════ -->
<section class="py-20 px-4 sm:px-6">
  <UContainer>
    <div class="max-w-4xl mx-auto rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#09090b] p-8 sm:p-12 relative overflow-hidden">
      
      <!-- Background glow subtle effect -->
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div class="max-w-lg relative z-10">
        <h2 class="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950 dark:text-white mb-4">
          Akselerasikan sistem digital bisnis Anda hari ini.
        </h2>
        <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed font-normal">
          Kami selalu bersemangat untuk membangun proyek baru dan mendesain integrasi arsitektur cloud yang modern. Ceritakan kebutuhan Anda kepada kami.
        </p>
        
        <div class="flex flex-wrap items-center gap-3">
          <!-- High Contrast Button Vercel-Style -->
          <NuxtLink
            to="https://wa.me/6283160325595"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 text-xs font-medium rounded-md hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <UIcon name="i-simple-icons-whatsapp" class="w-4 h-4" />
            Hubungi Kami via WhatsApp
          </NuxtLink>
          
          <NuxtLink
            to="/pricing"
            class="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            Lihat Skema Harga
            <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </UContainer>
</section>
</template>
