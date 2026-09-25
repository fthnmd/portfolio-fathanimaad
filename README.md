# Fathan Imaad — portfolio rebuild

A single-page, English-only portfolio built with Next.js 16 (App Router), React 19, TypeScript, and CSS. The split-pane layout uses a sticky desktop identity rail and mobile navigation. Palette: #154360 navy, warm ivory, and restrained amber. No photography, remote UI dependencies, or coordination-workflow section.

## Run locally

Requires Node.js 22.13.0 or newer.

```sh
npm ci
npm run dev
```

Then visit http://localhost:3000. To verify a production build:

```sh
npm run lint
npm run build
npm run start
```

This archive contains the source and lockfile; it does not contain `node_modules` or `.next`. The portfolio has **not** been deployed. Deploy only when the owner explicitly authorizes it. The existing `fathanimaad.me` site remains unchanged until a deployment is approved.

## Content and assets

- `app/portfolio-data.ts`: source of truth for navigation, experience, academic projects, skills, training, and contact details. The about, case-note and section framing copy is in `app/page.tsx`.
- `app/globals.css`: palette, typography, layout, responsive rules, and reduced-motion handling.
- `app/components/navigation.tsx`: desktop section navigation and mobile menu with active section tracking.
- `public/fathan-imaad-cv.pdf`: the owner's latest supplied HR CV, copied byte-for-byte and linked from Download CV. Its phone number remains in the PDF at the owner's request, but is not displayed on the web page. The PDF's 100+ figure is phrased under Chillchat; the owner clarified that the figure covers both Chillchat and Stress Capital, so the site explicitly attributes it to both without changing the PDF.
- `public/og-professional.png` and `public/favicon.svg`: refreshed social preview and favicon consistent with the new color palette.
- `public/fonts/`: bundled Inter and Playfair Display fonts; no remote font fetch is required at build time.

The design omits the collaboration workflow entirely. Volunteer experience is labeled as such. Quantitative Research, Qualitative Research, Psychological Scale Development, and Measurement Instrument Construction are four separate courses; the last two were confirmed by the owner but are not in the supplied CV. The HR Dashboard prototype is deliberately omitted. The 100+ figure is explained as opportunities across both communities rather than successful partnerships. The public contacts are email, LinkedIn, and the CV download; no phone number is shown in the page itself.

## Prepublication checklist

Review copy for changes to academic status or graduation, check CV contents and downloadable file, confirm contact links, check mobile and desktop on target browsers, and secure explicit approval before deploying. `NEXT_PUBLIC_SITE_URL` may be set if publishing under a different domain; otherwise canonical metadata falls back to `https://fathanimaad.me`.
