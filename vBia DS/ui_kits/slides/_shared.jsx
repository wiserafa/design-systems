/* global React */
// Shared bits for the Luminova slide templates.
const { HighlightBox, QuoteBlock, Badge, Logo, ProgramRail, PROGRAMS } = window.LuminovaDesignSystem_3d6f8c;

const SLIDE_W = 1280, SLIDE_H = 720;

function Slide({ children, bg = 'var(--white)', style }) {
  return (
    <div style={{
      position: 'relative', width: SLIDE_W, height: SLIDE_H, overflow: 'hidden',
      background: bg, fontFamily: 'var(--font-body)', ...style,
    }}>{children}</div>
  );
}

// Tasteful photo placeholder (source deck photos were not provided as isolated assets).
function Photo({ style, label = 'Foto', tone = 'var(--purple-600)' }) {
  return (
    <div style={{
      background: `linear-gradient(150deg, ${tone}, var(--plum-900))`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-display)',
      fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 14,
      ...style,
    }}>
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2.5" y="5.5" width="19" height="14" rx="2.5"/>
          <circle cx="12" cy="12.5" r="3.6"/>
          <path d="M8 5.5l1.4-2.2h5.2L16 5.5"/>
        </svg>
        {label}
      </span>
    </div>
  );
}

window.SlideKit = { Slide, Photo, SLIDE_W, SLIDE_H, HighlightBox, QuoteBlock, Badge, Logo, ProgramRail, PROGRAMS };
