// Login.jsx — tela de login com switcher de segmento
const SEGMENTS_LOGIN = [
  { id: 'fund1', label: 'Fund 1', color: '#02A9B9' },
  { id: 'fund2', label: 'Fund 2', color: '#FF9933' },
  { id: 'medio', label: 'Médio', color: '#662483' },
  { id: 'prof',  label: 'Profs',  color: '#003366' },
];

const Login = ({ segment, onSegmentChange, onSignIn }) => {
  const active = SEGMENTS_LOGIN.find(s => s.id === segment) || SEGMENTS_LOGIN[0];
  return (
    <div style={{
      minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr',
      background: '#fff',
    }}>
      {/* Left: form */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '48px 64px',
      }}>
        <div style={{ width: '100%', maxWidth: 380 }}>
          <img src="../../assets/luminova-horizontal.svg" alt="Luminova" style={{ height: 40, marginBottom: 48 }} />
          <div style={{
            display: 'inline-block', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--lum-gold)', marginBottom: 12,
          }}>Plataforma do aluno</div>
          <h1 style={{
            fontFamily: 'var(--lum-font-display)', fontWeight: 800, fontSize: 38,
            color: 'var(--lum-purple)', margin: '0 0 28px', lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>Olá! Bom te ver de volta.</h1>

          {/* Segment switcher */}
          <div style={{ marginBottom: 22 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--lum-text)', display: 'block', marginBottom: 8 }}>Segmento</label>
            <div style={{
              display: 'inline-flex', padding: 4, background: 'var(--lum-purple-soft)',
              borderRadius: 999, gap: 4,
            }}>
              {SEGMENTS_LOGIN.map(s => (
                <button key={s.id} onClick={() => onSegmentChange(s.id)} style={{
                  fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 13,
                  padding: '8px 14px', border: 'none',
                  background: s.id === segment ? s.color : 'transparent',
                  color: s.id === segment ? '#fff' : 'var(--lum-purple)',
                  borderRadius: 999, cursor: 'pointer',
                }}>{s.label}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600 }}>RA ou e-mail</label>
              <input type="text" defaultValue="aluno@luminova.com" style={{
                fontFamily: 'var(--lum-font-body)', fontSize: 15,
                padding: '12px 14px', border: '1px solid var(--lum-border)',
                borderRadius: 10, outline: 'none',
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600 }}>Senha</label>
              <input type="password" defaultValue="••••••••" style={{
                fontFamily: 'var(--lum-font-body)', fontSize: 15,
                padding: '12px 14px', border: '1px solid var(--lum-border)',
                borderRadius: 10, outline: 'none',
              }} />
              <a href="#" style={{
                alignSelf: 'flex-end', fontSize: 12, fontWeight: 600,
                color: 'var(--lum-purple)', borderBottom: 'none', marginTop: 4,
              }}>Esqueci minha senha</a>
            </div>
            <button onClick={onSignIn} style={{
              fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 15,
              background: active.color, color: '#fff',
              border: 'none', borderRadius: 12, padding: '14px 22px',
              cursor: 'pointer', marginTop: 8,
            }}>Entrar como {active.label}</button>
            <div style={{ fontSize: 12, color: 'var(--lum-muted)', textAlign: 'center', marginTop: 4 }}>
              É família e quer agendar uma visita? <a href="#" style={{ color: 'var(--lum-purple)', borderBottom: 'none', fontWeight: 600 }}>Fale com a gente</a>.
            </div>
          </div>
        </div>
      </div>

      {/* Right: blob panel */}
      <div style={{
        background: 'var(--lum-purple-soft)', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', left: -80, top: -60,
          width: 320, height: 320, background: active.color, opacity: 0.18,
          borderRadius: '50% 50% 60% 40% / 50% 50% 50% 50%',
        }} />
        <div style={{
          position: 'absolute', right: -100, bottom: -120,
          width: 380, height: 320, background: 'var(--lum-gold)', opacity: 0.18,
          borderRadius: '60% 40% 50% 50% / 40% 60% 40% 60%',
        }} />
        <img src="../../assets/luminova-mark.png" alt="" style={{ width: 240, height: 240, borderRadius: '50%', position: 'relative' }} />
      </div>
    </div>
  );
};

window.Login = Login;
window.SEGMENTS_LOGIN = SEGMENTS_LOGIN;
