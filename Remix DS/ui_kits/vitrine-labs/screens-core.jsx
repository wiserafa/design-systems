// screens-core.jsx — Login, Home A (resumo) e Home B (feed integrado)
// Consome window.{T, Brandline, ...} de shared.jsx

/* ============ LOGIN (desktop) ============ */
const ScreenLogin = () => (
  <div style={{ width: '100%', height: '100%', background: T.bg, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
    {/* halo de hero — assinatura */}
    <div style={{
      position: 'absolute', top: -180, left: '50%', transform: 'translateX(-50%)',
      width: 720, height: 480, borderRadius: '50%',
      background: 'radial-gradient(closest-side, oklch(58% .18 305 / .32), transparent)',
      filter: 'blur(30px)',
    }}></div>
    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
      <Brandline size={24} />
      <div style={{
        marginTop: 36, width: 460, background: T.surface, border: `1px solid ${T.border}`,
        borderRadius: T.radiusLg, padding: '44px 44px 36px', boxShadow: T.glowPurple,
        display: 'flex', flexDirection: 'column', gap: 16,
      }}>
        <span className="labs-eyebrow" style={{ marginBottom: 0 }}>Vitrine Pedagógica</span>
        <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 34, color: T.fg, margin: 0, letterSpacing: '-.02em', lineHeight: 1.05 }}>
          A escola que a gente faz, <span style={{ color: T.purpleLight }}>registrada.</span>
        </h1>
        <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, margin: 0 }}>Acesse com sua conta Google da Luminova.</p>
        <button style={{
          fontFamily: T.display, fontWeight: 700, fontSize: 16, cursor: 'pointer',
          padding: '15px 24px', borderRadius: T.pill, border: `1px solid ${T.borderStrong}`,
          background: T.elevated, color: T.fg,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 8,
        }}>
          <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.5 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6C12.3 13.2 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.8c4.4-4.1 7.2-10.1 7.2-17.5z"/><path fill="#FBBC05" d="M10.4 28.8c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8l-7.8-6C.9 16.5 0 20.1 0 24s.9 7.5 2.6 10.8l7.8-6z"/><path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.4-5.8c-2 1.4-4.7 2.2-7.8 2.2-6.3 0-11.7-3.7-13.6-9.1l-7.8 6C6.5 42.6 14.6 48 24 48z"/></svg>
          Entrar com Google
        </button>
        <span style={{ fontFamily: T.mono, fontSize: 11.5, color: T.purpleLight, letterSpacing: '.04em' }}>apenas e-mails @luminovainterlagos.com.br</span>
      </div>
      <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: T.body, fontSize: 13, color: T.muted }}>Vitrine Pedagógica · Uma curadoria da Escola Luminova Interlagos</span>
        <div style={{ background: '#fff', borderRadius: 999, padding: '8px 16px' }}>
          <img src="../../assets/luminova-horizontal.svg" alt="Escola Luminova" style={{ height: 22, display: 'block' }} />
        </div>
      </div>
    </div>
  </div>
);

/* ============ LOGIN (mobile 390) ============
   Hierarquia invertida vs. desktop: "Vitrine Pedagógica" é o display
   principal; a copy vira apoio. Sem logo no centro inferior. */
const ScreenLoginMobile = () => (
  <div style={{ width: '100%', height: '100%', background: T.bg, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
    {/* halo de hero — assinatura */}
    <div style={{
      position: 'absolute', top: -140, left: '50%', transform: 'translateX(-50%)',
      width: 480, height: 360, borderRadius: '50%',
      background: 'radial-gradient(closest-side, oklch(58% .18 305 / .32), transparent)',
      filter: 'blur(30px)',
    }}></div>
    <div style={{ position: 'relative', padding: '26px 24px 0', display: 'flex', justifyContent: 'center' }}>
      <Brandline size={16} />
    </div>
    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 24px 28px', gap: 0 }}>
      {/* destaque: o nome do produto */}
      <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 44, color: T.fg, margin: 0, letterSpacing: '-.02em', lineHeight: 1.02 }}>
        Vitrine<br /><span style={{ color: T.purpleLight }}>Pedagógica.</span>
      </h1>
      {/* copy como apoio */}
      <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, margin: '14px 0 0', lineHeight: 1.5, maxWidth: 300 }}>
        Este espaço é de quem <span style={{ color: T.accent, fontWeight: 600 }}>faz a escola acontecer.</span>
      </p>
      <div style={{
        marginTop: 32, width: '100%', background: T.surface, border: `1px solid ${T.border}`,
        borderRadius: T.radiusLg, padding: '24px 22px 22px', boxShadow: T.glowPurple,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
      }}>
        <button style={{
          fontFamily: T.display, fontWeight: 700, fontSize: 16, cursor: 'pointer',
          padding: '16px 24px', borderRadius: T.pill, border: `1px solid ${T.borderStrong}`,
          background: T.elevated, color: T.fg, alignSelf: 'stretch',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        }}>
          <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.5 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6C12.3 13.2 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.8c4.4-4.1 7.2-10.1 7.2-17.5z"/><path fill="#FBBC05" d="M10.4 28.8c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8l-7.8-6C.9 16.5 0 20.1 0 24s.9 7.5 2.6 10.8l7.8-6z"/><path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.4-5.8c-2 1.4-4.7 2.2-7.8 2.2-6.3 0-11.7-3.7-13.6-9.1l-7.8 6C6.5 42.6 14.6 48 24 48z"/></svg>
          Entrar com Google
        </button>
        <span style={{ fontFamily: T.mono, fontSize: 11, color: T.purpleLight, letterSpacing: '.04em' }}>apenas e-mails @luminovainterlagos.com.br</span>
      </div>
    </div>
    {/* rodapé textual — sem logo */}
    <div style={{ position: 'relative', padding: '0 24px 30px', display: 'flex', justifyContent: 'center' }}>
      <span style={{ fontFamily: T.mono, fontSize: 10.5, color: T.muted, letterSpacing: '.08em', textAlign: 'center' }}>uma curadoria da escola luminova interlagos</span>
    </div>
  </div>
);

/* ============ HOME · VARIAÇÃO A — "Resumo" (números primeiro) ============ */
const ScreenHomeA = () => (
  <div style={{ width: '100%', minHeight: '100%', background: T.bg, display: 'flex', flexDirection: 'column' }}>
    <Header active="Home" />
    <div style={{ padding: '36px 40px 40px', maxWidth: 1200, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div>
        <span className="labs-eyebrow" style={{ marginBottom: 8 }}>semana 24 · 06—12 jun</span>
        <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 40, color: T.fg, margin: 0, letterSpacing: '-.02em' }}>
          Boa tarde, <span style={{ color: T.purpleLight }}>Rafael.</span>
        </h1>
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <Stat value="1" label="prática sua no ar" delta="1" />
        <Stat value="1" label="destaque conquistado" accent />
        <Stat value="7" label="colegas publicaram esta semana" />
        <div style={{
          flex: 1.4, background: T.surface, border: `1px solid ${T.purple}`, borderRadius: T.radiusLg,
          boxShadow: T.glowPurple, padding: '18px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10,
        }}>
          <span style={{ fontFamily: T.body, fontSize: 14, color: T.fg, fontWeight: 600 }}>Sua próxima prática começa aqui.</span>
          <div><Btn kind="primary" size="sm">+ Publicar prática</Btn></div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 20 }}>
        <section style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="labs-eyebrow" style={{ marginBottom: 0 }}>Destaques desta semana</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {PRACTICES.filter(p => p.state === 'destaque').slice(0, 2).map(p => (
              <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Photo p={p} h={120} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <StateBadge state="destaque" size={9.5} />
                  <span style={{ fontFamily: T.display, fontWeight: 700, fontSize: 15, color: T.fg }}>{p.title}</span>
                  <span style={{ fontFamily: T.mono, fontSize: 10.5, color: T.muted }}>{p.author.toLowerCase()} · {p.tags.split('·')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="labs-eyebrow" style={{ marginBottom: 0 }}>Atividade recente</span>
          {[['Jessica Campos', 'marcou "Mentoria ENEM" como inspiradora'], ['Lucas Gurian', 'marcou "Mentoria ENEM" como inspiradora'], ['Bruna Costa', 'comentou em "Leitura, Releitura e Criação Teatral."'], ['Katia Nascimento', 'publicou "Leitura, Releitura e Criação Teatral."']].map(([name, action], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar name={name} size={30} />
              <span style={{ fontFamily: T.body, fontSize: 13.5, color: T.muted, lineHeight: 1.4 }}>
                <b style={{ color: T.fg, fontWeight: 600 }}>{name}</b> {action}
              </span>
            </div>
          ))}
          <a href="#" style={{ fontFamily: T.mono, fontSize: 11.5, color: T.purpleLight, letterSpacing: '.06em' }}>ver tudo →</a>
        </section>
      </div>
    </div>
  </div>
);

/* ============ HOME · VARIAÇÃO B — "Feed integrado" (conteúdo primeiro) ============ */
const ScreenHomeB = () => (
  <div style={{ width: '100%', minHeight: '100%', background: T.bg, display: 'flex', flexDirection: 'column' }}>
    <Header active="Home" />
    <div style={{ padding: '36px 40px 40px', maxWidth: 1200, width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 28, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <span className="labs-eyebrow" style={{ marginBottom: 8 }}>feed da escola · semana 24</span>
          <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 36, color: T.fg, margin: 0, letterSpacing: '-.02em' }}>
            Boa tarde, <span style={{ color: T.purpleLight }}>Rafael.</span>
          </h1>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['tudo', 'integral', 'fundamental i', 'fundamental ii', 'ensino médio'].map((s, i) => <Chip key={s} label={s} active={i === 0} glow />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {PRACTICES.slice(0, 4).map((p, i) => <PracticeCard key={p.id} p={p} active={i === 0} />)}
        </div>
      </div>

      <aside style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 20 }}>
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="labs-eyebrow" style={{ marginBottom: 0 }}>Esta semana</span>
          {[['1', 'prática sua no ar'], ['1', 'destaque conquistado'], ['7', 'colegas publicaram']].map(([v, l]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontFamily: T.display, fontWeight: 900, fontSize: 26, color: T.purpleLight, lineHeight: 1 }}>{v}</span>
              <span style={{ fontFamily: T.body, fontSize: 13, color: T.muted }}>{l}</span>
            </div>
          ))}
        </div>
        <div style={{ background: T.surface, border: `1px solid ${T.accent}`, borderRadius: T.radiusLg, boxShadow: T.glowAccent, padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: T.accent }}>mentoria enem · piloto</span>
          <span style={{ fontFamily: T.display, fontWeight: 700, fontSize: 16, color: T.fg }}>Sextas-feiras · 13h00</span>
          <span style={{ fontFamily: T.body, fontSize: 13, color: T.muted }}>Aulas duplas · Matemática ENEM · foco no que a prova mais cobra.</span>
          <span style={{ fontFamily: T.mono, fontSize: 11, color: T.muted }}>12 · 19 · 26 jun</span>
        </div>
        <div><Btn kind="primary" glow>+ Publicar prática</Btn></div>
      </aside>
    </div>
  </div>
);

Object.assign(window, { ScreenLogin, ScreenLoginMobile, ScreenHomeA, ScreenHomeB });
