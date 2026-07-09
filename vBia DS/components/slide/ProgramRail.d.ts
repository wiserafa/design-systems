import * as React from 'react';

export interface Program {
  id: string;
  label: string;
  color: string;
  fg?: string;
}

/** The seven Luminova program tracks with their brand colors. */
export const PROGRAMS: Program[];

export interface ProgramColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  color?: string;
  fg?: string;
  iconSrc?: string;
  active?: boolean;
  flex?: number;
}

/** A single full-height colored program column with rotated title. */
export function ProgramColumn(props: ProgramColumnProps): JSX.Element;

export interface ProgramRailProps extends React.HTMLAttributes<HTMLDivElement> {
  programs?: Program[];
  /** Map of program id → icon image src. */
  icons?: Record<string, string>;
}

/** Row of colored program columns — the program-overview treatment. */
export function ProgramRail(props: ProgramRailProps): JSX.Element;
