// LessonView.jsx — visualização de aula com player placeholder
const LessonView = ({ lesson, onBack, segment }) => {
  const seg = (window.SEGMENTS_LOGIN || []).find(s => s.id === segment) || { color: '#652D91' };
  return (
    <div style={{ padding: 32, maxWidth: 1280 }}>
      <button onClick={onBack} style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'transparent', border: 'none', cursor: 'pointer',
        color: 'var(--lum-purple)', fontFamily: 'var(--lum-font-body)',
        fontWeight: 600, fontSize: 14, padding: 0, marginBottom: 18,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar para Início
      </button>

      <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: lesson.subjectColor, marginBottom: 6 }}>{lesson.subject}</div>
      <h1 style={{
        fontFamily: 'var(--lum-font-display)', fontWeight: 800, fontSize: 32,
        color: 'var(--lum-purple)', margin: '0 0 24px', letterSpacing: '-0.01em',
      }}>{lesson.title}</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
        <div>
          {/* Video player placeholder */}
          <div style={{
            position: 'relative', aspectRatio: '16/9', background: 'var(--lum-slate)',
            borderRadius: 18, overflow: 'hidden', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ position: 'absolute', left: -60, top: -60, width: 220, height: 220, background: lesson.subjectColor, opacity: 0.30, borderRadius: '50%' }} />
            <div style={{ position: 'absolute', right: -60, bottom: -60, width: 220, height: 220, background: 'var(--lum-gold)', opacity: 0.30, borderRadius: '50%' }} />
            <button style={{
              position: 'relative', width: 76, height: 76, borderRadius: 999,
              background: '#fff', border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 10px 28px rgba(0,0,0,0.20)',
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--lum-purple)" stroke="none">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div style={{ position: 'absolute', bottom: 16, left: 18, color: '#fff', fontSize: 13, fontWeight: 600 }}>Aula 12 · 24 min · Profª Camila Rocha</div>
          </div>

          {/* Description */}
          <div style={{
            background: '#fff', border: '1px solid var(--lum-border)',
            borderRadius: 18, padding: 24, marginTop: 18,
          }}>
            <h3 style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 700, fontSize: 18, color: 'var(--lum-purple)', margin: '0 0 12px' }}>Sobre essa aula</h3>
            <p style={{ fontSize: 15, color: 'var(--lum-text)', lineHeight: 1.6, margin: '0 0 12px' }}>
              Nessa aula a gente vê como funções quadráticas aparecem em problemas reais — da trajetória de uma bola de basquete ao formato de uma antena parabólica.
            </p>
            <p style={{ fontSize: 15, color: 'var(--lum-text)', lineHeight: 1.6, margin: 0 }}>
              Traga seu caderno e a calculadora. No final, a gente resolve juntos os 3 primeiros exercícios da Lista 12.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Materials */}
          <section style={{ background: '#fff', border: '1px solid var(--lum-border)', borderRadius: 18, padding: 20 }}>
            <h3 style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 700, fontSize: 16, color: 'var(--lum-purple)', margin: '0 0 14px' }}>Materiais</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { t: 'Slides da aula 12.pdf', s: '2.4 MB' },
                { t: 'Lista 12 · exercícios.pdf', s: '180 KB' },
                { t: 'Gabarito da lista 11.pdf', s: '210 KB' },
              ].map((m, i) => (
                <a key={i} href="#" style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: 10, borderRadius: 10,
                  background: 'var(--lum-bg)', borderBottom: 'none',
                  color: 'var(--lum-text)',
                }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: '#fff', border: '1px solid var(--lum-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: lesson.subjectColor }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{m.t}</div>
                    <div style={{ fontSize: 11, color: 'var(--lum-muted)' }}>{m.s}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Assignment */}
          <section style={{
            background: 'var(--lum-purple-soft)', borderRadius: 18, padding: 20,
          }}>
            <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lum-gold)', marginBottom: 8 }}>Tarefa associada</div>
            <h4 style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 700, fontSize: 16, color: 'var(--lum-purple)', margin: '0 0 8px' }}>Lista 12 · funções quadráticas</h4>
            <div style={{ fontSize: 13, color: 'var(--lum-text)', marginBottom: 14 }}>Entrega quarta · 17/03 às 23h59</div>
            <button style={{
              fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 14,
              background: seg.color, color: '#fff', border: 'none',
              borderRadius: 12, padding: '12px 18px', cursor: 'pointer', width: '100%',
            }}>Abrir tarefa</button>
          </section>
        </div>
      </div>
    </div>
  );
};

window.LessonView = LessonView;
