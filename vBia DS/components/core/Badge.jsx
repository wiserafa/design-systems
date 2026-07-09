import React from 'react';

const TONES = {
  orange: { bg: 'var(--orange-500)', fg: 'var(--white)' },
  yellow: { bg: 'var(--yellow-500)', fg: 'var(--plum-900)' },
  purple: { bg: 'var(--purple-700)', fg: 'var(--white)' },
  lime:   { bg: 'var(--lime-500)',   fg: 'var(--white)' },
  plum:   { bg: 'var(--plum-900)',   fg: 'var(--white)' },
  navy:   { bg: 'var(--navy-700)',   fg: 'var(--white)' },
  teal:   { bg: 'var(--teal-600)',   fg: 'var(--white)' },
  soft:   { bg: 'var(--grey-050)',   fg: 'var(--grey-700)' },
};

/**
 * Small rounded label/pill for tags, program markers, and metadata.
 */
export function Badge({ children, tone = 'orange', style, ...rest }) {
  const t = TONES[tone] || TONES.orange;
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
