/* global React */
// Program detail template — the reused layout behind "Plataforma AZ",
// "Educacross", "Educação Financeira", etc. A full-bleed photo, a boxed or
// plain title, a QuoteBlock of supporting copy, and the program rail split
// into thin edge tabs: completed tracks on the left, upcoming on the right.
(function () {
  const { Slide, Photo, HighlightBox, QuoteBlock, PROGRAMS } = window.SlideKit;

  function EdgeTabs({ items, side }) {
    return (
      <div style={{ position: 'absolute', top: 0, bottom: 0, [side]: 0, display: 'flex' }}>
        {items.map((p) => (
          <div key={p.id} style={{
            width: 34, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              writingMode: 'vertical-rl', transform: 'rotate(180deg)',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
              color: 'var(--white)', whiteSpace: 'nowrap', letterSpacing: '-0.01em',
            }}>{p.label}</span>
          </div>
        ))}
      </div>
    );
  }

  function ProgramDetailSlide({
    activeId = 'az',
    title = 'Plataforma AZ',
    boxColor = null,          // null → plain dark title; else HighlightBox color
    titleLines = null,
    photoTone = 'var(--purple-600)',
    photoLabel = 'Foto',
    children,
  }) {
    const idx = PROGRAMS.findIndex((p) => p.id === activeId);
    const before = PROGRAMS.slice(0, Math.max(0, idx));
    const after = PROGRAMS.slice(idx + 1);
    const railW = before.length * 34;
    const railWr = after.length * 34;

    return (
      <Slide>
        {/* photo fills the content zone between the rails */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: railW, right: railWr }}>
          <Photo style={{ width: '100%', height: '100%' }} tone={photoTone} label={photoLabel} />
          {/* left-side legibility scrim */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 45%, transparent 65%)' }} />
        </div>

        <div style={{ position: 'absolute', left: railW + 56, top: 96, right: railWr + 380 }}>
          {boxColor
            ? <HighlightBox color={boxColor} lines={titleLines || [title]} size="56px" as="h2" />
            : <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 60, color: 'var(--white)' }}>{title}</h2>}
          <div style={{ marginTop: 34 }}>
            <QuoteBlock inverse color="var(--white)" size="22px">{children}</QuoteBlock>
          </div>
        </div>

        <EdgeTabs items={before} side="left" />
        <EdgeTabs items={after} side="right" />
      </Slide>
    );
  }
  window.ProgramDetailSlide = ProgramDetailSlide;
})();
