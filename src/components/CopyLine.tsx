'use client';

type Props = { text: string };

export default function CopyLine({ text }: Props) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="w-full text-left font-mono text-sm bg-black/30 ring-1 ring-white/10 rounded px-3 py-2 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70"
    >
      {text}
    </button>
  );
}

