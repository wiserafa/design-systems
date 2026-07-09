// SegmentCards.jsx — 4 cards de segmento escolar
const SEGMENTS = [
  { id: 'fund1', label: 'Fundamental 1', years: 'Anos 1 ao 5', color: '#02A9B9', soft: '#E1F5F7', tag: '6 a 10 anos',
    headline: 'A base que sustenta tudo.',
    body: 'Alfabetização, autonomia e curiosidade num ambiente que respeita o tempo de cada criança.' },
  { id: 'fund2', label: 'Fundamental 2', years: 'Anos 6 ao 9', color: '#FF9933', soft: '#FFF1E0', tag: '11 a 14 anos',
    headline: 'A descoberta de quem se é.',
    body: 'Projetos integradores, sala maker e a entrada gradual nas grandes áreas do conhecimento.' },
  { id: 'medio', label: 'Ensino Médio', years: 'Anos 10 ao 12', color: '#662483', soft: '#F1EBF4', tag: '15 a 17 anos',
    headline: 'Vestibular e vida adulta.',
    body: 'Trilhas eletivas, mentoria personalizada e preparação para ENEM, FUVEST e vestibulares internacionais.' },
];

const SegmentCards = () => {
  return (
    <section style={{ background: 'var(--lum-bg)', padding: '88px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'inline-block',
          fontFamily: 'var(--lum-font-body)',
          fontSize: 13, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--lum-gold)', marginBottom: 14,
        }}>Segmentos</div>
        <h2 style={{
          fontFamily: 'var(--lum-font-display)', fontWeight: 700,
          fontSize: 40, color: 'var(--lum-purple)',
          margin: '0 0 12px', letterSpacing: '-0.01em', textWrap: 'balance',
          maxWidth: 640,
        }}>Doze anos de escola, três jeitos de aprender.</h2>
        <p style={{ fontSize: 17, color: 'var(--lum-muted)', margin: '0 0 40px', maxWidth: 600 }}>
          Cada ciclo tem seu próprio ritmo, professores e materiais. Conheça o que muda em cada um.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {SEGMENTS.map(s => (
            <article key={s.id} style={{
              background: '#fff', border: '1px solid var(--lum-border)',
              borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 220ms var(--lum-ease), box-shadow 220ms var(--lum-ease)',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 28px rgba(101,45,145,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
            >
              {/* Small color blob top-right */}
              <div style={{
                position: 'absolute', right: -30, top: -30,
                width: 110, height: 110, background: s.color, opacity: 0.18,
                borderRadius: '50%',
              }} />
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 11px', borderRadius: 999,
                background: s.soft, color: s.color,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: 18,
              }}>{s.label}</div>
              <div style={{ fontSize: 13, color: 'var(--lum-muted)', marginBottom: 4 }}>{s.years} · {s.tag}</div>
              <h3 style={{
                fontFamily: 'var(--lum-font-display)', fontWeight: 700,
                fontSize: 22, color: 'var(--lum-purple)',
                margin: '8px 0 12px', lineHeight: 1.2,
              }}>{s.headline}</h3>
              <p style={{ fontSize: 14, color: 'var(--lum-text)', lineHeight: 1.55, margin: '0 0 20px' }}>{s.body}</p>
              <a href="#" style={{
                fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 14,
                color: s.color, borderBottom: 'none',
              }}>Conhecer o {s.label} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

window.SegmentCards = SegmentCards;
