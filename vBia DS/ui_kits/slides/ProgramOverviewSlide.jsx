/* global React */
// Program overview — seven full-height colored columns with rotated titles.
// Mirrors the "Plataforma AZ / Macmillan / Educacross…" columns slide.
(function () {
  const { Slide, ProgramRail } = window.SlideKit;

  // Real program artwork where supplied by the brand.
  const PROGRAM_ICONS = {
    az: '../../assets/logos-partners/az.svg',
    macmillan: '../../assets/logos-partners/macmillan-education.jpeg',
    educacross: '../../assets/illustrations/educacross-owl-belinha.jpeg',
  };

  function ProgramOverviewSlide() {
    return (
      <Slide>
        <ProgramRail icons={PROGRAM_ICONS} />
      </Slide>
    );
  }
  window.ProgramOverviewSlide = ProgramOverviewSlide;
})();

