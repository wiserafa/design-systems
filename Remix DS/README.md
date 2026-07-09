# Luminova Labs — Design System

Sistema de design do **Luminova Labs**, o braço de tecnologia e IA da **Escola Luminova Interlagos** (K-12, São Paulo). Labs é a marca-mãe dos produtos digitais construídos por squads de alunos e educadores: Vitrine Pedagógica, Makerthon, portal do aluno e o que vier.

Labs é **submarca**: herda a alma da Luminova — roxo + laranja, Museo Sans Rounded, curvas generosas — mas é o filho rebelde. **A regra de ouro: o esqueleto é da mãe; a pele e a atitude são do Labs.** Alguém deve reconhecer "isto é Luminova" antes de "isto é Labs".

> Este projeto é um remix do sistema **Luminova Digital** (marca-mãe). Os UI kits da mãe foram preservados em `ui_kits/` como referência de continuidade, apontando para `legacy_lum.css`.

---

## A rebeldia (o que muda em relação à mãe)

| Dimensão | Mãe (Luminova Digital) | Labs |
|---|---|---|
| Superfície padrão | Branca / off-white | **Escura** — canvas grafite-índigo `oklch(14% .02 285)` |
| Sombra | Quase ausente, proibida pesada | **Glow** como assinatura — halo roxo/laranja sutil em hero, card ativo, CTA em foco |
| Espaço de cor | Hex | **oklch** — acentos vívidos e perceptualmente uniformes no escuro |
| Roxo | `#652D91` profundo | `oklch(58% .18 305)` e **purple-light `70%`** — lightness alta p/ legibilidade no escuro |
| Tipografia de acento | — | **JetBrains Mono** em primeiro plano: numerais de etapa (`01·Criar`), IDs (`PROJETO 001`), estados (`build → test → ship`) |
| Sistema de contexto | Cor por segmento escolar (F1/F2/Médio/Profs) | **Estados de squad**: `idea` (neutro) · `build`/`test` (roxo) · `ship` (laranja) |
| Eyebrow | Manrope laranja UPPERCASE | **Mono laranja UPPERCASE** (letter-spacing .18em) |
| Blobs decorativos | Roxo/laranja 15–40% | **Halo radial desfocado** (radial-gradient + blur 30px) atrás de heros |

### Guardrails (inegociáveis)

- **Não virar cyberpunk/neon.** Glow é presença e calor — `0 0 60px / 25%` no máximo. Se parecer gamer ou startup futurista genérica, errou.
- **Continuidade com a mãe visível.** Hues herdados (roxo 305, laranja 60), Museo + Manrope, curvas, sentence case, PT-BR caloroso.
- **Sem gradientes de cor** (o halo radial monocromático é a única exceção). Superfícies chapadas.

---

## Quick index

```
README.md                ← este arquivo
SKILL.md                 ← invocação como Agent Skill
colors_and_type.css      ← tokens Labs (--labs-*, oklch, dark-first)
legacy_lum.css           ← tokens da mãe (--lum-*) — APENAS p/ ui_kits/ herdados
assets/                  ← logos da mãe (co-brand)
fonts/                   ← Museo Sans Rounded + Arista Pro (logo only)
preview/                 ← cards do Design System tab
ui_kits/                 ← kits da MÃE (herança, pré-reskin Labs)
uploads/labs-design-v0-preview.html  ← V0 aprovado que originou esta versão
```

---

## Brand snapshot

- **Nome:** Luminova Labs · braço de tecnologia e IA da Escola Luminova Interlagos
- **Função:** marca-mãe dos produtos digitais; squads de alunos + educadores constroem soluções reais para a própria escola em ciclos curtos
- **Audiência:** alunos e educadores makers, famílias (vitrine), parceiros
- **Idioma:** Português brasileiro (PT-BR)
- **Personalidade:** a alma acolhedora da Luminova com atitude de laboratório — curiosa, mão na massa, um pouco rebelde, nunca fria

---

## CONTENT FUNDAMENTALS

### Voz e tom

Herda a voz da mãe — **direta, calorosa, PT-BR contemporâneo, "você"** — e adiciona o vocabulário de laboratório: projeto, squad, ciclo, build, test, ship, versão.

| Faceta | Como soa |
|---|---|
| Direção | "você" com alunos e educadores. "a gente" é permitido (mais que na mãe). |
| Energia | Frases curtas, verbos de fazer: criar, construir, testar, lançar. |
| Jargão | `build → test → ship` e IDs mono são **linguagem interna** (UI do Labs, badges, dashboards). Em texto corrido pra fora (famílias, site), traduzir: *construir, testar, lançar*. |
| Versões | Produtos têm versão explícita (`v0.3`) — imperfeição publicada é pedagogia. |

### Casing

- **Títulos:** sentence case, sempre (herdado).
- **Eyebrows e labels mono:** UPPERCASE com letter-spacing `.18em`. Ex.: `PROJETO 001`, `MAKERTHON · EDIÇÃO 02`.
- **Estados de squad:** sempre minúsculos, em mono: `idea`, `build`, `test`, `ship`.
- **Brandline:** sempre minúscula: `luminova/labs.`
- **Botões:** sentence case. *"Aplicar para o Labs"*, *"Ver projeto"*.

### Exemplos de copy (drop-in)

**Hero do Labs**
> Eyebrow (mono): `LUMINOVA LABS · TURMA 2026`
> Título: *Onde a curiosidade vira projeto.*
> Sub: *Squads de alunos e educadores constroem soluções reais para a própria escola. Em ciclos curtos, com erro permitido.*
> CTA: *Aplicar para o Labs*

**Card de projeto**
> ID (mono, accent): `PROJETO 001`
> Título: *Vitrine Pedagógica*
> Texto: *Registro vivo das práticas da escola. Primeiro produto sob a marca Labs.*
> Badge: `ship`

**Push / aviso interno**
> *Sprint 04 fecha sexta. Squad Vitrine apresenta às 14h no Lab.*

### O que evitar

- ❌ Tudo que a mãe evita (corporativês escolar, caps em frases, exclamações em série).
- ❌ Hype de startup: "disruptivo", "revolucionário", "o futuro é agora".
- ❌ Tecnojargão pra fora: famílias leem *construir/testar/lançar*, não *deploy/sprint/MVP*.
- ❌ Emoji em UI do Labs. Permitido só em redes sociais, com parcimônia (herdado).

---

## VISUAL FOUNDATIONS

### Color

Tokens em `colors_and_type.css` — todos `--labs-*`, todos oklch.

- **Superfícies (dark-first):** `--labs-bg` (canvas grafite-índigo 14%), `--labs-surface` (card 18%), `--labs-elevated` (destaque 22%). Hierarquia por lightness, não por sombra.
- **Texto:** `--labs-fg` warm near-white; `--labs-fg-muted` para secundário. Nunca branco puro frio.
- **Hues herdados:** `--labs-purple` (58% .18 305) e `--labs-purple-light` (70% — hover, highlights de headline); `--labs-accent` laranja (77% .16 60 — CTA, eyebrow, ship). Sobre accent, texto escuro `--labs-accent-fg`.
- **Estados de squad** (substituem os segmentos escolares da mãe): `idea` neutro · `build`/`test` roxo · `ship` laranja. Cada um com par `-soft` para fundos de badge. **Ship é o único badge preenchido.**
- **Bordas:** branco com alpha (`.10` repouso, `.15` hover/ghost). Hairlines, nunca cinza opaco.
- **Sem gradientes de cor.** Única exceção: o halo radial monocromático (assinatura).

### Glow (assinatura)

O que a mãe proíbe, o Labs assina — com regras:

- `--labs-glow-purple` (`0 0 60px / 25%`): hero, card ativo/hover, item de navegação selecionado.
- `--labs-glow-accent` (`0 0 48px / 22%`): hover de CTA primário, badge/momento `ship`.
- **Halo de hero:** elipse `radial-gradient(closest-side, oklch(58% .18 305 / .35), transparent)` + `filter: blur(30px)`, atrás do display. Ver `preview/glow.html`.
- Repouso usa `--labs-shadow-card` (quase nada). O glow **acende** em foco/ativo — nunca está em tudo ao mesmo tempo.
- Teste do neon: se dois glows competem na mesma dobra, remova um.

### Typography

- **Display:** Museo Sans Rounded (herdada; weights locais em `fonts/`). 900 para display/h1, 700 para títulos. Fallback Nunito.
- **Body:** Manrope (Google Fonts).
- **Mono (novo):** JetBrains Mono — numerais de etapa, IDs de projeto, estados, metadados técnicos. `--labs-fs-mono` 13px. **Nunca em parágrafos.**
- **Headline pattern do Labs:** eyebrow mono laranja UPPERCASE + título display **branco** com highlight em `--labs-purple-light` (ex.: *Onde a curiosidade <span class="labs-hl">vira projeto.</span>*). Na mãe o título era roxo; no escuro o roxo profundo não lê — o branco assume e o roxo-claro destaca.
- **Escala herdada:** Display 64 → H1 48 → H2 36 → H3 28 → body 16. `text-wrap: balance` em títulos.

### Cards

- `--labs-surface` + `border: 1px solid var(--labs-border)` + `--labs-radius-lg` (20px) + `--labs-shadow-card`.
- Hover/ativo: borda vira `--labs-purple` e glow roxo acende; `translateY(-2px)` opcional.
- Card de projeto leva ID mono accent no topo (`PROJETO 001`) e badge de estado no rodapé.
- Sem borda colorida à esquerda (anti-padrão herdado).

### Layout & spacing

- Grid 12 colunas, 1080–1200px max-width, gutters 24px (esqueleto da mãe).
- Espaçamento múltiplo de 8 (`--labs-space-*`).
- Seções separadas por hairline `--labs-border`, não por mudança de cor de fundo.
- Footer: bloco `--labs-surface` com hairline no topo, brandline à esquerda — **não** mais roxo sólido.

### Radii

| Token | Uso |
|---|---|
| `--labs-radius-sm` 6px | tags, inputs pequenos |
| `--labs-radius` 12px | botões retangulares, swatches |
| `--labs-radius-lg` 20px | cards, modais |
| `--labs-radius-pill` 999px | botões pill (padrão), badges, chips |

### Hover & press

- **CTA laranja:** hover → glow accent + `translateY(-1px)`. Press → `--labs-accent-deep`.
- **Botão roxo:** hover → glow purple + `translateY(-1px)`. Press → `--labs-purple-deep`.
- **Ghost:** hover → borda e texto `--labs-purple-light`.
- **Foco:** `--labs-focus-ring` (3px laranja alpha) sempre visível (herdado).
- Nunca opacidade como único feedback (herdado).

### Motion

Herdada da mãe, intacta: ease `cubic-bezier(.2,.8,.2,1)`, durações 120/220/360ms, fades + translateY sutil, sem bounces. O glow transiciona com `--labs-dur-normal`.

### Imagery

- Fotografia real de alunos/squads/espaço maker, calor neutro a quente (herdado).
- Sobre o escuro, fotos em cards com `--labs-radius-lg` e hairline — nunca full-bleed atrás de texto.
- Sem fotos: usar halo + mono (ID do projeto) como placeholder, não blobs nem quadros cinza.

---

## ICONOGRAPHY

- **Lucide** (CDN), linear, stroke 2px, round caps — herdado da mãe. 20–24px, `currentColor` (geralmente `--labs-purple-light` ou `--labs-fg`).
- Vocabulário Labs: `flask-conical`, `cpu`, `git-branch`, `rocket`, `lightbulb`, `wrench`.
- Emoji e unicode-como-ícone: não (herdado).

### Logos & marca

- **Brandline Labs (primária no escuro):** `luminova/labs.` tipográfica — Museo 700 minúscula, `luminova` em purple-light, `/` em fg-muted, `labs.` em accent. Ver `preview/logos.html`. É a única "logo" construída em texto — exceção aprovada no V0.
- **Logos da mãe** (`assets/`): co-brand e contextos formais. Sobre superfícies escuras, **sempre em pílula branca** (`border-radius: 999px`, padding 10–14px / 18–22px). Nunca filtros, nunca redesenhar, sempre `<img src="assets/...">`.

---

## UI kits herdados (pré-reskin)

`ui_kits/website/` e `ui_kits/student-platform/` são os kits da **mãe** — claros, com segmentos escolares. Apontam para `legacy_lum.css` e ficam como referência de continuidade. **Não usar como base para produtos Labs** até o reskin (backlog: Vitrine Pedagógica como primeiro kit Labs).

---

## CAVEATS & open questions

- ✅ Tokens-alvo do V0 aprovado implementados literalmente (superfícies, texto, hues, forma, glow, fontes).
- ✅ Museo local (`fonts/`), Manrope + JetBrains Mono via Google Fonts.
- 🟡 **Kit Labs próprio ainda não existe** — os ui_kits são herança da mãe. Próximo passo natural: telas da Vitrine Pedagógica em pele Labs.
- 🟡 Brandline `luminova/labs.` é tipográfica por decisão do V0. Se o Labs ganhar símbolo próprio, substituir e mover para `assets/`.
- 🟡 Acessibilidade: contraste de `--labs-fg-muted` sobre `--labs-bg` ≈ 4.6:1 — ok para texto ≥14px; não usar muted em caption 12px sobre `--labs-elevated`.

## Dados institucionais

Herdados da mãe — usar SEMPRE estes, **nunca inventar contato**.

| Campo | Valor |
|---|---|
| Nome completo | Escola Luminova Interlagos |
| CNPJ | 50.904.622/0001-12 |
| Endereço | Rua Coronel Juliano, 111 — Interlagos, São Paulo/SP |
| Telefone | (11) 5666-8900 |
| WhatsApp | (11) 99896-5737 |
| E-mail | luminova.interlagos@luminovainterlagos.com.br |
| Site | luminovainterlagos.com.br |
| Instagram | @luminova.interlagos |
