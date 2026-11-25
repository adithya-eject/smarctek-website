# Design notes: Industrial Elegance redesign

Interpretation of the supplied brief, not a copy of any reference site. No S5 green/lime, no S5 assets.

## System
- **Palette**: Midnight Navy `#091B30`, Deep Industrial Navy `#071525`, Industrial Orange `#F4512C`, Warm Ivory `#F5F4EE` (the dominant ground), Steel Grey `#7A899B`, Dark text `#152536`, Muted `#637184`. Tokens live in `src/styles/base.css`. Legacy variable names (`--navy --deep --orange --soft --graphite --muted`) were re-valued so inner pages inherit the new look.
- **Type**: Manrope (headings, weight 500) + Inter (body). Clamp-based scale: hero up to 8rem, page titles up to 7rem, section h2 up to ~4.75rem.
- **Contrast**: small orange text on ivory uses `--orange-ink #B8330F` (5.4:1); small grey text uses `--muted-ink`; dark text sits on orange (5.3:1); steel grey is used only for large display text. White-on-orange is used for graphic/large elements only.
- **Layout**: max width 1440px, side margins `clamp(20px, 6.5vw, 104px)`, section padding `clamp(88px, 11vw, 160px)`. Square corners (2px), no pill buttons, no glass effects.
- **Motion** (CSS + `src/client/main.ts`, no dependencies): hero crossfade with slow zoom and progress line, text entrances, clip-wipe image reveals, gentle parallax on the cassava photograph, scroll-progress line in the approach section, marquee, animated diagonal arrows and underlines, fullscreen mobile menu transition. All of it is disabled or flattened under `prefers-reduced-motion`.

## Pages
- **Home** (`src/pages/home.tsx`): hero (3 selectable slides, pause/play) → orange marquee → About split → three portrait solution cards → cassava split with 5-stage tab explorer → machinery carousel (8 machines) → dark Our approach → editorial gallery with lightbox → international → closing CTA → footer.
- **New route** `/our-approach/` (linked from the primary nav; in sitemap).
- Header: transparent over the dark hero on every page, solid navy once scrolled. Every page therefore opens with a dark hero.
- Primary nav follows the brief (Home, About us, Our solutions, Machinery, Our approach, Gallery, Let's talk). Projects, Global business, Contact and Request a quote keep their routes and are reachable from the footer, home sections and CTAs.
- Inner pages keep their content and structure and take the new tokens, oversized page titles, editorial section heads and the shared closing CTA. Specification tables, the catalogue (search, filters, quote shortlist) and the enquiry forms are unchanged in behaviour.

## Behaviour preserved
Routes, catalogue search/filter, quote shortlist, forms and validation, honeypot/time-trap/rate limit, no fake success states, SEO metadata, sitemap, structured data, Vercel config.

## Unresolved / to verify
1. **Image softness.** The supplied photographs are small (largest 1298×722; most gallery images ≈550 px wide). Full-bleed use makes them look soft; overlays and crops hide some of it. Better originals from TGG Group would improve the hero, cards and cassava section most.
2. **Image permission** from TGG Group is still unconfirmed (`IMAGE_SOURCE.permissionConfirmed`). Do not publish publicly until it is.
3. **Brief copy** (hero, About, approach, international, CTA wording) was supplied by the brief and should be approved by the business owner.
4. **Reference proposal facts**: the 400-ton figure has no stated time basis; it is shown without a time unit and labelled as a concept. Open items remain in `docs/UNVERIFIED_CLAIMS.md`.
5. **Lighthouse** has not been measured (no browser tooling for it in the build environment). Run it on the deployed preview; the targets are >90 performance, >95 accessibility.
6. The S5 reference screenshots were not available; the design follows the written brief only.
7. Solution cards link to existing solution pages (cassava, flour milling, automation); there are no separate pages for "agricultural processing", "industrial machinery" and "engineering" as such.

## Hero media (update)
Six slides: hall photo, assembly-line photo, **looping video** (muted, 10 s on screen, poster fallback), engine technician, engineers with robot arms, valve technicians. Slide copy/CTA/duration live as `data-*` attributes in `src/pages/home.tsx`. The video (`public/media/hero-assembly.mp4`, 1080p, ~6 MB, no audio) loads only when its slide is shown, and is not played under reduced motion or Save-Data; the poster shows instead. The pause button also pauses the video. Three supplied photos were only 612 px wide and were denoised/upscaled; they will look soft at full width. Confirm you hold the licence for the stock photos and video.
