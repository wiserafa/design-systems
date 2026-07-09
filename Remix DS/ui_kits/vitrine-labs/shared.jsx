// shared.jsx — Vitrine Pedagógica · pele Labs
// Componentes compartilhados do kit: header, nav, badges, chips,
// card de prática, stats, tabela densa, avatar, placeholders de foto.
// Exporta tudo em window ao final.

const T = {
  bg: 'var(--labs-bg)',
  surface: 'var(--labs-surface)',
  elevated: 'var(--labs-elevated)',
  border: 'var(--labs-border)',
  borderStrong: 'var(--labs-border-strong)',
  fg: 'var(--labs-fg)',
  muted: 'var(--labs-fg-muted)',
  purple: 'var(--labs-purple)',
  purpleLight: 'var(--labs-purple-light)',
  accent: 'var(--labs-accent)',
  accentFg: 'var(--labs-accent-fg)',
  display: 'var(--labs-font-display)',
  body: 'var(--labs-font-body)',
  mono: 'var(--labs-font-mono)',
  radius: 'var(--labs-radius)',
  radiusLg: 'var(--labs-radius-lg)',
  pill: 'var(--labs-radius-pill)',
  glowPurple: 'var(--labs-glow-purple)',
  glowAccent: 'var(--labs-glow-accent)',
  shadowCard: 'var(--labs-shadow-card)',
};

/* ---------- Ícones (Lucide-style inline — linear, 2px, round caps) ---------- */
const Icon = ({ d, size = 16, color = 'currentColor', vb = 24 }) => (
  <svg width={size} height={size} viewBox={`0 0 ${vb} ${vb}`} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'inline-block', verticalAlign: '-2px' }}>
    {d.map((p, i) => <path key={i} d={p} />)}
  </svg>
);
const IconBell = (p) => <Icon {...p} d={['M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9', 'M10.3 21a1.94 1.94 0 0 0 3.4 0']} />;
const IconSpark = (p) => <Icon {...p} d={['M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4']} />;
const IconComment = (p) => <Icon {...p} d={['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z']} />;

/* ---------- Brandline ---------- */
const Brandline = ({ size = 18, product }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
    <span style={{ fontFamily: T.display, fontWeight: 700, fontSize: size, letterSpacing: '.01em' }}>
      <span style={{ color: T.purpleLight }}>luminova</span>
      <span style={{ color: T.muted, margin: '0 3px' }}>/</span>
      <span style={{ color: T.accent }}>labs.</span>
    </span>
    {product && (
      <span style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: T.muted }}>
        {product}
      </span>
    )}
  </div>
);

/* ---------- Avatar ---------- */
const AVATAR_HUES = [305, 60, 250, 150, 25, 285];
const Avatar = ({ name, size = 32 }) => {
  const initials = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  const hue = AVATAR_HUES[name.length % AVATAR_HUES.length];
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: `oklch(32% .06 ${hue})`, color: `oklch(82% .08 ${hue})`,
      border: `1px solid oklch(50% .08 ${hue} / .4)`,
      display: 'grid', placeItems: 'center',
      fontFamily: T.mono, fontSize: size * 0.34, fontWeight: 500,
    }}>{initials}</div>
  );
};

/* ---------- Badge de estado de curadoria ----------
   Espelha idea/build/ship da linguagem Labs:
   publicada (neutro) · em curadoria (roxo) · destaque (laranja, único preenchido) */
const StateBadge = ({ state, size = 11 }) => {
  const base = {
    display: 'inline-block', fontFamily: T.mono, fontSize: size, fontWeight: 500,
    textTransform: 'uppercase', letterSpacing: '.1em',
    padding: '4px 11px', borderRadius: T.pill, whiteSpace: 'nowrap',
  };
  if (state === 'destaque') return <span style={{ ...base, background: T.accent, color: T.accentFg }}>destaque</span>;
  if (state === 'curadoria') return <span style={{ ...base, background: 'var(--labs-state-build-soft)', color: T.purpleLight, border: `1px solid ${T.purple}` }}>em curadoria</span>;
  return <span style={{ ...base, background: 'transparent', color: T.muted, border: `1px solid ${T.borderStrong}` }}>publicada</span>;
};

/* ---------- Chip de filtro (segmentos, neutro no Labs) ---------- */
const Chip = ({ label, active, glow }) => (
  <button style={{
    fontFamily: T.mono, fontSize: 12, fontWeight: 500, letterSpacing: '.06em',
    textTransform: 'lowercase', cursor: 'pointer',
    padding: '8px 16px', borderRadius: T.pill,
    border: active ? `1px solid ${T.purple}` : `1px solid ${T.borderStrong}`,
    background: active ? T.purple : 'transparent',
    color: active ? '#fff' : T.muted,
    boxShadow: active && glow ? T.glowPurple : 'none',
  }}>{label}</button>
);

/* ---------- Botões ---------- */
const Btn = ({ children, kind = 'primary', size = 'md', glow }) => {
  const pad = size === 'sm' ? '9px 18px' : '13px 24px';
  const fs = size === 'sm' ? 13 : 15;
  const base = {
    fontFamily: T.display, fontWeight: 700, fontSize: fs, border: 0, cursor: 'pointer',
    padding: pad, borderRadius: T.pill, display: 'inline-flex', alignItems: 'center', gap: 8,
  };
  if (kind === 'primary') return <button style={{ ...base, background: T.accent, color: T.accentFg, boxShadow: glow ? T.glowAccent : 'none' }}>{children}</button>;
  if (kind === 'purple') return <button style={{ ...base, background: T.purple, color: '#fff', boxShadow: glow ? T.glowPurple : 'none' }}>{children}</button>;
  return <button style={{ ...base, background: 'transparent', color: T.fg, border: `1px solid ${T.borderStrong}` }}>{children}</button>;
};

/* ---------- Placeholder de foto (halo + ID mono — sem fotos reais) ---------- */
const PhotoPh = ({ id, h = 160, hue = 305, label = 'foto da prática' }) => (
  <div style={{
    height: h, borderRadius: T.radius, overflow: 'hidden', position: 'relative',
    background: T.elevated, border: `1px solid ${T.border}`,
    display: 'grid', placeItems: 'center',
  }}>
    <div style={{
      position: 'absolute', width: '70%', height: '120%', borderRadius: '50%',
      background: `radial-gradient(closest-side, oklch(58% .14 ${hue} / .25), transparent)`,
      filter: 'blur(24px)',
    }}></div>
    <div style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontFamily: T.mono, fontSize: 12, color: T.muted, letterSpacing: '.12em' }}>{id}</span>
      <span style={{ fontFamily: T.mono, fontSize: 10, color: T.muted, opacity: .6, letterSpacing: '.08em', textTransform: 'uppercase' }}>{label}</span>
    </div>
  </div>
);

/* ---------- Foto real (cover) ou placeholder halo+ID ---------- */
const Photo = ({ p, h = 160 }) => p.photo ? (
  <img src={p.photo} alt={p.title} style={{
    height: h, width: '100%', objectFit: 'cover', display: 'block',
    borderRadius: T.radius, border: `1px solid ${T.border}`,
  }} />
) : (
  <PhotoPh id={p.id} h={h} hue={p.hue} />
);

/* ---------- Header desktop ---------- */
const NAV = ['Home', 'Feed', 'Mural', 'Curadoria'];
const Header = ({ active = 'Home', user = 'Rafael Braganholi' }) => (
  <header style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 32px', height: 68,
    background: T.surface, borderBottom: `1px solid ${T.border}`,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
      <Brandline product="vitrine" />
      <nav style={{ display: 'flex', gap: 6 }}>
        {NAV.map(item => (
          <a key={item} href="#" style={{
            fontFamily: T.display, fontWeight: 700, fontSize: 14,
            padding: '8px 14px', borderRadius: T.pill, border: 'none',
            color: item === active ? '#fff' : T.muted,
            background: item === active ? T.purple : 'transparent',
            boxShadow: item === active ? T.glowPurple : 'none',
          }}>{item}</a>
        ))}
      </nav>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Btn kind="primary" size="sm">+ Publicar prática</Btn>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: 10, fontWeight: 700, position: 'absolute', top: -8, right: -8, background: T.accent, color: T.accentFg, borderRadius: 99, padding: '1px 5px' }}>3</span>
        <IconBell size={18} color={T.muted} />
      </div>
      <Avatar name={user} size={34} />
    </div>
  </header>
);

/* ---------- Card de prática (feed/grid) ---------- */
const PracticeCard = ({ p, active }) => (
  <article style={{
    background: T.surface, borderRadius: T.radiusLg, overflow: 'hidden',
    border: `1px solid ${active ? T.purple : T.border}`,
    boxShadow: active ? T.glowPurple : T.shadowCard,
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <Avatar name={p.author} size={30} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: T.body, fontSize: 13, fontWeight: 600, color: T.fg }}>{p.author}</div>
        <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.muted, letterSpacing: '.06em' }}>{p.date}</div>
      </div>
      <StateBadge state={p.state} />
    </div>
    <div style={{ padding: '0 18px' }}>
      <Photo p={p} h={p.photoH || 150} />
    </div>
    <div style={{ padding: '14px 18px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h3 style={{ fontFamily: T.display, fontWeight: 700, fontSize: 17, color: T.fg, margin: 0 }}>{p.title}</h3>
      <p style={{ fontFamily: T.body, fontSize: 13.5, color: T.muted, margin: 0, lineHeight: 1.5 }}>
        {p.body} <a href="#" style={{ color: T.purpleLight }}>ver completa</a>
      </p>
      <div style={{ fontFamily: T.mono, fontSize: 11, color: T.muted, letterSpacing: '.06em' }}>{p.tags}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 4 }}>
        <span style={{ fontFamily: T.mono, fontSize: 11.5, color: T.accent, display: 'inline-flex', alignItems: 'center', gap: 5 }}><IconSpark size={13} /> inspirador · {p.likes}</span>
        {p.comments > 0 && <span style={{ fontFamily: T.mono, fontSize: 11.5, color: T.muted, display: 'inline-flex', alignItems: 'center', gap: 5 }}><IconComment size={12} /> {p.comments} comentários</span>}
      </div>
    </div>
  </article>
);

/* ---------- Stat (números da gestão) ---------- */
const Stat = ({ value, label, delta, accent }) => (
  <div style={{
    background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radiusLg,
    padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1,
  }}>
    <span style={{ fontFamily: T.display, fontWeight: 900, fontSize: 34, color: accent ? T.accent : T.fg, lineHeight: 1 }}>{value}</span>
    <span style={{ fontFamily: T.body, fontSize: 13, color: T.muted }}>{label}</span>
    {delta && <span style={{ fontFamily: T.mono, fontSize: 11, color: 'var(--labs-success)' }}>↑ {delta}</span>}
  </div>
);

/* ---------- Barra de distribuição (saúde do piloto) ---------- */
const Bar = ({ label, value, max, color = T.purpleLight }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 28px', alignItems: 'center', gap: 12 }}>
    <span style={{ fontFamily: T.body, fontSize: 13, color: T.fg, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
    <div style={{ height: 10, borderRadius: 99, background: 'oklch(100% 0 0 / .06)', overflow: 'hidden' }}>
      <div style={{ width: `${Math.max(4, (value / max) * 100)}%`, height: '100%', borderRadius: 99, background: value === 0 ? 'transparent' : color }}></div>
    </div>
    <span style={{ fontFamily: T.mono, fontSize: 12, color: T.muted, textAlign: 'right' }}>{value}</span>
  </div>
);

/* ---------- Tabela densa (curadoria / gestão) ---------- */
const DenseTable = ({ rows }) => (
  <div style={{ border: `1px solid ${T.border}`, borderRadius: T.radiusLg, overflow: 'hidden', background: T.surface }}>
    <div style={{
      display: 'grid', gridTemplateColumns: '92px 1fr 170px 130px 130px 110px',
      padding: '10px 18px', borderBottom: `1px solid ${T.border}`, background: T.elevated,
    }}>
      {['id', 'prática', 'professor(a)', 'segmento', 'estado', 'inspirador'].map(h => (
        <span key={h} style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', color: T.muted }}>{h}</span>
      ))}
    </div>
    {rows.map((r, i) => (
      <div key={r.id} style={{
        display: 'grid', gridTemplateColumns: '92px 1fr 170px 130px 130px 110px',
        alignItems: 'center', padding: '12px 18px',
        borderBottom: i < rows.length - 1 ? `1px solid ${T.border}` : 'none',
        background: r.active ? 'oklch(58% .18 305 / .08)' : 'transparent',
      }}>
        <span style={{ fontFamily: T.mono, fontSize: 11.5, color: T.accent }}>{r.id}</span>
        <span style={{ fontFamily: T.body, fontSize: 13.5, fontWeight: 600, color: T.fg }}>{r.title}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar name={r.author} size={22} />
          <span style={{ fontFamily: T.body, fontSize: 12.5, color: T.muted }}>{r.author}</span>
        </span>
        <span style={{ fontFamily: T.mono, fontSize: 11, color: T.muted, letterSpacing: '.04em' }}>{r.segment}</span>
        <span><StateBadge state={r.state} size={9.5} /></span>
        <span style={{ fontFamily: T.mono, fontSize: 11.5, color: T.muted, display: 'inline-flex', alignItems: 'center', gap: 5 }}><IconSpark size={12} /> {r.likes}</span>
      </div>
    ))}
  </div>
);

/* ---------- Tab bar mobile ---------- */
const TabBar = ({ active = 'Home' }) => (
  <div style={{
    position: 'absolute', left: 0, right: 0, bottom: 0,
    background: T.surface, borderTop: `1px solid ${T.border}`,
    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', alignItems: 'end',
    padding: '10px 8px 14px',
  }}>
    {['Home', 'Feed', '+', 'Mural', 'Curadoria'].map(label => (
      label === '+' ? (
        <div key="pub" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, transform: 'translateY(-14px)' }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%', background: T.accent, color: T.accentFg,
            display: 'grid', placeItems: 'center', fontFamily: T.display, fontWeight: 700, fontSize: 26,
            boxShadow: T.glowAccent,
          }}>+</div>
          <span style={{ fontFamily: T.mono, fontSize: 9.5, letterSpacing: '.08em', color: T.accent, textTransform: 'uppercase' }}>publicar</span>
        </div>
      ) : (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${label === active ? T.purpleLight : T.muted}`, opacity: label === active ? 1 : .55 }}></div>
          <span style={{ fontFamily: T.mono, fontSize: 9.5, letterSpacing: '.08em', textTransform: 'uppercase', color: label === active ? T.purpleLight : T.muted }}>{label}</span>
        </div>
      )
    ))}
  </div>
);

/* ---------- Dados reais (dos prints) ---------- */
const PRACTICES = [
  { id: 'PRÁT 0147', author: 'Sandra Regina', date: '06 jun', title: 'Cinema', body: 'Sessão cinema por aqui! Hoje assistimos ao filme Como Treinar o Seu Dragão e aproveitamos uma…', tags: 'integral · clube do livro', state: 'publicada', likes: 3, comments: 0, hue: 305 },
  { id: 'PRÁT 0146', author: 'Roberta Ribeiro', date: '03 jun', title: 'Descobrindo Fatos', body: 'Os alunos do G2 participaram da atividade "Descobrindo Fatos" com o objetivo de…', tags: 'integral · matemática', state: 'curadoria', likes: 3, comments: 0, hue: 60, photo: 'photos/diorama.png' },
  { id: 'PRÁT 0145', author: 'Bruna Costa', date: '03 jun', title: 'Educacross', body: 'Tecnologia e educação 1ºA · Manhã.', tags: 'fundamental i · 1º ano · português', state: 'publicada', likes: 3, comments: 0, hue: 250 },
  { id: 'PRÁT 0144', author: 'Yasmim Torres', date: '03 jun', title: 'Jogo da memória matemático.', body: 'Realizamos com a turma do G4 o "Jogo da Memória da Multiplicação". Brincamos pro…', tags: 'integral · matemática', state: 'publicada', likes: 3, comments: 0, hue: 305 },
  { id: 'PRÁT 0143', author: 'Katia Nascimento', date: '02 jun', title: 'Leitura, Releitura e Criação Teatral.', body: 'Estudo sobre diversos gêneros textuais, oralidade, leitura e produção de textos…', tags: 'fundamental i · 2º ano · português', state: 'destaque', likes: 3, comments: 3, hue: 150, photo: 'photos/roda-de-leitura.png' },
  { id: 'PRÁT 0142', author: 'Natalia Cabral', date: '02 jun', title: 'Traços Brasileiros: Caricaturas dos Nossos Jogadores.', body: 'Turmas G2 e G3 exploraram arte e cultura brasileira criando caricaturas de joga…', tags: 'integral · laboratório maker', state: 'destaque', likes: 4, comments: 2, hue: 25, photo: 'photos/teatro-figurinos.jpeg' },
  { id: 'PRÁT 0141', author: 'Bruna Costa', date: '03 jun', title: 'O poder da leitura!', body: 'Momento leitura · Livro: É SE EU SENTIR FELICIDADE? No 3º Ano, a leitura desenvolve…', tags: 'fundamental i · 3º ano · português', state: 'publicada', likes: 3, comments: 2, hue: 305, photo: 'photos/biblioteca.jpeg' },
  { id: 'PRÁT 0140', author: 'Maria Xavier', date: '03 jun', title: 'Nossos Campeões: O Sucesso do Boxe Adaptado', body: 'Levar a prática do Boxe Adaptado nessa faixa etária (ou com esses grupos especí…', tags: 'integral · jogos e brincadeiras', state: 'curadoria', likes: 3, comments: 0, hue: 60 },
  { id: 'PRÁT 0139', author: 'Rafael Braganholi', date: '03 jun', title: 'Mentoria ENEM', body: 'Os alunos precisam se preparar para o ENEM. Algumas matérias são mais desafiador…', tags: 'ensino médio · 3º em · lab enem', state: 'destaque', likes: 2, comments: 2, hue: 305, photo: 'photos/leitura-em.png' },
  { id: 'PRÁT 0138', author: 'Natalia Juiz', date: '28 mai', title: 'Passeio Pedagógico Paranapiacaba', body: 'Oportunidades · Conhecer de perto a história ferroviária do Brasil e a influên…', tags: 'integral · 2º ano · história', state: 'publicada', likes: 3, comments: 0, hue: 150 },
];

const PROF_BARS = [
  ['Bruna Costa', 2], ['Yasmim Torres', 1], ['Maria Xavier', 1], ['Sandra Regina', 1],
  ['Natalia Juiz', 1], ['Roberta Ribeiro', 1], ['Katia Nascimento', 1], ['Natalia Cabral', 1], ['Rafael Braganholi', 1],
];
const SEG_BARS = [
  ['Integral', 5], ['Fundamental I', 3], ['Fundamental II', 0], ['Ensino Médio', 1],
];
const NEVER_PUBLISHED = ['Aline Coviello', 'Moara Freitas', 'Danilo Lanza', 'Secretaria Interlagos', 'Lucas Gurian', 'Beaduarts', 'Fatima Lemos', 'Beatriz Martins'];

Object.assign(window, {
  T, Brandline, Avatar, StateBadge, Chip, Btn, PhotoPh, Photo, Header, TabBar,
  PracticeCard, Stat, Bar, DenseTable,
  Icon, IconBell, IconSpark, IconComment,
  PRACTICES, PROF_BARS, SEG_BARS, NEVER_PUBLISHED,
});
