import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Pixel height of the logo image. Width scales automatically. Default 48. */
  height?: number;
  /** Wrap the logo in a white rounded plate — use over photos/dark fills. */
  plate?: boolean;
  /** Override the asset path (relative to the consuming page). */
  src?: string;
  /** Alt text. Default "Escola Luminova". */
  alt?: string;
}

/**
 * The Luminova horizontal brand lockup.
 */
export function Logo(props: LogoProps): JSX.Element;
