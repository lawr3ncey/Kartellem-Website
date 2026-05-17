# KARTELLEM — Manila Underground Collective

Official website for **KARTELLEM**, a Manila-based hip-hop collective and streetwear brand. Built as a dark, editorial-style web experience reflecting the raw underground aesthetic of the group.

🌐 **Live Site:** [kartellem.devrence.com](https://kartellem.devrence.com)

---

## Overview

KARTELLEM is more than a brand — it's a movement born from the streets of Manila. This website serves as the digital home for the collective, featuring their music, drops, roster, story, and events.

---

## Features

- **Hero Section** — Full-screen cinematic landing with animated grain overlay
- **Featured Drops** — Streetwear product catalog with full product detail pages
- **Music Page** — Spotify artist embed, streaming platform links, and YouTube cypher video
- **Story Page** — Animated timeline tracing the history of the collective
- **Roster Section** — Member profiles with real photos
- **Cypher Section** — Embedded latest cypher video
- **Event Section** — Upcoming shows and events
- **Gallery Section** — Photo grid from the underground
- **Custom Open Graph Image** — Branded link previews for social sharing
- **Responsive Design** — Fully mobile-optimized
- **Animated Marquee, Grain Overlay, Glitch Effects** — Custom CSS animations for the underground aesthetic

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [Vercel](https://vercel.com/) | Deployment and hosting |

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage with all sections |
| `/story` | Brand origin timeline |
| `/music` | Spotify embed, streaming links, YouTube |
| `/product/[id]` | Individual product detail page |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with metadata & OG tags
│   ├── page.tsx           # Homepage
│   ├── story/page.tsx     # Story page
│   ├── music/page.tsx     # Music page
│   └── product/[id]/      # Dynamic product pages
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── GrainOverlay.tsx
│   └── sections/          # All homepage sections
└── data/
    └── products.ts        # Products, roster, and gallery data
```

---

## Deployment

Deployed on **Vercel** with a custom subdomain via CNAME DNS record.

- **Production URL:** [kartellem.devrence.com](https://kartellem.devrence.com)
- Auto-deploys on every push to `main`

---

## Credits

Designed and developed by **Lawrence Babelonia** for KARTELLEM.
