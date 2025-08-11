'use client';

import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function DecoratedCard({ className = '', children }: Props) {
  return (
    <div
      className={
        'relative group overflow-hidden rounded-2xl bg-zinc-900/60 p-6 ring-1 ring-white/10 ' +
        'hover:ring-orange-400/40 transition-colors ' +
        className
      }
    >
      {/* top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/25 to-transparent" />
      {/* triangle grid at corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-24 w-24 z-10 [clip-path:polygon(100%_0,0_0,100%_100%)] bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:10px_10px] opacity-30"
      />
      {/* corner glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 z-0 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}

