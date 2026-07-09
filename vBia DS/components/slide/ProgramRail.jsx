import React from 'react';

/** The seven Luminova program tracks, in deck order, with their brand colors. */
export const PROGRAMS = [
  { id: 'az',         label: 'Plataforma AZ',    color: 'var(--yellow-500)', fg: 'var(--white)' },
  { id: 'macmillan',  label: 'Macmillan',        color: 'var(--orange-500)', fg: 'var(--white)' },
  { id: 'educacross', label: 'Educacross',       color: 'var(--purple-700)', fg: 'var(--white)' },
  { id: 'financeira', label: 'Ed. Financeira',   color: 'var(--lime-500)',   fg: 'var(--white)' },
  { id: 'regua',      label: 'Régua Literária',  color: 'var(--plum-900)',   fg: 'var(--white)' },
  { id: 'ciencias',   label: 'Feira de Ciências',color: 'var(--navy-700)',   fg: 'var(--white)' },
  { id: 'projetos',   label: 'Projetos',         color: 'var(--teal-600)',   fg: 'var(--white)' },
];

/**
 * A single full-height program column: solid color fill with a vertical
 * (rotated) title and an optional icon/illustration at the base.
 * This is the atom behind the program-overview slide and the edge rails.
 */
export function ProgramColumn({
  label,
  color = 'var(--purple-700)',
  fg = 'var(--white)',
  iconSrc,
  active = true,
  flex = 1,
  style,
  ...rest
}) {
  return (
    <div
      style={{
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
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-bold)',
          fontSize: 'clamp(20px, 3.4vh, 34px)',
          color: fg,
          whiteSpace: 'nowrap',
          letterSpacing: 'var(--tracking-tight)',
        }}
      >
        {label}
      </span>
      {iconSrc ? (
        <img src={iconSrc} alt="" style={{ width: '58%', maxWidth: 72, height: 'auto' }} />
      ) : <span />}
    </div>
  );
}

/**
 * The full program rail: a row of colored ProgramColumns.
 * Pass `programs` (defaults to all seven) and optional `icons` map.
 */
export function ProgramRail({
  programs = PROGRAMS,
  icons = {},
  style,
  ...rest
}) {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', ...style }} {...rest}>
      {programs.map((p) => (
        <ProgramColumn key={p.id} label={p.label} color={p.color} fg={p.fg} iconSrc={icons[p.id]} />
      ))}
    </div>
  );
}
