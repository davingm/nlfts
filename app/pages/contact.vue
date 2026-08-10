<script setup lang="ts">
useSeoMeta({
  title: 'Hubungi Kami — NLFTs',
  ogTitle: 'Hubungi Kami — NLFTs',
  description: 'Let’s build your next award winning project. Hubungi tim NLFTs untuk mendiskusikan proyekmu.',
  ogDescription: 'Let’s build your next award winning project. Hubungi tim NLFTs untuk mendiskusikan proyekmu.',
  ogUrl: 'https://nlfts.dev/contact',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

interface Interest {
  label: string
  value: string
}

interface Country {
  code: string
  label: string
  prefix: string
  placeholder: string
  // regex untuk validasi nomor lokal (tanpa kode negara)
  localRegex: RegExp
  // fungsi auto-format: menerima digit-only, mengembalikan string berformat
  format: (digits: string) => string
}

// ── Country phone config ─────────────────────────────────────────────────────
const countries: Country[] = [
  {
    code: 'ID',
    label: '🇮🇩 ID +62',
    prefix: '+62',
    placeholder: '8xx-xxxx-xxxxx',
    localRegex: /^[2-9][0-9]{6,11}$/,
    format: (digits: string) => {
      // 882001289177 → 882-0012-89177
      if (digits.length <= 3) return digits
      if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 12)}`
    }
  },
  {
    code: 'MY',
    label: '🇲🇾 MY +60',
    prefix: '+60',
    placeholder: '1x-xxxx-xxxx',
    localRegex: /^[1-9][0-9]{7,9}$/,
    format: (digits: string) => {
      // 121234567 → 12-1234-567
      if (digits.length <= 2) return digits
      if (digits.length <= 6) return `${digits.slice(0, 2)}-${digits.slice(2)}`
      return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`
    }
  },
  {
    code: 'CN',
    label: '🇨🇳 CN +86',
    prefix: '+86',
    placeholder: '1xx-xxxx-xxxx',
    localRegex: /^1[3-9][0-9]{9}$/,
    format: (digits: string) => {
      // 13812345678 → 138-1234-5678
      if (digits.length <= 3) return digits
      if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`
    }
  }
]

const selectedCountry = ref<Country>(countries[0]!)
const phoneLocal = ref('') // digits + dash yang diketik user

// Auto-format saat user mengetik
function onPhoneInput(e: Event) {
  const raw = (e.target as HTMLInputElement).value
  // Ambil hanya digit
  const digits = raw.replace(/\D/g, '')
  const country = selectedCountry.value
  const formatted = country.format(digits)
  phoneLocal.value = formatted
  // Update form.phone = prefix + localNumber (tanpa dash, untuk validasi/kirim)
  form.phone = `${country.prefix}${digits}`
}

function onCountryChange() {
  phoneLocal.value = ''
  form.phone = ''
}

const interests: Interest[] = [
  { label: 'UX/DX', value: 'ux-dx' },
  { label: 'Development', value: 'development' },
  { label: 'Branding', value: 'branding' },
  { label: '3D', value: '3d' },
  { label: 'Business Automation', value: 'business-automation' },
  { label: 'Event Meetup', value: 'event-meetup' },
  { label: 'Partner', value: 'partner' },
]

const socials = [
  { icon: 'i-simple-icons-github', href: 'https://github.com/NLFTs', name: 'GitHub' },
  { icon: 'i-simple-icons-instagram', href: '/instagram', name: 'Instagram' },
  { icon: 'i-simple-icons-whatsapp', href: '/wa', name: 'WhatsApp' },
  { icon: 'i-simple-icons-tiktok', href: '/tiktok', name: 'TikTok' },
  { icon: 'i-simple-icons-linkedin', href: '/linkedin', name: 'LinkedIn' },
  { icon: 'i-simple-icons-discord', href: '/discord', name: 'Discord' }
]

const form = reactive({
  fullName: '',
  company: '',
  email: '',
  phone: '',
  interest: 'ux-dx',
  message: '',
})

// ── Validation ──────────────────────────────────────────────────────────────
// fullName: 1+ kata, minimal 3 huruf total (hanya huruf + spasi)
const nameError = computed(() => {
  if (!form.fullName) return ''
  const trimmed = form.fullName.trim()
  if (trimmed.length < 3) return 'Nama minimal 3 huruf'
  if (!/^[\p{L}\s'-]+$/u.test(trimmed)) return 'Nama hanya boleh berisi huruf'
  return ''
})

// email: wajib ada @ dan domain dengan TLD
const emailError = computed(() => {
  if (!form.email) return ''
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(form.email)) return 'Format email tidak valid (contoh: nama@domain.com)'
  return ''
})

// phone: validasi berdasarkan negara yang dipilih
const phoneError = computed(() => {
  if (!phoneLocal.value) return ''
  const digits = phoneLocal.value.replace(/\D/g, '')
  if (!selectedCountry.value.localRegex.test(digits)) {
    return `Format nomor ${selectedCountry.value.label.split(' ')[1]} tidak valid`
  }
  return ''
})

const hasValidationError = computed(() =>
  !!nameError.value || !!emailError.value || !!phoneError.value
)

const submitting = ref(false)
const submitted = ref(false)
const errorMessage = ref('')
const turnstileToken = ref('')
const turnstileContainer = ref<HTMLElement | null>(null)

const runtimeConfig = useRuntimeConfig()
const siteKey = runtimeConfig.public.turnstileSiteKey

let widgetId: string | null = null

// Define global callback before script runs to guarantee it exists when Turnstile loads
if (import.meta.client) {
  window.onloadTurnstileCallback = () => {
    renderTurnstile()
  }
}

useHead({
  script: [
    {
      src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback&render=explicit',
      async: true,
      defer: true
    }
  ]
})

// Declare window types for Turnstile callbacks
declare global {
  interface Window {
    onloadTurnstileCallback?: () => void
    turnstile?: {
      render: (container: string | HTMLElement, options: any) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

onMounted(() => {
  if (window.turnstile) {
    renderTurnstile()
  }
})

function renderTurnstile() {
  if (window.turnstile && turnstileContainer.value && !widgetId) {
    try {
      widgetId = window.turnstile.render(turnstileContainer.value, {
        sitekey: siteKey,
        callback: (token: string) => {
          turnstileToken.value = token
          errorMessage.value = ''
        },
        'expired-callback': () => {
          turnstileToken.value = ''
        },
        'error-callback': () => {
          turnstileToken.value = ''
          errorMessage.value = 'Gagal memuat verifikasi Turnstile. Silakan coba muat ulang halaman.'
        }
      })
    } catch (err) {
      console.error('Error rendering Turnstile:', err)
    }
  }
}

onUnmounted(() => {
  if (window.turnstile && widgetId) {
    window.turnstile.remove(widgetId)
  }
  if (window.onloadTurnstileCallback) {
    delete window.onloadTurnstileCallback
  }
})

async function onSubmit() {
  if (hasValidationError.value) {
    errorMessage.value = 'Mohon perbaiki kesalahan pada form terlebih dahulu.'
    return
  }
  if (!turnstileToken.value) {
    errorMessage.value = 'Silakan selesaikan tantangan verifikasi Turnstile terlebih dahulu.'
    return
  }

  submitting.value = true
  errorMessage.value = ''
  submitted.value = false

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...form,
        turnstileToken: turnstileToken.value
      }
    })

    if (response.success) {
      submitted.value = true
      // Reset form
      form.fullName = ''
      form.company = ''
      form.email = ''
      form.phone = ''
      form.interest = 'ui-ux'
      form.message = ''
      phoneLocal.value = ''
      selectedCountry.value = countries[0]!
      turnstileToken.value = ''
      
      // Reset Turnstile widget for the next submission
      if (window.turnstile && widgetId) {
        window.turnstile.reset(widgetId)
      }
    }
  } catch (err: any) {
    console.error(err)
    errorMessage.value = err.data?.statusMessage || err.message || 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.'
    
    // Reset Turnstile on error so user can retry
    if (window.turnstile && widgetId) {
      window.turnstile.reset(widgetId)
      turnstileToken.value = ''
    }
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-white text-zinc-900 dark:bg-[#09090b] dark:text-white transition-colors">
    <div class="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-16 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-2 lg:gap-12 lg:py-32">

      <!-- Left column -->
      <div class="relative flex flex-col">
        <!-- soft background glow, no images -->
        <div
          class="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 -z-10 rounded-[40px] bg-gradient-to-br from-orange-100/70 via-transparent to-transparent dark:from-orange-500/10"
          aria-hidden="true"
        />

        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
          <span class="h-1.5 w-1.5 rounded-full bg-orange-500" />
          Get Started
        </div>

        <h1 class="mt-6 max-w-lg text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl lg:text-[52px]">
          Mari wujudkan proyek
          berprestasi Anda selanjutnya
        </h1>

        <span class="mt-8 h-px w-10 bg-zinc-300 dark:bg-zinc-700" />

        <p class="mt-5 max-w-sm text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          Ubah visi Anda menjadi pengalaman digital yang memukau
        </p>

        <!-- Image Donasi -->
        <div class="mt-8 mb-6 max-w-[280px] sm:max-w-[320px]">
          <img
            src="/images/donasi.png"
            alt="NLFTs Support Illustration"
            class="h-auto w-full object-contain select-none pointer-events-none"
            draggable="false"
            @contextmenu.prevent
          />
        </div>

        <div class="mt-auto flex flex-col gap-6 pt-16">
            <div class="flex items-center gap-3">
                <a
                    v-for="social in socials"
                    :key="social.icon"
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="social.name"
                    class="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-400 dark:hover:text-white"
                >
                    <!-- GANTI SEMUA TAG SVG V-IF DENGAN INI: -->
                    <Icon :name="social.icon" class="h-4 w-4" />
                </a>
                </div>

          <a
            href="mailto:team@nlfts.dev"
            class="flex items-center gap-2 text-sm text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-white"
          >
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            team@nlfts.dev
          </a>
        </div>
      </div>

      <!-- Right column: form card -->
      <div>
        <h2 class="text-3xl font-bold">Let's talk</h2>

        <form class="mt-8 flex flex-col gap-8" @submit.prevent="onSubmit">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <!-- Nama Lengkap -->
            <label class="flex flex-col gap-1">
              <span class="text-sm text-zinc-500 dark:text-zinc-400">Nama Lengkap</span>
              <input
                v-model="form.fullName"
                type="text"
                required
                placeholder="Min. 3 huruf"
                :class="[
                  'border-b bg-transparent pb-2 text-sm outline-none placeholder:text-zinc-400 transition-colors',
                  nameError && form.fullName
                    ? 'border-rose-500 focus:border-rose-600'
                    : 'border-zinc-300 focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-white'
                ]"
              />
              <span v-if="nameError && form.fullName" class="text-xs text-rose-500 mt-0.5">{{ nameError }}</span>
            </label>

            <!-- Perusahaan -->
            <label class="flex flex-col gap-1">
              <span class="text-sm text-zinc-500 dark:text-zinc-400">Perusahaan</span>
              <input
                v-model="form.company"
                type="text"
                class="border-b border-zinc-300 bg-transparent pb-2 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-white"
              />
            </label>

            <!-- Email -->
            <label class="flex flex-col gap-1">
              <span class="text-sm text-zinc-500 dark:text-zinc-400">Email</span>
              <input
                v-model="form.email"
                type="text"
                required
                placeholder="nama@domain.com"
                :class="[
                  'border-b bg-transparent pb-2 text-sm outline-none placeholder:text-zinc-400 transition-colors',
                  emailError && form.email
                    ? 'border-rose-500 focus:border-rose-600'
                    : 'border-zinc-300 focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-white'
                ]"
              />
              <span v-if="emailError && form.email" class="text-xs text-rose-500 mt-0.5">{{ emailError }}</span>
            </label>

            <!-- Nomor Telepon -->
            <label class="flex flex-col gap-1">
              <span class="text-sm text-zinc-500 dark:text-zinc-400">Nomor Telepon</span>
              <div class="flex gap-2 border-b transition-colors"
                :class="phoneError && phoneLocal
                  ? 'border-rose-500'
                  : 'border-zinc-300 dark:border-zinc-700'"
              >
                <!-- Country selector -->
                <select
                  v-model="selectedCountry"
                  @change="onCountryChange"
                  class="shrink-0 bg-transparent pb-2 text-sm outline-none cursor-pointer text-zinc-700 dark:text-zinc-300 pr-1"
                >
                  <option
                    v-for="c in countries"
                    :key="c.code"
                    :value="c"
                  >{{ c.label }}</option>
                </select>
                <!-- Number input -->
                <input
                  :value="phoneLocal"
                  @input="onPhoneInput"
                  type="tel"
                  :placeholder="selectedCountry.placeholder"
                  class="flex-1 bg-transparent pb-2 text-sm outline-none placeholder:text-zinc-400"
                />
              </div>
              <span v-if="phoneError && phoneLocal" class="text-xs text-rose-500 mt-0.5">{{ phoneError }}</span>
            </label>
          </div>

        <div class="flex flex-col gap-3">
            <span class="text-sm text-zinc-500 dark:text-zinc-400">Saya tertarik dengan</span>
            <div class="flex flex-wrap gap-3">
                <button
                v-for="item in interests"
                :key="item.value"
                type="button"
                @click="form.interest = item.value"
                :class="[
                    'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                    form.interest === item.value
                    // AKTIF
                    ? 'border-orange-500 bg-orange-500 text-black shadow-sm shadow-orange-500/25 dark:border-orange-400 dark:bg-orange-500/90 dark:text-white dark:shadow-orange-500/10'
                    // TIDAK AKTIF
                    : 'border-zinc-200 text-zinc-600 hover:border-orange-300 hover:bg-orange-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-orange-400 dark:hover:bg-orange-500/10',
                    'cursor-pointer',
                ]"
                >
                {{ item.label }}
                </button>
            </div>
            </div>

          <label class="flex flex-col gap-2">
            <span class="text-sm text-zinc-500 dark:text-zinc-400">Tell us more about your project!</span>
            <textarea
              v-model="form.message"
              rows="2"
              class="resize-none border-b border-zinc-300 bg-transparent pb-2 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-white"
            />
          </label>

          <!-- Cloudflare Turnstile Widget -->
          <div class="my-2 flex flex-col gap-2">
            <div ref="turnstileContainer"></div>
            <p v-if="errorMessage" class="text-sm text-rose-600 dark:text-rose-400">
              {{ errorMessage }}
            </p>
          </div>

          <button
          type="submit"
          :disabled="submitting"
          class="group relative w-full cursor-pointer overflow-hidden rounded-full py-4 text-sm font-semibold uppercase tracking-wide transition-all duration-300 disabled:opacity-60"
        >
          <!-- 1. Default background: at the bottom (z-0) -->
          <span 
            class="absolute inset-0 z-0 bg-zinc-900 dark:bg-[#ffffff]"
          ></span>

          <!-- 2. Hover background: slides up on top (z-10) with wave SVG -->
          <span 
            class="absolute inset-0 z-10 h-full w-full translate-y-[110%] bg-[#EA5E00] transition-transform duration-700 ease-out group-hover:translate-y-0"
          >
            <svg 
              class="absolute left-0 -top-[27px] h-[28px] w-[200%] fill-[#EA5E00] animate-wave pointer-events-none"
              viewBox="0 0 240 28"
              preserveAspectRatio="none"
            >
              <path d="M0 18 Q 30 0, 60 18 T 120 18 Q 150 0, 180 18 T 240 18 L 240 28 L 0 28 Z" />
            </svg>
          </span>

          <!-- 3. Text/Icon content: on top of everything (z-20) -->
          <span class="relative z-20 flex items-center justify-center gap-2 text-white transition-colors duration-300 group-hover:text-white dark:text-black dark:group-hover:text-white">
            <span>{{ submitting ? 'Sending...' : 'Send' }}</span>
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </button>

          <p v-if="submitted" class="text-sm text-emerald-600 dark:text-emerald-400">
            Terima kasih! Pesanmu sudah kami terima, tim kami akan segera menghubungi kamu.
          </p>
        </form>
      </div>

    </div>
  </div>
</template>

<style scoped>
@keyframes waveMotion {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.8);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

.animate-wave {
  animation: waveMotion 3s linear infinite;
}
</style>