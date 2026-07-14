# Tiny's Restaurant — Website

A premium, modern, mobile-first marketing website for Tiny's Restaurant (2 Groton School Rd, Ayer, MA), built with React, TypeScript, and Tailwind CSS, and populated with the restaurant's real content, menu, logo, and photos.

## What's included

- One-page site with anchor navigation (Home, Menu, About, Gallery, Reviews, Contact) plus standalone Privacy Policy and Accessibility pages
- Sticky nav with the real logo, "Takeout" and "Reserve a Table" CTAs, and a mobile sticky call/reserve bar
- Hero, featured dishes, about/story, full categorized menu (Lunch & Dinner + Breakfast), a takeout call-to-action, photo gallery with lightbox, real guest reviews, a working reservation form, contact/map, and FAQ
- `Restaurant` JSON-LD schema and SEO meta tags in `index.html` for local search
- Real photography and logo, sourced from the restaurant's existing site

## Running it locally

Requires [Node.js](https://nodejs.org) 20+.

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To build for production and preview that build locally:

```bash
npm run build
npm run preview
```

## Where to change things

Everything business-specific lives in a few files — you shouldn't need to touch component code for routine updates.

| What to change | File |
|---|---|
| Restaurant name, tagline, phone, address, hours, social links, takeout note | [`src/data/restaurant.ts`](src/data/restaurant.ts) |
| Menu items, prices, descriptions, dietary tags, which dishes are "featured" | [`src/data/menu.ts`](src/data/menu.ts) |
| Gallery photos | [`src/data/gallery.ts`](src/data/gallery.ts) |
| Guest reviews | [`src/data/reviews.ts`](src/data/reviews.ts) |
| FAQ questions and answers | [`src/data/faq.ts`](src/data/faq.ts) |
| Page title, meta description, Open Graph image, JSON-LD structured data | [`index.html`](index.html) |
| Google Maps embed and "Get Directions" link | `map` object in [`src/data/restaurant.ts`](src/data/restaurant.ts) |
| PDF menu download link | `menuPdfUrl` in [`src/data/restaurant.ts`](src/data/restaurant.ts) — a real PDF generated from the current menu lives at `public/menu.pdf`; replace that file with your own designed menu artwork whenever you have one |

### Images & logo

Real photos and the logo live in `src/assets/images/` and are imported directly into components (Vite bundles and hashes them automatically). To replace one:

1. Drop your new image into `src/assets/images/`.
2. Update the `import` at the top of the relevant file to point to it.

Photo locations:
- Logo — `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx` (`src/assets/images/logo.png`)
- Hero background — `src/components/sections/Hero.tsx`
- About section photo — `src/components/sections/About.tsx`
- Featured dish + daily special photos — `src/data/menu.ts`
- Gallery photos — `src/data/gallery.ts`

### Takeout

Tiny's doesn't currently use an online ordering or delivery platform, so the "Takeout" section and nav buttons point guests to call the restaurant directly. If you sign up with a delivery platform (DoorDash, Uber Eats, etc.) later, add its link in `src/data/restaurant.ts` and update `src/components/sections/OnlineOrdering.tsx`.

### Reservation form

The reservation form (`src/components/sections/Reservation.tsx`) validates on the front end and shows a success confirmation — no paid backend required to start collecting requests. Submitted reservations are currently saved to the visitor's browser (`localStorage`) so nothing is lost during testing, but **no data is sent anywhere yet**. Before launch, wire the `handleSubmit` function to your preferred backend (e.g. a simple serverless function, [Formspree](https://formspree.io), or [EmailJS](https://www.emailjs.com)) so reservation requests actually reach your team.

## Deploying to Vercel

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Vite framework preset — leave the build command (`vite build`) and output directory (`dist`) as-is.
4. Click **Deploy**.
5. Once live, add your custom domain under the project's **Settings → Domains**.

A `vercel.json` is included so that the Privacy Policy and Accessibility pages work correctly on refresh/direct link (client-side routing rewrite).

To deploy from the command line instead:

```bash
npm install -g vercel
vercel
```

## Tech stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [React Router](https://reactrouter.com) (for the two standalone legal pages)
- [Phosphor Icons](https://phosphoricons.com)
