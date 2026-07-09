import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary" (orange). */
  variant?: ButtonVariant;
  /** Size. Default "md". */
  size?: ButtonSize;
  children?: React.ReactNode;
}

/** Pill CTA button in the Luminova style. */
export function Button(props: ButtonProps): JSX.Element;
