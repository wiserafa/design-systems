// Footer.jsx — footer roxo sólido com logo branca
const Footer = () => {
  const cols = [
    { title: 'Escola', items: ['Sobre nós', 'Pedagogia', 'Estrutura', 'Equipe', 'Notícias'] },
    { title: 'Segmentos', items: ['Fundamental 1', 'Fundamental 2', 'Ensino Médio'] },
    { title: 'Matrículas', items: ['Agendar visita', 'Vestibulinho', 'Bolsas', 'Documentação'] },
    { title: 'Famílias', items: ['Plataforma do aluno', 'Calendário', 'Contato', 'WhatsApp'] },
  ];
  return (
    <footer style={{ background: 'var(--lum-purple)', color: '#fff', padding: '72px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40, marginBottom: 56 }}>
          <div>
          <div style={{
            display: 'inline-block', background: '#fff',
            borderRadius: 999, padding: '14px 22px', marginBottom: 18,
          }}>
            <img
              src="../../assets/luminova-horizontal.svg"
              alt="Luminova Interlagos"
              style={{ height: 36, display: 'block' }}
            />
          </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: 18 }}>
              Av. Interlagos, 4242<br />
              São Paulo / SP · 04777-000
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {['Instagram', 'YouTube', 'WhatsApp'].map(s => (
                <a key={s} href="#" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: 999,
                  background: 'rgba(255,255,255,0.10)', color: '#fff',
                  fontSize: 11, fontWeight: 600, borderBottom: 'none',
                }} title={s}>{s[0]}</a>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--lum-gold)',
                marginBottom: 16,
              }}>{c.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(item => (
                  <a key={item} href="#" style={{
                    fontFamily: 'var(--lum-font-body)', fontWeight: 500, fontSize: 14,
                    color: 'rgba(255,255,255,0.90)', borderBottom: 'none',
                  }}>{item}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 13, color: 'rgba(255,255,255,0.65)',
        }}>
          <div>© 2026 Escola Luminova Interlagos · Todos os direitos reservados</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)', borderBottom: 'none' }}>Privacidade</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)', borderBottom: 'none' }}>Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
