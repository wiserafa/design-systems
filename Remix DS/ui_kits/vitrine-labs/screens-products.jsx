// screens-products.jsx — Landing do Labs (manifesto + aplicar) e Portal do aluno · dashboard (conceito)
// Consome window.{T, ...} de shared.jsx

/* Badge de estado de squad (idea · build · ship) — linguagem dos produtos Labs */
const SquadBadge = ({ state }) => {
  const base = {
    display: 'inline-block', fontFamily: T.mono, fontSize: 11, fontWeight: 500,
    textTransform: 'uppercase', letterSpacing: '.1em', padding: '5px 12px', borderRadius: T.pill,
  };
  if (state === 'ship') return <span style={{ ...base, background: T.accent, color: T.accentFg }}>ship</span>;
  if (state === 'idea') return <span style={{ ...base, color: T.muted, border: `1px solid ${T.borderStrong}` }}>idea</span>;
  return <span style={{ ...base, background: 'var(--labs-state-build-soft)', color: T.purpleLight, border: `1px solid ${T.purple}` }}>{state}</span>;
};

/* ============ LANDING DO LABS (desktop) ============ */
const ScreenLanding = () => (
  <div style={{ width: '100%', minHeight: '100%', background: T.bg, display: 'flex', flexDirection: 'column' }}>
    {/* header */}
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', height: 72, borderBottom: `1px solid ${T.border}` }}>
      <Brandline size={19} />
      <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {['Manifesto', 'Projetos', 'Squads'].map(i => (
          <a key={i} href="#" style={{ fontFamily: T.display, fontWeight: 700, fontSize: 14, color: T.muted }}>{i}</a>
        ))}
        <Btn kind="primary" size="sm">Aplicar para o Labs</Btn>
      </nav>
    </header>

    {/* hero com halo */}
    <section style={{ position: 'relative', overflow: 'hidden', padding: '88px 40px 76px', borderBottom: `1px solid ${T.border}` }}>
      <div style={{
        position: 'absolute', top: -140, left: '50%', transform: 'translateX(-50%)',
        width: 680, height: 440, borderRadius: '50%',
        background: 'radial-gradient(closest-side, oklch(58% .18 305 / .35), transparent)', filter: 'blur(30px)',
      }}></div>
      <div style={{ position: 'relative', maxWidth: 1080, margin: '0 auto' }}>
        <span className="labs-eyebrow">Luminova Labs · turma 2027 · inscrições abertas</span>
        <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 62, lineHeight: 1.02, letterSpacing: '-.02em', color: T.fg, maxWidth: 760, margin: '0 0 20px' }}>
          Onde a curiosidade <span style={{ color: T.purpleLight }}>vira projeto.</span>
        </h1>
        <p style={{ fontFamily: T.body, fontSize: 19, color: T.muted, maxWidth: 540, margin: '0 0 32px', lineHeight: 1.6 }}>
          Squads de alunos e educadores constroem soluções reais para a própria escola. Em ciclos curtos, com erro permitido.
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 36 }}>
          <Btn kind="primary" glow>Aplicar para o Labs</Btn>
          <Btn kind="ghost">Ler o manifesto</Btn>
        </div>
        <div style={{ fontFamily: T.mono, fontSize: 13, color: T.accent, letterSpacing: '.06em' }}>01·Criar → 02·Testar → 03·Lançar · v1.0</div>
      </div>
    </section>

    {/* projetos */}
    <section style={{ padding: '60px 40px', borderBottom: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <span className="labs-eyebrow">Projetos</span>
        <h2 style={{ fontFamily: T.display, fontWeight: 700, fontSize: 30, color: T.fg, margin: '0 0 28px' }}>O que as squads já construíram</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
          {[
            ['PROJETO 001', 'Vitrine Pedagógica', 'Registro vivo das práticas da escola. Em uso por 21 educadores.', 'ship', true],
            ['PROJETO 002', 'Makerthon Luminova', 'Uma semana pra tirar a ideia do papel — squads atacam problemas reais com dono interno.', 'build', false],
            ['PROJETO 003', 'Portal do aluno', 'Aprendizagem assistida por IA, feita com os alunos. Ainda conceito.', 'idea', false],
          ].map(([id, title, body, state, hot]) => (
            <div key={id} style={{
              background: T.surface, border: `1px solid ${hot ? T.accent : T.border}`, borderRadius: T.radiusLg,
              padding: 24, boxShadow: hot ? T.glowAccent : T.shadowCard, display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <span style={{ fontFamily: T.mono, fontSize: 12, color: T.accent, fontWeight: 500 }}>{id}</span>
              <h3 style={{ fontFamily: T.display, fontWeight: 700, fontSize: 20, color: T.fg, margin: 0 }}>{title}</h3>
              <p style={{ fontFamily: T.body, fontSize: 14, color: T.muted, margin: 0, lineHeight: 1.55, flex: 1 }}>{body}</p>
              <div><SquadBadge state={state} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* quem faz + foto real */}
    <section style={{ padding: '60px 40px', borderBottom: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40, alignItems: 'center' }}>
        <div>
          <span className="labs-eyebrow">Quem faz</span>
          <h2 style={{ fontFamily: T.display, fontWeight: 700, fontSize: 30, color: T.fg, margin: '0 0 16px' }}>Gente da escola, problemas da escola.</h2>
          <p style={{ fontFamily: T.body, fontSize: 16, color: T.muted, lineHeight: 1.65, margin: '0 0 20px' }}>
            Cada squad mistura alunos e educadores em torno de um problema com dono interno.
            Produtos têm versão explícita — imperfeição publicada é pedagogia.
          </p>
          <div style={{ display: 'flex', gap: 28 }}>
            {[['3', 'produtos'], ['21', 'educadores na Vitrine'], ['v1.0', 'do design system']].map(([v, l]) => (
              <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontFamily: T.display, fontWeight: 900, fontSize: 30, color: T.purpleLight, lineHeight: 1 }}>{v}</span>
                <span style={{ fontFamily: T.body, fontSize: 12.5, color: T.muted }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        <img src="photos/equipe.png" alt="Equipe Luminova" style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: T.radiusLg, border: `1px solid ${T.border}`, display: 'block' }} />
      </div>
    </section>

    {/* manifesto CTA */}
    <section style={{ padding: '76px 40px', textAlign: 'center' }}>
      <span className="labs-eyebrow" style={{ display: 'inline-block' }}>Manifesto</span>
      <div style={{ fontFamily: T.display, fontWeight: 900, fontSize: 46, letterSpacing: '-.02em', lineHeight: 1.05, color: T.fg, margin: '10px 0 28px' }}>
        Aprender criando.<br /><span style={{ color: T.purpleLight }}>Construir o futuro.</span>
      </div>
      <Btn kind="primary" glow>Aplicar para o Labs</Btn>
    </section>

    {/* footer */}
    <footer style={{ background: T.surface, borderTop: `1px solid ${T.border}`, padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
      <Brandline size={16} />
      <span style={{ fontFamily: T.mono, fontSize: 11, color: T.muted, letterSpacing: '.05em' }}>Escola Luminova Interlagos · Rua Coronel Juliano, 111 — Interlagos, São Paulo/SP · luminovainterlagos.com.br</span>
    </footer>
  </div>
);

/* ============ PORTAL DO ALUNO · DASHBOARD (conceito, desktop) ============ */
const TODAY_CLASSES = [
  { time: '08:00', subject: 'Matemática', hue: 60, title: 'Funções quadráticas', room: 'Sala 204', now: true },
  { time: '09:40', subject: 'Português', hue: 305, title: 'Machado de Assis · Dom Casmurro', room: 'Sala 204' },
  { time: '10:30', subject: 'História', hue: 250, title: 'Brasil Imperial', room: 'Sala 204' },
];
const PENDING_ACTS = [
  { subject: 'matemática', hue: 60, title: 'Lista 12 · funções quadráticas', due: 'entrega quarta · 17/06', late: false },
  { subject: 'português', hue: 305, title: 'Resenha · capítulos 1–5 de Dom Casmurro', due: 'entrega sexta · 19/06', late: false },
  { subject: 'biologia', hue: 150, title: 'Relatório de laboratório · células', due: 'entrega ontem · 14/06', late: true },
];

const ScreenStudentDash = () => (
  <div style={{ width: '100%', minHeight: '100%', background: T.bg, display: 'grid', gridTemplateColumns: '232px 1fr' }}>
    {/* sidebar */}
    <aside style={{ background: T.surface, borderRight: `1px solid ${T.border}`, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ padding: '0 8px' }}><Brandline size={15} product="portal" /></div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {['Início', 'Aulas', 'Atividades', 'Tutor IA', 'Notas'].map((item, i) => (
          <a key={item} href="#" style={{
            fontFamily: T.display, fontWeight: 700, fontSize: 14, padding: '10px 14px',
            borderRadius: T.pill, color: i === 0 ? '#fff' : T.muted,
            background: i === 0 ? T.purple : 'transparent',
            boxShadow: i === 0 ? T.glowPurple : 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            {item}
            {item === 'Tutor IA' && <span style={{ fontFamily: T.mono, fontSize: 8.5, letterSpacing: '.1em', color: T.muted, border: `1px solid ${T.borderStrong}`, borderRadius: T.pill, padding: '2px 7px' }}>BETA</span>}
          </a>
        ))}
      </nav>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px' }}>
        <Avatar name="Júlia Mendes" size={32} />
        <div>
          <div style={{ fontFamily: T.body, fontSize: 13, fontWeight: 600, color: T.fg }}>Júlia Mendes</div>
          <div style={{ fontFamily: T.mono, fontSize: 10, color: T.muted }}>8º ano · turma 8b</div>
        </div>
      </div>
    </aside>

    {/* main */}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 64, borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div style={{
          fontFamily: T.body, fontSize: 13.5, color: T.muted, background: T.surface,
          border: `1px solid ${T.border}`, borderRadius: T.pill, padding: '9px 18px', width: 320,
        }}>Buscar aulas, atividades…</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ position: 'relative', display: 'flex' }}>
            <span style={{ fontFamily: T.mono, fontSize: 9, fontWeight: 700, position: 'absolute', top: -6, right: -7, background: T.accent, color: T.accentFg, borderRadius: 99, padding: '0 4px' }}>2</span>
            <IconBell size={17} color={T.muted} />
          </div>
          <Avatar name="Júlia Mendes" size={32} />
        </div>
      </div>

      <div style={{ padding: '30px 32px 36px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1000 }}>
        <div>
          <span className="labs-eyebrow" style={{ marginBottom: 6 }}>quarta · 15 jun · semana 24</span>
          <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 34, color: T.fg, margin: 0, letterSpacing: '-.02em' }}>
            Boa tarde, <span style={{ color: T.purpleLight }}>Júlia.</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 20, alignItems: 'start' }}>
          {/* hoje */}
          <section style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: 22, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="labs-eyebrow" style={{ marginBottom: 10 }}>Suas aulas hoje</span>
            {TODAY_CLASSES.map((c, i) => (
              <div key={c.time} style={{
                display: 'grid', gridTemplateColumns: '52px 10px 1fr auto', gap: 12, alignItems: 'center',
                padding: '12px 10px', borderRadius: T.radius,
                background: c.now ? 'oklch(58% .18 305 / .1)' : 'transparent',
                border: c.now ? `1px solid ${T.purple}` : '1px solid transparent',
              }}>
                <span style={{ fontFamily: T.mono, fontSize: 12.5, color: c.now ? T.purpleLight : T.muted }}>{c.time}</span>
                <span style={{ width: 8, height: 8, borderRadius: 99, background: `oklch(72% .14 ${c.hue})` }}></span>
                <div>
                  <div style={{ fontFamily: T.body, fontSize: 14, fontWeight: 600, color: T.fg }}>{c.title}</div>
                  <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.muted }}>{c.subject.toLowerCase()} · {c.room.toLowerCase()}</div>
                </div>
                {c.now && <span style={{ fontFamily: T.mono, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: T.purpleLight }}>agora</span>}
              </div>
            ))}
          </section>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* tutor IA — conceito */}
            <section style={{ background: T.surface, border: `1px solid ${T.accent}`, borderRadius: T.radiusLg, boxShadow: T.glowAccent, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: T.accent }}>tutor ia · beta</span>
              <p style={{ fontFamily: T.body, fontSize: 14, color: T.fg, margin: 0, lineHeight: 1.5 }}>
                "Vi que a Lista 12 vence quarta. Quer revisar funções quadráticas em 10 minutos antes?"
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <Btn kind="primary" size="sm">Bora</Btn>
                <Btn kind="ghost" size="sm">Mais tarde</Btn>
              </div>
            </section>

            {/* pendentes */}
            <section style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="labs-eyebrow" style={{ marginBottom: 0 }}>Atividades pendentes</span>
              {PENDING_ACTS.map(a => (
                <div key={a.title} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 99, background: `oklch(72% .14 ${a.hue})`, marginTop: 5, flexShrink: 0 }}></span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: T.body, fontSize: 13.5, fontWeight: 600, color: T.fg }}>{a.title}</div>
                    <div style={{ fontFamily: T.mono, fontSize: 10.5, color: a.late ? 'var(--labs-error)' : T.muted }}>{a.subject} · {a.due}{a.late ? ' · atrasada' : ''}</div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { SquadBadge, ScreenLanding, ScreenStudentDash });
