# Show Up: Evolve — Style Reference

> Editorial retail-learning platform with a violet-and-lime accent system

**Theme:** light

Show Up: Evolve reads as a bright editorial learning platform for retail loan officers: a near-white canvas (`#FAFAFA`) carrying black display type, punctuated by a deep aubergine-violet (`#6D53AF`) and a sharp lime-green (`#9EC73D`). The interface is spacious and confident, built on a strict two-column rhythm — a narrow vertical rail on the left and a wide content field on the right. Color is rationed: black and near-white carry almost all content, while violet is reserved for brand accents, active states, and the signature slider panel, and lime-green is used only for affirmative actions and the logo mark. Typography is heavy and tightly tracked — black-weight headings at large sizes with negative letter-spacing — contrasted against tiny uppercase labels with wide positive tracking. Cards are flat and sharp-cornered (2–8px radius) with soft shadows used sparingly for floating surfaces. The overall feel is editorial, structured, and instrument-like: uppercase tracked labels, thin geometric arrow icons, and a single violet slider band that anchors the page.

## Colors

| Name             | Value            | Role                                                                                                                                                 |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aubergine        | `#301A37`        | Deepest brand tone — hover state for primary buttons and dark accent text. Reads as the shadowed end of the violet scale                             |
| Brand Violet     | `#6D53AF`        | Primary brand accent — CTA button fill, active nav dots, logo accent, slider panel background, and badge text. The single dominant chromatic gesture |
| Lime             | `#9EC73D`        | Affirmative accent — logo mark, "Share this module" button, and positive action fills. Used sparingly as the energetic counterpoint to violet        |
| Lime Alt         | `#A9CA5B`        | Lighter lime for hover states and the "How are you showing up?" plus-button. A half-step brighter than Lime                                          |
| Graphite         | `#979797`        | Secondary body text, muted descriptions, and inactive icon strokes. The neutral mid-tone for de-emphasized copy                                      |
| Mist             | `#E2E2E2`        | Borders, dividers, inactive surfaces, and skeleton fills. The structural hairline color across cards, headers, and footers                           |
| Canvas           | `#FAFAFA`        | Page background for the module layout — the near-white field that content floats on                                                                  |
| Pure White       | `#FFFFFF`        | Card surfaces, header background, and high-contrast text on dark fills. The dominant surface color                                                   |
| Ink              | `#000000`        | Primary headings and body text on light surfaces. The default text color for all content                                                             |
| Overlay Charcoal | `#303030` at 50% | Image overlay on slider cards — darkens photography so white text stays legible                                                                      |

## Typography

### System Sans (Tailwind `font-sans`) — Primary display and body face — used at weight 900 (black) for all headings and hero display text, weight 800 (extrabold) for card titles and section headings, and weight 600–700 for body and UI copy. Characterized by aggressive negative tracking on large sizes (`tracking-tight`) and wide positive tracking on uppercase labels (0.15em–0.4em). The black-weight-only heading strategy is distinctive — no light weights — giving the type a bold editorial confidence.

- **Substitute:** Inter, DM Sans, or Satoshi for a close geometric-grotesk match
- **Weights:** 600, 700, 800, 900
- **Sizes:** 10, 11, 12, 14, 20, 30, 36, 48, 58px
- **Line height:** 1.05, 1.1, 1.3, 1.4, 1.5
- **Letter spacing:** `tracking-tight` on display sizes, 0.15em uppercase at 11px, 0.2em uppercase at 10px, 0.3em uppercase at 10px, 0.4em uppercase at 14px

### Type Scale

| Role       | Size | Line Height | Letter Spacing     |
| ---------- | ---- | ----------- | ------------------ |
| caption    | 10px | 1.4         | 0.2em (uppercase)  |
| label      | 11px | 1.4         | 0.15em (uppercase) |
| body       | 14px | 1.5         | —                  |
| card-title | 20px | 1.3         | tight              |
| subheading | 30px | 1.3         | tight              |
| heading    | 36px | 1.05        | tight              |
| heading-lg | 48px | 1.05        | tight              |
| display    | 58px | 1.05        | tight              |

## Spacing & Layout

**Base unit:** 4px

**Density:** spacious

- **Page max-width:** 1440px
- **Header height:** 93px
- **Sidebar width:** 56px (`w-14`)
- **Slider band height:** 307px
- **Slider card size:** 307×227px
- **Card step (slider):** 304px
- **Section gap:** 40–80px
- **Card padding:** 32–40px
- **Element gap:** 16–24px

### Border Radius

- **buttons:** 2px (primary CTA), 6px (secondary), full (icon buttons)
- **cards:** 8px (slider cards), 12px (video cards)
- **small:** 2px
- **modal:** 16px (`rounded-2xl`)

## Components

### Primary CTA Button

**Role:** Main call to action

Filled button with Brand Violet (`#6D53AF`) background, 2px border-radius, 40px vertical / 40px horizontal padding. Text in white at 10px, weight 700, uppercase with 0.2em letter-spacing. Hover shifts to Aubergine (`#301A37`). Used for "Get free access" and other primary actions.

### Lime Action Button

**Role:** Affirmative action

Filled button with Lime (`#9EC73D`) background, 6px border-radius, 16px vertical / 24px horizontal padding. White text at 14px weight 700 with a trailing chevron icon. Hover shifts to Lime Alt (`#A9CA5B`). Used for "Share this module".

### Ghost Header Link

**Role:** Nav item

Transparent background, no border, uppercase text at 11px weight 700 with 0.15em letter-spacing. Black in resting state, Brand Violet on hover. Paired with a 3×3 grid of violet dots as a menu trigger.

### Side Navigation Rail

**Role:** Persistent left rail

Fixed or flex 56px-wide vertical rail with white background and a Mist (`#E2E2E2`) right border. Contains the lime logo mark at top and, at bottom, a rotated uppercase label (10px, 0.2em tracking, Brand Violet), a page number in Graphite, and a thin chevron-down button. Two variants: `fixed` (Hero — fixed, hidden on mobile) and `flex` (modules — in-flow flex element).

### Slider Panel

**Role:** Featured module carousel

Full-width violet (`#6D53AF`) band, 307px tall, with a soft shadow. Left third holds a white extrabold heading (30px) and two circular outline arrow buttons (44px, white/40 border). Right side scrolls 307×227px image cards with a 50% charcoal overlay, a 10px index label, and a centered white title. A 64px white side plate with a lime plus-button and rotated uppercase label caps the right edge.

### Slider Card

**Role:** Module preview tile

307×227px card, 8px radius, soft shadow, full-bleed image with a `#303030`/50% overlay. Active card shows a white arrow icon top-right, a centered 20px bold title, and a 10px description at 60% opacity. Inactive cards dim the title to 60% opacity and push it to the bottom.

### Video Card

**Role:** Module video block

White card, 12px radius, soft shadow, 40px padding, 490×242px on desktop. Holds a 30px extrabold title and either a violet circular play button (56px) with an uppercase "Play video" label, or a locked state with a Mist circle, lock icon, and a 12px instruction line.

### Badge Pill

**Role:** Module tag

Rounded-full pill with Brand Violet at 10% opacity background and Brand Violet text at 12px weight 700, uppercase with wide tracking. 20px horizontal / 8px vertical padding, 12px gap between pills.

### PDF Download Block

**Role:** Resource download

Top-bordered (Mist) row with a 80×80px Mist placeholder, an extrabold 14px title, and a 12px Graphite description. Trailing outlined button (Mist border, 6px radius) with a lime download arrow and 12px bold label.

### Bottom Module Nav

**Role:** Prev/next navigation

80px-tall footer bar with a Mist top border, split into three zones: Prev button (left, with arrow + Graphite number + label), centered current-module label (12px extrabold), and Next button (right). Buttons separated by Mist vertical borders, hover tinted with Mist at 10%.

### Video Modal

**Role:** Video overlay

Full-screen `black/70` backdrop with blur, containing a 16:9 black panel (max-width 4xl, 16px radius, soft shadow) with a YouTube iframe and a 40px circular close button (black/60, white icon) at top-right.

### Loader

**Role:** Loading state

Three variants: `spinner` (violet-to-Mist ring), `dots` (three bouncing violet dots), and `skeleton` (Mist pulse bars). Optional Graphite label at 14px weight 600 with wide tracking.

## Do's and Don'ts

### Do

- Use only the violet scale (`#301A37` → `#6D53AF`) for brand accents — never introduce blue, red, or off-brand purples
- Reserve Lime (`#9EC73D`) for affirmative actions and the logo mark — never as a large background fill
- Set all headings at weight 800–900 with `tracking-tight` — the heavy, tightly-tracked display type is core to the editorial voice
- Apply uppercase tracking (0.15em–0.4em) to all labels, kickers, and eyebrow text at 10–11px
- Keep primary CTA radius at 2px and secondary/card radius at 6–8px — the system is sharp-cornered, not pill-shaped
- Use Mist (`#E2E2E2`) for all borders, dividers, and structural hairlines — never pure black borders
- Use line-height 1.05 for display text and 1.4–1.5 for body text — the contrast defines the typographic rhythm

### Don't

- Do not use standard Tailwind palette colors (`purple-600`, `green-400`) or raw hex codes in JSX — always use the `brand-*` tokens
- Do not introduce light (300-) weights at display sizes — the heavy-only strategy is core to the brand
- Do not use Lime for text on white — it fails contrast; reserve it for fills and icons
- Do not apply large shadows to flat content — shadows are reserved for floating surfaces (slider, cards, modal)
- Do not use rounded corners above 16px — the system is sharp-rounded, not pill-shaped
- Do not place white text on Lime or Mist — those are light surfaces for dark text
- Do not use any color outside the violet scale, lime accents, and neutral grays — the palette is rationed and deliberate

## Elevation

Depth is communicated through a restrained shadow system rather than a surface stack. The canvas is near-white (`#FAFAFA`) and pure white (`#FFFFFF`) for cards, with Mist (`#E2E2E2`) hairlines defining structure. Shadows appear only on floating surfaces — the violet slider band (`shadow-2xl`), slider cards (`shadow-xl`), video cards (`shadow-xl`), and the video modal (`shadow-2xl`) — creating a clear "floating above the page" hierarchy. Flat content (headers, sidebars, footers, badges) uses no shadow at all, relying on borders and spacing for separation.

## Surfaces

- **Canvas** (`#FAFAFA`) — Page background for the module layout — the near-white field all content floats on.
- **Pure White** (`#FFFFFF`) — Card, header, and sidebar surface — the dominant raised layer.
- **Brand Violet** (`#6D53AF`) — Feature surface — the slider band and primary button fill.
- **Mist** (`#E2E2E2`) — Structural surface — borders, dividers, skeletons, and inactive fills.
- **Overlay Charcoal** (`#303030` at 50%) — Image overlay — darkens photography for white text legibility.

## Imagery

Imagery is photographic and human-centered. Module cards and hero backgrounds use full-bleed stock photography (workspaces, collaboration, learning) darkened with a 50% charcoal overlay so white text stays legible. The hero pairs a large right-column photograph with a centered white play button and an uppercase "WHY" label. There is no illustration system — the visual language is photography plus flat geometric icons (thin-stroke arrows, chevrons, play triangles, lock, plus). The violet slider band is the defining brand surface; it should anchor any page that lists modules.

## Layout

Full-bleed light canvas with a persistent 56px left rail and a 1440px max-width content field. The Hero is a two-column grid (text left, photograph right) under a 93px header, with a full-width violet slider band pinned to the bottom of the viewport. The module page is a two-column split: a dark photographic left column (video cards) and a white right column (header, title, badges, description, PDF block, bottom nav). Sections breathe with generous 40–80px gaps. The left rail is fixed on the Hero (hidden on mobile) and in-flow on the module page, preserving the same visual language across both layouts. The overall rhythm is editorial and spacious — heavy type, wide tracking, and a single violet band create structure without visual noise.

## Similar Brands

- **MasterClass** — Same editorial learning-platform feel with heavy display type, dark photographic cards, and a single accent color anchoring the page
- **Skillshare** — Bright canvas with bold tightly-tracked headings, card-based module browsing, and a restrained accent palette
- **Airtable** — Sharp-cornered UI, uppercase tracked labels, and a rationed accent system with flat surfaces and minimal shadows
- **Notion** — Near-white canvas, black display type, and structural hairlines defining hierarchy rather than heavy elevation
