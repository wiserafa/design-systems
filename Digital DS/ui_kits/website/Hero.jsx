// Hero.jsx — Hero institucional com blobs orgânicos
const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      background: '#fff',
      padding: '96px 32px 88px',
      overflow: 'hidden',
    }}>
      {/* Blob roxo top-left */}
      <div style={{
        position: 'absolute', left: -120, top: -80,
        width: 360, height: 360,
        background: 'var(--lum-purple-light)', opacity: 0.22,
        borderRadius: '48% 52% 60% 40% / 50% 60% 40% 50%',
        pointerEvents: 'none',
      }} />
      {/* Blob laranja bottom-right */}
      <div style={{
        position: 'absolute', right: -80, bottom: -120,
        width: 320, height: 280,
        background: 'var(--lum-gold)', opacity: 0.18,
        borderRadius: '60% 40% 50% 50% / 40% 60% 40% 60%',
        pointerEvents: 'none',
      }} />
      {/* Pequeno blob roxo escuro mid */}
      <div style={{
        position: 'absolute', right: '32%', top: '20%',
        width: 90, height: 90,
        background: 'var(--lum-purple)', opacity: 0.08,
        borderRadius: '50% 50% 60% 40% / 50% 50% 50% 50%',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-block',
            fontFamily: 'var(--lum-font-body)',
            fontSize: 13, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--lum-gold)', marginBottom: 18,
          }}>Matrículas abertas · 2026</div>
          <h1 style={{
            fontFamily: 'var(--lum-font-display)',
            fontWeight: 800, fontSize: 60, color: 'var(--lum-purple)',
            lineHeight: 1.05, letterSpacing: '-0.015em',
            margin: '0 0 22px', textWrap: 'balance',
          }}>Uma escola pensada para os próximos 12 anos da sua família.</h1>
          <p style={{
            fontSize: 18, color: 'var(--lum-text)',
            lineHeight: 1.55, margin: '0 0 32px', maxWidth: 520,
          }}>Da alfabetização ao vestibular, com método próprio e turmas pequenas. Em Interlagos, São Paulo.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{
              fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 15,
              background: 'var(--lum-gold)', color: '#fff',
              border: 'none', borderRadius: 12, padding: '14px 24px', cursor: 'pointer',
            }}>Agendar visita</button>
            <button style={{
              fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 15,
              background: '#fff', color: 'var(--lum-purple)',
              border: '2px solid var(--lum-purple)', borderRadius: 12,
              padding: '12px 22px', cursor: 'pointer',
            }}>Conhecer pedagogia</button>
          </div>
        </div>

        {/* Visual: marca grande, contida em painel com blob */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            position: 'absolute', width: 360, height: 360,
            background: 'var(--lum-purple-soft)',
            borderRadius: '46% 54% 60% 40% / 50% 50% 50% 50%',
          }} />
          <img
            src="../../assets/luminova-mark.png"
            alt=""
            style={{ position: 'relative', width: 280, height: 280, borderRadius: '50%' }}
          />
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
