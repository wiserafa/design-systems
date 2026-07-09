// NewsGrid.jsx — grid de novidades / agenda
const NEWS = [
  { tag: 'AGENDA', tagColor: '#F59C00', date: '15 Mar', title: 'Visita guiada para famílias', body: 'Sábado às 10h. Conheça a estrutura nova de laboratórios.', img: 'purple' },
  { tag: 'NOVIDADE', tagColor: '#02A9B9', date: '08 Mar', title: 'Sala maker para o Fundamental 2', body: 'Espaço de prototipagem com impressoras 3D e cortadora a laser.', img: 'gold' },
  { tag: 'COMUNIDADE', tagColor: '#662483', date: '01 Mar', title: 'Projeto Interlagos sustentável', body: 'Alunos do Médio em parceria com a Sub do Capela do Socorro.', img: 'purple-soft' },
];

const NewsGrid = () => {
  return (
    <section style={{ background: '#fff', padding: '88px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24 }}>
          <div>
            <div style={{
              display: 'inline-block', fontFamily: 'var(--lum-font-body)',
              fontSize: 13, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--lum-gold)', marginBottom: 14,
            }}>Vida na escola</div>
            <h2 style={{
              fontFamily: 'var(--lum-font-display)', fontWeight: 700,
              fontSize: 40, color: 'var(--lum-purple)', margin: 0,
              letterSpacing: '-0.01em',
            }}>O que está acontecendo agora.</h2>
          </div>
          <a href="#" style={{
            fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 14,
            color: 'var(--lum-purple)', borderBottom: 'none',
            whiteSpace: 'nowrap',
          }}>Ver tudo →</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {NEWS.map((n, i) => {
            const imgBgs = {
              purple: 'linear-gradient(180deg, #F3EFF7 0%, #E5D9EF 100%)',
              gold: 'linear-gradient(180deg, #FDE9C7 0%, #F5C77D 100%)',
              'purple-soft': 'linear-gradient(180deg, #F3EFF7 0%, #C9B9DD 100%)',
            };
            // The brand is flat — but we use a single soft tint here as photo placeholder.
            // (Spec says no gradients on UI; placeholder for missing imagery is an exception.)
            return (
              <article key={i} style={{
                background: '#fff', border: '1px solid var(--lum-border)',
                borderRadius: 18, overflow: 'hidden', cursor: 'pointer',
                transition: 'transform 220ms var(--lum-ease), box-shadow 220ms var(--lum-ease)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 28px rgba(101,45,145,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
              >
                {/* Photo placeholder block */}
                <div style={{
                  height: 180, background: n.img === 'gold' ? '#FDE9C7' : 'var(--lum-purple-soft)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', left: -40, bottom: -40,
                    width: 200, height: 200,
                    background: n.img === 'gold' ? '#F59C00' : '#9E54BD',
                    opacity: 0.30, borderRadius: '50% 50% 60% 40% / 50% 50% 50% 50%',
                  }} />
                  <div style={{
                    position: 'absolute', right: -30, top: -30,
                    width: 120, height: 120,
                    background: n.img === 'gold' ? '#9E54BD' : '#F59C00',
                    opacity: 0.20, borderRadius: '50%',
                  }} />
                </div>
                <div style={{ padding: 22 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: n.tagColor,
                    }}>{n.tag}</span>
                    <span style={{ fontSize: 12, color: 'var(--lum-muted)' }}>· {n.date}</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--lum-font-display)', fontWeight: 700,
                    fontSize: 20, color: 'var(--lum-purple)',
                    margin: '0 0 10px', lineHeight: 1.2,
                  }}>{n.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--lum-muted)', lineHeight: 1.55, margin: 0 }}>{n.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.NewsGrid = NewsGrid;
