'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type VersionItem = {
  version: string;
  date: string;
  summary: string;
  changes: string[];
  gptUrl: string;
  tag?: string;
};

const versions: VersionItem[] = [
  {
    version: '2.0',
    date: '2025/08/08',
    summary: '解析精度と使い勝手を強化したメジャーアップデート',
    changes: [
      'OCRおよび画像解析の精度を向上',
      'レスポンスの高速化と安定性の改善',
      'Webサイト公開に伴う情報整備',
    ],
    gptUrl: 'https://chatgpt.com/g/g-DRYfgEhV6-visionassist-alt',
    tag: 'Beta',
  },
  {
    version: '1.0',
    date: '2024/08/08',
    summary: 'VisionAssist ALT 初期リリース',
    changes: [
      '画像からのALTテキスト自動生成（日本語）',
      '基本的なOCR読み取りと説明生成',
      'アクセシビリティ配慮のガイドライン実装',
    ],
    gptUrl: 'https://chatgpt.com/g/g-DRYfgEhV6-visionassist-alt',
  },
];

export default function VersionsPage() {
  const { ref, inView } = useScrollAnimation();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 text-gray-400 hover:text-orange-400 transition-colors duration-200 group"
            >
              <svg
                className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              ホームに戻る
            </Link>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            ref={ref}
          >
            過去バージョン
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {versions.map((v) => (
              <motion.div
                key={v.version}
                whileHover={{ y: -2, scale: 1.005 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22, duration: 0.8 }}
                className="relative group overflow-hidden rounded-xl bg-gray-900/80 p-6 ring-1 ring-white/10 hover:ring-orange-400/40 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              >
                {/* ヘアライン */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/25 to-transparent" />
                {/* 三角グリッド（薄い格子パターンのコーナー） */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-0 right-0 h-28 w-28 z-10 [clip-path:polygon(100%_0,0_0,100%_100%)] bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:10px_10px] opacity-40"
                />
                {/* 角の微グロー（hover時のみ） */}
                <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 z-0 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-semibold">Ver.{v.version}</h2>
                  {v.tag && (
                    <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-400/10 px-2 py-0.5 text-xs text-orange-300">
                      {v.tag}
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-white/5 px-2 py-0.5 text-[11px] font-mono text-gray-400 ring-1 ring-white/10">
                    {v.date}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{v.summary}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-6">
                  {v.changes.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link
                    href={`/versions/${encodeURIComponent(v.version)}`}
                    className="px-4 py-2 text-sm rounded-md border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-colors"
                  >
                    詳細を見る
                  </Link>
                  <a
                    href={v.gptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-md border border-gray-500 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    GPTsを開く
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

