<template>
  <section class="relative overflow-hidden bg-white dark:bg-[#09090b] py-20">

    <!-- Header -->
     <div class="text-center max-w-lg mx-auto px-6 mb-16">
        <span class="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-500 dark:text-indigo-400 opacity-80">
          Testimonials
        </span>
        <h2 class="text-3xl font-medium text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
          Trusted by developers
        </h2>
        <p class="text-sm text-gray-400 dark:text-gray-500 font-light">
          Discover what the community says about our platform.
        </p>
      </div>

    <!-- Grid -->
    <div class="relative overflow-hidden" style="max-height: 780px;">
      <div class="flex gap-4 px-6 max-w-[1400px] mx-auto items-start pb-8">

        <!-- Col 1 — paling rendah -->
        <div class="flex flex-col gap-4 flex-1 mt-36">
          <div
            v-for="t in columns[0]" :key="t.id"
            class="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/50"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

        <!-- Col 2 — mid rendah -->
        <div class="flex flex-col gap-4 flex-1 mt-16">
          <div
            v-for="t in columns[1]" :key="t.id"
            class="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/50"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

        <!-- Col 3 — CENTER PEAK (tertinggi) -->
        <div class="flex flex-col gap-4 flex-1 mt-0">
          <div
            v-for="t in columns[2]" :key="t.id"
            class="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

        <!-- Col 4 — mid rendah -->
        <div class="flex flex-col gap-4 flex-1 mt-16">
          <div
            v-for="t in columns[3]" :key="t.id"
            class="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/50"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

        <!-- Col 5 — paling rendah -->
        <div class="flex flex-col gap-4 flex-1 mt-36">
          <div
            v-for="t in columns[4]" :key="t.id"
            class="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]/95 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/50"
          >
            <div class="flex items-center gap-3 mb-3">
              <img :src="t.avatar" :alt="t.name" class="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white dark:ring-gray-700" />
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{{ t.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ t.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white" v-html="t.text" />
          </div>
        </div>

      </div>

      <!-- Fade overlay light mode -->
      <div class="fade-bottom pointer-events-none absolute bottom-0 left-0 right-0 h-[520px] block dark:hidden" />
      <!-- Fade overlay dark mode -->
      <div class="fade-bottom-dark pointer-events-none absolute bottom-0 left-0 right-0 h-[520px] hidden dark:block" />
    </div>

  </section>
</template>

<script setup>
import { computed } from 'vue'

const testimonials = [
  // Col 0
  { id: 1,  col: 0, name: 'Simon Hamp',      role: 'Co-founder of Native PHP',              avatar: 'https://i.pravatar.cc/80?img=11', text: `<strong>We wouldn't have been able to build NativePHP or Bifrost without Forge.</strong> It allowed us to forget about hosting so we could focus on making awesome products.` },
  { id: 2,  col: 0, name: 'Dan Johnson',     role: 'Head of Engineering at TRYBE',          avatar: 'https://i.pravatar.cc/80?img=12', text: `Using Forge is a no brainer – it lets me spend more time building a product and less time managing servers.` },
  { id: 3,  col: 0, name: 'Layla Chen',      role: 'CTO at Brightloop',                     avatar: 'https://i.pravatar.cc/80?img=9',  text: `Forge made our entire DevOps pipeline disappear. We ship faster and sleep better knowing our infrastructure is handled.` },

  // Col 1
  { id: 4,  col: 1, name: 'Nolan Nordlund',  role: 'Founder of Project Rebel',             avatar: 'https://i.pravatar.cc/80?img=14', text: `<strong>Forge has made deploying apps so simple and easy.</strong> Once I have a project installed, I just need a tiny GitHub Action to get code from my machine to the live website in about 30 seconds. Magical.` },
  { id: 5,  col: 1, name: 'Herman Schutte',  role: 'Founder of SiteSpeakAI',               avatar: 'https://i.pravatar.cc/80?img=15', text: `Been using Forge to manage 60+ server instances for the past 10 years. <strong>Can't imagine using anything else to provision, deploy, and manage all my apps' infrastructure.</strong> As a solo founder, it's a must-have!` },
  { id: 6,  col: 1, name: 'Michael LaRoy',   role: 'Lead Developer at Stackd',              avatar: 'https://i.pravatar.cc/80?img=7',  text: `I switched three clients to Forge-managed infrastructure last year. Every single one of them thanked me. Setup is ridiculously smooth.` },

  // Col 2 — center
  { id: 7,  col: 2, name: 'Alex MacArthur',  role: 'Sr. Software Engineer at Ramsey',      avatar: 'https://i.pravatar.cc/80?img=3',  text: `<strong>Forge is one of those services you couldn't pay me to leave.</strong> The fact that I can offload the cognitive overhead of server management with such a great user experience for just a few bucks a month is still bonkers to me.` },
  { id: 8,  col: 2, name: 'Mike Elghali',    role: 'CTO at CEGELEM',                       avatar: 'https://i.pravatar.cc/80?img=4',  text: `I've been using Forge since 2016 across 2 French startups with zero issues. <strong>It allowed me to focus entirely on technical development without worrying about server administration and networking.</strong> Huge time saver and peace of mind.` },
  { id: 9,  col: 2, name: 'Sophie Vance',    role: 'Backend Engineer at Lumen',            avatar: 'https://i.pravatar.cc/80?img=5',  text: `There's no going back once you've felt the difference. Forge took our deployment from an afternoon chore to a single command. Genuinely remarkable product.` },

  // Col 3
  { id: 10, col: 3, name: 'Sam Berry',       role: 'Managing Partner at 25Digital',        avatar: 'https://i.pravatar.cc/80?img=16', text: `As a developer, I've never been fully confident managing servers and security. <strong>Laravel Forge takes away that uncertainty, it handles the hard parts and gives me the confidence to deploy safely,</strong> so I can focus on writing code and delivering projects.` },
  { id: 11, col: 3, name: 'Wendell Adriel',  role: 'Engineering Manager at TrackStreet',   avatar: 'https://i.pravatar.cc/80?img=17', text: `Migrated two websites in less than 30 minutes using Forge and Laravel VPS. Most of the time was spent just waiting for DNS propagation and SSL certificates. Just a few clicks here and there, and everything was just working!` },
  { id: 12, col: 3, name: 'Reza Ahmadi',     role: 'Full Stack Developer',                 avatar: 'https://i.pravatar.cc/80?img=18', text: `Forge gave me back my weekends. Server management used to eat up my Saturdays — now it's a non-issue. My clients get faster deployments and I get my life back.` },

  // Col 4
  { id: 13, col: 4, name: 'Camilo Martinez', role: 'Owner of Somnio Technology Solutions', avatar: 'https://i.pravatar.cc/80?img=19', text: `I moved away from managing load balancers, setting PHP isolation, Nginx configuration, and Docker images to start using Forge. <strong>Best decision ever, my deployment time went from 5–10 minutes to under 1 minute.</strong>` },
  { id: 14, col: 4, name: 'John Champ',      role: 'Founder of Pixelcave',                 avatar: 'https://i.pravatar.cc/80?img=20', text: `With Forge, I don't worry about managing my servers. I just focus on growing my online business.` },
  { id: 15, col: 4, name: 'Anya Torres',     role: 'Product Engineer at Nimble',           avatar: 'https://i.pravatar.cc/80?img=6',  text: `Zero regrets. Forge is one of those rare tools that just disappears into your workflow and makes everything feel effortless. Highly recommended.` },
]

const columns = computed(() => {
  const cols = [[], [], [], [], []]
  testimonials.forEach((t) => cols[t.col].push(t))
  return cols
})
</script>

<style scoped>
.fade-bottom {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0)    0%,
    rgba(255, 255, 255, 0.15) 15%,
    rgba(255, 255, 255, 0.55) 35%,
    rgba(255, 255, 255, 0.88) 55%,
    rgba(255, 255, 255, 1)    70%,
    rgba(255, 255, 255, 1)    100%
  );
}

.fade-bottom-dark {
  background: linear-gradient(
    to bottom,
    rgba(3, 7, 18, 0)    0%,
    rgba(3, 7, 18, 0.15) 15%,
    rgba(3, 7, 18, 0.55) 35%,
    rgba(3, 7, 18, 0.88) 55%,
    rgba(3, 7, 18, 1)    70%,
    rgba(3, 7, 18, 1)    100%
  );
}

@media (max-width: 1024px) {
  .flex > div:nth-child(1),
  .flex > div:nth-child(5) {
    display: none;
  }
}

@media (max-width: 640px) {
  .flex > div:not(:nth-child(3)) {
    display: none;
  }
}
</style>