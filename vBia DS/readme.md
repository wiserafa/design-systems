# Luminova Design System

Design system for **Escola Luminova** — a Brazilian bilingual K‑12 school, part of **Grupo SEB**. The system is derived from Luminova's 2026 enrollment / commercial presentation ("Luminova Experience"). It captures the brand's playful-but-premium education identity: a warm orange + deep purple core, a family of vivid program-track colors, bold geometric titles set in solid color blocks, and rounded, friendly forms.

> **Source material:** the brand logo (`assets/logo-luminova-full.png`) and eight slides from the commercial deck "Cópia de Jessica_Comercial", now stored in `assets/slide-*.png`. No codebase or Figma file was provided — the system is reconstructed from these visual assets. Values (colors, layout ratios) were sampled directly from the artwork.

---

## Content fundamentals

- **Language:** Brazilian Portuguese, with English program names kept in English (Plataforma AZ, Educacross, CLIL). Copy is warm, direct, and parent-facing.
- **Voice:** aspirational and reassuring — it speaks to families. Example headline: *"Na Luminova, aprender é descobrir o mundo todos os dias."* Program value props use an equation style: *"Pedagogia + Tecnologia = excelência na alfabetização"* and *"Economia Comportamental + Matemática Financeira ="*.
- **Address:** mixes inclusive *"nós"* ("utilizado por nós") with second person *"você"* / *"seu filho"* — talking to the parent about the child.
- **Casing:** Titles use Title Case or sentence case, never all-caps except the small *ESCOLA* kicker in the logo and short labels. Emphasis is carried by **bold** runs inside body copy and by orange/color words ("Inglês é o **meio**, não o fim").
- **Emoji:** none. The playfulness comes from color, illustration, and rounded type — not emoji.
- **Numbers/marketing:** light, specific ("Matrículas 2026", "escolas de elite em São Paulo"). No stat-slop.

## Visual foundations

- **Color:** a warm, high-energy education palette. Core = **purple #642D90** (wordmark) + **orange #FA9D1C** (logo circle, primary highlight) + **yellow #FCBC00** + near‑black **plum #210E30** (dark backgrounds). Seven **program colors** extend this: AZ yellow, Macmillan orange, Educacross purple, Ed. Financeira lime #99CC34, Régua Literária plum, Feira de Ciências navy #013366, Projetos teal #028169.
- **Type:** geometric bold titles (**Arista Pro Alternate**), rounded brand voice + humanist body (**Museo Sans Rounded**, echoing the "luminova" wordmark). Titles are large and tight (line-height ~1.02).
- **Signature motif — highlight boxes:** headline words sit inside solid color rectangles with tight padding (~0.08em × 0.22em) and a barely-there 2px radius. Multi-line titles box each line separately and left-align them in a stack.
- **Backgrounds:** two families — (1) dark **purple→plum gradient** (`--gradient-brand`) for covers/section slides, (2) light grey/white for content. Photography is full-bleed, warm, real students in Luminova uniforms.
- **Shape language — organic + rounded:** photo panels are cut with **concave curves / ellipse clips**; section slides use a two-tone **wavy divider** (orange stroke over plum). Corners elsewhere are generously rounded; buttons and badges are full pills; the logo mark is a circle.
- **Program rails:** program slides carry thin vertical color **edge tabs** (rotated labels) — completed tracks stack on the left, upcoming on the right, with the active track occupying the full canvas. The overview slide shows all seven as equal full-height columns with rotated titles.
- **Supporting copy:** lead paragraphs are preceded by a short **vertical accent rule** (4px pill).
- **Shadows:** soft and warm (plum-tinted), never harsh. Cards use `--shadow-md`.
- **Motion:** implied gentle ease-out; no bounces or aggressive animation. Hover = slight lift/brighten; press = subtle scale-down (0.97).

## Iconography

- **Illustration-led, not icon-led.** The deck's personality comes from **mascots and spot illustrations** — the AZ bee, the Educacross owls, the Tangram/Régua book character, the science atom, the "Projetos" heart figure. The **Educacross owl mascot ("Belinha")** and the **AZ** mark are now available under `assets/illustrations/` and `assets/logos-partners/`. The remaining program illustrations (bee, book character, atom, heart) are still baked into the source slides only — where one is needed and not yet supplied, leave a labelled placeholder and request the artwork.
- **Partner / ecosystem logos** are provided under `assets/logos-partners/`: **Escola SEB (Plataforma AZ)**, **Educacross** (horizontal), **Macmillan Education**, **MapleBear Canadian School**, **My Life · Instituto Ayrton Senna** (socioemotional partner), and a **white SEB** mark for dark backgrounds. Use the supplied files — never recreate a partner mark. `assets/illustrations/pdca-az-wheel.jpeg` holds the AZ study-method (PDCA) diagram.
- **UI icons:** the deck has no product UI, so there is no established UI icon set. For interface work, substitute **[Lucide](https://lucide.dev)** (1.5px stroke, rounded) via CDN — it matches the brand's rounded geometry. This is a substitution; flag it if a branded icon set surfaces later.
- **No emoji, no unicode glyph icons.**

## Fonts

The official brand fonts are installed and self-hosted under `assets/fonts/`, declared in `tokens/fonts.css`:
- **Arista Pro Alternate** — geometric display, **used ONLY for logos and titles/headlines**. Weights: ExtraLight 200, Light 300, Regular 400, Bold 700, Fat 900. *Trial builds were supplied — replace with licensed files before production.*
- **Museo Sans Rounded** — rounded body copy and brand voice, and **all UI text (buttons, badges, labels)**. Weights: 300, 500 (mapped to normal/400), 700, 900.

> **Typography rule (strict):** **Every number — years, counts, stats, prices, dates — is set in Museo Sans Rounded** (`--font-numeric`), never Arista. Arista Pro is reserved for logos and titles/headlines only. (The Arista trial cut also lacks numeral glyphs, so digits set in it render blank — the licensed font restores them, but the rule stands regardless.)

## Intentional additions

- **Button** and **Badge** — the source is a slide deck with no interactive UI, but enrollment/marketing surfaces need CTAs and labels. Both are built strictly from brand tokens (pill shape, orange/purple fills). Treat as house style, verify against real product when available.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (imports only). Consumers link this.
- `readme.md` — this file.
- `SKILL.md` — portable Agent Skill wrapper.

**tokens/** — `colors.css`, `typography.css`, `layout.css` (spacing/radius/shadow/motion), `fonts.css`.

**Components** (`window.LuminovaDesignSystem_*`)
- `components/brand/` — **Logo** (official horizontal lockup, with `plate` variant).
- `components/core/` — **Button** (pill CTA), **Badge** (label pill).
- `components/slide/` — **HighlightBox** (boxed-title motif), **QuoteBlock** (ruled lead copy), **ProgramRail** / **ProgramColumn** + `PROGRAMS` data (the seven color tracks).

**foundations/** — specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**ui_kits/slides/** — click-through recreation of the commercial deck templates: cover, section/divider, program overview, program detail. Entry: `ui_kits/slides/index.html`.

**assets/** — brand logos (`logo-luminova-full.png` transparent default, `-horizontal.png` on-black, `-horizontal-white-bg.png` on-white, `logo-luminova-mark.png` circle symbol, transparent) and the eight source slides (`slide-*.png`). `assets/fonts/` holds the brand fonts; `assets/logos-partners/` the Grupo SEB ecosystem marks (Escola SEB, Educacross, MapleBear, My Life · Ayrton Senna, white SEB); `assets/illustrations/` the Educacross owl mascot and the AZ/PDCA diagram.
