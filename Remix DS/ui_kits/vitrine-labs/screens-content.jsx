// screens-content.jsx — Feed/Lista, Detalhe da prática, Curadoria (tabela densa), Mobile feed
// Consome window.{T, ...} de shared.jsx

/* ============ FEED / LISTA (desktop) — grid com filtros ============ */
const ScreenFeed = () => (
  <div style={{ width: '100%', minHeight: '100%', background: T.bg, display: 'flex', flexDirection: 'column' }}>
    <Header active="Feed" />
    <div style={{ padding: '36px 40px 40px', maxWidth: 1200, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 22 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <div>
          <span className="labs-eyebrow" style={{ marginBottom: 8 }}>vitrine · 147 práticas registradas</span>
          <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 36, color: T.fg, margin: 0, letterSpacing: '-.02em' }}>Feed da escola</h1>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: T.muted }}>estado</span>
          {['todas', 'publicada', 'em curadoria', 'destaque'].map((s, i) => <Chip key={s} label={s} active={i === 3} />)}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['tudo', 'integral', 'fundamental i', 'fundamental ii', 'ensino médio'].map((s, i) => <Chip key={s} label={s} active={i === 0} glow />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {PRACTICES.slice(0, 9).map(p => <PracticeCard key={p.id} p={p} active={p.state === 'destaque'} />)}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
        <Btn kind="ghost">Ver mais práticas</Btn>
      </div>
    </div>
  </div>
);

/* ============ DETALHE DA PRÁTICA (desktop) ============ */
const ScreenDetail = () => {
  const p = PRACTICES[4]; // Leitura, Releitura e Criação Teatral — destaque
  return (
    <div style={{ width: '100%', minHeight: '100%', background: T.bg, display: 'flex', flexDirection: 'column' }}>
      <Header active="Feed" />
      <div style={{ padding: '32px 40px 44px', maxWidth: 1080, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <a href="#" style={{ fontFamily: T.mono, fontSize: 11.5, color: T.muted, letterSpacing: '.08em' }}>← voltar ao feed</a>

        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 28, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Photo p={p} h={340} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <PhotoPh id={p.id} h={120} hue={60} label="foto 2" />
              <PhotoPh id={p.id} h={120} hue={250} label="foto 3" />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: T.mono, fontSize: 12, color: T.accent, letterSpacing: '.1em' }}>{p.id}</span>
              <StateBadge state={p.state} />
            </div>
            <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 34, color: T.fg, margin: 0, letterSpacing: '-.02em', lineHeight: 1.08 }}>{p.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar name={p.author} size={38} />
              <div>
                <div style={{ fontFamily: T.body, fontSize: 14, fontWeight: 600, color: T.fg }}>{p.author}</div>
                <div style={{ fontFamily: T.mono, fontSize: 11, color: T.muted }}>{p.date} · {p.tags}</div>
              </div>
            </div>
            <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, lineHeight: 1.65, margin: 0 }}>
              Estudo sobre diversos gêneros textuais, oralidade, leitura e produção de textos com o 2º ano.
              As crianças releram a obra, recriaram cenas em pequenos grupos e encerraram com uma
              apresentação teatral aberta para as famílias.
            </p>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="labs-eyebrow" style={{ marginBottom: 0 }}>Por que virou destaque</span>
              <p style={{ fontFamily: T.body, fontSize: 13.5, color: T.muted, margin: 0, lineHeight: 1.55 }}>
                "Integra leitura e expressão corporal com produção autoral das crianças — e fecha o ciclo
                compartilhando com as famílias." — <b style={{ color: T.fg }}>Curadoria</b>
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Btn kind="purple" size="sm" glow><IconSpark size={14} /> Inspirador · {p.likes}</Btn>
              <Btn kind="ghost" size="sm"><IconComment size={13} /> Comentar</Btn>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderTop: `1px solid ${T.border}`, paddingTop: 16 }}>
              {[['Bruna Costa', 'Que lindo ver o envolvimento deles na apresentação!'], ['Rafael Braganholi', 'Vou adaptar essa sequência pro 3º ano.']].map(([name, text]) => (
                <div key={name} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Avatar name={name} size={26} />
                  <p style={{ fontFamily: T.body, fontSize: 13, color: T.muted, margin: 0, lineHeight: 1.45 }}>
                    <b style={{ color: T.fg, fontWeight: 600 }}>{name}</b> {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============ CURADORIA (desktop) — gestão, tabela densa ============ */
const ScreenCuration = () => (
  <div style={{ width: '100%', minHeight: '100%', background: T.bg, display: 'flex', flexDirection: 'column' }}>
    <Header active="Curadoria" />
    <div style={{ padding: '36px 40px 44px', maxWidth: 1200, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <span className="labs-eyebrow" style={{ marginBottom: 8 }}>gestão · piloto · semana 24</span>
        <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 36, color: T.fg, margin: 0, letterSpacing: '-.02em' }}>Painel de curadoria</h1>
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <Stat value="9" label="práticas publicadas" delta="8" />
        <Stat value="10" label="destacadas" delta="10" accent />
        <Stat value="9/21" label="profs ativos" />
        <div style={{
          flex: 1.6, background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg,
          padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6,
        }}>
          <span style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: T.muted }}>fila de curadoria</span>
          <span style={{ fontFamily: T.body, fontSize: 14, color: T.fg, fontWeight: 600 }}>2 práticas aguardando sua decisão</span>
          <span style={{ fontFamily: T.mono, fontSize: 11, color: T.purpleLight }}>revisar agora →</span>
        </div>
      </div>

      <DenseTable rows={[
        { id: 'PRÁT 0146', title: 'Descobrindo Fatos', author: 'Roberta Ribeiro', segment: 'integral', state: 'curadoria', likes: 3, active: true },
        { id: 'PRÁT 0140', title: 'Nossos Campeões: O Sucesso do Boxe Adaptado', author: 'Maria Xavier', segment: 'integral', state: 'curadoria', likes: 3, active: true },
        { id: 'PRÁT 0147', title: 'Cinema', author: 'Sandra Regina', segment: 'integral', state: 'publicada', likes: 3 },
        { id: 'PRÁT 0145', title: 'Educacross', author: 'Bruna Costa', segment: 'fundamental i', state: 'publicada', likes: 3 },
        { id: 'PRÁT 0143', title: 'Leitura, Releitura e Criação Teatral.', author: 'Katia Nascimento', segment: 'fundamental i', state: 'destaque', likes: 3 },
        { id: 'PRÁT 0139', title: 'Mentoria ENEM', author: 'Rafael Braganholi', segment: 'ensino médio', state: 'destaque', likes: 2 },
      ]} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, alignItems: 'start' }}>
        <section style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="labs-eyebrow" style={{ marginBottom: 0 }}>Publicadas por professor</span>
          {PROF_BARS.slice(0, 6).map(([name, v]) => <Bar key={name} label={name} value={v} max={2} />)}
        </section>
        <section style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="labs-eyebrow" style={{ marginBottom: 0 }}>Publicadas por segmento</span>
          {SEG_BARS.map(([name, v]) => <Bar key={name} label={name} value={v} max={5} color={T.accent} />)}
        </section>
        <section style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="labs-eyebrow" style={{ marginBottom: 0 }}>Sem publicação recente</span>
          {NEVER_PUBLISHED.slice(0, 5).map(name => (
            <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, minWidth: 0 }}>
              <span style={{ fontFamily: T.body, fontSize: 13, color: T.fg, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>
              <span style={{ fontFamily: T.mono, fontSize: 10.5, color: T.muted, letterSpacing: '.06em', whiteSpace: 'nowrap', flexShrink: 0 }}>nunca publicou</span>
            </div>
          ))}
          <a href="#" style={{ fontFamily: T.mono, fontSize: 11, color: T.purpleLight, letterSpacing: '.06em', marginTop: 4 }}>ver todos (12) →</a>
        </section>
      </div>
    </div>
  </div>
);

/* ============ MOBILE — feed (amostra 390) ============ */
const ScreenMobile = () => (
  <div style={{ width: '100%', height: '100%', background: T.bg, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
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
    <div style={{ padding: '18px 20px 10px' }}>
      <h1 style={{ fontFamily: T.display, fontWeight: 900, fontSize: 26, color: T.fg, margin: 0, letterSpacing: '-.02em' }}>Feed da escola</h1>
    </div>
    <div style={{ padding: '0 20px 12px', display: 'flex', gap: 7, overflow: 'hidden' }}>
      {['tudo', 'integral', 'fund i', 'fund ii', 'médio'].map((s, i) => <Chip key={s} label={s} active={i === 0} />)}
    </div>
    <div style={{ flex: 1, padding: '4px 20px 90px', display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden' }}>
      {PRACTICES.slice(1, 3).map((p, i) => <PracticeCard key={p.id} p={{ ...p, photoH: 130 }} active={i === 0} />)}
    </div>
    {/* tab bar */}
    <TabBar active="Feed" />
  </div>
);

Object.assign(window, { ScreenFeed, ScreenDetail, ScreenCuration, ScreenMobile });
