import React from 'react';

/**
 * A body/lead paragraph preceded by a vertical accent rule — the treatment
 * used for supporting copy on the "Plataforma AZ" slide. Supports **bold**
 * emphasis passed as JSX in children.
 */
export function QuoteBlock({
  children,
  color = 'var(--plum-900)',
  size = 'var(--text-lead)',
  inverse = false,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'stretch',
        maxWidth: '30ch',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          flex: '0 0 var(--rule-width)',
          background: color,
          borderRadius: 'var(--radius-pill)',
        }}
      />
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-body)',
          fontSize: size,
          lineHeight: 'var(--leading-normal)',
          color: inverse ? 'var(--white)' : 'var(--text-body)',
        }}
      >
        {children}
      </p>
    </div>
  );
}
