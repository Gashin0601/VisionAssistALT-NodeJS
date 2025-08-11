'use client';

import { useEffect, useState } from 'react';

type Item = { id: number; title: string; number: number; html_url: string };

export default function GoodFirstIssues() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/api/github/good-first-issues')
      .then((r) => r.json())
      .then((d) => setItems(d.items ?? []))
      .catch(() => setItems([]));
  }, []);

  if (!items.length) return null;

  return (
    <section id="issues" className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6">
      <h2 className="text-xl font-semibold mb-3">募集中のIssue（Good First）</h2>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.id} className="flex items-start justify-between gap-3">
            <a
              href={it.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-300 hover:underline"
            >
              {it.title}
            </a>
            <span className="text-xs text-gray-400 shrink-0">#{it.number}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

