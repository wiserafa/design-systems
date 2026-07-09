/* global React */
// Cover slide — dark plum canvas, orange boxed hero title, photo panel with
// a concave curve cut, brand badge and lead line. Mirrors "Luminova Experience".
(function () {
  const { Slide, Photo, HighlightBox, Badge, Logo } = window.SlideKit;

  function CoverSlide() {
    return (
      <Slide bg="var(--plum-900)">
        {/* top gradient wash */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--purple-600) 0%, var(--plum-900) 42%)', opacity: 0.9 }} />
        {/* photo panel, curved on its left edge */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '46%', height: '100%',
          clipPath: 'ellipse(120% 100% at 78% 50%)' }}>
          <Photo style={{ width: '100%', height: '100%' }} label="Aluna Luminova" tone="var(--purple-600)" />
        </div>

        <div style={{ position: 'absolute', left: 64, top: 120, right: '52%' }}>
          <Badge tone="orange" style={{ fontSize: 15, padding: '8px 16px' }}>
            Matrículas <span style={{ marginLeft: 4, opacity: 0.85, fontFamily: 'var(--font-body)' }}>2026</span>
          </Badge>
          <div style={{ marginTop: 22 }}>
            <HighlightBox color="orange" lines={['Luminova', 'Experience']} size="76px" as="h1" style={{ gap: 10 }} />
          </div>
          <p style={{ color: 'var(--white)', fontSize: 24, lineHeight: 1.45, marginTop: 34, maxWidth: '15ch' }}>
            Na Luminova, aprender é descobrir o mundo todos os dias.
          </p>
        </div>

        <div style={{ position: 'absolute', right: 40, bottom: 34 }}>
          <Logo height={54} plate src="../../assets/logo-luminova-full.png" />
        </div>
      </Slide>
    );
  }
  window.CoverSlide = CoverSlide;
})();
