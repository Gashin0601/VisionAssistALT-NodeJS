"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DevelopersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-24 max-w-5xl">
          <motion.h1
            className="text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            開発者向け
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            VisionAssist ALTのプロンプトや設定をGitHubで公開しています。フォークやPRでの改善提案を歓迎します。
          </motion.p>

          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              href="https://github.com/Gashin0601/VisionAssistALT-GPTs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-orange-400 border-2 border-orange-400 rounded-lg hover:bg-orange-400 hover:text-white font-medium transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4m0 0v4m0-4L7 17" />
              </svg>
              GitHubでプロンプトを公開中
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6">
              <h2 className="text-xl font-semibold mb-2">公開中の内容</h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>GPTsのプロンプトとシステム設定</li>
                <li>使い方ドキュメント</li>
                <li>運用上のベストプラクティス</li>
              </ul>
            </div>
            <div className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6">
              <h2 className="text-xl font-semibold mb-2">コントリビュート</h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Issueで改善提案</li>
                <li>PRで修正・機能追加</li>
                <li>利用シーンの共有</li>
              </ul>
            </div>
            <div className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6">
              <h2 className="text-xl font-semibold mb-2">ライセンス</h2>
              <p className="text-gray-300">公開情報はリポジトリ記載の条件に従ってご利用いただけます。</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

