// Sidebar.jsx — nav lateral, acento na cor do segmento
const NAV = [
  { id: 'home',     label: 'Início',       icon: 'home' },
  { id: 'agenda',   label: 'Agenda',       icon: 'calendar' },
  { id: 'tarefas',  label: 'Tarefas',      icon: 'check-square', count: 4 },
  { id: 'aulas',    label: 'Aulas',        icon: 'book-open' },
  { id: 'boletim',  label: 'Boletim',      icon: 'file-text' },
  { id: 'recados',  label: 'Recados',      icon: 'message-square', count: 2 },
];

// Inline simple icon as SVG path data — Lucide vocabulary
const ICONS = {
  home: 'M3 11l9-8 9 8M5 10v9a1 1 0 0 0 1 1h3v-7h6v7h3a1 1 0 0 0 1-1v-9',
  calendar: 'M3 8h18M8 3v4M16 3v4M5 6h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z',
  'check-square': 'M9 12l2 2 4-4M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z',
  'book-open': 'M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z',
  'file-text': 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h6',
  'message-square': 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z',
  'log-out': 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
};
const Icon = ({ name, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={ICONS[name]} />
  </svg>
);

const Sidebar = ({ segment, current, onNavigate, onLogout }) => {
  const seg = (window.SEGMENTS_LOGIN || []).find(s => s.id === segment) || { color: '#652D91', label: 'Aluno' };
  return (
    <aside style={{
      width: 240, height: '100vh', background: '#fff',
      borderRight: '1px solid var(--lum-border)',
      display: 'flex', flexDirection: 'column',
      position: 'sticky', top: 0,
    }}>
      <div style={{ padding: '24px 24px 32px', borderBottom: '1px solid var(--lum-border)' }}>
        <img src="../../assets/luminova-horizontal.svg" alt="Luminova" style={{ height: 32 }} />
      </div>

      <nav style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {NAV.map(item => {
          const isActive = item.id === current;
          return (
            <button key={item.id} onClick={() => onNavigate(item.id)} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 14px', borderRadius: 10,
              border: 'none', cursor: 'pointer',
              background: isActive ? seg.color : 'transparent',
              color: isActive ? '#fff' : 'var(--lum-text)',
              fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 14,
              textAlign: 'left',
            }}>
              <Icon name={item.icon} />
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.count ? (
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  background: isActive ? 'rgba(255,255,255,0.20)' : 'var(--lum-gold)',
                  color: '#fff', borderRadius: 999, padding: '2px 8px',
                }}>{item.count}</span>
              ) : null}
            </button>
          );
        })}
      </nav>

      <div style={{ padding: 16, borderTop: '1px solid var(--lum-border)' }}>
        <button onClick={onLogout} style={{
          display: 'flex', alignItems: 'center', gap: 12,
          width: '100%', padding: '10px 14px', borderRadius: 10,
          border: 'none', cursor: 'pointer', background: 'transparent',
          color: 'var(--lum-muted)',
          fontFamily: 'var(--lum-font-body)', fontWeight: 600, fontSize: 14,
        }}>
          <Icon name="log-out" />
          Sair
        </button>
      </div>
    </aside>
  );
};

window.Sidebar = Sidebar;
window.Icon = Icon;
