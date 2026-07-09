// Dashboard.jsx — home autenticada
const TODAY = [
  { time: '08:00', subject: 'Matemática', subjectColor: '#F59C00', title: 'Funções quadráticas', room: 'Sala 204', status: 'now' },
  { time: '09:40', subject: 'Português',   subjectColor: '#662483', title: 'Machado de Assis · Dom Casmurro', room: 'Sala 204', status: 'next' },
  { time: '10:30', subject: 'História',    subjectColor: '#02A9B9', title: 'Brasil Imperial', room: 'Sala 204', status: '' },
  { time: '13:20', subject: 'Ed. Física',  subjectColor: '#1F9D55', title: 'Voleibol · fundamentos', room: 'Quadra A', status: '' },
];

const PENDING = [
  { subject: 'MATEMÁTICA', subjectColor: '#F59C00', title: 'Lista 12 · funções quadráticas', due: 'Entrega quarta · 17/03', status: 'pending' },
  { subject: 'PORTUGUÊS',  subjectColor: '#662483', title: 'Resenha · Capítulos 1–5 de Dom Casmurro', due: 'Entrega sexta · 19/03', status: 'pending' },
  { subject: 'BIOLOGIA',   subjectColor: '#02A9B9', title: 'Relatório de laboratório · células', due: 'Entrega ontem · 14/03', status: 'late' },
  { subject: 'INGLÊS',     subjectColor: '#003366', title: 'Listening · Unit 4', due: 'Entregue dia 12/03', status: 'done' },
];

const NOTICES = [
  { from: 'Coordenação Fund 2', when: '2h atrás', title: 'Reunião de pais — 25 de março', body: 'Próxima semana, terça às 19h. Confirme presença no portal.' },
  { from: 'Profª Camila',       when: 'ontem',    title: 'Material novo de Matemática',     body: 'Postei o caderno de exercícios revisado para a prova.' },
  { from: 'Direção',            when: '3 dias',   title: 'Feriado escolar · 21 de março',   body: 'Não haverá aula. Atividades online disponíveis.' },
];

const Dashboard = ({ segment, onOpenLesson }) => {
  const seg = (window.SEGMENTS_LOGIN || []).find(s => s.id === segment) || { color: '#652D91', label: 'Aluno' };

  return (
    <div style={{ padding: 32, maxWidth: 1280 }}>
      {/* Greeting */}
      <div style={{ marginBottom: 28 }}>
        <div style={{
          display: 'inline-block', fontSize: 12, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--lum-gold)', marginBottom: 10,
        }}>Segunda-feira · 15 de março</div>
        <h1 style={{
          fontFamily: 'var(--lum-font-display)', fontWeight: 800, fontSize: 36,
          color: 'var(--lum-purple)', margin: 0, letterSpacing: '-0.01em',
        }}>Bom dia, Júlia!</h1>
        <p style={{ fontSize: 15, color: 'var(--lum-muted)', margin: '6px 0 0' }}>
          Você tem <b style={{ color: 'var(--lum-text)' }}>4 aulas</b> hoje e <b style={{ color: 'var(--lum-text)' }}>2 entregas</b> nessa semana.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
        {/* Left column: Today + Pending */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Today */}
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 14 }}>
              <h2 style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 700, fontSize: 18, color: 'var(--lum-purple)', margin: 0 }}>Aulas de hoje</h2>
              <a href="#" style={{ fontSize: 13, fontWeight: 600, color: seg.color, borderBottom: 'none' }}>Ver semana →</a>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--lum-border)', borderRadius: 18, overflow: 'hidden' }}>
              {TODAY.map((c, i) => (
                <button key={i} onClick={() => onOpenLesson(c)} style={{
                  width: '100%', textAlign: 'left', border: 'none',
                  background: c.status === 'now' ? 'var(--lum-purple-soft)' : '#fff',
                  borderTop: i === 0 ? 'none' : '1px solid var(--lum-border)',
                  padding: '14px 18px', cursor: 'pointer',
                  display: 'grid', gridTemplateColumns: '70px 4px 1fr auto', alignItems: 'center', gap: 14,
                }}>
                  <div style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 700, fontSize: 16, color: 'var(--lum-text)' }}>{c.time}</div>
                  <div style={{ width: 4, height: 36, background: c.subjectColor, borderRadius: 2 }} />
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.subjectColor, marginBottom: 4 }}>{c.subject}</div>
                    <div style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 600, fontSize: 15, color: 'var(--lum-purple)', lineHeight: 1.3 }}>{c.title}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                    {c.status === 'now' && (
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: seg.color, padding: '3px 8px', borderRadius: 999 }}>Agora</span>
                    )}
                    {c.status === 'next' && (
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--lum-purple)', background: 'var(--lum-purple-soft)', padding: '3px 8px', borderRadius: 999 }}>Próxima</span>
                    )}
                    <span style={{ fontSize: 12, color: 'var(--lum-muted)' }}>{c.room}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Pending */}
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 14 }}>
              <h2 style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 700, fontSize: 18, color: 'var(--lum-purple)', margin: 0 }}>Tarefas</h2>
              <a href="#" style={{ fontSize: 13, fontWeight: 600, color: seg.color, borderBottom: 'none' }}>Ver todas (8) →</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {PENDING.map((p, i) => (
                <ActivityCard key={i} {...p} onClick={() => {}} />
              ))}
            </div>
          </section>
        </div>

        {/* Right column: Notices + progress */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Progress widget */}
          <section style={{
            background: seg.color, color: '#fff', borderRadius: 20, padding: 22,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', right: -40, top: -40, width: 160, height: 160, background: 'rgba(255,255,255,0.10)', borderRadius: '50%' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lum-gold)', marginBottom: 10 }}>1º Trimestre</div>
              <div style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 800, fontSize: 48, lineHeight: 1 }}>87%</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 6 }}>de conteúdos concluídos</div>
              <div style={{ marginTop: 16, height: 6, background: 'rgba(255,255,255,0.18)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: '87%', height: '100%', background: 'var(--lum-gold)' }} />
              </div>
            </div>
          </section>

          {/* Notices */}
          <section>
            <h2 style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 700, fontSize: 18, color: 'var(--lum-purple)', margin: '0 0 14px' }}>Mural</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NOTICES.map((n, i) => (
                <article key={i} style={{
                  background: '#fff', border: '1px solid var(--lum-border)',
                  borderRadius: 14, padding: 14,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: seg.color }}>{n.from}</span>
                    <span style={{ fontSize: 11, color: 'var(--lum-muted)' }}>{n.when}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--lum-font-display)', fontWeight: 700, fontSize: 14, color: 'var(--lum-purple)', marginBottom: 4 }}>{n.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--lum-text)', lineHeight: 1.5 }}>{n.body}</div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

window.Dashboard = Dashboard;
