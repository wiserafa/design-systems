/* @ds-bundle: {"format":4,"namespace":"LuminovaDesignSystem_3d6f8c","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"HighlightBox","sourcePath":"components/slide/HighlightBox.jsx"},{"name":"PROGRAMS","sourcePath":"components/slide/ProgramRail.jsx"},{"name":"ProgramColumn","sourcePath":"components/slide/ProgramRail.jsx"},{"name":"ProgramRail","sourcePath":"components/slide/ProgramRail.jsx"},{"name":"QuoteBlock","sourcePath":"components/slide/QuoteBlock.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"d661912fe098","components/core/Badge.jsx":"fbee1f9bea95","components/core/Button.jsx":"e16ed208af54","components/slide/HighlightBox.jsx":"a8633a9eb389","components/slide/ProgramRail.jsx":"99076ac1aec4","components/slide/QuoteBlock.jsx":"9c718c638407","ui_kits/slides/CoverSlide.jsx":"4b6be7d12a3e","ui_kits/slides/ProgramDetailSlide.jsx":"b78db1d56c07","ui_kits/slides/ProgramOverviewSlide.jsx":"edbbc5fd017d","ui_kits/slides/SectionSlide.jsx":"b684c7445a10"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LuminovaDesignSystem_3d6f8c = window.LuminovaDesignSystem_3d6f8c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Luminova brand lockup. Renders the official horizontal logo asset
 * (orange circle "b." mark + "ESCOLA luminova" wordmark).
 *
 * Only the full-color horizontal lockup was provided by the brand.
 * For dark backgrounds the deck uses a black/white circle variant that
 * was not supplied as a separate file — use `plate` to sit the color
 * logo on a light chip when placing it over photography or dark fills.
 */
function Logo({
  height = 48,
  plate = false,
  src = 'assets/logo-luminova-full.png',
  alt = 'Escola Luminova',
  style,
  ...rest
}) {
  const img = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
  if (!plate) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), img);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--white)',
      padding: `${Math.round(height * 0.28)}px ${Math.round(height * 0.42)}px`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rest), img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  orange: {
    bg: 'var(--orange-500)',
    fg: 'var(--white)'
  },
  yellow: {
    bg: 'var(--yellow-500)',
    fg: 'var(--plum-900)'
  },
  purple: {
    bg: 'var(--purple-700)',
    fg: 'var(--white)'
  },
  lime: {
    bg: 'var(--lime-500)',
    fg: 'var(--white)'
  },
  plum: {
    bg: 'var(--plum-900)',
    fg: 'var(--white)'
  },
  navy: {
    bg: 'var(--navy-700)',
    fg: 'var(--white)'
  },
  teal: {
    bg: 'var(--teal-600)',
    fg: 'var(--white)'
  },
  soft: {
    bg: 'var(--grey-050)',
    fg: 'var(--grey-700)'
  }
};

/**
 * Small rounded label/pill for tags, program markers, and metadata.
 */
function Badge({
  children,
  tone = 'orange',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.orange;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-caption)',
      lineHeight: 1,
      letterSpacing: '0.02em',
      padding: '6px 12px',
      color: t.fg,
      background: t.bg,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    bg: 'var(--orange-500)',
    fg: 'var(--white)',
    bd: 'transparent'
  },
  secondary: {
    bg: 'var(--purple-700)',
    fg: 'var(--white)',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--purple-700)',
    bd: 'var(--purple-700)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--purple-700)',
    bd: 'transparent'
  }
};
const SIZES = {
  sm: {
    pad: '8px 18px',
    fs: 'var(--text-small)'
  },
  md: {
    pad: '13px 28px',
    fs: 'var(--text-body)'
  },
  lg: {
    pad: '17px 38px',
    fs: 'var(--text-body-lg)'
  }
};

/**
 * Pill call-to-action button in the Luminova style (rounded, geometric,
 * warm). Intentional addition — the source deck has no interactive UI,
 * but enrollment/marketing surfaces need a CTA. Kept on-brand.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: s.fs,
      padding: s.pad,
      color: v.fg,
      background: v.bg,
      border: `2px solid ${v.bd}`,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)',
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = 'scale(0.97)'),
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/slide/HighlightBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILLS = {
  orange: {
    bg: 'var(--orange-500)',
    fg: 'var(--white)'
  },
  yellow: {
    bg: 'var(--yellow-500)',
    fg: 'var(--plum-900)'
  },
  purple: {
    bg: 'var(--purple-700)',
    fg: 'var(--white)'
  },
  lime: {
    bg: 'var(--lime-500)',
    fg: 'var(--white)'
  },
  plum: {
    bg: 'var(--plum-900)',
    fg: 'var(--white)'
  },
  white: {
    bg: 'var(--white)',
    fg: 'var(--plum-900)'
  }
};

/**
 * The signature Luminova title treatment: heading text sitting inside a
 * solid color block. Multi-line titles box each line separately (as in the
 * "Luminova / Experience" cover). Use `as` to control the heading level.
 */
function HighlightBox({
  children,
  color = 'orange',
  size = 'var(--text-h1)',
  as: Tag = 'span',
  lines,
  style,
  ...rest
}) {
  const f = FILLS[color] || FILLS.orange;
  const box = {
    display: 'table',
    background: f.bg,
    color: f.fg,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-bold)',
    fontSize: size,
    lineHeight: 1.02,
    padding: '0.08em 0.22em',
    borderRadius: '2px',
    width: 'fit-content'
  };
  if (Array.isArray(lines)) {
    return /*#__PURE__*/React.createElement(Tag, _extends({
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.12em',
        ...style
      }
    }, rest), lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: box
    }, l)));
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...box,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { HighlightBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/HighlightBox.jsx", error: String((e && e.message) || e) }); }

// components/slide/ProgramRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The seven Luminova program tracks, in deck order, with their brand colors. */
const PROGRAMS = [{
  id: 'az',
  label: 'Plataforma AZ',
  color: 'var(--yellow-500)',
  fg: 'var(--white)'
}, {
  id: 'macmillan',
  label: 'Macmillan',
  color: 'var(--orange-500)',
  fg: 'var(--white)'
}, {
  id: 'educacross',
  label: 'Educacross',
  color: 'var(--purple-700)',
  fg: 'var(--white)'
}, {
  id: 'financeira',
  label: 'Ed. Financeira',
  color: 'var(--lime-500)',
  fg: 'var(--white)'
}, {
  id: 'regua',
  label: 'Régua Literária',
  color: 'var(--plum-900)',
  fg: 'var(--white)'
}, {
  id: 'ciencias',
  label: 'Feira de Ciências',
  color: 'var(--navy-700)',
  fg: 'var(--white)'
}, {
  id: 'projetos',
  label: 'Projetos',
  color: 'var(--teal-600)',
  fg: 'var(--white)'
}];

/**
 * A single full-height program column: solid color fill with a vertical
 * (rotated) title and an optional icon/illustration at the base.
 * This is the atom behind the program-overview slide and the edge rails.
 */
function ProgramColumn({
  label,
  color = 'var(--purple-700)',
  fg = 'var(--white)',
  iconSrc,
  active = true,
  flex = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      flex: `${flex} 1 0`,
      alignSelf: 'stretch',
      background: color,
      opacity: active ? 1 : 0.9,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5) 0',
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'clamp(20px, 3.4vh, 34px)',
      color: fg,
      whiteSpace: 'nowrap',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, label), iconSrc ? /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      width: '58%',
      maxWidth: 72,
      height: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", null));
}

/**
 * The full program rail: a row of colored ProgramColumns.
 * Pass `programs` (defaults to all seven) and optional `icons` map.
 */
function ProgramRail({
  programs = PROGRAMS,
  icons = {},
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      width: '100%',
      height: '100%',
      ...style
    }
  }, rest), programs.map(p => /*#__PURE__*/React.createElement(ProgramColumn, {
    key: p.id,
    label: p.label,
    color: p.color,
    fg: p.fg,
    iconSrc: icons[p.id]
  })));
}
Object.assign(__ds_scope, { PROGRAMS, ProgramColumn, ProgramRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/ProgramRail.jsx", error: String((e && e.message) || e) }); }

// components/slide/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A body/lead paragraph preceded by a vertical accent rule — the treatment
 * used for supporting copy on the "Plataforma AZ" slide. Supports **bold**
 * emphasis passed as JSX in children.
 */
function QuoteBlock({
  children,
  color = 'var(--plum-900)',
  size = 'var(--text-lead)',
  inverse = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'stretch',
      maxWidth: '30ch',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 var(--rule-width)',
      background: color,
      borderRadius: 'var(--radius-pill)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: size,
      lineHeight: 'var(--leading-normal)',
      color: inverse ? 'var(--white)' : 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/CoverSlide.jsx
try { (() => {
/* global React */
// Cover slide — dark plum canvas, orange boxed hero title, photo panel with
// a concave curve cut, brand badge and lead line. Mirrors "Luminova Experience".
(function () {
  const {
    Slide,
    Photo,
    HighlightBox,
    Badge,
    Logo
  } = window.SlideKit;
  function CoverSlide() {
    return /*#__PURE__*/React.createElement(Slide, {
      bg: "var(--plum-900)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, var(--purple-600) 0%, var(--plum-900) 42%)',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '46%',
        height: '100%',
        clipPath: 'ellipse(120% 100% at 78% 50%)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      style: {
        width: '100%',
        height: '100%'
      },
      label: "Aluna Luminova",
      tone: "var(--purple-600)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 64,
        top: 120,
        right: '52%'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "orange",
      style: {
        fontSize: 15,
        padding: '8px 16px'
      }
    }, "Matr\xEDculas ", /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 4,
        opacity: 0.85,
        fontFamily: 'var(--font-body)'
      }
    }, "2026")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(HighlightBox, {
      color: "orange",
      lines: ['Luminova', 'Experience'],
      size: "76px",
      as: "h1",
      style: {
        gap: 10
      }
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--white)',
        fontSize: 24,
        lineHeight: 1.45,
        marginTop: 34,
        maxWidth: '15ch'
      }
    }, "Na Luminova, aprender \xE9 descobrir o mundo todos os dias.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 40,
        bottom: 34
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      height: 54,
      plate: true,
      src: "../../assets/logo-luminova-full.png"
    })));
  }
  window.CoverSlide = CoverSlide;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/CoverSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/ProgramDetailSlide.jsx
try { (() => {
/* global React */
// Program detail template — the reused layout behind "Plataforma AZ",
// "Educacross", "Educação Financeira", etc. A full-bleed photo, a boxed or
// plain title, a QuoteBlock of supporting copy, and the program rail split
// into thin edge tabs: completed tracks on the left, upcoming on the right.
(function () {
  const {
    Slide,
    Photo,
    HighlightBox,
    QuoteBlock,
    PROGRAMS
  } = window.SlideKit;
  function EdgeTabs({
    items,
    side
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        [side]: 0,
        display: 'flex'
      }
    }, items.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        width: 34,
        background: p.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--white)',
        whiteSpace: 'nowrap',
        letterSpacing: '-0.01em'
      }
    }, p.label))));
  }
  function ProgramDetailSlide({
    activeId = 'az',
    title = 'Plataforma AZ',
    boxColor = null,
    // null → plain dark title; else HighlightBox color
    titleLines = null,
    photoTone = 'var(--purple-600)',
    photoLabel = 'Foto',
    children
  }) {
    const idx = PROGRAMS.findIndex(p => p.id === activeId);
    const before = PROGRAMS.slice(0, Math.max(0, idx));
    const after = PROGRAMS.slice(idx + 1);
    const railW = before.length * 34;
    const railWr = after.length * 34;
    return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: railW,
        right: railWr
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      style: {
        width: '100%',
        height: '100%'
      },
      tone: photoTone,
      label: photoLabel
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 45%, transparent 65%)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: railW + 56,
        top: 96,
        right: railWr + 380
      }
    }, boxColor ? /*#__PURE__*/React.createElement(HighlightBox, {
      color: boxColor,
      lines: titleLines || [title],
      size: "56px",
      as: "h2"
    }) : /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 60,
        color: 'var(--white)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 34
      }
    }, /*#__PURE__*/React.createElement(QuoteBlock, {
      inverse: true,
      color: "var(--white)",
      size: "22px"
    }, children))), /*#__PURE__*/React.createElement(EdgeTabs, {
      items: before,
      side: "left"
    }), /*#__PURE__*/React.createElement(EdgeTabs, {
      items: after,
      side: "right"
    }));
  }
  window.ProgramDetailSlide = ProgramDetailSlide;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/ProgramDetailSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/ProgramOverviewSlide.jsx
try { (() => {
/* global React */
// Program overview — seven full-height colored columns with rotated titles.
// Mirrors the "Plataforma AZ / Macmillan / Educacross…" columns slide.
(function () {
  const {
    Slide,
    ProgramRail
  } = window.SlideKit;

  // Real program artwork where supplied by the brand.
  const PROGRAM_ICONS = {
    az: '../../assets/logos-partners/az.svg',
    macmillan: '../../assets/logos-partners/macmillan-education.jpeg',
    educacross: '../../assets/illustrations/educacross-owl-belinha.jpeg'
  };
  function ProgramOverviewSlide() {
    return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(ProgramRail, {
      icons: PROGRAM_ICONS
    }));
  }
  window.ProgramOverviewSlide = ProgramOverviewSlide;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/ProgramOverviewSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/SectionSlide.jsx
try { (() => {
/* global React */
// Section / divider slide — light canvas, orange boxed section title, and the
// signature wavy divider (orange stroke over a plum fill) anchoring the base.
// Mirrors the "Grupo SEB" slide. Content area holds a logo wall or intro.
(function () {
  const {
    Slide,
    HighlightBox
  } = window.SlideKit;
  function Wave() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 1280 200",
      preserveAspectRatio: "none",
      style: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 200,
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0,70 C240,140 420,10 660,60 C900,110 1080,150 1280,90 L1280,200 L0,200 Z",
      fill: "var(--orange-500)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M0,100 C240,170 420,40 660,90 C900,140 1080,180 1280,120 L1280,200 L0,200 Z",
      fill: "var(--plum-900)"
    }));
  }
  function SectionSlide({
    title = 'Grupo SEB',
    boxColor = 'orange',
    children
  }) {
    return /*#__PURE__*/React.createElement(Slide, {
      bg: "var(--grey-050)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 64,
        top: 56
      }
    }, /*#__PURE__*/React.createElement(HighlightBox, {
      color: boxColor,
      size: "52px",
      as: "h2"
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 64,
        right: 64,
        top: 200,
        bottom: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, children), /*#__PURE__*/React.createElement(Wave, null));
  }
  window.SectionSlide = SectionSlide;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/SectionSlide.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.HighlightBox = __ds_scope.HighlightBox;

__ds_ns.PROGRAMS = __ds_scope.PROGRAMS;

__ds_ns.ProgramColumn = __ds_scope.ProgramColumn;

__ds_ns.ProgramRail = __ds_scope.ProgramRail;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

})();
