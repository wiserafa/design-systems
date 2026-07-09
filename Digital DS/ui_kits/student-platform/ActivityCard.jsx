// ActivityCard.jsx — card reutilizável de atividade / aula
const ActivityCard = ({ subject, subjectColor, title, due, status, onClick }) => {
  const statusStyles = {
    pending:  { bg: '#FDE9C7', fg: '#C97D00', label: 'Pendente' },
    done:     { bg: '#E2F4EC', fg: '#1F9D55', label: 'Entregue' },
    late:     { bg: '#FBE5E1', fg: '#C0392B', label: 'Em atraso' },
  };
  const s = statusStyles[status] || statusStyles.pending;
  return (
    <button onClick={onClick} style={{
      width: '100%', textAlign: 'left',
      background: '#fff', border: '1px solid var(--lum-border)',
      borderRadius: 16, padding: 18, cursor: 'pointer',
      display: 'flex', flexDirection: 'column', gap: 10,
      transition: 'transform 220ms var(--lum-ease), box-shadow 220ms var(--lum-ease)',
    }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 18px rgba(101,45,145,0.10)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <span style={{
          display: 'inline-block', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: subjectColor,
        }}>{subject}</span>
        <span style={{
          fontSize: 11, fontWeight: 600, padding: '3px 10px',
          background: s.bg, color: s.fg, borderRadius: 999,
        }}>{s.label}</span>
      </div>
      <div style={{
        fontFamily: 'var(--lum-font-display)', fontWeight: 700,
        fontSize: 16, color: 'var(--lum-purple)', lineHeight: 1.25,
      }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--lum-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        {due}
      </div>
    </button>
  );
};

window.ActivityCard = ActivityCard;
