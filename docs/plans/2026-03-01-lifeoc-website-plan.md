# Life Church of Orange Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a modern, dark & elegant static church website for Life Church of Orange using Astro, Vue 3, and Tailwind CSS with dynamic Google Calendar events and YouTube videos.

**Architecture:** Astro handles routing and static rendering. Vue 3 islands (client:visible) power dynamic sections that fetch Google Calendar and YouTube APIs client-side. All env vars prefixed `PUBLIC_` are baked into the client bundle at build time. GitHub Actions deploys the `dist/` folder to Hostinger via FTP on every push to `main`.

**Tech Stack:** Astro, Vue 3 + TypeScript (Composition API), Tailwind CSS, VueUse, astro-seo, @astrojs/sitemap, astro-icon + @iconify-json/lucide, date-fns, @fontsource/playfair-display, @fontsource/inter, Formspree, SamKirkland/FTP-Deploy-Action

**Design doc:** `docs/plans/2026-03-01-lifeoc-website-design.md`

---

## Reference: Design System

**Colors** (configure in `tailwind.config.mjs`):
- `base`: `#0D0D0F`
- `surface`: `#1A1A1F`
- `border-default`: `#2A2A30`
- `accent`: `#C9933A`
- `accent-muted`: `#7C5A2A`
- `text-primary`: `#F5F0E8`
- `text-muted`: `#8A8478`

**Fonts:** Playfair Display (headings), Inter (body)

**Church info:**
- Address: 840 N Shattuck Pl, Orange, CA 92869
- Phone: (714) 771-2522 | Email: info@lifeoc.org
- Sunday 1:00 PM
- YouTube channel: `UCoVX240Rcw6ek5Opx2J84QA`
- Facebook: `https://www.facebook.com/lifechurchorangeca`
- Online giving: `https://lifeoc.churchcenter.com/giving`

---

## Task 1: Scaffold the Astro Project

**Files:**
- Create: all scaffold files at project root `/Users/aidenhadisi/Code/lifeoc/`

**Step 1: Initialize Astro with strict TypeScript**

```bash
cd /Users/aidenhadisi/Code/lifeoc
pnpm create astro@latest . --template minimal --no-install
```
Choose: TypeScript → strict, Git → no (we'll init separately)

**Step 2: Add official Astro integrations**

```bash
pnpm astro add vue tailwind sitemap
```
Accept all prompts. This installs `@astrojs/vue`, `@astrojs/tailwind`, `@astrojs/sitemap` and updates `astro.config.mjs`.

**Step 3: Install all remaining dependencies**

```bash
pnpm add @vueuse/core date-fns astro-seo astro-icon @iconify-json/lucide @fontsource/playfair-display @fontsource/inter
pnpm add -D @types/node
```

**Step 4: Copy logo from old project**

```bash
mkdir -p public/images
cp /Users/aidenhadisi/Code/lifeoc-old/public/logo.png public/images/logo.png
```

**Step 5: Verify scaffold builds**

```bash
pnpm build
```
Expected: Build completes with no errors. `dist/` folder created.

**Step 6: Commit**

```bash
git init
git add -A
git commit -m "chore: scaffold Astro project with Vue, Tailwind, and dependencies"
```

---

## Task 2: Configure Tailwind & Global Styles

**Files:**
- Modify: `tailwind.config.mjs`
- Create: `src/styles/global.css`

**Step 1: Replace `tailwind.config.mjs` with design system tokens**

```js
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: '#0D0D0F',
        surface: '#1A1A1F',
        'border-default': '#2A2A30',
        accent: '#C9933A',
        'accent-muted': '#7C5A2A',
        'text-primary': '#F5F0E8',
        'text-muted': '#8A8478',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**Step 2: Create `src/styles/global.css`**

```css
/* src/styles/global.css */
@import '@fontsource/playfair-display/400.css';
@import '@fontsource/playfair-display/700.css';
@import '@fontsource/inter/400.css';
@import '@fontsource/inter/500.css';
@import '@fontsource/inter/600.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply bg-base text-text-primary font-body scroll-smooth;
  }

  h1, h2, h3, h4 {
    @apply font-display;
  }
}

@layer components {
  .section-heading {
    @apply font-display text-3xl md:text-4xl text-text-primary after:block after:w-12 after:h-0.5 after:bg-accent after:mt-3;
  }

  .btn-primary {
    @apply inline-block px-6 py-3 bg-accent text-base font-body font-semibold text-sm tracking-wide uppercase rounded transition-all duration-150 hover:bg-accent/80 hover:shadow-[0_0_20px_rgba(201,147,58,0.3)];
  }

  .btn-outline {
    @apply inline-block px-6 py-3 border border-accent text-accent font-body font-semibold text-sm tracking-wide uppercase rounded transition-all duration-150 hover:bg-accent/10;
  }

  .card {
    @apply bg-surface border border-border-default rounded-lg transition-all duration-150 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(201,147,58,0.1)];
  }
}
```

**Step 3: Verify build**

```bash
pnpm build
```
Expected: PASS — no errors.

**Step 4: Commit**

```bash
git add tailwind.config.mjs src/styles/global.css
git commit -m "feat: configure Tailwind design system and global styles"
```

---

## Task 3: Base Layout

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Modify: `astro.config.mjs` (add site URL for sitemap)

**Step 1: Update `astro.config.mjs` to add site and icon integration**

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

export default defineConfig({
  site: 'https://lifeoc.org',
  integrations: [
    vue(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    icon(),
  ],
})
```

**Step 2: Create `src/layouts/BaseLayout.astro`**

```astro
---
// src/layouts/BaseLayout.astro
import { SEO } from 'astro-seo'
import '../styles/global.css'

interface Props {
  title?: string
  description?: string
  image?: string
}

const {
  title = 'Life Church of Orange',
  description = 'We are a Spirit-filled, multicultural church in the City of Orange, CA.',
  image = '/images/logo.png',
} = Astro.props
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png" href="/images/logo.png" />
    <SEO
      title={title}
      titleTemplate="%s | Life Church of Orange"
      description={description}
      openGraph={{
        basic: {
          title,
          type: 'website',
          image,
        },
      }}
    />
  </head>
  <body class="min-h-screen flex flex-col">
    <slot name="header" />
    <main class="flex-1">
      <slot />
    </main>
    <slot name="footer" />
  </body>
</html>
```

**Step 3: Verify build**

```bash
pnpm build
```
Expected: PASS.

**Step 4: Commit**

```bash
git add astro.config.mjs src/layouts/BaseLayout.astro
git commit -m "feat: add BaseLayout with SEO and sitemap config"
```

---

## Task 4: Header Component

**Files:**
- Create: `src/components/layout/Header.astro`

**Step 1: Create `src/components/layout/Header.astro`**

```astro
---
// src/components/layout/Header.astro
import { Icon } from 'astro-icon/components'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/videos', label: 'Videos' },
  { href: '/contact', label: 'Contact' },
]

const currentPath = Astro.url.pathname
---

<header class="fixed top-0 left-0 right-0 z-50 bg-base/90 backdrop-blur-md border-b border-border-default">
  <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3">
      <img src="/images/logo.png" alt="Life Church of Orange" class="h-10 w-auto" />
    </a>

    <!-- Desktop nav -->
    <ul class="hidden md:flex items-center gap-8">
      {navLinks.map(({ href, label }) => (
        <li>
          <a
            href={href}
            class:list={[
              'text-sm font-body font-medium tracking-wide transition-colors duration-150',
              currentPath === href
                ? 'text-accent'
                : 'text-text-muted hover:text-text-primary',
            ]}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>

    <!-- Give button -->
    <a
      href="https://lifeoc.churchcenter.com/giving"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-primary hidden md:inline-block"
    >
      Give
    </a>

    <!-- Mobile menu button -->
    <button
      id="menu-btn"
      class="md:hidden text-text-muted hover:text-text-primary transition-colors"
      aria-label="Toggle menu"
    >
      <Icon name="lucide:menu" class="w-6 h-6" />
    </button>
  </nav>

  <!-- Mobile nav -->
  <div id="mobile-menu" class="hidden md:hidden border-t border-border-default bg-base/95 backdrop-blur-md">
    <ul class="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
      {navLinks.map(({ href, label }) => (
        <li>
          <a
            href={href}
            class:list={[
              'text-sm font-body font-medium tracking-wide transition-colors duration-150',
              currentPath === href ? 'text-accent' : 'text-text-muted hover:text-text-primary',
            ]}
          >
            {label}
          </a>
        </li>
      ))}
      <li>
        <a
          href="https://lifeoc.churchcenter.com/giving"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary inline-block"
        >
          Give
        </a>
      </li>
    </ul>
  </div>
</header>

<script>
  const btn = document.getElementById('menu-btn')
  const menu = document.getElementById('mobile-menu')
  btn?.addEventListener('click', () => menu?.classList.toggle('hidden'))
</script>
```

**Step 2: Verify build**

```bash
pnpm build
```
Expected: PASS.

**Step 3: Commit**

```bash
git add src/components/layout/Header.astro
git commit -m "feat: add Header with responsive navigation"
```

---

## Task 5: Footer Component

**Files:**
- Create: `src/components/layout/Footer.astro`

**Step 1: Create `src/components/layout/Footer.astro`**

```astro
---
// src/components/layout/Footer.astro
import { Icon } from 'astro-icon/components'
---

<footer class="bg-surface border-t border-border-default mt-20">
  <div class="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
    <!-- Brand -->
    <div class="flex flex-col gap-4">
      <img src="/images/logo.png" alt="Life Church of Orange" class="h-12 w-auto" />
      <p class="text-text-muted text-sm leading-relaxed">
        Serving the Orange County community with the message of hope and love through Jesus Christ.
      </p>
      <div class="flex gap-4">
        <a
          href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          class="text-text-muted hover:text-accent transition-colors"
        >
          <Icon name="lucide:youtube" class="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/lifechurchorangeca"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="text-text-muted hover:text-accent transition-colors"
        >
          <Icon name="lucide:facebook" class="w-5 h-5" />
        </a>
      </div>
    </div>

    <!-- Links -->
    <div>
      <h3 class="text-text-primary font-display text-sm font-semibold uppercase tracking-widest mb-4">Quick Links</h3>
      <ul class="flex flex-col gap-2">
        {[
          { href: '/', label: 'Home' },
          { href: '/videos', label: 'Videos' },
          { href: '/contact', label: 'Contact' },
          { href: 'https://lifeoc.churchcenter.com/giving', label: 'Give Online', external: true },
        ].map(({ href, label, external }) => (
          <li>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              class="text-text-muted text-sm hover:text-accent transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <h3 class="text-text-primary font-display text-sm font-semibold uppercase tracking-widest mb-4">Visit Us</h3>
      <ul class="flex flex-col gap-3 text-sm text-text-muted">
        <li class="flex gap-2 items-start">
          <Icon name="lucide:map-pin" class="w-4 h-4 mt-0.5 text-accent shrink-0" />
          <span>840 N Shattuck Pl<br />Orange, CA 92869</span>
        </li>
        <li class="flex gap-2 items-center">
          <Icon name="lucide:clock" class="w-4 h-4 text-accent shrink-0" />
          <span>Sundays at 1:00 PM</span>
        </li>
        <li class="flex gap-2 items-center">
          <Icon name="lucide:phone" class="w-4 h-4 text-accent shrink-0" />
          <a href="tel:+17147712522" class="hover:text-accent transition-colors">(714) 771-2522</a>
        </li>
        <li class="flex gap-2 items-center">
          <Icon name="lucide:mail" class="w-4 h-4 text-accent shrink-0" />
          <a href="mailto:info@lifeoc.org" class="hover:text-accent transition-colors">info@lifeoc.org</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="border-t border-border-default text-center py-4 text-text-muted text-xs">
    &copy; {new Date().getFullYear()} Life Church of Orange. All rights reserved.
  </div>
</footer>
```

**Step 2: Verify build**

```bash
pnpm build
```
Expected: PASS.

**Step 3: Commit**

```bash
git add src/components/layout/Footer.astro
git commit -m "feat: add Footer with links and contact info"
```

---

## Task 6: Home Page — Static Sections (Hero, About, Sunday Banner)

**Files:**
- Create: `src/components/home/Hero.astro`
- Create: `src/components/home/AboutSnippet.astro`
- Create: `src/components/home/SundayBanner.astro`
- Create: `src/pages/index.astro`

**Step 1: Create `src/components/home/Hero.astro`**

```astro
---
// src/components/home/Hero.astro
import { Icon } from 'astro-icon/components'
---

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Dark gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-base via-surface to-base" />
  <!-- Decorative radial glow -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,147,58,0.08)_0%,transparent_70%)]" />

  <div class="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-8">
    <img src="/images/logo.png" alt="Life Church of Orange" class="h-24 w-auto opacity-90" />

    <div>
      <h1 class="font-display text-5xl md:text-7xl text-text-primary leading-tight mb-4">
        Life Church<br /><span class="text-accent">of Orange</span>
      </h1>
      <p class="text-text-muted text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
        A Spirit-filled community following Jesus together in the City of Orange, CA.
      </p>
    </div>

    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/videos" class="btn-primary">Watch Latest Message</a>
      <a href="/contact" class="btn-outline">Plan a Visit</a>
    </div>

    <!-- Scroll indicator -->
    <a href="#about" aria-label="Scroll down" class="mt-8 text-text-muted hover:text-accent transition-colors animate-bounce">
      <Icon name="lucide:chevron-down" class="w-6 h-6" />
    </a>
  </div>
</section>
```

**Step 2: Create `src/components/home/AboutSnippet.astro`**

```astro
---
// src/components/home/AboutSnippet.astro
---

<section id="about" class="py-24 px-6">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
      <h2 class="section-heading mb-6">Who We Are</h2>
      <p class="text-text-muted leading-relaxed mb-6">
        We are a Spirit-filled, multicultural church in the City of Orange, CA. Disciples of Jesus Christ,
        in following Him we make disciples, as His people, God's family, we live this life together on
        His mission to bring Him glory.
      </p>
      <p class="text-text-muted leading-relaxed mb-8">
        Life Church of Orange is proud to be part of the C2C family of churches.
      </p>
      <a href="/contact" class="btn-outline">Plan a Visit</a>
    </div>

    <!-- Belief cards -->
    <div class="flex flex-col gap-4">
      {[
        {
          title: 'Knowing God',
          body: 'We pursue an intimate relationship with God through worship, prayer, and the study of His Word.',
        },
        {
          title: 'Walking Together',
          body: 'We are committed to authentic community, supporting one another in love as we grow in Christ.',
        },
        {
          title: 'Witness to the World',
          body: 'We share the Gospel through our words and actions, serving others and making disciples locally and globally.',
        },
      ].map(({ title, body }) => (
        <div class="card p-6">
          <h3 class="font-display text-text-primary text-lg mb-2">{title}</h3>
          <p class="text-text-muted text-sm leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Step 3: Create `src/components/home/SundayBanner.astro`**

```astro
---
// src/components/home/SundayBanner.astro
import { Icon } from 'astro-icon/components'
---

<section class="py-20 px-6 bg-surface border-y border-border-default">
  <div class="max-w-4xl mx-auto text-center">
    <p class="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-4">Join Us</p>
    <h2 class="font-display text-4xl md:text-5xl text-text-primary mb-6">This Sunday</h2>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-text-muted mb-8">
      <div class="flex items-center gap-2">
        <Icon name="lucide:clock" class="w-5 h-5 text-accent" />
        <span>1:00 PM</span>
      </div>
      <div class="flex items-center gap-2">
        <Icon name="lucide:map-pin" class="w-5 h-5 text-accent" />
        <span>840 N Shattuck Pl, Orange, CA</span>
      </div>
    </div>
    <a href="/contact" class="btn-primary">Get Directions</a>
  </div>
</section>
```

**Step 4: Create `src/pages/index.astro` (static sections only — dynamic islands added in later tasks)**

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro'
import Header from '../components/layout/Header.astro'
import Footer from '../components/layout/Footer.astro'
import Hero from '../components/home/Hero.astro'
import AboutSnippet from '../components/home/AboutSnippet.astro'
import SundayBanner from '../components/home/SundayBanner.astro'
---

<BaseLayout>
  <Header slot="header" />
  <Hero />
  <AboutSnippet />
  <SundayBanner />
  <Footer slot="footer" />
</BaseLayout>
```

**Step 5: Verify build and preview**

```bash
pnpm build && pnpm preview
```
Expected: Site loads at localhost, hero + about + banner render correctly with dark theme.

**Step 6: Commit**

```bash
git add src/components/home/ src/pages/index.astro
git commit -m "feat: add home page static sections (hero, about, Sunday banner)"
```

---

## Task 7: Vue Composables for YouTube & Google Calendar

**Files:**
- Create: `src/composables/useYouTube.ts`
- Create: `src/composables/useGoogleCalendar.ts`
- Create: `.env.example`
- Create: `.env` (local only, not committed)

**Step 1: Create `.env.example`**

```bash
# .env.example
PUBLIC_GOOGLE_API_KEY=your_google_api_key_here
PUBLIC_YOUTUBE_CHANNEL_ID=UCoVX240Rcw6ek5Opx2J84QA
PUBLIC_GOOGLE_CALENDAR_ID=your_calendar_id_here
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mkndgrjn
```

**Step 2: Create `.env` with real values**

```bash
# .env (do not commit)
PUBLIC_GOOGLE_API_KEY=AIzaSyC28-XZOTiJHnLpQg5Vcc-Mcs1_LsCrn4Q
PUBLIC_YOUTUBE_CHANNEL_ID=UCoVX240Rcw6ek5Opx2J84QA
PUBLIC_GOOGLE_CALENDAR_ID=129d72ba476e5a268724ea7b31f2d40e1b1563ffd9963b2a9345c7c24d08e437@group.calendar.google.com
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mkndgrjn
```

**Step 3: Add `.env` to `.gitignore`**

Open `.gitignore` (created by Astro scaffold) and ensure these lines exist:
```
.env
dist/
```

**Step 4: Create `src/composables/useYouTube.ts`**

```typescript
// src/composables/useYouTube.ts
import { ref } from 'vue'

export interface YouTubeVideo {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnail: string
}

export function useYouTube() {
  const videos = ref<YouTubeVideo[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const apiKey = import.meta.env.PUBLIC_GOOGLE_API_KEY
  const channelId = import.meta.env.PUBLIC_YOUTUBE_CHANNEL_ID

  async function fetchVideos(maxResults = 12) {
    loading.value = true
    error.value = null

    try {
      const url = new URL('https://www.googleapis.com/youtube/v3/search')
      url.searchParams.set('key', apiKey)
      url.searchParams.set('channelId', channelId)
      url.searchParams.set('part', 'snippet')
      url.searchParams.set('order', 'date')
      url.searchParams.set('type', 'video')
      url.searchParams.set('maxResults', String(maxResults))

      const res = await fetch(url.toString())
      if (!res.ok) throw new Error(`YouTube API error: ${res.status}`)

      const data = await res.json()
      videos.value = data.items.map((item: any): YouTubeVideo => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails.medium?.url ?? item.snippet.thumbnails.default.url,
      }))
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load videos'
    } finally {
      loading.value = false
    }
  }

  return { videos, loading, error, fetchVideos }
}
```

**Step 5: Create `src/composables/useGoogleCalendar.ts`**

```typescript
// src/composables/useGoogleCalendar.ts
import { ref } from 'vue'
import { format, parseISO } from 'date-fns'

export interface CalendarEvent {
  id: string
  title: string
  description: string
  location: string
  start: string      // ISO string
  end: string        // ISO string
  formattedDate: string
  formattedTime: string
}

export function useGoogleCalendar() {
  const events = ref<CalendarEvent[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const apiKey = import.meta.env.PUBLIC_GOOGLE_API_KEY
  const calendarId = import.meta.env.PUBLIC_GOOGLE_CALENDAR_ID

  async function fetchEvents(maxResults = 6) {
    loading.value = true
    error.value = null

    try {
      const now = new Date().toISOString()
      const url = new URL(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`
      )
      url.searchParams.set('key', apiKey)
      url.searchParams.set('timeMin', now)
      url.searchParams.set('maxResults', String(maxResults))
      url.searchParams.set('singleEvents', 'true')
      url.searchParams.set('orderBy', 'startTime')

      const res = await fetch(url.toString())
      if (!res.ok) throw new Error(`Calendar API error: ${res.status}`)

      const data = await res.json()
      events.value = (data.items ?? []).map((item: any): CalendarEvent => {
        const startRaw = item.start.dateTime ?? item.start.date
        const endRaw = item.end?.dateTime ?? item.end?.date ?? startRaw
        const startDate = parseISO(startRaw)

        return {
          id: item.id,
          title: item.summary ?? 'Untitled Event',
          description: item.description ?? '',
          location: item.location ?? '',
          start: startRaw,
          end: endRaw,
          formattedDate: format(startDate, 'MMMM d, yyyy'),
          formattedTime: item.start.dateTime ? format(startDate, 'h:mm a') : 'All day',
        }
      })
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load events'
    } finally {
      loading.value = false
    }
  }

  return { events, loading, error, fetchEvents }
}
```

**Step 6: Verify TypeScript**

```bash
pnpm astro check
```
Expected: No type errors.

**Step 7: Commit**

```bash
git add src/composables/ .env.example .gitignore
git commit -m "feat: add YouTube and Google Calendar composables"
```

---

## Task 8: Home — Events Section (Vue Island)

**Files:**
- Create: `src/components/home/EventsSection.vue`
- Modify: `src/pages/index.astro`

**Step 1: Create `src/components/home/EventsSection.vue`**

```vue
<!-- src/components/home/EventsSection.vue -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useGoogleCalendar } from '../../composables/useGoogleCalendar'

const { events, loading, error, fetchEvents } = useGoogleCalendar()

onMounted(() => fetchEvents(6))
</script>

<template>
  <section class="py-24 px-6 bg-surface">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-heading mb-12">Upcoming Events</h2>

      <!-- Loading state -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="i in 3"
          :key="i"
          class="card p-6 animate-pulse"
        >
          <div class="h-4 bg-border-default rounded w-1/3 mb-3" />
          <div class="h-5 bg-border-default rounded w-3/4 mb-2" />
          <div class="h-4 bg-border-default rounded w-1/2" />
        </div>
      </div>

      <!-- Error state -->
      <p v-else-if="error" class="text-text-muted text-sm">
        Unable to load events at this time.
      </p>

      <!-- Empty state -->
      <p v-else-if="events.length === 0" class="text-text-muted text-sm">
        No upcoming events. Check back soon!
      </p>

      <!-- Events grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="event in events"
          :key="event.id"
          class="card p-6 flex flex-col gap-3"
        >
          <div class="flex items-center gap-2 text-accent text-sm font-body font-medium">
            <span>{{ event.formattedDate }}</span>
            <span v-if="event.formattedTime !== 'All day'" class="text-text-muted">·</span>
            <span v-if="event.formattedTime !== 'All day'" class="text-text-muted">{{ event.formattedTime }}</span>
          </div>
          <h3 class="font-display text-text-primary text-lg leading-snug">{{ event.title }}</h3>
          <p v-if="event.location" class="text-text-muted text-sm flex items-center gap-1">
            <span>📍</span> {{ event.location }}
          </p>
          <p v-if="event.description" class="text-text-muted text-sm leading-relaxed line-clamp-2">
            {{ event.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
```

**Step 2: Add `EventsSection` island to `src/pages/index.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
import Header from '../components/layout/Header.astro'
import Footer from '../components/layout/Footer.astro'
import Hero from '../components/home/Hero.astro'
import AboutSnippet from '../components/home/AboutSnippet.astro'
import SundayBanner from '../components/home/SundayBanner.astro'
import EventsSection from '../components/home/EventsSection.vue'
---

<BaseLayout>
  <Header slot="header" />
  <Hero />
  <AboutSnippet />
  <EventsSection client:visible />
  <SundayBanner />
  <Footer slot="footer" />
</BaseLayout>
```

**Step 3: Verify build**

```bash
pnpm build
```
Expected: PASS.

**Step 4: Commit**

```bash
git add src/components/home/EventsSection.vue src/pages/index.astro
git commit -m "feat: add events section Vue island with Google Calendar integration"
```

---

## Task 9: Home — Latest Video (Vue Island)

**Files:**
- Create: `src/components/home/LatestVideo.vue`
- Modify: `src/pages/index.astro`

**Step 1: Create `src/components/home/LatestVideo.vue`**

```vue
<!-- src/components/home/LatestVideo.vue -->
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useYouTube } from '../../composables/useYouTube'
import { format, parseISO } from 'date-fns'

const { videos, loading, error, fetchVideos } = useYouTube()

const latest = computed(() => videos.value[0] ?? null)

onMounted(() => fetchVideos(1))
</script>

<template>
  <section class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-heading mb-12">Latest Message</h2>

      <!-- Loading -->
      <div v-if="loading" class="aspect-video bg-surface rounded-xl animate-pulse max-w-3xl" />

      <!-- Error -->
      <p v-else-if="error" class="text-text-muted text-sm">Unable to load latest video.</p>

      <!-- Video -->
      <div v-else-if="latest" class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="aspect-video rounded-xl overflow-hidden border border-border-default shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <iframe
            :src="`https://www.youtube.com/embed/${latest.id}`"
            :title="latest.title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          />
        </div>
        <div>
          <p class="text-accent text-sm font-body font-medium mb-2">
            {{ format(parseISO(latest.publishedAt), 'MMMM d, yyyy') }}
          </p>
          <h3 class="font-display text-text-primary text-2xl md:text-3xl mb-4 leading-snug">
            {{ latest.title }}
          </h3>
          <p class="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
            {{ latest.description }}
          </p>
          <a href="/videos" class="btn-outline">View All Messages</a>
        </div>
      </div>
    </div>
  </section>
</template>
```

**Step 2: Add `LatestVideo` to `src/pages/index.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
import Header from '../components/layout/Header.astro'
import Footer from '../components/layout/Footer.astro'
import Hero from '../components/home/Hero.astro'
import AboutSnippet from '../components/home/AboutSnippet.astro'
import SundayBanner from '../components/home/SundayBanner.astro'
import EventsSection from '../components/home/EventsSection.vue'
import LatestVideo from '../components/home/LatestVideo.vue'
---

<BaseLayout>
  <Header slot="header" />
  <Hero />
  <AboutSnippet />
  <EventsSection client:visible />
  <LatestVideo client:visible />
  <SundayBanner />
  <Footer slot="footer" />
</BaseLayout>
```

**Step 3: Verify build**

```bash
pnpm build
```
Expected: PASS.

**Step 4: Commit**

```bash
git add src/components/home/LatestVideo.vue src/pages/index.astro
git commit -m "feat: add latest video Vue island with YouTube integration"
```

---

## Task 10: Videos Page

**Files:**
- Create: `src/components/videos/VideoGrid.vue`
- Create: `src/pages/videos.astro`

**Step 1: Create `src/components/videos/VideoGrid.vue`**

```vue
<!-- src/components/videos/VideoGrid.vue -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { format, parseISO } from 'date-fns'
import { useYouTube } from '../../composables/useYouTube'

const { videos, loading, error, fetchVideos } = useYouTube()

onMounted(() => fetchVideos(12))
</script>

<template>
  <div>
    <!-- Loading skeleton -->
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="i in 6" :key="i" class="card animate-pulse">
        <div class="aspect-video bg-border-default rounded-t-lg" />
        <div class="p-4">
          <div class="h-4 bg-border-default rounded w-1/4 mb-2" />
          <div class="h-5 bg-border-default rounded w-full" />
        </div>
      </div>
    </div>

    <!-- Error -->
    <p v-else-if="error" class="text-text-muted text-sm text-center py-12">
      Unable to load videos at this time.
    </p>

    <!-- Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        v-for="video in videos"
        :key="video.id"
        :href="`https://www.youtube.com/watch?v=${video.id}`"
        target="_blank"
        rel="noopener noreferrer"
        class="card group block overflow-hidden"
      >
        <div class="relative aspect-video overflow-hidden">
          <img
            :src="video.thumbnail"
            :alt="video.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <!-- Play overlay -->
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <div class="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center">
              <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="p-4">
          <p class="text-accent text-xs font-medium mb-1">
            {{ format(parseISO(video.publishedAt), 'MMM d, yyyy') }}
          </p>
          <h3 class="font-display text-text-primary text-base leading-snug line-clamp-2 group-hover:text-accent transition-colors duration-150">
            {{ video.title }}
          </h3>
        </div>
      </a>
    </div>
  </div>
</template>
```

**Step 2: Create `src/pages/videos.astro`**

```astro
---
// src/pages/videos.astro
import BaseLayout from '../layouts/BaseLayout.astro'
import Header from '../components/layout/Header.astro'
import Footer from '../components/layout/Footer.astro'
import VideoGrid from '../components/videos/VideoGrid.vue'
---

<BaseLayout
  title="Videos"
  description="Watch messages and teachings from Life Church of Orange."
>
  <Header slot="header" />

  <div class="pt-28 pb-24 px-6">
    <div class="max-w-6xl mx-auto">
      <h1 class="section-heading mb-12">Messages</h1>
      <VideoGrid client:load />
    </div>
  </div>

  <Footer slot="footer" />
</BaseLayout>
```

**Step 3: Verify build**

```bash
pnpm build
```
Expected: PASS. `/videos` page included in output.

**Step 4: Commit**

```bash
git add src/components/videos/ src/pages/videos.astro
git commit -m "feat: add videos page with YouTube video grid island"
```

---

## Task 11: Contact Page

**Files:**
- Create: `src/components/contact/ContactForm.astro`
- Create: `src/components/contact/MapEmbed.astro`
- Create: `src/pages/contact.astro`

**Step 1: Create `src/components/contact/ContactForm.astro`**

```astro
---
// src/components/contact/ContactForm.astro
const formspreeEndpoint = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT
---

<div class="card p-8">
  <h2 class="font-display text-text-primary text-2xl mb-6">Send a Message</h2>
  <form
    action={formspreeEndpoint}
    method="POST"
    class="flex flex-col gap-5"
  >
    <div>
      <label for="name" class="block text-text-muted text-sm mb-2">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Your name"
        class="w-full bg-base border border-border-default rounded px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
      />
    </div>
    <div>
      <label for="email" class="block text-text-muted text-sm mb-2">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        class="w-full bg-base border border-border-default rounded px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
      />
    </div>
    <div>
      <label for="message" class="block text-text-muted text-sm mb-2">Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows="5"
        placeholder="How can we help?"
        class="w-full bg-base border border-border-default rounded px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
      />
    </div>
    <button type="submit" class="btn-primary text-center">Send Message</button>
  </form>
</div>
```

**Step 2: Create `src/components/contact/MapEmbed.astro`**

```astro
---
// src/components/contact/MapEmbed.astro
---

<div class="rounded-xl overflow-hidden border border-border-default h-80">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8!2d-117.8550!3d33.7900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd6c0b0a00001%3A0x1!2s840+N+Shattuck+Pl%2C+Orange%2C+CA+92869!5e0!3m2!1sen!2sus!4v1"
    width="100%"
    height="100%"
    style="border:0;"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Life Church of Orange location"
  />
</div>
```

> **Note:** Replace the Maps embed URL with the exact embed URL from Google Maps for "840 N Shattuck Pl, Orange, CA 92869" (go to Google Maps → Share → Embed a map → copy the `src` URL).

**Step 3: Create `src/pages/contact.astro`**

```astro
---
// src/pages/contact.astro
import BaseLayout from '../layouts/BaseLayout.astro'
import Header from '../components/layout/Header.astro'
import Footer from '../components/layout/Footer.astro'
import ContactForm from '../components/contact/ContactForm.astro'
import MapEmbed from '../components/contact/MapEmbed.astro'
import { Icon } from 'astro-icon/components'
---

<BaseLayout
  title="Contact"
  description="Visit Life Church of Orange or send us a message. We'd love to connect with you."
>
  <Header slot="header" />

  <div class="pt-28 pb-24 px-6">
    <div class="max-w-6xl mx-auto">
      <h1 class="section-heading mb-12">Contact Us</h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left: info + map -->
        <div class="flex flex-col gap-8">
          <!-- Info cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: 'lucide:map-pin', label: 'Address', value: '840 N Shattuck Pl\nOrange, CA 92869' },
              { icon: 'lucide:clock', label: 'Service Times', value: 'Sundays at 1:00 PM' },
              { icon: 'lucide:phone', label: 'Phone', value: '(714) 771-2522', href: 'tel:+17147712522' },
              { icon: 'lucide:mail', label: 'Email', value: 'info@lifeoc.org', href: 'mailto:info@lifeoc.org' },
            ].map(({ icon, label, value, href }) => (
              <div class="card p-5">
                <Icon name={icon} class="w-5 h-5 text-accent mb-2" />
                <p class="text-text-muted text-xs uppercase tracking-wider mb-1">{label}</p>
                {href ? (
                  <a href={href} class="text-text-primary text-sm hover:text-accent transition-colors whitespace-pre-line">{value}</a>
                ) : (
                  <p class="text-text-primary text-sm whitespace-pre-line">{value}</p>
                )}
              </div>
            ))}
          </div>
          <MapEmbed />
        </div>

        <!-- Right: form -->
        <ContactForm />
      </div>
    </div>
  </div>

  <Footer slot="footer" />
</BaseLayout>
```

**Step 4: Verify build**

```bash
pnpm build
```
Expected: PASS. `/contact` page in output.

**Step 5: Commit**

```bash
git add src/components/contact/ src/pages/contact.astro
git commit -m "feat: add contact page with form, map, and church info"
```

---

## Task 12: GitHub Actions Deploy Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1: Create `.github/workflows/deploy.yml`**

```yaml
# .github/workflows/deploy.yml
name: Deploy to Hostinger

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 9

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm build
        env:
          PUBLIC_GOOGLE_API_KEY: ${{ secrets.PUBLIC_GOOGLE_API_KEY }}
          PUBLIC_YOUTUBE_CHANNEL_ID: ${{ secrets.PUBLIC_YOUTUBE_CHANNEL_ID }}
          PUBLIC_GOOGLE_CALENDAR_ID: ${{ secrets.PUBLIC_GOOGLE_CALENDAR_ID }}
          PUBLIC_FORMSPREE_ENDPOINT: ${{ secrets.PUBLIC_FORMSPREE_ENDPOINT }}

      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: /public_html/
```

**Step 2: Verify workflow YAML syntax**

```bash
cat .github/workflows/deploy.yml
```
Expected: Readable YAML, no syntax errors visible.

**Step 3: Commit**

```bash
git add .github/
git commit -m "chore: add GitHub Actions FTP deploy workflow"
```

---

## Task 13: Final Verification

**Step 1: Full build**

```bash
pnpm build
```
Expected: PASS, no errors or warnings.

**Step 2: TypeScript check**

```bash
pnpm astro check
```
Expected: 0 errors.

**Step 3: Local preview**

```bash
pnpm preview
```
Visit `http://localhost:4321` and verify:
- [ ] Home: hero, about, events, latest video, Sunday banner all render
- [ ] Videos: grid loads YouTube videos
- [ ] Contact: form, map, info cards all visible
- [ ] Navigation works across all pages
- [ ] Dark theme consistent throughout
- [ ] Logo appears in header and footer
- [ ] Mobile menu works

**Step 4: Commit & push to trigger deploy**

```bash
git push -u origin main
```
Expected: GitHub Actions workflow triggers, builds, and deploys to Hostinger.

---

## GitHub Secrets Checklist

Before pushing, add these in GitHub → Settings → Secrets → Actions:

- [ ] `FTP_SERVER`
- [ ] `FTP_USERNAME`
- [ ] `FTP_PASSWORD`
- [ ] `PUBLIC_GOOGLE_API_KEY`
- [ ] `PUBLIC_YOUTUBE_CHANNEL_ID` = `UCoVX240Rcw6ek5Opx2J84QA`
- [ ] `PUBLIC_GOOGLE_CALENDAR_ID` = `129d72ba476e5a268724ea7b31f2d40e1b1563ffd9963b2a9345c7c24d08e437@group.calendar.google.com`
- [ ] `PUBLIC_FORMSPREE_ENDPOINT` = `https://formspree.io/f/mkndgrjn`
