import React from 'react';

const VARIANTS = {
  primary:   { bg: 'var(--orange-500)', fg: 'var(--white)', bd: 'transparent' },
  secondary: { bg: 'var(--purple-700)', fg: 'var(--white)', bd: 'transparent' },
  outline:   { bg: 'transparent', fg: 'var(--purple-700)', bd: 'var(--purple-700)' },
  ghost:     { bg: 'transparent', fg: 'var(--purple-700)', bd: 'transparent' },
};

const SIZES = {
  sm: { pad: '8px 18px', fs: 'var(--text-small)' },
  md: { pad: '13px 28px', fs: 'var(--text-body)' },
  lg: { pad: '17px 38px', fs: 'var(--text-body-lg)' },
};

/**
 * Pill call-to-action button in the Luminova style (rounded, geometric,
 * warm). Intentional addition — the source deck has no interactive UI,
 * but enrollment/marketing surfaces need a CTA. Kept on-brand.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return (
    <button
      disabled={disabled}
      style={{
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
        ...style,
      }}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = 'scale(0.97)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      {...rest}
    >
      {children}
    </button>
  );
}
