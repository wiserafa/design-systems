import React from 'react';

const FILLS = {
  orange: { bg: 'var(--orange-500)', fg: 'var(--white)' },
  yellow: { bg: 'var(--yellow-500)', fg: 'var(--plum-900)' },
  purple: { bg: 'var(--purple-700)', fg: 'var(--white)' },
  lime:   { bg: 'var(--lime-500)',   fg: 'var(--white)' },
  plum:   { bg: 'var(--plum-900)',   fg: 'var(--white)' },
  white:  { bg: 'var(--white)',      fg: 'var(--plum-900)' },
};

/**
 * The signature Luminova title treatment: heading text sitting inside a
 * solid color block. Multi-line titles box each line separately (as in the
 * "Luminova / Experience" cover). Use `as` to control the heading level.
 */
export function HighlightBox({
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
    width: 'fit-content',
  };
  if (Array.isArray(lines)) {
    return (
      <Tag style={{ display: 'flex', flexDirection: 'column', gap: '0.12em', ...style }} {...rest}>
        {lines.map((l, i) => <span key={i} style={box}>{l}</span>)}
      </Tag>
    );
  }
  return <Tag style={{ ...box, ...style }} {...rest}>{children}</Tag>;
}
