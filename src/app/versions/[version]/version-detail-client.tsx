'use client';

import { motion } from 'framer-motion';

type VersionDetail = {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: string[];
  gptUrl: string;
  promptUrl: string;
};

export default function VersionDetailClient({ detail }: { detail: VersionDetail }) {
  // このページのリンクをコピー機能は不要のため削除

  return (
    <>
      <motion.h1
        className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {detail.title}
      </motion.h1>

      <motion.div
        className="mb-10 flex flex-wrap items-center gap-3 text-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <motion.span
          className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 font-mono text-xs text-gray-300 ring-1 ring-white/10"
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.18 }}
        >
          {detail.date}
        </motion.span>
        <motion.span
          className="inline-flex items-center rounded-full bg-orange-400/10 text-orange-300 ring-1 ring-orange-400/30 px-2.5 py-1 text-xs"
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.22 }}
        >
          v{detail.version}
        </motion.span>
        <motion.span
          className="text-gray-500"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.26 }}
        >
          リリース
        </motion.span>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        {/* Main */}
        <div className="lg:col-span-3 space-y-10">
          <motion.section
            id="overview"
            className="pt-6 first:pt-0 border-t border-white/10 first:border-t-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3">概要</h2>
            <p className="text-gray-300 leading-relaxed">{detail.description}</p>
          </motion.section>

          {/* Ver.2.0の場合のみ動画を表示 */}
          {detail.version === '2.0' && (
            <motion.section
              id="demo-video"
              className="pt-6 border-t border-white/10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.075 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4">デモ動画</h2>
              <div className="relative w-full max-w-4xl">
                                  <video 
                    src="/videos/version2-features.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full rounded-lg shadow-2xl border border-gray-700"
                    poster="/images/visionassist-alt.jpeg"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  >
                  お使いのブラウザは動画タグをサポートしていません。
                </video>
              </div>
            </motion.section>
          )}

          <motion.section
            id="changes"
            className="pt-6 border-t border-white/10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4">更新内容</h2>
            <ul className="mt-2 space-y-3">
              {detail.changes.map((c) => (
                <li key={c} className="flex items-start gap-3 text-gray-300">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-none text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 10.12a1 1 0 111.414-1.415l3.222 3.222 6.657-6.657a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Aside */}
        <motion.aside
          className="lg:col-span-1 lg:sticky lg:top-24 space-y-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-sm font-semibold text-gray-300">アクション</h3>
          <a
            href={detail.gptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2 text-sm text-white shadow-sm hover:from-orange-400 hover:to-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70"
          >
            GPTsを開く
            <img
              src="https://cdn.simpleicons.org/openai/ffffff"
              alt="ChatGPT"
              className="h-4 w-4"
            />
          </a>
          <a
            href={detail.promptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-600 px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600/70"
          >
            プロンプトを見る
            <img
              src="https://github.githubassets.com/favicons/favicon.svg"
              alt="GitHub"
              className="h-4 w-4 filter brightness-0 invert"
            />
          </a>
          <div className="h-px bg-white/10" />
          <p className="text-xs leading-relaxed text-gray-400">
            バージョン詳細は上記セクションで確認できます。必要に応じてリンクを共有してください。
          </p>
        </motion.aside>
      </div>
    </>
  );
}

