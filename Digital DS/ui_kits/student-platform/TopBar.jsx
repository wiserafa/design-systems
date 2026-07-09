// TopBar.jsx — barra superior com busca, sino, avatar
const TopBar = ({ segment, name = 'Júlia Mendes', role = '8º Ano · Turma 8B' }) => {
  const seg = (window.SEGMENTS_LOGIN || []).find(s => s.id === segment) || { color: '#652D91', label: 'Aluno' };
  return (
    <header style={{
      height: 72, background: '#fff',
      borderBottom: '1px solid var(--lum-border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'var(--lum-bg)', border: '1px solid var(--lum-border)',
        borderRadius: 12, padding: '8px 14px', width: 340,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lum-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input placeholder="Buscar aulas, materiais, recados…" style={{
          flex: 1, border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'var(--lum-font-body)', fontSize: 14, color: 'var(--lum-text)',
        }} />
        <span style={{
          fontSize: 11, fontWeight: 600, color: 'var(--lum-muted)',
          padding: '2px 6px', border: '1px solid var(--lum-border)', borderRadius: 4,
        }}>⌘K</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <button style={{
          width: 40, height: 40, border: 'none', cursor: 'pointer',
          background: 'var(--lum-bg)', borderRadius: 999,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lum-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span style={{
            position: 'absolute', top: 8, right: 10, width: 8, height: 8,
            background: 'var(--lum-gold)', borderRadius: 999, border: '2px solid var(--lum-bg)',
          }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--lum-text)' }}>{name}</div>
            <div style={{ fontSize: 11, color: 'var(--lum-muted)' }}>{role}</div>
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: 999,
            background: seg.color, color: '#fff',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--lum-font-display)', fontWeight: 800, fontSize: 16,
          }}>{name.split(' ').map(s => s[0]).slice(0,2).join('')}</div>
        </div>
      </div>
    </header>
  );
};

window.TopBar = TopBar;
