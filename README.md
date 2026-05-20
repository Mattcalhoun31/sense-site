# SENSE Media Solutions — Website

A single-page marketing site for SENSE, a media buying agency focused on sensitive industries. Built with React, Vite, and Framer Motion.

**Brand Guide:** SENSE Brand Guide, April 2026 by SymmetriLabs  
**Stack:** React 18 · Vite 6 · Framer Motion · Vercel

---

## Project Structure

```
sense-site/
├── public/
│   └── favicon.svg          # Giraffe favicon
├── src/
│   ├── components/
│   │   ├── Animations.jsx    # Shared scroll-reveal primitives
│   │   ├── Approach.jsx      # Section 2: Services
│   │   ├── Contact.jsx       # Section 5: CTA + Footer
│   │   ├── GiraffeLogo.jsx   # SVG giraffe logo
│   │   ├── Hero.jsx          # Section 1: Hero + stats
│   │   ├── Industries.jsx    # Section 4: Verticals
│   │   ├── Nav.jsx           # Fixed nav w/ mobile menu
│   │   └── Platform.jsx      # Section 3: DSP features
│   ├── App.jsx               # Root component
│   ├── brand.js              # Colors, fonts, design tokens
│   ├── index.css             # Global styles + reset
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deploy to Vercel (Recommended)

### Option A: GitHub → Vercel (auto-deploy)

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial SENSE site"
   git remote add origin https://github.com/symmetrilabs/sense-site.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new)

3. Import the GitHub repo

4. Vercel auto-detects Vite — settings should be:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. Click **Deploy**

6. Point the client's domain (e.g. `sense.com`) to Vercel via DNS:
   - Add a CNAME record: `www` → `cname.vercel-dns.com`
   - Add an A record: `@` → `76.76.21.21`

Every push to `main` auto-deploys. Use branches for staging.

### Option B: Vercel CLI (one-shot)

```bash
npm i -g vercel
vercel          # follow prompts
vercel --prod   # push to production
```

---

## Managing as a Third Party (SymmetriLabs)

**Recommended workflow:**

1. **GitHub org:** Create repo under `symmetrilabs` org (e.g. `symmetrilabs/sense-site`)
2. **Vercel team:** Add the project under your Vercel team — you maintain deploy access, the client doesn't need Vercel credentials
3. **Domain:** Client owns their domain. You configure DNS once, then every push auto-deploys
4. **Branching:** `main` = production, `staging` = preview (Vercel gives every branch its own URL)
5. **Content updates:** All copy lives in the component files. Edit text, push, auto-deploys in ~30 seconds

**If the client wants a CMS later:** Add a headless CMS (Sanity, Contentful, or even Notion API) and pull content at build time. The React structure already supports this — just swap hardcoded strings for fetched data.

---

## Brand Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| Champagne | `#ffead8` | Backgrounds, primary text on dark |
| Sandstone | `#ac8b6c` | Accents, labels, borders |
| Sky Blue | `#68c7dc` | CTAs, highlights, interactive |
| Deep Teal | `#0c7180` | Gradients, hover states |
| Black | `#000000` | Primary backgrounds |

Fonts: Playfair Display (display/hero), DM Sans (headings + body). See `src/brand.js`.

---

## Form Handling

The contact form is currently frontend-only. To make it functional:

- **Simple:** Add [Formspree](https://formspree.io) or [Basin](https://usebasin.com) — just change the form to submit to their endpoint
- **Advanced:** Add a Vercel serverless function (`/api/contact.js`) that sends to the client's email via SendGrid/Resend
- **CRM:** Wire into HubSpot, Salesforce, or Zapier webhook

---

Built by [SymmetriLabs](https://symmetrilabs.com) · April 2026
