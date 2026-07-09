/* @ds-bundle: {"format":3,"namespace":"LuminovaDigital_019e2d","components":[],"sourceHashes":{"ui_kits/student-platform/ActivityCard.jsx":"9b7eade76fc7","ui_kits/student-platform/Dashboard.jsx":"d438e77a38d9","ui_kits/student-platform/LessonView.jsx":"992d8603f344","ui_kits/student-platform/Login.jsx":"296c2fa5e4c8","ui_kits/student-platform/Sidebar.jsx":"21948566e724","ui_kits/student-platform/TopBar.jsx":"2f15cb4ff267","ui_kits/website/CtaBlock.jsx":"3b0e479b3ca0","ui_kits/website/Footer.jsx":"dd760c3bbfb8","ui_kits/website/Header.jsx":"f5f0efd497f9","ui_kits/website/Hero.jsx":"af80720fa098","ui_kits/website/NewsGrid.jsx":"1a47270ceb88","ui_kits/website/SegmentCards.jsx":"c4c5ccf7e2f1"},"inlinedExternals":[],"unexposedExports":[]} */

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
