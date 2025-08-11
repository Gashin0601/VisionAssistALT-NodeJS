'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Developers() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          id="developers"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          開発者向け
        </motion.h2>

        <motion.p
          className="text-lg text-gray-200 text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          VisionAssist ALTのプロンプトや設定をGitHubで公開しています。フォークやPRでの改善提案を歓迎します。
        </motion.p>

        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/developers"
            className="inline-flex items-center px-6 py-3 text-orange-400 border-2 border-orange-400 rounded-lg hover:bg-orange-400 hover:text-white font-medium transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h4m0 0v4m0-4L7 17"
              />
            </svg>
            詳細を見る
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">公開中の内容</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>GPTsのプロンプトとシステム設定</li>
              <li>使い方ドキュメント</li>
              <li>運用上のベストプラクティス</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">コントリビュート</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Issueで改善提案</li>
              <li>PRで修正・機能追加</li>
              <li>利用シーンの共有</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">ライセンス</h3>
            <p className="text-gray-300">
              公開情報はリポジトリ記載の条件に従ってご利用いただけます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

