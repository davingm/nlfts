<template>
  <section class="w-full px-6 lg:px-12 py-16" style="font-family: 'Google Sans', 'Inter', system-ui, sans-serif;">
    <!-- Main Card -->
    <div class="relative overflow-hidden rounded-2xl border border-white/8" style="background: #0e0e0e;">

      <!-- Dot texture -->
      <div
        class="absolute inset-0 pointer-events-none"
        style="background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: 22px 22px;"
        aria-hidden="true"
      ></div>

      <!-- Red glow — top center, very subtle -->
      <div
        class="absolute pointer-events-none"
        style="top:-80px; left:50%; transform:translateX(-50%); width:560px; height:220px; background:radial-gradient(ellipse, rgba(220,38,38,0.28) 0%, transparent 68%); filter:blur(2px);"
        aria-hidden="true"
      ></div>

      <!-- Red glow — bottom center (burst) -->

      <!-- ── Floating icon cards LEFT ── -->
      <div class="float-card r--8 absolute" style="top:14%;left:3%;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 8h10M7 12h6"/></svg>
      </div>
      <div class="float-card float-sm r6 absolute" style="top:56%;left:2%;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      <div class="float-card float-sm r--14 absolute" style="top:8%;left:16%;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      </div>
      <div class="float-card r10 absolute" style="top:71%;left:9%;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/></svg>
      </div>

      <!-- ── Floating icon cards RIGHT ── -->
      <div class="float-card r6 absolute" style="top:12%;right:4%;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div class="float-card float-sm r--8 absolute" style="top:54%;right:2%;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      </div>
      <div class="float-card float-sm r10 absolute" style="top:7%;right:16%;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      </div>
      <div class="float-card r--14 absolute" style="top:70%;right:9%;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20"/></svg>
      </div>

      <!-- ── Center content ── -->
      <div class="relative z-10 flex flex-col items-center text-center px-8 pt-14 pb-10 max-w-xl mx-auto">

        <!-- Headline — restrained, not huge -->
        <h2 class="mb-4 leading-snug" style="font-size:28px; font-weight:500; letter-spacing:-0.02em; color:#ffffff; line-height:1.25;">
          Build without boundaries
        </h2>

        <!-- Subtitle -->
        <p class="mb-9 leading-relaxed" style="font-size:14px; font-weight:400; color:rgba(255,255,255,0.45); max-width:380px; line-height:1.7;">
          Join thousands of developers who've eliminated infrastructure complexity
          and deployed globally. Start for free — no credit card required.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button
            class=" text-sm transition-all duration-150 hover:-translate-y-px active:scale-95"
            style="padding:10px 24px; background:#ffffff; color:#0e0e0e; font-weight:500; font-size:13.5px; border:none; cursor:pointer;"
          >
            Start building for free
          </button>
          <button
            class=" text-sm transition-all duration-150 hover:-translate-y-px active:scale-95"
            style="padding:10px 24px; background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.7); font-weight:400; font-size:13.5px; border:1px solid rgba(255,255,255,0.12); cursor:pointer; backdrop-filter:blur(4px);"
          >
            View docs
          </button>
        </div>

      </div>

      <!-- Divider -->
      <div class="relative z-10 mx-0 border-t" style="border-color:rgba(255,255,255,0.07);"></div>

      <!-- ── Ticker INSIDE card ── -->
      <div
        class="relative z-10 overflow-hidden py-3.5"
        @mouseenter="pauseTicker = true"
        @mouseleave="pauseTicker = false"
      >
        <div class="flex w-max" :class="pauseTicker ? 'ticker-paused' : 'ticker-run'">
          <span
            v-for="(item, i) in tickerDouble"
            :key="i"
            class="inline-flex items-center gap-2 whitespace-nowrap"
            style="padding:0 32px; font-size:12.5px; color:rgba(255,255,255,0.3); font-weight:400;"
          >
            <!-- Red dot separator -->
            <svg width="5" height="5" viewBox="0 0 6 6" style="flex-shrink:0; fill:#dc2626; opacity:0.7;"><circle cx="3" cy="3" r="3"/></svg>
            {{ item }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const pauseTicker = ref(false)

const tickerItems = [
  'Deploy to 330+ cities instantly',
  'Zero infrastructure complexity',
  'SASE and Zero Trust without the hassle',
  'Defend against the biggest DDoS attacks',
  'Predictable pricing without surprises',
  'Built-in analytics and observability',
  'Edge-first performance globally',
]

const tickerDouble = computed(() => [...tickerItems, ...tickerItems])
</script>

<style scoped>
/* Floating cards */
.float-card {
  width: 46px;
  height: 46px;
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(6px);
  transition: transform 0.25s ease;
}

.float-card.float-sm {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  opacity: 0.5;
}

.float-card:hover { transform: rotate(0deg) scale(1.1) !important; }

/* Rotation helpers */
.r--8  { transform: rotate(-8deg); }
.r6    { transform: rotate(6deg); }
.r--14 { transform: rotate(-14deg); }
.r10   { transform: rotate(10deg); }

/* Ticker */
.ticker-run {
  animation: ticker-scroll 30s linear infinite;
}

.ticker-paused {
  animation: ticker-scroll 30s linear infinite;
  animation-play-state: paused;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (max-width: 640px) {
  .float-card.float-sm { display: none; }
  .float-card { width: 36px; height: 36px; }
}
</style>