'use client';

export default function SectionHeading({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="mb-3">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}

