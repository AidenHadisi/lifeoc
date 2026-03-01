# Life Church of Orange — Website Design

**Date**: 2026-03-01
**Project**: lifeoc
**Site**: lifeoc.org

---

## Overview

A modern, dark & elegant church website for Life Church of Orange. Built with Astro for static output, Vue 3 islands for dynamic content, and deployed to Hostinger via GitHub Actions FTP.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Astro | Static site framework, routing, layouts |
| Vue 3 + TypeScript | Dynamic islands (events, videos) |
| Tailwind CSS | All styling |
| VueUse | Composable utilities (`useFetch`, etc.) |
| astro-seo | Per-page meta tags, Open Graph |
| @astrojs/sitemap | Auto-generated sitemap.xml |
| astro-icon + @iconify-json/lucide | Tree-shaken icon system |
| date-fns | Date formatting for calendar events |
| @fontsource/playfair-display | Self-hosted heading font |
| @fontsource/inter | Self-hosted body font |
| Formspree | Contact form backend (no server needed) |
| GitHub Actions + SamKirkland/FTP-Deploy-Action | CI/CD deploy to Hostinger |

---

## Pages

### Home (`/`)
1. **Hero** — Full-viewport dark section, church name, tagline, two CTAs: "Watch Latest Message" + "Plan a Visit"
2. **About Snippet** — Brief church description, static Astro component
3. **Upcoming Events** — Vue island, fetches Google Calendar API client-side
4. **Latest Video** — Vue island, fetches latest YouTube video client-side
5. **Sunday CTA Banner** — Static section with service times and address

### Videos (`/videos`)
- Vue island grid of latest videos from YouTube channel
- Each card: thumbnail, title, date, opens YouTube in new tab

### Contact (`/contact`)
- Church address, service times, phone, email
- Formspree contact form (name, email, message)
- Google Maps iframe embed

---

## Project Structure

```
lifeoc/
├── public/
│   └── images/
│       └── logo.png
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── videos.astro
│   │   └── contact.astro
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── AboutSnippet.astro
│   │   │   ├── EventsSection.vue
│   │   │   ├── LatestVideo.vue
│   │   │   └── SundayBanner.astro
│   │   ├── videos/
│   │   │   └── VideoGrid.vue
│   │   └── contact/
│   │       ├── ContactForm.astro
│   │       └── MapEmbed.astro
│   ├── composables/
│   │   ├── useYouTube.ts
│   │   └── useGoogleCalendar.ts
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .env
└── .env.example
```

---

## Design System

### Color Palette

| Role | Value |
|---|---|
| Background | `#0D0D0F` |
| Surface | `#1A1A1F` |
| Border | `#2A2A30` |
| Accent gold | `#C9933A` |
| Accent muted | `#7C5A2A` |
| Text primary | `#F5F0E8` |
| Text muted | `#8A8478` |

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (clean, readable)

### Design Details
- Gold decorative line under section headings
- Cards with `border border-[#2A2A30]`, lift + faint gold glow on hover
- Smooth transitions: 150–200ms on all interactive elements
- Hero: dark gradient atmospheric background with centered logo

---

## API Configuration

### Client-side Data Fetching
Dynamic sections (events, videos) fetch from APIs directly in Vue islands. API keys are `PUBLIC_` Astro env vars baked into the client bundle at build time.

**Security**: Both API keys must be restricted by HTTP referrer (`lifeoc.org/*`) in Google Cloud Console.

### Values (from old site)

| Key | Value |
|---|---|
| YouTube Channel ID | `UCoVX240Rcw6ek5Opx2J84QA` |
| Google Calendar ID | `129d72ba476e5a268724ea7b31f2d40e1b1563ffd9963b2a9345c7c24d08e437@group.calendar.google.com` |
| Formspree Endpoint | `https://formspree.io/f/mkndgrjn` |
| Google API Key | Reuse existing key from old project (already restricted) |

---

## Church Content

| Field | Value |
|---|---|
| Church name | Life Church of Orange |
| Address | 840 N Shattuck Pl, Orange, CA 92869 |
| Mailing | PO Box 2523, Orange CA 92859 |
| Phone | (714) 771-2522 |
| Email | info@lifeoc.org |
| Service times | Sundays at 1:00 PM |
| YouTube | https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA |
| Facebook | https://www.facebook.com/lifechurchorangeca |
| Online Giving | https://lifeoc.churchcenter.com/giving |

**About text**:
> "We are a Spirit-filled, multicultural church in the City of Orange, CA. Disciples of Jesus Christ, in following Him we make disciples, as His people, God's family, we live this life together on His mission to bring Him glory."

**Footer tagline**:
> "Serving the Orange County community with the message of hope and love through Jesus Christ."

---

## GitHub Actions Deployment

**Trigger**: Push to `main`
**Steps**: Install (pnpm) → Build (`astro build`) → FTP upload `dist/` to Hostinger

### GitHub Secrets Required

| Secret | Description |
|---|---|
| `FTP_SERVER` | Hostinger FTP hostname |
| `FTP_USERNAME` | Hostinger FTP username |
| `FTP_PASSWORD` | Hostinger FTP password |
| `PUBLIC_GOOGLE_API_KEY` | Google API key |
| `PUBLIC_YOUTUBE_CHANNEL_ID` | YouTube channel ID |
| `PUBLIC_GOOGLE_CALENDAR_ID` | Google Calendar ID |
| `PUBLIC_FORMSPREE_ENDPOINT` | Formspree form endpoint |
