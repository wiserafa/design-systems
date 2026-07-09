import * as React from 'react';

export type BadgeTone = 'orange' | 'yellow' | 'purple' | 'lime' | 'plum' | 'navy' | 'teal' | 'soft';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. Default "orange". */
  tone?: BadgeTone;
  children?: React.ReactNode;
}

/** Small rounded label/pill. */
export function Badge(props: BadgeProps): JSX.Element;
