import React from 'react';

/**
 * Luminova brand lockup. Renders the official horizontal logo asset
 * (orange circle "b." mark + "ESCOLA luminova" wordmark).
 *
 * Only the full-color horizontal lockup was provided by the brand.
 * For dark backgrounds the deck uses a black/white circle variant that
 * was not supplied as a separate file — use `plate` to sit the color
 * logo on a light chip when placing it over photography or dark fills.
 */
export function Logo({
  height = 48,
  plate = false,
  src = 'assets/logo-luminova-full.png',
  alt = 'Escola Luminova',
  style,
  ...rest
}) {
  const img = (
    <img
      src={src}
      alt={alt}
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
  if (!plate) {
    return <span style={{ display: 'inline-flex', ...style }} {...rest}>{img}</span>;
  }
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--white)',
        padding: `${Math.round(height * 0.28)}px ${Math.round(height * 0.42)}px`,
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        ...style,
      }}
      {...rest}
    >
      {img}
    </span>
  );
}
