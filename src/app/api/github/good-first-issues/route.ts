import { NextResponse } from 'next/server';

export async function GET() {
  const repo = 'Gashin0601/VisionAssistALT-GPTs';
  const q = `repo:${repo} is:issue is:open label:"good first issue"`;
  const headers: Record<string, string> = {};
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(`https://api.github.com/search/issues?q=${encodeURIComponent(q)}&per_page=6`, {
    headers,
    // Cache 5分
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return NextResponse.json({ items: [] }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json({ items: data.items ?? [] });
}

