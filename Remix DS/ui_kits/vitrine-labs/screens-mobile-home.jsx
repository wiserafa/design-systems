// screens-mobile-home.jsx — Home A e Home B em mobile (390) para decisão
// Consome window.{T, ...} de shared.jsx

/* Cabeçalho mobile comum */
const MobileTop = () => (
  <div style={{ padding: '18px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Brandline size={15} product="vitrine" />
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ position: 'relative', display: 'flex' }}>
        <span style={{ fontFamily: T.mono, fontSize: 9, fontWeight: 700, position: 'absolute', top: -6, right: -7, background: T.accent, color: T.accentFg, borderRadius: 99, padding: '0px 4px' }}>3</span>
        <IconBell size={17} color={T.muted} />
      </div>
      <Avatar name="Rafael Braganholi" size={28} />
    </div>
  </div>
);

/* ============ HOME A · MOBILE — resumo primeiro ============ */
const ScreenHomeAMobile = () => (
  <div style={{ width: '100%', height: '100%', background: T.bg, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
    <MobileTop />
    <div style={{ flex: 1, padding: '16px 20px 90px', display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden' }}>
      <div>
        <span className="labs-eyebrow" style={{ marginBottom: 4, fontSize: 10.5 }}>semana 24 · 06—12 jun</span>
        <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 27, color: T.fg, margin: 0, letterSpacing: '-.02em' }}>
          Boa tarde, <span style={{ color: T.purpleLight }}>Rafael.</span>
        </h1>
      </div>

      {/* esta semana — bloco de números */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span className="labs-eyebrow" style={{ marginBottom: 0, fontSize: 10.5 }}>Esta semana</span>
        <div style={{ display: 'flex', gap: 14 }}>
          {[['1', 'prática sua no ar'], ['1', 'destaque conquistado'], ['7', 'colegas publicaram']].map(([v, l]) => (
            <div key={l} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontFamily: T.display, fontWeight: 900, fontSize: 26, color: T.purpleLight, lineHeight: 1 }}>{v}</span>
              <span style={{ fontFamily: T.body, fontSize: 11, color: T.muted, lineHeight: 1.3 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* destaque com foto real */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span className="labs-eyebrow" style={{ marginBottom: 0, fontSize: 10.5 }}>Destaques desta semana</span>
        <div style={{ background: T.surface, border: `1px solid ${T.purple}`, borderRadius: T.radiusLg, boxShadow: T.glowPurple, overflow: 'hidden' }}>
          <Photo p={PRACTICES[4]} h={130} />
          <div style={{ padding: '12px 16px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <StateBadge state="destaque" size={9} />
            <span style={{ fontFamily: T.display, fontWeight: 700, fontSize: 15, color: T.fg }}>{PRACTICES[4].title}</span>
            <span style={{ fontFamily: T.mono, fontSize: 10, color: T.muted }}>katia nascimento · fundamental i</span>
          </div>
        </div>
      </div>

      {/* atividade recente */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 11 }}>
        <span className="labs-eyebrow" style={{ marginBottom: 0, fontSize: 10.5 }}>Atividade recente</span>
        {[['Jessica Campos', 'marcou "Mentoria ENEM" como inspiradora'], ['Lucas Gurian', 'marcou "Mentoria ENEM" como inspiradora']].map(([name, action]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name={name} size={26} />
            <span style={{ fontFamily: T.body, fontSize: 12, color: T.muted, lineHeight: 1.35 }}>
              <b style={{ color: T.fg, fontWeight: 600 }}>{name}</b> {action}
            </span>
          </div>
        ))}
      </div>
    </div>
    <TabBar active="Home" />
  </div>
);

/* ============ HOME B · MOBILE — feed integrado ============ */
const ScreenHomeBMobile = () => (
  <div style={{ width: '100%', height: '100%', background: T.bg, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
    <MobileTop />
    <div style={{ flex: 1, padding: '16px 20px 90px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
      <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 27, color: T.fg, margin: 0, letterSpacing: '-.02em' }}>
        Boa tarde, <span style={{ color: T.purpleLight }}>Rafael.</span>
      </h1>

      {/* strip de números — uma linha só */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        {[['1', 'no ar'], ['1', 'destaque'], ['7', 'colegas']].map(([v, l]) => (
          <span key={l} style={{
            fontFamily: T.mono, fontSize: 11, color: T.muted, letterSpacing: '.04em',
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.pill, padding: '6px 12px',
          }}>
            <b style={{ color: T.purpleLight, fontWeight: 700 }}>{v}</b> {l}
          </span>
        ))}
      </div>

      {/* filtros */}
      <div style={{ display: 'flex', gap: 7, overflow: 'hidden' }}>
        {['tudo', 'integral', 'fund i', 'fund ii', 'médio'].map((s, i) => <Chip key={s} label={s} active={i === 0} />)}
      </div>

      {/* feed direto */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <PracticeCard p={{ ...PRACTICES[4], photoH: 140 }} active />
        <PracticeCard p={{ ...PRACTICES[1], photoH: 140 }} />
      </div>
    </div>
    <TabBar active="Home" />
  </div>
);

Object.assign(window, { ScreenHomeAMobile, ScreenHomeBMobile });
