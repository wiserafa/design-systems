import * as React from 'react';

export type HighlightColor = 'orange' | 'yellow' | 'purple' | 'lime' | 'plum' | 'white';

export interface HighlightBoxProps extends React.HTMLAttributes<HTMLElement> {
  /** Fill color of the box. Default "orange". */
  color?: HighlightColor;
  /** Font size (any CSS length or token). Default var(--text-h1). */
  size?: string;
  /** Heading tag to render. Default "span". */
  as?: keyof JSX.IntrinsicElements;
  /** Render each string as its own boxed line (stacked). Overrides children. */
  lines?: string[];
  children?: React.ReactNode;
}

/** Luminova's signature title treatment — heading text on a solid color block. */
export function HighlightBox(props: HighlightBoxProps): JSX.Element;
