// CtaBlock.jsx — bloco roxo sólido com call-to-action
const CtaBlock = () => {
  return (
    <section style={{
      background: 'var(--lum-purple)', padding: '72px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: -100, top: -80,
        width: 360, height: 360, background: '#F59C00', opacity: 0.18,
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: -80, bottom: -100,
        width: 280, height: 280, background: '#9E54BD', opacity: 0.35,
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'relative', maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 48, flexWrap: 'wrap',
      }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{
            display: 'inline-block', fontFamily: 'var(--lum-font-body)',
            fontSize: 13, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--lum-gold)', marginBottom: 14,
          }}>Vem conhecer</div>
          <h2 style={{
            fontFamily: 'var(--lum-font-display)', fontWeight: 800,
            fontSize: 44, color: '#fff', margin: '0 0 16px',
            letterSpacing: '-0.01em', lineHeight: 1.1, textWrap: 'balance',
          }}>Marque uma visita guiada. Sem compromisso.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.55 }}>
            Sábados de manhã, com tour pelos espaços, conversa com a coordenação e café com famílias atuais.
          </p>
        </div>
        <button style={{
          fontFamily: 'var(--lum-font-body)', fontWeight: 700, fontSize: 17,
          background: 'var(--lum-gold)', color: '#fff', border: 'none',
          borderRadius: 14, padding: '18px 32px', cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}>Agendar agora →</button>
      </div>
    </section>
  );
};

window.CtaBlock = CtaBlock;
