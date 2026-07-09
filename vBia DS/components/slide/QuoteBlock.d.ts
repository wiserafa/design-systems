import * as React from 'react';

export interface QuoteBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color of the vertical accent rule. Default var(--plum-900). */
  color?: string;
  /** Text size. Default var(--text-lead). */
  size?: string;
  /** Use white text (over dark/photo backgrounds). */
  inverse?: boolean;
  children?: React.ReactNode;
}

/** Supporting copy with a vertical accent rule. */
export function QuoteBlock(props: QuoteBlockProps): JSX.Element;
