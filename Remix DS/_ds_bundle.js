/* @ds-bundle: {"format":3,"namespace":"LuminovaDigital_019e2d","components":[],"sourceHashes":{"ui_kits/student-platform/ActivityCard.jsx":"9b7eade76fc7","ui_kits/student-platform/Dashboard.jsx":"d438e77a38d9","ui_kits/student-platform/LessonView.jsx":"992d8603f344","ui_kits/student-platform/Login.jsx":"296c2fa5e4c8","ui_kits/student-platform/Sidebar.jsx":"21948566e724","ui_kits/student-platform/TopBar.jsx":"2f15cb4ff267","ui_kits/vitrine-labs/design-canvas.jsx":"bd8746af6e58","ui_kits/vitrine-labs/screens-content.jsx":"578e203dd787","ui_kits/vitrine-labs/screens-core.jsx":"ca83e34381e7","ui_kits/vitrine-labs/screens-mobile-home.jsx":"d02db8ff0e22","ui_kits/vitrine-labs/screens-products.jsx":"bfcde4de610b","ui_kits/vitrine-labs/shared.jsx":"9c1f40daf640","ui_kits/website/CtaBlock.jsx":"3b0e479b3ca0","ui_kits/website/Footer.jsx":"dd760c3bbfb8","ui_kits/website/Header.jsx":"f5f0efd497f9","ui_kits/website/Hero.jsx":"af80720fa098","ui_kits/website/NewsGrid.jsx":"1a47270ceb88","ui_kits/website/SegmentCards.jsx":"c4c5ccf7e2f1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LuminovaDigital_019e2d = window.LuminovaDigital_019e2d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/student-platform/ActivityCard.jsx
try { (() => {
// ActivityCard.jsx — card reutilizável de atividade / aula
const ActivityCard = ({
  subject,
  subjectColor,
  title,
  due,
  status,
  onClick
}) => {
  const statusStyles = {
    pending: {
      bg: '#FDE9C7',
      fg: '#C97D00',
      label: 'Pendente'
    },
    done: {
      bg: '#E2F4EC',
      fg: '#1F9D55',
      label: 'Entregue'
    },
    late: {
      bg: '#FBE5E1',
      fg: '#C0392B',
      label: 'Em atraso'
    }
  };
  const s = statusStyles[status] || statusStyles.pending;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: '100%',
      textAlign: 'left',
      background: '#fff',
      border: '1px solid var(--lum-border)',
      borderRadius: 16,
      padding: 18,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      transition: 'transform 220ms var(--lum-ease), box-shadow 220ms var(--lum-ease)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = '0 6px 18px rgba(101,45,145,0.10)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = '';
      e.currentTarget.style.transform = '';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: subjectColor
    }
  }, subject), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      padding: '3px 10px',
      background: s.bg,
      color: s.fg,
      borderRadius: 999
    }
  }, s.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--lum-purple)',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--lum-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  })), due));
};
window.ActivityCard = ActivityCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-platform/ActivityCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-platform/Dashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Dashboard.jsx — home autenticada
const TODAY = [{
  time: '08:00',
  subject: 'Matemática',
  subjectColor: '#F59C00',
  title: 'Funções quadráticas',
  room: 'Sala 204',
  status: 'now'
}, {
  time: '09:40',
  subject: 'Português',
  subjectColor: '#662483',
  title: 'Machado de Assis · Dom Casmurro',
  room: 'Sala 204',
  status: 'next'
}, {
  time: '10:30',
  subject: 'História',
  subjectColor: '#02A9B9',
  title: 'Brasil Imperial',
  room: 'Sala 204',
  status: ''
}, {
  time: '13:20',
  subject: 'Ed. Física',
  subjectColor: '#1F9D55',
  title: 'Voleibol · fundamentos',
  room: 'Quadra A',
  status: ''
}];
const PENDING = [{
  subject: 'MATEMÁTICA',
  subjectColor: '#F59C00',
  title: 'Lista 12 · funções quadráticas',
  due: 'Entrega quarta · 17/03',
  status: 'pending'
}, {
  subject: 'PORTUGUÊS',
  subjectColor: '#662483',
  title: 'Resenha · Capítulos 1–5 de Dom Casmurro',
  due: 'Entrega sexta · 19/03',
  status: 'pending'
}, {
  subject: 'BIOLOGIA',
  subjectColor: '#02A9B9',
  title: 'Relatório de laboratório · células',
  due: 'Entrega ontem · 14/03',
  status: 'late'
}, {
  subject: 'INGLÊS',
  subjectColor: '#003366',
  title: 'Listening · Unit 4',
  due: 'Entregue dia 12/03',
  status: 'done'
}];
const NOTICES = [{
  from: 'Coordenação Fund 2',
  when: '2h atrás',
  title: 'Reunião de pais — 25 de março',
  body: 'Próxima semana, terça às 19h. Confirme presença no portal.'
}, {
  from: 'Profª Camila',
  when: 'ontem',
  title: 'Material novo de Matemática',
  body: 'Postei o caderno de exercícios revisado para a prova.'
}, {
  from: 'Direção',
  when: '3 dias',
  title: 'Feriado escolar · 21 de março',
  body: 'Não haverá aula. Atividades online disponíveis.'
}];
const Dashboard = ({
  segment,
  onOpenLesson
}) => {
  const seg = (window.SEGMENTS_LOGIN || []).find(s => s.id === segment) || {
    color: '#652D91',
    label: 'Aluno'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      maxWidth: 1280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--lum-gold)',
      marginBottom: 10
    }
  }, "Segunda-feira \xB7 15 de mar\xE7o"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 800,
      fontSize: 36,
      color: 'var(--lum-purple)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, "Bom dia, J\xFAlia!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--lum-muted)',
      margin: '6px 0 0'
    }
  }, "Voc\xEA tem ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--lum-text)'
    }
  }, "4 aulas"), " hoje e ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--lum-text)'
    }
  }, "2 entregas"), " nessa semana.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--lum-purple)',
      margin: 0
    }
  }, "Aulas de hoje"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: seg.color,
      borderBottom: 'none'
    }
  }, "Ver semana \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--lum-border)',
      borderRadius: 18,
      overflow: 'hidden'
    }
  }, TODAY.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onOpenLesson(c),
    style: {
      width: '100%',
      textAlign: 'left',
      border: 'none',
      background: c.status === 'now' ? 'var(--lum-purple-soft)' : '#fff',
      borderTop: i === 0 ? 'none' : '1px solid var(--lum-border)',
      padding: '14px 18px',
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: '70px 4px 1fr auto',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--lum-text)'
    }
  }, c.time), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      height: 36,
      background: c.subjectColor,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: c.subjectColor,
      marginBottom: 4
    }
  }, c.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--lum-purple)',
      lineHeight: 1.3
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4
    }
  }, c.status === 'now' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#fff',
      background: seg.color,
      padding: '3px 8px',
      borderRadius: 999
    }
  }, "Agora"), c.status === 'next' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--lum-purple)',
      background: 'var(--lum-purple-soft)',
      padding: '3px 8px',
      borderRadius: 999
    }
  }, "Pr\xF3xima"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--lum-muted)'
    }
  }, c.room)))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--lum-purple)',
      margin: 0
    }
  }, "Tarefas"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: seg.color,
      borderBottom: 'none'
    }
  }, "Ver todas (8) \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, PENDING.map((p, i) => /*#__PURE__*/React.createElement(ActivityCard, _extends({
    key: i
  }, p, {
    onClick: () => {}
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: seg.color,
      color: '#fff',
      borderRadius: 20,
      padding: 22,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -40,
      top: -40,
      width: 160,
      height: 160,
      background: 'rgba(255,255,255,0.10)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--lum-gold)',
      marginBottom: 10
    }
  }, "1\xBA Trimestre"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 800,
      fontSize: 48,
      lineHeight: 1
    }
  }, "87%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.85)',
      marginTop: 6
    }
  }, "de conte\xFAdos conclu\xEDdos"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      height: 6,
      background: 'rgba(255,255,255,0.18)',
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '87%',
      height: '100%',
      background: 'var(--lum-gold)'
    }
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--lum-purple)',
      margin: '0 0 14px'
    }
  }, "Mural"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, NOTICES.map((n, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      background: '#fff',
      border: '1px solid var(--lum-border)',
      borderRadius: 14,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: seg.color
    }
  }, n.from), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--lum-muted)'
    }
  }, n.when)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--lum-purple)',
      marginBottom: 4
    }
  }, n.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--lum-text)',
      lineHeight: 1.5
    }
  }, n.body))))))));
};
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-platform/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-platform/LessonView.jsx
try { (() => {
// LessonView.jsx — visualização de aula com player placeholder
const LessonView = ({
  lesson,
  onBack,
  segment
}) => {
  const seg = (window.SEGMENTS_LOGIN || []).find(s => s.id === segment) || {
    color: '#652D91'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      maxWidth: 1280
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--lum-purple)',
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 14,
      padding: 0,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M12 19l-7-7 7-7"
  })), "Voltar para In\xEDcio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: lesson.subjectColor,
      marginBottom: 6
    }
  }, lesson.subject), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 800,
      fontSize: 32,
      color: 'var(--lum-purple)',
      margin: '0 0 24px',
      letterSpacing: '-0.01em'
    }
  }, lesson.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/9',
      background: 'var(--lum-slate)',
      borderRadius: 18,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -60,
      top: -60,
      width: 220,
      height: 220,
      background: lesson.subjectColor,
      opacity: 0.30,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -60,
      bottom: -60,
      width: 220,
      height: 220,
      background: 'var(--lum-gold)',
      opacity: 0.30,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'relative',
      width: 76,
      height: 76,
      borderRadius: 999,
      background: '#fff',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 28px rgba(0,0,0,0.20)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "var(--lum-purple)",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 18,
      color: '#fff',
      fontSize: 13,
      fontWeight: 600
    }
  }, "Aula 12 \xB7 24 min \xB7 Prof\xAA Camila Rocha")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--lum-border)',
      borderRadius: 18,
      padding: 24,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--lum-purple)',
      margin: '0 0 12px'
    }
  }, "Sobre essa aula"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--lum-text)',
      lineHeight: 1.6,
      margin: '0 0 12px'
    }
  }, "Nessa aula a gente v\xEA como fun\xE7\xF5es quadr\xE1ticas aparecem em problemas reais \u2014 da trajet\xF3ria de uma bola de basquete ao formato de uma antena parab\xF3lica."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--lum-text)',
      lineHeight: 1.6,
      margin: 0
    }
  }, "Traga seu caderno e a calculadora. No final, a gente resolve juntos os 3 primeiros exerc\xEDcios da Lista 12."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      border: '1px solid var(--lum-border)',
      borderRadius: 18,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--lum-purple)',
      margin: '0 0 14px'
    }
  }, "Materiais"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [{
    t: 'Slides da aula 12.pdf',
    s: '2.4 MB'
  }, {
    t: 'Lista 12 · exercícios.pdf',
    s: '180 KB'
  }, {
    t: 'Gabarito da lista 11.pdf',
    s: '210 KB'
  }].map((m, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 10,
      borderRadius: 10,
      background: 'var(--lum-bg)',
      borderBottom: 'none',
      color: 'var(--lum-text)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: '#fff',
      border: '1px solid var(--lum-border)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: lesson.subjectColor
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, m.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--lum-muted)'
    }
  }, m.s)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lum-purple-soft)',
      borderRadius: 18,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--lum-gold)',
      marginBottom: 8
    }
  }, "Tarefa associada"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--lum-purple)',
      margin: '0 0 8px'
    }
  }, "Lista 12 \xB7 fun\xE7\xF5es quadr\xE1ticas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--lum-text)',
      marginBottom: 14
    }
  }, "Entrega quarta \xB7 17/03 \xE0s 23h59"), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 14,
      background: seg.color,
      color: '#fff',
      border: 'none',
      borderRadius: 12,
      padding: '12px 18px',
      cursor: 'pointer',
      width: '100%'
    }
  }, "Abrir tarefa")))));
};
window.LessonView = LessonView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-platform/LessonView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-platform/Login.jsx
try { (() => {
// Login.jsx — tela de login com switcher de segmento
const SEGMENTS_LOGIN = [{
  id: 'fund1',
  label: 'Fund 1',
  color: '#02A9B9'
}, {
  id: 'fund2',
  label: 'Fund 2',
  color: '#FF9933'
}, {
  id: 'medio',
  label: 'Médio',
  color: '#662483'
}, {
  id: 'prof',
  label: 'Profs',
  color: '#003366'
}];
const Login = ({
  segment,
  onSegmentChange,
  onSignIn
}) => {
  const active = SEGMENTS_LOGIN.find(s => s.id === segment) || SEGMENTS_LOGIN[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/luminova-horizontal.svg",
    alt: "Luminova",
    style: {
      height: 40,
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--lum-gold)',
      marginBottom: 12
    }
  }, "Plataforma do aluno"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 800,
      fontSize: 38,
      color: 'var(--lum-purple)',
      margin: '0 0 28px',
      lineHeight: 1.1,
      letterSpacing: '-0.01em'
    }
  }, "Ol\xE1! Bom te ver de volta."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--lum-text)',
      display: 'block',
      marginBottom: 8
    }
  }, "Segmento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 4,
      background: 'var(--lum-purple-soft)',
      borderRadius: 999,
      gap: 4
    }
  }, SEGMENTS_LOGIN.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => onSegmentChange(s.id),
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 13,
      padding: '8px 14px',
      border: 'none',
      background: s.id === segment ? s.color : 'transparent',
      color: s.id === segment ? '#fff' : 'var(--lum-purple)',
      borderRadius: 999,
      cursor: 'pointer'
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, "RA ou e-mail"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    defaultValue: "aluno@luminova.com",
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontSize: 15,
      padding: '12px 14px',
      border: '1px solid var(--lum-border)',
      borderRadius: 10,
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, "Senha"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontSize: 15,
      padding: '12px 14px',
      border: '1px solid var(--lum-border)',
      borderRadius: 10,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      alignSelf: 'flex-end',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--lum-purple)',
      borderBottom: 'none',
      marginTop: 4
    }
  }, "Esqueci minha senha")), /*#__PURE__*/React.createElement("button", {
    onClick: onSignIn,
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 15,
      background: active.color,
      color: '#fff',
      border: 'none',
      borderRadius: 12,
      padding: '14px 22px',
      cursor: 'pointer',
      marginTop: 8
    }
  }, "Entrar como ", active.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--lum-muted)',
      textAlign: 'center',
      marginTop: 4
    }
  }, "\xC9 fam\xEDlia e quer agendar uma visita? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--lum-purple)',
      borderBottom: 'none',
      fontWeight: 600
    }
  }, "Fale com a gente"), ".")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--lum-purple-soft)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -80,
      top: -60,
      width: 320,
      height: 320,
      background: active.color,
      opacity: 0.18,
      borderRadius: '50% 50% 60% 40% / 50% 50% 50% 50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -100,
      bottom: -120,
      width: 380,
      height: 320,
      background: 'var(--lum-gold)',
      opacity: 0.18,
      borderRadius: '60% 40% 50% 50% / 40% 60% 40% 60%'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/luminova-mark.png",
    alt: "",
    style: {
      width: 240,
      height: 240,
      borderRadius: '50%',
      position: 'relative'
    }
  })));
};
window.Login = Login;
window.SEGMENTS_LOGIN = SEGMENTS_LOGIN;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-platform/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-platform/Sidebar.jsx
try { (() => {
// Sidebar.jsx — nav lateral, acento na cor do segmento
const NAV = [{
  id: 'home',
  label: 'Início',
  icon: 'home'
}, {
  id: 'agenda',
  label: 'Agenda',
  icon: 'calendar'
}, {
  id: 'tarefas',
  label: 'Tarefas',
  icon: 'check-square',
  count: 4
}, {
  id: 'aulas',
  label: 'Aulas',
  icon: 'book-open'
}, {
  id: 'boletim',
  label: 'Boletim',
  icon: 'file-text'
}, {
  id: 'recados',
  label: 'Recados',
  icon: 'message-square',
  count: 2
}];

// Inline simple icon as SVG path data — Lucide vocabulary
const ICONS = {
  home: 'M3 11l9-8 9 8M5 10v9a1 1 0 0 0 1 1h3v-7h6v7h3a1 1 0 0 0 1-1v-9',
  calendar: 'M3 8h18M8 3v4M16 3v4M5 6h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z',
  'check-square': 'M9 12l2 2 4-4M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z',
  'book-open': 'M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z',
  'file-text': 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h6',
  'message-square': 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z',
  'log-out': 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9'
};
const Icon = ({
  name,
  size = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: ICONS[name]
}));
const Sidebar = ({
  segment,
  current,
  onNavigate,
  onLogout
}) => {
  const seg = (window.SEGMENTS_LOGIN || []).find(s => s.id === segment) || {
    color: '#652D91',
    label: 'Aluno'
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      height: '100vh',
      background: '#fff',
      borderRight: '1px solid var(--lum-border)',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 32px',
      borderBottom: '1px solid var(--lum-border)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/luminova-horizontal.svg",
    alt: "Luminova",
    style: {
      height: 32
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, NAV.map(item => {
    const isActive = item.id === current;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onNavigate(item.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 14px',
        borderRadius: 10,
        border: 'none',
        cursor: 'pointer',
        background: isActive ? seg.color : 'transparent',
        color: isActive ? '#fff' : 'var(--lum-text)',
        fontFamily: 'var(--lum-font-body)',
        fontWeight: 600,
        fontSize: 14,
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.count ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        background: isActive ? 'rgba(255,255,255,0.20)' : 'var(--lum-gold)',
        color: '#fff',
        borderRadius: 999,
        padding: '2px 8px'
      }
    }, item.count) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--lum-border)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '10px 14px',
      borderRadius: 10,
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--lum-muted)',
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out"
  }), "Sair")));
};
window.Sidebar = Sidebar;
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-platform/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-platform/TopBar.jsx
try { (() => {
// TopBar.jsx — barra superior com busca, sino, avatar
const TopBar = ({
  segment,
  name = 'Júlia Mendes',
  role = '8º Ano · Turma 8B'
}) => {
  const seg = (window.SEGMENTS_LOGIN || []).find(s => s.id === segment) || {
    color: '#652D91',
    label: 'Aluno'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 72,
      background: '#fff',
      borderBottom: '1px solid var(--lum-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--lum-bg)',
      border: '1px solid var(--lum-border)',
      borderRadius: 12,
      padding: '8px 14px',
      width: 340
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--lum-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.35-4.35"
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar aulas, materiais, recados\u2026",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--lum-font-body)',
      fontSize: 14,
      color: 'var(--lum-text)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--lum-muted)',
      padding: '2px 6px',
      border: '1px solid var(--lum-border)',
      borderRadius: 4
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      border: 'none',
      cursor: 'pointer',
      background: 'var(--lum-bg)',
      borderRadius: 999,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--lum-text)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 10,
      width: 8,
      height: 8,
      background: 'var(--lum-gold)',
      borderRadius: 999,
      border: '2px solid var(--lum-bg)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--lum-text)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--lum-muted)'
    }
  }, role)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: seg.color,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 800,
      fontSize: 16
    }
  }, name.split(' ').map(s => s[0]).slice(0, 2).join('')))));
};
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-platform/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitrine-labs/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitrine-labs/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitrine-labs/screens-content.jsx
try { (() => {
// screens-content.jsx — Feed/Lista, Detalhe da prática, Curadoria (tabela densa), Mobile feed
// Consome window.{T, ...} de shared.jsx

/* ============ FEED / LISTA (desktop) — grid com filtros ============ */
const ScreenFeed = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    minHeight: '100%',
    background: T.bg,
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement(Header, {
  active: "Feed"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '36px 40px 40px',
    maxWidth: 1200,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 22
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 20,
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 8
  }
}, "vitrine \xB7 147 pr\xE1ticas registradas"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 36,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em'
  }
}, "Feed da escola")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 10,
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    color: T.muted
  }
}, "estado"), ['todas', 'publicada', 'em curadoria', 'destaque'].map((s, i) => /*#__PURE__*/React.createElement(Chip, {
  key: s,
  label: s,
  active: i === 3
})))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }
}, ['tudo', 'integral', 'fundamental i', 'fundamental ii', 'ensino médio'].map((s, i) => /*#__PURE__*/React.createElement(Chip, {
  key: s,
  label: s,
  active: i === 0,
  glow: true
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 18
  }
}, PRACTICES.slice(0, 9).map(p => /*#__PURE__*/React.createElement(PracticeCard, {
  key: p.id,
  p: p,
  active: p.state === 'destaque'
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 6
  }
}, /*#__PURE__*/React.createElement(Btn, {
  kind: "ghost"
}, "Ver mais pr\xE1ticas"))));

/* ============ DETALHE DA PRÁTICA (desktop) ============ */
const ScreenDetail = () => {
  const p = PRACTICES[4]; // Leitura, Releitura e Criação Teatral — destaque
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      minHeight: '100%',
      background: T.bg,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: "Feed"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px 44px',
      maxWidth: 1080,
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: T.mono,
      fontSize: 11.5,
      color: T.muted,
      letterSpacing: '.08em'
    }
  }, "\u2190 voltar ao feed"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    p: p,
    h: 340
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PhotoPh, {
    id: p.id,
    h: 120,
    hue: 60,
    label: "foto 2"
  }), /*#__PURE__*/React.createElement(PhotoPh, {
    id: p.id,
    h: 120,
    hue: 250,
    label: "foto 3"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.mono,
      fontSize: 12,
      color: T.accent,
      letterSpacing: '.1em'
    }
  }, p.id), /*#__PURE__*/React.createElement(StateBadge, {
    state: p.state
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: T.display,
      fontWeight: 900,
      fontSize: 34,
      color: T.fg,
      margin: 0,
      letterSpacing: '-.02em',
      lineHeight: 1.08
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.author,
    size: 38
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.body,
      fontSize: 14,
      fontWeight: 600,
      color: T.fg
    }
  }, p.author), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.mono,
      fontSize: 11,
      color: T.muted
    }
  }, p.date, " \xB7 ", p.tags))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.body,
      fontSize: 15,
      color: T.muted,
      lineHeight: 1.65,
      margin: 0
    }
  }, "Estudo sobre diversos g\xEAneros textuais, oralidade, leitura e produ\xE7\xE3o de textos com o 2\xBA ano. As crian\xE7as releram a obra, recriaram cenas em pequenos grupos e encerraram com uma apresenta\xE7\xE3o teatral aberta para as fam\xEDlias."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.surface,
      border: `1px solid ${T.border}`,
      borderRadius: T.radiusLg,
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "labs-eyebrow",
    style: {
      marginBottom: 0
    }
  }, "Por que virou destaque"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.body,
      fontSize: 13.5,
      color: T.muted,
      margin: 0,
      lineHeight: 1.55
    }
  }, "\"Integra leitura e express\xE3o corporal com produ\xE7\xE3o autoral das crian\xE7as \u2014 e fecha o ciclo compartilhando com as fam\xEDlias.\" \u2014 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: T.fg
    }
  }, "Curadoria"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "purple",
    size: "sm",
    glow: true
  }, /*#__PURE__*/React.createElement(IconSpark, {
    size: 14
  }), " Inspirador \xB7 ", p.likes), /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(IconComment, {
    size: 13
  }), " Comentar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderTop: `1px solid ${T.border}`,
      paddingTop: 16
    }
  }, [['Bruna Costa', 'Que lindo ver o envolvimento deles na apresentação!'], ['Rafael Braganholi', 'Vou adaptar essa sequência pro 3º ano.']].map(([name, text]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: name,
    size: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: T.body,
      fontSize: 13,
      color: T.muted,
      margin: 0,
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: T.fg,
      fontWeight: 600
    }
  }, name), " ", text))))))));
};

/* ============ CURADORIA (desktop) — gestão, tabela densa ============ */
const ScreenCuration = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    minHeight: '100%',
    background: T.bg,
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement(Header, {
  active: "Curadoria"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '36px 40px 44px',
    maxWidth: 1200,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 8
  }
}, "gest\xE3o \xB7 piloto \xB7 semana 24"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 36,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em'
  }
}, "Painel de curadoria")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 16
  }
}, /*#__PURE__*/React.createElement(Stat, {
  value: "9",
  label: "pr\xE1ticas publicadas",
  delta: "8"
}), /*#__PURE__*/React.createElement(Stat, {
  value: "10",
  label: "destacadas",
  delta: "10",
  accent: true
}), /*#__PURE__*/React.createElement(Stat, {
  value: "9/21",
  label: "profs ativos"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1.6,
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: '16px 22px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: T.muted
  }
}, "fila de curadoria"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 14,
    color: T.fg,
    fontWeight: 600
  }
}, "2 pr\xE1ticas aguardando sua decis\xE3o"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: T.purpleLight
  }
}, "revisar agora \u2192"))), /*#__PURE__*/React.createElement(DenseTable, {
  rows: [{
    id: 'PRÁT 0146',
    title: 'Descobrindo Fatos',
    author: 'Roberta Ribeiro',
    segment: 'integral',
    state: 'curadoria',
    likes: 3,
    active: true
  }, {
    id: 'PRÁT 0140',
    title: 'Nossos Campeões: O Sucesso do Boxe Adaptado',
    author: 'Maria Xavier',
    segment: 'integral',
    state: 'curadoria',
    likes: 3,
    active: true
  }, {
    id: 'PRÁT 0147',
    title: 'Cinema',
    author: 'Sandra Regina',
    segment: 'integral',
    state: 'publicada',
    likes: 3
  }, {
    id: 'PRÁT 0145',
    title: 'Educacross',
    author: 'Bruna Costa',
    segment: 'fundamental i',
    state: 'publicada',
    likes: 3
  }, {
    id: 'PRÁT 0143',
    title: 'Leitura, Releitura e Criação Teatral.',
    author: 'Katia Nascimento',
    segment: 'fundamental i',
    state: 'destaque',
    likes: 3
  }, {
    id: 'PRÁT 0139',
    title: 'Mentoria ENEM',
    author: 'Rafael Braganholi',
    segment: 'ensino médio',
    state: 'destaque',
    likes: 2
  }]
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 20,
    alignItems: 'start'
  }
}, /*#__PURE__*/React.createElement("section", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: 22,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0
  }
}, "Publicadas por professor"), PROF_BARS.slice(0, 6).map(([name, v]) => /*#__PURE__*/React.createElement(Bar, {
  key: name,
  label: name,
  value: v,
  max: 2
}))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: 22,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0
  }
}, "Publicadas por segmento"), SEG_BARS.map(([name, v]) => /*#__PURE__*/React.createElement(Bar, {
  key: name,
  label: name,
  value: v,
  max: 5,
  color: T.accent
}))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: 22,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0
  }
}, "Sem publica\xE7\xE3o recente"), NEVER_PUBLISHED.slice(0, 5).map(name => /*#__PURE__*/React.createElement("div", {
  key: name,
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 13,
    color: T.fg,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}, name), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 10.5,
    color: T.muted,
    letterSpacing: '.06em',
    whiteSpace: 'nowrap',
    flexShrink: 0
  }
}, "nunca publicou"))), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: T.purpleLight,
    letterSpacing: '.06em',
    marginTop: 4
  }
}, "ver todos (12) \u2192")))));

/* ============ MOBILE — feed (amostra 390) ============ */
const ScreenMobile = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    height: '100%',
    background: T.bg,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '18px 20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement(Brandline, {
  size: 15,
  product: "vitrine"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    display: 'flex'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 9,
    fontWeight: 700,
    position: 'absolute',
    top: -6,
    right: -7,
    background: T.accent,
    color: T.accentFg,
    borderRadius: 99,
    padding: '0px 4px'
  }
}, "3"), /*#__PURE__*/React.createElement(IconBell, {
  size: 17,
  color: T.muted
})), /*#__PURE__*/React.createElement(Avatar, {
  name: "Rafael Braganholi",
  size: 28
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '18px 20px 10px'
  }
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 26,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em'
  }
}, "Feed da escola")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '0 20px 12px',
    display: 'flex',
    gap: 7,
    overflow: 'hidden'
  }
}, ['tudo', 'integral', 'fund i', 'fund ii', 'médio'].map((s, i) => /*#__PURE__*/React.createElement(Chip, {
  key: s,
  label: s,
  active: i === 0
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    padding: '4px 20px 90px',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    overflow: 'hidden'
  }
}, PRACTICES.slice(1, 3).map((p, i) => /*#__PURE__*/React.createElement(PracticeCard, {
  key: p.id,
  p: {
    ...p,
    photoH: 130
  },
  active: i === 0
}))), /*#__PURE__*/React.createElement(TabBar, {
  active: "Feed"
}));
Object.assign(window, {
  ScreenFeed,
  ScreenDetail,
  ScreenCuration,
  ScreenMobile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitrine-labs/screens-content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitrine-labs/screens-core.jsx
try { (() => {
// screens-core.jsx — Login, Home A (resumo) e Home B (feed integrado)
// Consome window.{T, Brandline, ...} de shared.jsx

/* ============ LOGIN (desktop) ============ */
const ScreenLogin = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    height: '100%',
    background: T.bg,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: -180,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 720,
    height: 480,
    borderRadius: '50%',
    background: 'radial-gradient(closest-side, oklch(58% .18 305 / .32), transparent)',
    filter: 'blur(30px)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0
  }
}, /*#__PURE__*/React.createElement(Brandline, {
  size: 24
}), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    width: 460,
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: '44px 44px 36px',
    boxShadow: T.glowPurple,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0
  }
}, "Vitrine Pedag\xF3gica"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 34,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em',
    lineHeight: 1.05
  }
}, "A escola que a gente faz, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "registrada.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.body,
    fontSize: 15,
    color: T.muted,
    margin: 0
  }
}, "Acesse com sua conta Google da Luminova."), /*#__PURE__*/React.createElement("button", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 16,
    cursor: 'pointer',
    padding: '15px 24px',
    borderRadius: T.pill,
    border: `1px solid ${T.borderStrong}`,
    background: T.elevated,
    color: T.fg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 8
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 48 48"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#EA4335",
  d: "M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.5 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6C12.3 13.2 17.7 9.5 24 9.5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#4285F4",
  d: "M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.8c4.4-4.1 7.2-10.1 7.2-17.5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#FBBC05",
  d: "M10.4 28.8c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8l-7.8-6C.9 16.5 0 20.1 0 24s.9 7.5 2.6 10.8l7.8-6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#34A853",
  d: "M24 48c6.2 0 11.4-2 15.2-5.5l-7.4-5.8c-2 1.4-4.7 2.2-7.8 2.2-6.3 0-11.7-3.7-13.6-9.1l-7.8 6C6.5 42.6 14.6 48 24 48z"
})), "Entrar com Google"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11.5,
    color: T.purpleLight,
    letterSpacing: '.04em'
  }
}, "apenas e-mails @luminovainterlagos.com.br")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 13,
    color: T.muted
  }
}, "Vitrine Pedag\xF3gica \xB7 Uma curadoria da Escola Luminova Interlagos"), /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#fff',
    borderRadius: 999,
    padding: '8px 16px'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/luminova-horizontal.svg",
  alt: "Escola Luminova",
  style: {
    height: 22,
    display: 'block'
  }
})))));

/* ============ LOGIN (mobile 390) ============
   Hierarquia invertida vs. desktop: "Vitrine Pedagógica" é o display
   principal; a copy vira apoio. Sem logo no centro inferior. */
const ScreenLoginMobile = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    height: '100%',
    background: T.bg,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: -140,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 480,
    height: 360,
    borderRadius: '50%',
    background: 'radial-gradient(closest-side, oklch(58% .18 305 / .32), transparent)',
    filter: 'blur(30px)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    padding: '26px 24px 0',
    display: 'flex',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(Brandline, {
  size: 16
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 24px 28px',
    gap: 0
  }
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 44,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em',
    lineHeight: 1.02
  }
}, "Vitrine", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "Pedag\xF3gica.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.body,
    fontSize: 15,
    color: T.muted,
    margin: '14px 0 0',
    lineHeight: 1.5,
    maxWidth: 300
  }
}, "Este espa\xE7o \xE9 de quem ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.accent,
    fontWeight: 600
  }
}, "faz a escola acontecer.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    width: '100%',
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: '24px 22px 22px',
    boxShadow: T.glowPurple,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 14
  }
}, /*#__PURE__*/React.createElement("button", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 16,
    cursor: 'pointer',
    padding: '16px 24px',
    borderRadius: T.pill,
    border: `1px solid ${T.borderStrong}`,
    background: T.elevated,
    color: T.fg,
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 48 48"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#EA4335",
  d: "M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.5 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6C12.3 13.2 17.7 9.5 24 9.5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#4285F4",
  d: "M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.8c4.4-4.1 7.2-10.1 7.2-17.5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#FBBC05",
  d: "M10.4 28.8c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8l-7.8-6C.9 16.5 0 20.1 0 24s.9 7.5 2.6 10.8l7.8-6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#34A853",
  d: "M24 48c6.2 0 11.4-2 15.2-5.5l-7.4-5.8c-2 1.4-4.7 2.2-7.8 2.2-6.3 0-11.7-3.7-13.6-9.1l-7.8 6C6.5 42.6 14.6 48 24 48z"
})), "Entrar com Google"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: T.purpleLight,
    letterSpacing: '.04em'
  }
}, "apenas e-mails @luminovainterlagos.com.br"))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    padding: '0 24px 30px',
    display: 'flex',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 10.5,
    color: T.muted,
    letterSpacing: '.08em',
    textAlign: 'center'
  }
}, "uma curadoria da escola luminova interlagos")));

/* ============ HOME · VARIAÇÃO A — "Resumo" (números primeiro) ============ */
const ScreenHomeA = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    minHeight: '100%',
    background: T.bg,
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement(Header, {
  active: "Home"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '36px 40px 40px',
    maxWidth: 1200,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 28
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 8
  }
}, "semana 24 \xB7 06\u201412 jun"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 40,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em'
  }
}, "Boa tarde, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "Rafael."))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 16
  }
}, /*#__PURE__*/React.createElement(Stat, {
  value: "1",
  label: "pr\xE1tica sua no ar",
  delta: "1"
}), /*#__PURE__*/React.createElement(Stat, {
  value: "1",
  label: "destaque conquistado",
  accent: true
}), /*#__PURE__*/React.createElement(Stat, {
  value: "7",
  label: "colegas publicaram esta semana"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1.4,
    background: T.surface,
    border: `1px solid ${T.purple}`,
    borderRadius: T.radiusLg,
    boxShadow: T.glowPurple,
    padding: '18px 22px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 14,
    color: T.fg,
    fontWeight: 600
  }
}, "Sua pr\xF3xima pr\xE1tica come\xE7a aqui."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn, {
  kind: "primary",
  size: "sm"
}, "+ Publicar pr\xE1tica")))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: 20
  }
}, /*#__PURE__*/React.createElement("section", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0
  }
}, "Destaques desta semana"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 14
  }
}, PRACTICES.filter(p => p.state === 'destaque').slice(0, 2).map(p => /*#__PURE__*/React.createElement("div", {
  key: p.id,
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
}, /*#__PURE__*/React.createElement(Photo, {
  p: p,
  h: 120
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }
}, /*#__PURE__*/React.createElement(StateBadge, {
  state: "destaque",
  size: 9.5
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 15,
    color: T.fg
  }
}, p.title), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 10.5,
    color: T.muted
  }
}, p.author.toLowerCase(), " \xB7 ", p.tags.split('·')[0])))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0
  }
}, "Atividade recente"), [['Jessica Campos', 'marcou "Mentoria ENEM" como inspiradora'], ['Lucas Gurian', 'marcou "Mentoria ENEM" como inspiradora'], ['Bruna Costa', 'comentou em "Leitura, Releitura e Criação Teatral."'], ['Katia Nascimento', 'publicou "Leitura, Releitura e Criação Teatral."']].map(([name, action], i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  name: name,
  size: 30
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 13.5,
    color: T.muted,
    lineHeight: 1.4
  }
}, /*#__PURE__*/React.createElement("b", {
  style: {
    color: T.fg,
    fontWeight: 600
  }
}, name), " ", action))), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    fontFamily: T.mono,
    fontSize: 11.5,
    color: T.purpleLight,
    letterSpacing: '.06em'
  }
}, "ver tudo \u2192")))));

/* ============ HOME · VARIAÇÃO B — "Feed integrado" (conteúdo primeiro) ============ */
const ScreenHomeB = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    minHeight: '100%',
    background: T.bg,
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement(Header, {
  active: "Home"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '36px 40px 40px',
    maxWidth: 1200,
    width: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 320px',
    gap: 28,
    alignItems: 'start'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 8
  }
}, "feed da escola \xB7 semana 24"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 36,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em'
  }
}, "Boa tarde, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "Rafael."))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }
}, ['tudo', 'integral', 'fundamental i', 'fundamental ii', 'ensino médio'].map((s, i) => /*#__PURE__*/React.createElement(Chip, {
  key: s,
  label: s,
  active: i === 0,
  glow: true
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 18
  }
}, PRACTICES.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement(PracticeCard, {
  key: p.id,
  p: p,
  active: i === 0
})))), /*#__PURE__*/React.createElement("aside", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    position: 'sticky',
    top: 20
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0
  }
}, "Esta semana"), [['1', 'prática sua no ar'], ['1', 'destaque conquistado'], ['7', 'colegas publicaram']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 26,
    color: T.purpleLight,
    lineHeight: 1
  }
}, v), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 13,
    color: T.muted
  }
}, l)))), /*#__PURE__*/React.createElement("div", {
  style: {
    background: T.surface,
    border: `1px solid ${T.accent}`,
    borderRadius: T.radiusLg,
    boxShadow: T.glowAccent,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: T.accent
  }
}, "mentoria enem \xB7 piloto"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 16,
    color: T.fg
  }
}, "Sextas-feiras \xB7 13h00"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 13,
    color: T.muted
  }
}, "Aulas duplas \xB7 Matem\xE1tica ENEM \xB7 foco no que a prova mais cobra."), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: T.muted
  }
}, "12 \xB7 19 \xB7 26 jun")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn, {
  kind: "primary",
  glow: true
}, "+ Publicar pr\xE1tica")))));
Object.assign(window, {
  ScreenLogin,
  ScreenLoginMobile,
  ScreenHomeA,
  ScreenHomeB
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitrine-labs/screens-core.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitrine-labs/screens-mobile-home.jsx
try { (() => {
// screens-mobile-home.jsx — Home A e Home B em mobile (390) para decisão
// Consome window.{T, ...} de shared.jsx

/* Cabeçalho mobile comum */
const MobileTop = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '18px 20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}, /*#__PURE__*/React.createElement(Brandline, {
  size: 15,
  product: "vitrine"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    display: 'flex'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 9,
    fontWeight: 700,
    position: 'absolute',
    top: -6,
    right: -7,
    background: T.accent,
    color: T.accentFg,
    borderRadius: 99,
    padding: '0px 4px'
  }
}, "3"), /*#__PURE__*/React.createElement(IconBell, {
  size: 17,
  color: T.muted
})), /*#__PURE__*/React.createElement(Avatar, {
  name: "Rafael Braganholi",
  size: 28
})));

/* ============ HOME A · MOBILE — resumo primeiro ============ */
const ScreenHomeAMobile = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    height: '100%',
    background: T.bg,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement(MobileTop, null), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    padding: '16px 20px 90px',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 4,
    fontSize: 10.5
  }
}, "semana 24 \xB7 06\u201412 jun"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 27,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em'
  }
}, "Boa tarde, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "Rafael."))), /*#__PURE__*/React.createElement("div", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: '16px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0,
    fontSize: 10.5
  }
}, "Esta semana"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 14
  }
}, [['1', 'prática sua no ar'], ['1', 'destaque conquistado'], ['7', 'colegas publicaram']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 26,
    color: T.purpleLight,
    lineHeight: 1
  }
}, v), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 11,
    color: T.muted,
    lineHeight: 1.3
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0,
    fontSize: 10.5
  }
}, "Destaques desta semana"), /*#__PURE__*/React.createElement("div", {
  style: {
    background: T.surface,
    border: `1px solid ${T.purple}`,
    borderRadius: T.radiusLg,
    boxShadow: T.glowPurple,
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement(Photo, {
  p: PRACTICES[4],
  h: 130
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '12px 16px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  }
}, /*#__PURE__*/React.createElement(StateBadge, {
  state: "destaque",
  size: 9
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 15,
    color: T.fg
  }
}, PRACTICES[4].title), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 10,
    color: T.muted
  }
}, "katia nascimento \xB7 fundamental i")))), /*#__PURE__*/React.createElement("div", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 11
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0,
    fontSize: 10.5
  }
}, "Atividade recente"), [['Jessica Campos', 'marcou "Mentoria ENEM" como inspiradora'], ['Lucas Gurian', 'marcou "Mentoria ENEM" como inspiradora']].map(([name, action]) => /*#__PURE__*/React.createElement("div", {
  key: name,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  name: name,
  size: 26
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 12,
    color: T.muted,
    lineHeight: 1.35
  }
}, /*#__PURE__*/React.createElement("b", {
  style: {
    color: T.fg,
    fontWeight: 600
  }
}, name), " ", action))))), /*#__PURE__*/React.createElement(TabBar, {
  active: "Home"
}));

/* ============ HOME B · MOBILE — feed integrado ============ */
const ScreenHomeBMobile = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    height: '100%',
    background: T.bg,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement(MobileTop, null), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    padding: '16px 20px 90px',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 27,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em'
  }
}, "Boa tarde, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "Rafael.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}, [['1', 'no ar'], ['1', 'destaque'], ['7', 'colegas']].map(([v, l]) => /*#__PURE__*/React.createElement("span", {
  key: l,
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: T.muted,
    letterSpacing: '.04em',
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.pill,
    padding: '6px 12px'
  }
}, /*#__PURE__*/React.createElement("b", {
  style: {
    color: T.purpleLight,
    fontWeight: 700
  }
}, v), " ", l))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 7,
    overflow: 'hidden'
  }
}, ['tudo', 'integral', 'fund i', 'fund ii', 'médio'].map((s, i) => /*#__PURE__*/React.createElement(Chip, {
  key: s,
  label: s,
  active: i === 0
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  }
}, /*#__PURE__*/React.createElement(PracticeCard, {
  p: {
    ...PRACTICES[4],
    photoH: 140
  },
  active: true
}), /*#__PURE__*/React.createElement(PracticeCard, {
  p: {
    ...PRACTICES[1],
    photoH: 140
  }
}))), /*#__PURE__*/React.createElement(TabBar, {
  active: "Home"
}));
Object.assign(window, {
  ScreenHomeAMobile,
  ScreenHomeBMobile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitrine-labs/screens-mobile-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitrine-labs/screens-products.jsx
try { (() => {
// screens-products.jsx — Landing do Labs (manifesto + aplicar) e Portal do aluno · dashboard (conceito)
// Consome window.{T, ...} de shared.jsx

/* Badge de estado de squad (idea · build · ship) — linguagem dos produtos Labs */
const SquadBadge = ({
  state
}) => {
  const base = {
    display: 'inline-block',
    fontFamily: T.mono,
    fontSize: 11,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    padding: '5px 12px',
    borderRadius: T.pill
  };
  if (state === 'ship') return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      background: T.accent,
      color: T.accentFg
    }
  }, "ship");
  if (state === 'idea') return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      color: T.muted,
      border: `1px solid ${T.borderStrong}`
    }
  }, "idea");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      background: 'var(--labs-state-build-soft)',
      color: T.purpleLight,
      border: `1px solid ${T.purple}`
    }
  }, state);
};

/* ============ LANDING DO LABS (desktop) ============ */
const ScreenLanding = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    minHeight: '100%',
    background: T.bg,
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement("header", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    height: 72,
    borderBottom: `1px solid ${T.border}`
  }
}, /*#__PURE__*/React.createElement(Brandline, {
  size: 19
}), /*#__PURE__*/React.createElement("nav", {
  style: {
    display: 'flex',
    gap: 28,
    alignItems: 'center'
  }
}, ['Manifesto', 'Projetos', 'Squads'].map(i => /*#__PURE__*/React.createElement("a", {
  key: i,
  href: "#",
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 14,
    color: T.muted
  }
}, i)), /*#__PURE__*/React.createElement(Btn, {
  kind: "primary",
  size: "sm"
}, "Aplicar para o Labs"))), /*#__PURE__*/React.createElement("section", {
  style: {
    position: 'relative',
    overflow: 'hidden',
    padding: '88px 40px 76px',
    borderBottom: `1px solid ${T.border}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: -140,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 680,
    height: 440,
    borderRadius: '50%',
    background: 'radial-gradient(closest-side, oklch(58% .18 305 / .35), transparent)',
    filter: 'blur(30px)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    maxWidth: 1080,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow"
}, "Luminova Labs \xB7 turma 2027 \xB7 inscri\xE7\xF5es abertas"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 62,
    lineHeight: 1.02,
    letterSpacing: '-.02em',
    color: T.fg,
    maxWidth: 760,
    margin: '0 0 20px'
  }
}, "Onde a curiosidade ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "vira projeto.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.body,
    fontSize: 19,
    color: T.muted,
    maxWidth: 540,
    margin: '0 0 32px',
    lineHeight: 1.6
  }
}, "Squads de alunos e educadores constroem solu\xE7\xF5es reais para a pr\xF3pria escola. Em ciclos curtos, com erro permitido."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 14,
    alignItems: 'center',
    marginBottom: 36
  }
}, /*#__PURE__*/React.createElement(Btn, {
  kind: "primary",
  glow: true
}, "Aplicar para o Labs"), /*#__PURE__*/React.createElement(Btn, {
  kind: "ghost"
}, "Ler o manifesto")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.mono,
    fontSize: 13,
    color: T.accent,
    letterSpacing: '.06em'
  }
}, "01\xB7Criar \u2192 02\xB7Testar \u2192 03\xB7Lan\xE7ar \xB7 v1.0"))), /*#__PURE__*/React.createElement("section", {
  style: {
    padding: '60px 40px',
    borderBottom: `1px solid ${T.border}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1080,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow"
}, "Projetos"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 30,
    color: T.fg,
    margin: '0 0 28px'
  }
}, "O que as squads j\xE1 constru\xEDram"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 18
  }
}, [['PROJETO 001', 'Vitrine Pedagógica', 'Registro vivo das práticas da escola. Em uso por 21 educadores.', 'ship', true], ['PROJETO 002', 'Makerthon Luminova', 'Uma semana pra tirar a ideia do papel — squads atacam problemas reais com dono interno.', 'build', false], ['PROJETO 003', 'Portal do aluno', 'Aprendizagem assistida por IA, feita com os alunos. Ainda conceito.', 'idea', false]].map(([id, title, body, state, hot]) => /*#__PURE__*/React.createElement("div", {
  key: id,
  style: {
    background: T.surface,
    border: `1px solid ${hot ? T.accent : T.border}`,
    borderRadius: T.radiusLg,
    padding: 24,
    boxShadow: hot ? T.glowAccent : T.shadowCard,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 12,
    color: T.accent,
    fontWeight: 500
  }
}, id), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 20,
    color: T.fg,
    margin: 0
  }
}, title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.body,
    fontSize: 14,
    color: T.muted,
    margin: 0,
    lineHeight: 1.55,
    flex: 1
  }
}, body), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SquadBadge, {
  state: state
}))))))), /*#__PURE__*/React.createElement("section", {
  style: {
    padding: '60px 40px',
    borderBottom: `1px solid ${T.border}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1080,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: 40,
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow"
}, "Quem faz"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 30,
    color: T.fg,
    margin: '0 0 16px'
  }
}, "Gente da escola, problemas da escola."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.body,
    fontSize: 16,
    color: T.muted,
    lineHeight: 1.65,
    margin: '0 0 20px'
  }
}, "Cada squad mistura alunos e educadores em torno de um problema com dono interno. Produtos t\xEAm vers\xE3o expl\xEDcita \u2014 imperfei\xE7\xE3o publicada \xE9 pedagogia."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 28
  }
}, [['3', 'produtos'], ['21', 'educadores na Vitrine'], ['v1.0', 'do design system']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 30,
    color: T.purpleLight,
    lineHeight: 1
  }
}, v), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 12.5,
    color: T.muted
  }
}, l))))), /*#__PURE__*/React.createElement("img", {
  src: "photos/equipe.png",
  alt: "Equipe Luminova",
  style: {
    width: '100%',
    height: 360,
    objectFit: 'cover',
    borderRadius: T.radiusLg,
    border: `1px solid ${T.border}`,
    display: 'block'
  }
}))), /*#__PURE__*/React.createElement("section", {
  style: {
    padding: '76px 40px',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    display: 'inline-block'
  }
}, "Manifesto"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 46,
    letterSpacing: '-.02em',
    lineHeight: 1.05,
    color: T.fg,
    margin: '10px 0 28px'
  }
}, "Aprender criando.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "Construir o futuro.")), /*#__PURE__*/React.createElement(Btn, {
  kind: "primary",
  glow: true
}, "Aplicar para o Labs")), /*#__PURE__*/React.createElement("footer", {
  style: {
    background: T.surface,
    borderTop: `1px solid ${T.border}`,
    padding: '28px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement(Brandline, {
  size: 16
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: T.muted,
    letterSpacing: '.05em'
  }
}, "Escola Luminova Interlagos \xB7 Rua Coronel Juliano, 111 \u2014 Interlagos, S\xE3o Paulo/SP \xB7 luminovainterlagos.com.br")));

/* ============ PORTAL DO ALUNO · DASHBOARD (conceito, desktop) ============ */
const TODAY_CLASSES = [{
  time: '08:00',
  subject: 'Matemática',
  hue: 60,
  title: 'Funções quadráticas',
  room: 'Sala 204',
  now: true
}, {
  time: '09:40',
  subject: 'Português',
  hue: 305,
  title: 'Machado de Assis · Dom Casmurro',
  room: 'Sala 204'
}, {
  time: '10:30',
  subject: 'História',
  hue: 250,
  title: 'Brasil Imperial',
  room: 'Sala 204'
}];
const PENDING_ACTS = [{
  subject: 'matemática',
  hue: 60,
  title: 'Lista 12 · funções quadráticas',
  due: 'entrega quarta · 17/06',
  late: false
}, {
  subject: 'português',
  hue: 305,
  title: 'Resenha · capítulos 1–5 de Dom Casmurro',
  due: 'entrega sexta · 19/06',
  late: false
}, {
  subject: 'biologia',
  hue: 150,
  title: 'Relatório de laboratório · células',
  due: 'entrega ontem · 14/06',
  late: true
}];
const ScreenStudentDash = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    minHeight: '100%',
    background: T.bg,
    display: 'grid',
    gridTemplateColumns: '232px 1fr'
  }
}, /*#__PURE__*/React.createElement("aside", {
  style: {
    background: T.surface,
    borderRight: `1px solid ${T.border}`,
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '0 8px'
  }
}, /*#__PURE__*/React.createElement(Brandline, {
  size: 15,
  product: "portal"
})), /*#__PURE__*/React.createElement("nav", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }
}, ['Início', 'Aulas', 'Atividades', 'Tutor IA', 'Notas'].map((item, i) => /*#__PURE__*/React.createElement("a", {
  key: item,
  href: "#",
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 14,
    padding: '10px 14px',
    borderRadius: T.pill,
    color: i === 0 ? '#fff' : T.muted,
    background: i === 0 ? T.purple : 'transparent',
    boxShadow: i === 0 ? T.glowPurple : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}, item, item === 'Tutor IA' && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 8.5,
    letterSpacing: '.1em',
    color: T.muted,
    border: `1px solid ${T.borderStrong}`,
    borderRadius: T.pill,
    padding: '2px 7px'
  }
}, "BETA")))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '0 8px'
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  name: "J\xFAlia Mendes",
  size: 32
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.body,
    fontSize: 13,
    fontWeight: 600,
    color: T.fg
  }
}, "J\xFAlia Mendes"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.mono,
    fontSize: 10,
    color: T.muted
  }
}, "8\xBA ano \xB7 turma 8b")))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 64,
    borderBottom: `1px solid ${T.border}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.body,
    fontSize: 13.5,
    color: T.muted,
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.pill,
    padding: '9px 18px',
    width: 320
  }
}, "Buscar aulas, atividades\u2026"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    display: 'flex'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 9,
    fontWeight: 700,
    position: 'absolute',
    top: -6,
    right: -7,
    background: T.accent,
    color: T.accentFg,
    borderRadius: 99,
    padding: '0 4px'
  }
}, "2"), /*#__PURE__*/React.createElement(IconBell, {
  size: 17,
  color: T.muted
})), /*#__PURE__*/React.createElement(Avatar, {
  name: "J\xFAlia Mendes",
  size: 32
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '30px 32px 36px',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 6
  }
}, "quarta \xB7 15 jun \xB7 semana 24"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 34,
    color: T.fg,
    margin: 0,
    letterSpacing: '-.02em'
  }
}, "Boa tarde, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "J\xFAlia."))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1.15fr 1fr',
    gap: 20,
    alignItems: 'start'
  }
}, /*#__PURE__*/React.createElement("section", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: 22,
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 10
  }
}, "Suas aulas hoje"), TODAY_CLASSES.map((c, i) => /*#__PURE__*/React.createElement("div", {
  key: c.time,
  style: {
    display: 'grid',
    gridTemplateColumns: '52px 10px 1fr auto',
    gap: 12,
    alignItems: 'center',
    padding: '12px 10px',
    borderRadius: T.radius,
    background: c.now ? 'oklch(58% .18 305 / .1)' : 'transparent',
    border: c.now ? `1px solid ${T.purple}` : '1px solid transparent'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 12.5,
    color: c.now ? T.purpleLight : T.muted
  }
}, c.time), /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 8,
    borderRadius: 99,
    background: `oklch(72% .14 ${c.hue})`
  }
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.body,
    fontSize: 14,
    fontWeight: 600,
    color: T.fg
  }
}, c.title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.mono,
    fontSize: 10.5,
    color: T.muted
  }
}, c.subject.toLowerCase(), " \xB7 ", c.room.toLowerCase())), c.now && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 10,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: T.purpleLight
  }
}, "agora")))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }
}, /*#__PURE__*/React.createElement("section", {
  style: {
    background: T.surface,
    border: `1px solid ${T.accent}`,
    borderRadius: T.radiusLg,
    boxShadow: T.glowAccent,
    padding: 22,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: T.accent
  }
}, "tutor ia \xB7 beta"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.body,
    fontSize: 14,
    color: T.fg,
    margin: 0,
    lineHeight: 1.5
  }
}, "\"Vi que a Lista 12 vence quarta. Quer revisar fun\xE7\xF5es quadr\xE1ticas em 10 minutos antes?\""), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Btn, {
  kind: "primary",
  size: "sm"
}, "Bora"), /*#__PURE__*/React.createElement(Btn, {
  kind: "ghost",
  size: "sm"
}, "Mais tarde"))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: 22,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "labs-eyebrow",
  style: {
    marginBottom: 0
  }
}, "Atividades pendentes"), PENDING_ACTS.map(a => /*#__PURE__*/React.createElement("div", {
  key: a.title,
  style: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 8,
    borderRadius: 99,
    background: `oklch(72% .14 ${a.hue})`,
    marginTop: 5,
    flexShrink: 0
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.body,
    fontSize: 13.5,
    fontWeight: 600,
    color: T.fg
  }
}, a.title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.mono,
    fontSize: 10.5,
    color: a.late ? 'var(--labs-error)' : T.muted
  }
}, a.subject, " \xB7 ", a.due, a.late ? ' · atrasada' : ''))))))))));
Object.assign(window, {
  SquadBadge,
  ScreenLanding,
  ScreenStudentDash
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitrine-labs/screens-products.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitrine-labs/shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// shared.jsx — Vitrine Pedagógica · pele Labs
// Componentes compartilhados do kit: header, nav, badges, chips,
// card de prática, stats, tabela densa, avatar, placeholders de foto.
// Exporta tudo em window ao final.

const T = {
  bg: 'var(--labs-bg)',
  surface: 'var(--labs-surface)',
  elevated: 'var(--labs-elevated)',
  border: 'var(--labs-border)',
  borderStrong: 'var(--labs-border-strong)',
  fg: 'var(--labs-fg)',
  muted: 'var(--labs-fg-muted)',
  purple: 'var(--labs-purple)',
  purpleLight: 'var(--labs-purple-light)',
  accent: 'var(--labs-accent)',
  accentFg: 'var(--labs-accent-fg)',
  display: 'var(--labs-font-display)',
  body: 'var(--labs-font-body)',
  mono: 'var(--labs-font-mono)',
  radius: 'var(--labs-radius)',
  radiusLg: 'var(--labs-radius-lg)',
  pill: 'var(--labs-radius-pill)',
  glowPurple: 'var(--labs-glow-purple)',
  glowAccent: 'var(--labs-glow-accent)',
  shadowCard: 'var(--labs-shadow-card)'
};

/* ---------- Ícones (Lucide-style inline — linear, 2px, round caps) ---------- */
const Icon = ({
  d,
  size = 16,
  color = 'currentColor',
  vb = 24
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: `0 0 ${vb} ${vb}`,
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    flexShrink: 0,
    display: 'inline-block',
    verticalAlign: '-2px'
  }
}, d.map((p, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  d: p
})));
const IconBell = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: ['M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9', 'M10.3 21a1.94 1.94 0 0 0 3.4 0']
}));
const IconSpark = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: ['M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4']
}));
const IconComment = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z']
}));

/* ---------- Brandline ---------- */
const Brandline = ({
  size = 18,
  product
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: size,
    letterSpacing: '.01em'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.purpleLight
  }
}, "luminova"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.muted,
    margin: '0 3px'
  }
}, "/"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: T.accent
  }
}, "labs.")), product && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: T.muted
  }
}, product));

/* ---------- Avatar ---------- */
const AVATAR_HUES = [305, 60, 250, 150, 25, 285];
const Avatar = ({
  name,
  size = 32
}) => {
  const initials = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  const hue = AVATAR_HUES[name.length % AVATAR_HUES.length];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      background: `oklch(32% .06 ${hue})`,
      color: `oklch(82% .08 ${hue})`,
      border: `1px solid oklch(50% .08 ${hue} / .4)`,
      display: 'grid',
      placeItems: 'center',
      fontFamily: T.mono,
      fontSize: size * 0.34,
      fontWeight: 500
    }
  }, initials);
};

/* ---------- Badge de estado de curadoria ----------
   Espelha idea/build/ship da linguagem Labs:
   publicada (neutro) · em curadoria (roxo) · destaque (laranja, único preenchido) */
const StateBadge = ({
  state,
  size = 11
}) => {
  const base = {
    display: 'inline-block',
    fontFamily: T.mono,
    fontSize: size,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    padding: '4px 11px',
    borderRadius: T.pill,
    whiteSpace: 'nowrap'
  };
  if (state === 'destaque') return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      background: T.accent,
      color: T.accentFg
    }
  }, "destaque");
  if (state === 'curadoria') return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      background: 'var(--labs-state-build-soft)',
      color: T.purpleLight,
      border: `1px solid ${T.purple}`
    }
  }, "em curadoria");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      background: 'transparent',
      color: T.muted,
      border: `1px solid ${T.borderStrong}`
    }
  }, "publicada");
};

/* ---------- Chip de filtro (segmentos, neutro no Labs) ---------- */
const Chip = ({
  label,
  active,
  glow
}) => /*#__PURE__*/React.createElement("button", {
  style: {
    fontFamily: T.mono,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '.06em',
    textTransform: 'lowercase',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: T.pill,
    border: active ? `1px solid ${T.purple}` : `1px solid ${T.borderStrong}`,
    background: active ? T.purple : 'transparent',
    color: active ? '#fff' : T.muted,
    boxShadow: active && glow ? T.glowPurple : 'none'
  }
}, label);

/* ---------- Botões ---------- */
const Btn = ({
  children,
  kind = 'primary',
  size = 'md',
  glow
}) => {
  const pad = size === 'sm' ? '9px 18px' : '13px 24px';
  const fs = size === 'sm' ? 13 : 15;
  const base = {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: fs,
    border: 0,
    cursor: 'pointer',
    padding: pad,
    borderRadius: T.pill,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8
  };
  if (kind === 'primary') return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      background: T.accent,
      color: T.accentFg,
      boxShadow: glow ? T.glowAccent : 'none'
    }
  }, children);
  if (kind === 'purple') return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      background: T.purple,
      color: '#fff',
      boxShadow: glow ? T.glowPurple : 'none'
    }
  }, children);
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      background: 'transparent',
      color: T.fg,
      border: `1px solid ${T.borderStrong}`
    }
  }, children);
};

/* ---------- Placeholder de foto (halo + ID mono — sem fotos reais) ---------- */
const PhotoPh = ({
  id,
  h = 160,
  hue = 305,
  label = 'foto da prática'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: h,
    borderRadius: T.radius,
    overflow: 'hidden',
    position: 'relative',
    background: T.elevated,
    border: `1px solid ${T.border}`,
    display: 'grid',
    placeItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    width: '70%',
    height: '120%',
    borderRadius: '50%',
    background: `radial-gradient(closest-side, oklch(58% .14 ${hue} / .25), transparent)`,
    filter: 'blur(24px)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 12,
    color: T.muted,
    letterSpacing: '.12em'
  }
}, id), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 10,
    color: T.muted,
    opacity: .6,
    letterSpacing: '.08em',
    textTransform: 'uppercase'
  }
}, label)));

/* ---------- Foto real (cover) ou placeholder halo+ID ---------- */
const Photo = ({
  p,
  h = 160
}) => p.photo ? /*#__PURE__*/React.createElement("img", {
  src: p.photo,
  alt: p.title,
  style: {
    height: h,
    width: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: T.radius,
    border: `1px solid ${T.border}`
  }
}) : /*#__PURE__*/React.createElement(PhotoPh, {
  id: p.id,
  h: h,
  hue: p.hue
});

/* ---------- Header desktop ---------- */
const NAV = ['Home', 'Feed', 'Mural', 'Curadoria'];
const Header = ({
  active = 'Home',
  user = 'Rafael Braganholi'
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
    height: 68,
    background: T.surface,
    borderBottom: `1px solid ${T.border}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 40
  }
}, /*#__PURE__*/React.createElement(Brandline, {
  product: "vitrine"
}), /*#__PURE__*/React.createElement("nav", {
  style: {
    display: 'flex',
    gap: 6
  }
}, NAV.map(item => /*#__PURE__*/React.createElement("a", {
  key: item,
  href: "#",
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 14,
    padding: '8px 14px',
    borderRadius: T.pill,
    border: 'none',
    color: item === active ? '#fff' : T.muted,
    background: item === active ? T.purple : 'transparent',
    boxShadow: item === active ? T.glowPurple : 'none'
  }
}, item)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }
}, /*#__PURE__*/React.createElement(Btn, {
  kind: "primary",
  size: "sm"
}, "+ Publicar pr\xE1tica"), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 10,
    fontWeight: 700,
    position: 'absolute',
    top: -8,
    right: -8,
    background: T.accent,
    color: T.accentFg,
    borderRadius: 99,
    padding: '1px 5px'
  }
}, "3"), /*#__PURE__*/React.createElement(IconBell, {
  size: 18,
  color: T.muted
})), /*#__PURE__*/React.createElement(Avatar, {
  name: user,
  size: 34
})));

/* ---------- Card de prática (feed/grid) ---------- */
const PracticeCard = ({
  p,
  active
}) => /*#__PURE__*/React.createElement("article", {
  style: {
    background: T.surface,
    borderRadius: T.radiusLg,
    overflow: 'hidden',
    border: `1px solid ${active ? T.purple : T.border}`,
    boxShadow: active ? T.glowPurple : T.shadowCard,
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '14px 18px',
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  name: p.author,
  size: 30
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.body,
    fontSize: 13,
    fontWeight: 600,
    color: T.fg
  }
}, p.author), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.mono,
    fontSize: 10.5,
    color: T.muted,
    letterSpacing: '.06em'
  }
}, p.date)), /*#__PURE__*/React.createElement(StateBadge, {
  state: p.state
})), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '0 18px'
  }
}, /*#__PURE__*/React.createElement(Photo, {
  p: p,
  h: p.photoH || 150
})), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '14px 18px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 17,
    color: T.fg,
    margin: 0
  }
}, p.title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: T.body,
    fontSize: 13.5,
    color: T.muted,
    margin: 0,
    lineHeight: 1.5
  }
}, p.body, " ", /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    color: T.purpleLight
  }
}, "ver completa")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: T.muted,
    letterSpacing: '.06em'
  }
}, p.tags), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginTop: 4
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11.5,
    color: T.accent,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5
  }
}, /*#__PURE__*/React.createElement(IconSpark, {
  size: 13
}), " inspirador \xB7 ", p.likes), p.comments > 0 && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11.5,
    color: T.muted,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5
  }
}, /*#__PURE__*/React.createElement(IconComment, {
  size: 12
}), " ", p.comments, " coment\xE1rios"))));

/* ---------- Stat (números da gestão) ---------- */
const Stat = ({
  value,
  label,
  delta,
  accent
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    padding: '18px 22px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    flex: 1
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.display,
    fontWeight: 900,
    fontSize: 34,
    color: accent ? T.accent : T.fg,
    lineHeight: 1
  }
}, value), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 13,
    color: T.muted
  }
}, label), delta && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: 'var(--labs-success)'
  }
}, "\u2191 ", delta));

/* ---------- Barra de distribuição (saúde do piloto) ---------- */
const Bar = ({
  label,
  value,
  max,
  color = T.purpleLight
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '150px 1fr 28px',
    alignItems: 'center',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 13,
    color: T.fg,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 10,
    borderRadius: 99,
    background: 'oklch(100% 0 0 / .06)',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: `${Math.max(4, value / max * 100)}%`,
    height: '100%',
    borderRadius: 99,
    background: value === 0 ? 'transparent' : color
  }
})), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 12,
    color: T.muted,
    textAlign: 'right'
  }
}, value));

/* ---------- Tabela densa (curadoria / gestão) ---------- */
const DenseTable = ({
  rows
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: `1px solid ${T.border}`,
    borderRadius: T.radiusLg,
    overflow: 'hidden',
    background: T.surface
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '92px 1fr 170px 130px 130px 110px',
    padding: '10px 18px',
    borderBottom: `1px solid ${T.border}`,
    background: T.elevated
  }
}, ['id', 'prática', 'professor(a)', 'segmento', 'estado', 'inspirador'].map(h => /*#__PURE__*/React.createElement("span", {
  key: h,
  style: {
    fontFamily: T.mono,
    fontSize: 10.5,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: T.muted
  }
}, h))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
  key: r.id,
  style: {
    display: 'grid',
    gridTemplateColumns: '92px 1fr 170px 130px 130px 110px',
    alignItems: 'center',
    padding: '12px 18px',
    borderBottom: i < rows.length - 1 ? `1px solid ${T.border}` : 'none',
    background: r.active ? 'oklch(58% .18 305 / .08)' : 'transparent'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11.5,
    color: T.accent
  }
}, r.id), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 13.5,
    fontWeight: 600,
    color: T.fg
  }
}, r.title), /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  name: r.author,
  size: 22
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.body,
    fontSize: 12.5,
    color: T.muted
  }
}, r.author)), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: T.muted,
    letterSpacing: '.04em'
  }
}, r.segment), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(StateBadge, {
  state: r.state,
  size: 9.5
})), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 11.5,
    color: T.muted,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5
  }
}, /*#__PURE__*/React.createElement(IconSpark, {
  size: 12
}), " ", r.likes))));

/* ---------- Tab bar mobile ---------- */
const TabBar = ({
  active = 'Home'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    background: T.surface,
    borderTop: `1px solid ${T.border}`,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    alignItems: 'end',
    padding: '10px 8px 14px'
  }
}, ['Home', 'Feed', '+', 'Mural', 'Curadoria'].map(label => label === '+' ? /*#__PURE__*/React.createElement("div", {
  key: "pub",
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    transform: 'translateY(-14px)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 52,
    height: 52,
    borderRadius: '50%',
    background: T.accent,
    color: T.accentFg,
    display: 'grid',
    placeItems: 'center',
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: 26,
    boxShadow: T.glowAccent
  }
}, "+"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 9.5,
    letterSpacing: '.08em',
    color: T.accent,
    textTransform: 'uppercase'
  }
}, "publicar")) : /*#__PURE__*/React.createElement("div", {
  key: label,
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 20,
    height: 20,
    borderRadius: 6,
    border: `2px solid ${label === active ? T.purpleLight : T.muted}`,
    opacity: label === active ? 1 : .55
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: T.mono,
    fontSize: 9.5,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: label === active ? T.purpleLight : T.muted
  }
}, label))));

/* ---------- Dados reais (dos prints) ---------- */
const PRACTICES = [{
  id: 'PRÁT 0147',
  author: 'Sandra Regina',
  date: '06 jun',
  title: 'Cinema',
  body: 'Sessão cinema por aqui! Hoje assistimos ao filme Como Treinar o Seu Dragão e aproveitamos uma…',
  tags: 'integral · clube do livro',
  state: 'publicada',
  likes: 3,
  comments: 0,
  hue: 305
}, {
  id: 'PRÁT 0146',
  author: 'Roberta Ribeiro',
  date: '03 jun',
  title: 'Descobrindo Fatos',
  body: 'Os alunos do G2 participaram da atividade "Descobrindo Fatos" com o objetivo de…',
  tags: 'integral · matemática',
  state: 'curadoria',
  likes: 3,
  comments: 0,
  hue: 60,
  photo: 'photos/diorama.png'
}, {
  id: 'PRÁT 0145',
  author: 'Bruna Costa',
  date: '03 jun',
  title: 'Educacross',
  body: 'Tecnologia e educação 1ºA · Manhã.',
  tags: 'fundamental i · 1º ano · português',
  state: 'publicada',
  likes: 3,
  comments: 0,
  hue: 250
}, {
  id: 'PRÁT 0144',
  author: 'Yasmim Torres',
  date: '03 jun',
  title: 'Jogo da memória matemático.',
  body: 'Realizamos com a turma do G4 o "Jogo da Memória da Multiplicação". Brincamos pro…',
  tags: 'integral · matemática',
  state: 'publicada',
  likes: 3,
  comments: 0,
  hue: 305
}, {
  id: 'PRÁT 0143',
  author: 'Katia Nascimento',
  date: '02 jun',
  title: 'Leitura, Releitura e Criação Teatral.',
  body: 'Estudo sobre diversos gêneros textuais, oralidade, leitura e produção de textos…',
  tags: 'fundamental i · 2º ano · português',
  state: 'destaque',
  likes: 3,
  comments: 3,
  hue: 150,
  photo: 'photos/roda-de-leitura.png'
}, {
  id: 'PRÁT 0142',
  author: 'Natalia Cabral',
  date: '02 jun',
  title: 'Traços Brasileiros: Caricaturas dos Nossos Jogadores.',
  body: 'Turmas G2 e G3 exploraram arte e cultura brasileira criando caricaturas de joga…',
  tags: 'integral · laboratório maker',
  state: 'destaque',
  likes: 4,
  comments: 2,
  hue: 25,
  photo: 'photos/teatro-figurinos.jpeg'
}, {
  id: 'PRÁT 0141',
  author: 'Bruna Costa',
  date: '03 jun',
  title: 'O poder da leitura!',
  body: 'Momento leitura · Livro: É SE EU SENTIR FELICIDADE? No 3º Ano, a leitura desenvolve…',
  tags: 'fundamental i · 3º ano · português',
  state: 'publicada',
  likes: 3,
  comments: 2,
  hue: 305,
  photo: 'photos/biblioteca.jpeg'
}, {
  id: 'PRÁT 0140',
  author: 'Maria Xavier',
  date: '03 jun',
  title: 'Nossos Campeões: O Sucesso do Boxe Adaptado',
  body: 'Levar a prática do Boxe Adaptado nessa faixa etária (ou com esses grupos especí…',
  tags: 'integral · jogos e brincadeiras',
  state: 'curadoria',
  likes: 3,
  comments: 0,
  hue: 60
}, {
  id: 'PRÁT 0139',
  author: 'Rafael Braganholi',
  date: '03 jun',
  title: 'Mentoria ENEM',
  body: 'Os alunos precisam se preparar para o ENEM. Algumas matérias são mais desafiador…',
  tags: 'ensino médio · 3º em · lab enem',
  state: 'destaque',
  likes: 2,
  comments: 2,
  hue: 305,
  photo: 'photos/leitura-em.png'
}, {
  id: 'PRÁT 0138',
  author: 'Natalia Juiz',
  date: '28 mai',
  title: 'Passeio Pedagógico Paranapiacaba',
  body: 'Oportunidades · Conhecer de perto a história ferroviária do Brasil e a influên…',
  tags: 'integral · 2º ano · história',
  state: 'publicada',
  likes: 3,
  comments: 0,
  hue: 150
}];
const PROF_BARS = [['Bruna Costa', 2], ['Yasmim Torres', 1], ['Maria Xavier', 1], ['Sandra Regina', 1], ['Natalia Juiz', 1], ['Roberta Ribeiro', 1], ['Katia Nascimento', 1], ['Natalia Cabral', 1], ['Rafael Braganholi', 1]];
const SEG_BARS = [['Integral', 5], ['Fundamental I', 3], ['Fundamental II', 0], ['Ensino Médio', 1]];
const NEVER_PUBLISHED = ['Aline Coviello', 'Moara Freitas', 'Danilo Lanza', 'Secretaria Interlagos', 'Lucas Gurian', 'Beaduarts', 'Fatima Lemos', 'Beatriz Martins'];
Object.assign(window, {
  T,
  Brandline,
  Avatar,
  StateBadge,
  Chip,
  Btn,
  PhotoPh,
  Photo,
  Header,
  TabBar,
  PracticeCard,
  Stat,
  Bar,
  DenseTable,
  Icon,
  IconBell,
  IconSpark,
  IconComment,
  PRACTICES,
  PROF_BARS,
  SEG_BARS,
  NEVER_PUBLISHED
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitrine-labs/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CtaBlock.jsx
try { (() => {
// CtaBlock.jsx — bloco roxo sólido com call-to-action
const CtaBlock = () => {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lum-purple)',
      padding: '72px 32px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -100,
      top: -80,
      width: 360,
      height: 360,
      background: '#F59C00',
      opacity: 0.18,
      borderRadius: '50%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -80,
      bottom: -100,
      width: 280,
      height: 280,
      background: '#9E54BD',
      opacity: 0.35,
      borderRadius: '50%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--lum-font-body)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--lum-gold)',
      marginBottom: 14
    }
  }, "Vem conhecer"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 800,
      fontSize: 44,
      color: '#fff',
      margin: '0 0 16px',
      letterSpacing: '-0.01em',
      lineHeight: 1.1,
      textWrap: 'balance'
    }
  }, "Marque uma visita guiada. Sem compromisso."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,0.85)',
      margin: 0,
      lineHeight: 1.55
    }
  }, "S\xE1bados de manh\xE3, com tour pelos espa\xE7os, conversa com a coordena\xE7\xE3o e caf\xE9 com fam\xEDlias atuais.")), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 700,
      fontSize: 17,
      background: 'var(--lum-gold)',
      color: '#fff',
      border: 'none',
      borderRadius: 14,
      padding: '18px 32px',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "Agendar agora \u2192")));
};
window.CtaBlock = CtaBlock;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CtaBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx — footer roxo sólido com logo branca
const Footer = () => {
  const cols = [{
    title: 'Escola',
    items: ['Sobre nós', 'Pedagogia', 'Estrutura', 'Equipe', 'Notícias']
  }, {
    title: 'Segmentos',
    items: ['Fundamental 1', 'Fundamental 2', 'Ensino Médio']
  }, {
    title: 'Matrículas',
    items: ['Agendar visita', 'Vestibulinho', 'Bolsas', 'Documentação']
  }, {
    title: 'Famílias',
    items: ['Plataforma do aluno', 'Calendário', 'Contato', 'WhatsApp']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--lum-purple)',
      color: '#fff',
      padding: '72px 32px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 40,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      background: '#fff',
      borderRadius: 999,
      padding: '14px 22px',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/luminova-horizontal.svg",
    alt: "Luminova Interlagos",
    style: {
      height: 36,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.65,
      marginBottom: 18
    }
  }, "Av. Interlagos, 4242", /*#__PURE__*/React.createElement("br", null), "S\xE3o Paulo / SP \xB7 04777-000"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['Instagram', 'YouTube', 'WhatsApp'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.10)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 600,
      borderBottom: 'none'
    },
    title: s
  }, s[0])))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--lum-gold)',
      marginBottom: 16
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 500,
      fontSize: 14,
      color: 'rgba(255,255,255,0.90)',
      borderBottom: 'none'
    }
  }, item)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.15)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13,
      color: 'rgba(255,255,255,0.65)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Escola Luminova Interlagos \xB7 Todos os direitos reservados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.65)',
      borderBottom: 'none'
    }
  }, "Privacidade"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.65)',
      borderBottom: 'none'
    }
  }, "Termos")))));
};
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Header.jsx — Luminova website header (sticky)
const Header = () => {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: '#fff',
      borderBottom: '1px solid var(--lum-border)',
      height: 80,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/luminova-horizontal.svg",
    alt: "Luminova Interlagos",
    style: {
      height: 44
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, ['Sobre nós', 'Pedagogia', 'Segmentos', 'Estrutura', 'Vestibulinho'].map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--lum-text)',
      borderBottom: 'none'
    }
  }, item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--lum-purple)',
      borderBottom: 'none'
    }
  }, "Entrar"), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 14,
      background: 'var(--lum-gold)',
      color: '#fff',
      border: 'none',
      borderRadius: 12,
      padding: '10px 18px',
      cursor: 'pointer'
    }
  }, "Agendar visita"))));
};
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — Hero institucional com blobs orgânicos
const Hero = () => {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: '#fff',
      padding: '96px 32px 88px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -120,
      top: -80,
      width: 360,
      height: 360,
      background: 'var(--lum-purple-light)',
      opacity: 0.22,
      borderRadius: '48% 52% 60% 40% / 50% 60% 40% 50%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -80,
      bottom: -120,
      width: 320,
      height: 280,
      background: 'var(--lum-gold)',
      opacity: 0.18,
      borderRadius: '60% 40% 50% 50% / 40% 60% 40% 60%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '32%',
      top: '20%',
      width: 90,
      height: 90,
      background: 'var(--lum-purple)',
      opacity: 0.08,
      borderRadius: '50% 50% 60% 40% / 50% 50% 50% 50%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--lum-font-body)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--lum-gold)',
      marginBottom: 18
    }
  }, "Matr\xEDculas abertas \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 800,
      fontSize: 60,
      color: 'var(--lum-purple)',
      lineHeight: 1.05,
      letterSpacing: '-0.015em',
      margin: '0 0 22px',
      textWrap: 'balance'
    }
  }, "Uma escola pensada para os pr\xF3ximos 12 anos da sua fam\xEDlia."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--lum-text)',
      lineHeight: 1.55,
      margin: '0 0 32px',
      maxWidth: 520
    }
  }, "Da alfabetiza\xE7\xE3o ao vestibular, com m\xE9todo pr\xF3prio e turmas pequenas. Em Interlagos, S\xE3o Paulo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 15,
      background: 'var(--lum-gold)',
      color: '#fff',
      border: 'none',
      borderRadius: 12,
      padding: '14px 24px',
      cursor: 'pointer'
    }
  }, "Agendar visita"), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 15,
      background: '#fff',
      color: 'var(--lum-purple)',
      border: '2px solid var(--lum-purple)',
      borderRadius: 12,
      padding: '12px 22px',
      cursor: 'pointer'
    }
  }, "Conhecer pedagogia"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 360,
      height: 360,
      background: 'var(--lum-purple-soft)',
      borderRadius: '46% 54% 60% 40% / 50% 50% 50% 50%'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/luminova-mark.png",
    alt: "",
    style: {
      position: 'relative',
      width: 280,
      height: 280,
      borderRadius: '50%'
    }
  }))));
};
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NewsGrid.jsx
try { (() => {
// NewsGrid.jsx — grid de novidades / agenda
const NEWS = [{
  tag: 'AGENDA',
  tagColor: '#F59C00',
  date: '15 Mar',
  title: 'Visita guiada para famílias',
  body: 'Sábado às 10h. Conheça a estrutura nova de laboratórios.',
  img: 'purple'
}, {
  tag: 'NOVIDADE',
  tagColor: '#02A9B9',
  date: '08 Mar',
  title: 'Sala maker para o Fundamental 2',
  body: 'Espaço de prototipagem com impressoras 3D e cortadora a laser.',
  img: 'gold'
}, {
  tag: 'COMUNIDADE',
  tagColor: '#662483',
  date: '01 Mar',
  title: 'Projeto Interlagos sustentável',
  body: 'Alunos do Médio em parceria com a Sub do Capela do Socorro.',
  img: 'purple-soft'
}];
const NewsGrid = () => {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 40,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--lum-font-body)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--lum-gold)',
      marginBottom: 14
    }
  }, "Vida na escola"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 40,
      color: 'var(--lum-purple)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, "O que est\xE1 acontecendo agora.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--lum-purple)',
      borderBottom: 'none',
      whiteSpace: 'nowrap'
    }
  }, "Ver tudo \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, NEWS.map((n, i) => {
    const imgBgs = {
      purple: 'linear-gradient(180deg, #F3EFF7 0%, #E5D9EF 100%)',
      gold: 'linear-gradient(180deg, #FDE9C7 0%, #F5C77D 100%)',
      'purple-soft': 'linear-gradient(180deg, #F3EFF7 0%, #C9B9DD 100%)'
    };
    // The brand is flat — but we use a single soft tint here as photo placeholder.
    // (Spec says no gradients on UI; placeholder for missing imagery is an exception.)
    return /*#__PURE__*/React.createElement("article", {
      key: i,
      style: {
        background: '#fff',
        border: '1px solid var(--lum-border)',
        borderRadius: 18,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 220ms var(--lum-ease), box-shadow 220ms var(--lum-ease)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.boxShadow = '0 10px 28px rgba(101,45,145,0.12)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.transform = '';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 180,
        background: n.img === 'gold' ? '#FDE9C7' : 'var(--lum-purple-soft)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: -40,
        bottom: -40,
        width: 200,
        height: 200,
        background: n.img === 'gold' ? '#F59C00' : '#9E54BD',
        opacity: 0.30,
        borderRadius: '50% 50% 60% 40% / 50% 50% 50% 50%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -30,
        top: -30,
        width: 120,
        height: 120,
        background: n.img === 'gold' ? '#9E54BD' : '#F59C00',
        opacity: 0.20,
        borderRadius: '50%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: n.tagColor
      }
    }, n.tag), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--lum-muted)'
      }
    }, "\xB7 ", n.date)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--lum-font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--lum-purple)',
        margin: '0 0 10px',
        lineHeight: 1.2
      }
    }, n.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--lum-muted)',
        lineHeight: 1.55,
        margin: 0
      }
    }, n.body)));
  }))));
};
window.NewsGrid = NewsGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NewsGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SegmentCards.jsx
try { (() => {
// SegmentCards.jsx — 4 cards de segmento escolar
const SEGMENTS = [{
  id: 'fund1',
  label: 'Fundamental 1',
  years: 'Anos 1 ao 5',
  color: '#02A9B9',
  soft: '#E1F5F7',
  tag: '6 a 10 anos',
  headline: 'A base que sustenta tudo.',
  body: 'Alfabetização, autonomia e curiosidade num ambiente que respeita o tempo de cada criança.'
}, {
  id: 'fund2',
  label: 'Fundamental 2',
  years: 'Anos 6 ao 9',
  color: '#FF9933',
  soft: '#FFF1E0',
  tag: '11 a 14 anos',
  headline: 'A descoberta de quem se é.',
  body: 'Projetos integradores, sala maker e a entrada gradual nas grandes áreas do conhecimento.'
}, {
  id: 'medio',
  label: 'Ensino Médio',
  years: 'Anos 10 ao 12',
  color: '#662483',
  soft: '#F1EBF4',
  tag: '15 a 17 anos',
  headline: 'Vestibular e vida adulta.',
  body: 'Trilhas eletivas, mentoria personalizada e preparação para ENEM, FUVEST e vestibulares internacionais.'
}];
const SegmentCards = () => {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lum-bg)',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--lum-font-body)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--lum-gold)',
      marginBottom: 14
    }
  }, "Segmentos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 40,
      color: 'var(--lum-purple)',
      margin: '0 0 12px',
      letterSpacing: '-0.01em',
      textWrap: 'balance',
      maxWidth: 640
    }
  }, "Doze anos de escola, tr\xEAs jeitos de aprender."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--lum-muted)',
      margin: '0 0 40px',
      maxWidth: 600
    }
  }, "Cada ciclo tem seu pr\xF3prio ritmo, professores e materiais. Conhe\xE7a o que muda em cada um."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, SEGMENTS.map(s => /*#__PURE__*/React.createElement("article", {
    key: s.id,
    style: {
      background: '#fff',
      border: '1px solid var(--lum-border)',
      borderRadius: 20,
      padding: 28,
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 220ms var(--lum-ease), box-shadow 220ms var(--lum-ease)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = '0 10px 28px rgba(101,45,145,0.12)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = '';
      e.currentTarget.style.transform = '';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -30,
      top: -30,
      width: 110,
      height: 110,
      background: s.color,
      opacity: 0.18,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 11px',
      borderRadius: 999,
      background: s.soft,
      color: s.color,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      marginBottom: 18
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--lum-muted)',
      marginBottom: 4
    }
  }, s.years, " \xB7 ", s.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--lum-font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--lum-purple)',
      margin: '8px 0 12px',
      lineHeight: 1.2
    }
  }, s.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--lum-text)',
      lineHeight: 1.55,
      margin: '0 0 20px'
    }
  }, s.body), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--lum-font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: s.color,
      borderBottom: 'none'
    }
  }, "Conhecer o ", s.label, " \u2192"))))));
};
window.SegmentCards = SegmentCards;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SegmentCards.jsx", error: String((e && e.message) || e) }); }

})();
