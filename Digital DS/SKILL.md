---
name: luminova-design
description: Use this skill to generate well-branded interfaces and assets for Escola Luminova Interlagos (sistema de design 100% digital — site, plataforma do aluno, e-mails, redes sociais), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:

- `colors_and_type.css` — design tokens (CSS vars) ready to import
- `assets/` — logos (mark, horizontal lockup, full lockup com cidade)
- `fonts/` — Museo Sans Rounded (brand display, weights 100/300/500/700/900/1000) + Arista Pro (logo construction only — NOT for UI)
- `preview/` — small spec cards showing colors, type, components
- `ui_kits/website/` — pixel-fidelity recreations of the institutional site
- `ui_kits/student-platform/` — pixel-fidelity recreation of the student portal

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. Always `<link rel="stylesheet" href="colors_and_type.css">` so tokens resolve, and reference logos as `<img src="assets/...">` — never inline SVG or recreate the mark.

If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (site institucional? plataforma? e-mail? post de rede social?), confirm o segmento (Fundamental 1 / 2 / Médio / Professores), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Non-negotiables (rápido):**
- Português brasileiro, sentence case, sem corporativês escolar
- Eyebrow laranja UPPERCASE + headline display em roxo — assinatura da marca
- Flat: sem gradientes, sem texturas, sem sombras pesadas
- Blobs roxos + laranjas como decoração de fundo
- Footer sempre em bloco roxo sólido com logo branca
- Cor de acento muda por segmento (turquesa / laranja / roxo profundo / navy)
- Logo **nunca** é desenhada — sempre `<img>` apontando para `assets/`
