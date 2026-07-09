// Header.jsx — Luminova website header (sticky)
const Header = () => {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: '#fff',
      borderBottom: '1px solid var(--lum-border)',
      height: 80,
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{
        width: '100%', maxWidth: 1200, margin: '0 auto',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', borderBottom: 'none' }}>
          <img src="../../assets/luminova-horizontal.svg" alt="Luminova Interlagos" style={{ height: 44 }} />
        </a>
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {['Sobre nós', 'Pedagogia', 'Segmentos', 'Estrutura', 'Vestibulinho'].map(item => (
            <a key={item} href="#" style={{
              fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 14,
              color: 'var(--lum-text)', borderBottom: 'none',
            }}>{item}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="#" style={{
            fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 14,
            color: 'var(--lum-purple)', borderBottom: 'none',
          }}>Entrar</a>
          <button style={{
            fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 14,
            background: 'var(--lum-gold)', color: '#fff',
            border: 'none', borderRadius: 12, padding: '10px 18px', cursor: 'pointer',
          }}>Agendar visita</button>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
