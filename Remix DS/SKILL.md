---
name: luminova-labs-design
description: Use this skill to generate well-branded interfaces and assets for Luminova Labs (braço de tecnologia e IA da Escola Luminova Interlagos — produtos digitais, vitrines, dashboards de squad, materiais do Makerthon), either for production or throwaway prototypes/mocks. Dark-first, glow signature, oklch tokens. Contains design guidelines, colors, type, fonts, assets.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:

- `colors_and_type.css` — tokens Labs (`--labs-*`, oklch, dark-first) ready to import
- `legacy_lum.css` — tokens da marca-mãe (`--lum-*`) — APENAS para os UI kits herdados
- `assets/` — logos da mãe (co-brand; sobre escuro, sempre em pílula branca)
- `fonts/` — Museo Sans Rounded (display) + Arista Pro (logo construction only — NOT for UI)
- `preview/` — spec cards (cores, glow, type, estados de squad, componentes)
- `ui_kits/` — kits da MÃE (herança, claros) — não usar como base de produto Labs

If creating visual artifacts, copy assets out and create static HTML files. Always `<link rel="stylesheet" href="colors_and_type.css">` so tokens resolve.

**Non-negotiables (rápido):**
- Dark-first: canvas `--labs-bg` grafite-índigo; hierarquia por lightness de superfície
- Glow é a assinatura (hero, card ativo, CTA em foco) — sutil, calor; **nunca neon/cyberpunk/gamer**
- Eyebrow JetBrains Mono laranja UPPERCASE + headline Museo branca com highlight em `--labs-purple-light`
- Mono só na linguagem interna: `PROJETO 001`, `build → test → ship`, `01·Criar` — nunca em parágrafos
- Estados de squad no lugar de segmentos escolares: `idea` (neutro) · `build`/`test` (roxo) · `ship` (laranja, único badge preenchido)
- Botões pill, Museo 700; hover acende glow + translateY(-1px)
- PT-BR, sentence case, voz da mãe + verbos de fazer; tecnojargão só pra dentro
- Brandline tipográfica `luminova/labs.` no escuro; logo da mãe sempre `<img>` de `assets/`, em pílula branca sobre escuro
- Continuidade: alguém reconhece "isto é Luminova" antes de "isto é Labs"
