/* global React */
// Section / divider slide — light canvas, orange boxed section title, and the
// signature wavy divider (orange stroke over a plum fill) anchoring the base.
// Mirrors the "Grupo SEB" slide. Content area holds a logo wall or intro.
(function () {
  const { Slide, HighlightBox } = window.SlideKit;

  function Wave() {
    return (
      <svg viewBox="0 0 1280 200" preserveAspectRatio="none"
        style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 200, display: 'block' }}>
        <path d="M0,70 C240,140 420,10 660,60 C900,110 1080,150 1280,90 L1280,200 L0,200 Z" fill="var(--orange-500)"/>
        <path d="M0,100 C240,170 420,40 660,90 C900,140 1080,180 1280,120 L1280,200 L0,200 Z" fill="var(--plum-900)"/>
      </svg>
    );
  }

  function SectionSlide({ title = 'Grupo SEB', boxColor = 'orange', children }) {
    return (
      <Slide bg="var(--grey-050)">
        <div style={{ position: 'absolute', left: 64, top: 56 }}>
          <HighlightBox color={boxColor} size="52px" as="h2">{title}</HighlightBox>
        </div>
        <div style={{ position: 'absolute', left: 64, right: 64, top: 200, bottom: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>
        <Wave />
      </Slide>
    );
  }
  window.SectionSlide = SectionSlide;
})();
