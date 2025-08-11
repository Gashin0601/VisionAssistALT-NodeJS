"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CopyLine from "@/components/CopyLine";
import GoodFirstIssues from "./GoodFirstIssues";

export default function DevelopersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-24 max-w-6xl">
          <div className="mb-6">
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
          </div>
          <motion.h1
            className="text-4xl font-bold mb-3 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            開発者向け
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 text-center mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            VisionAssist ALTはオープンソースで運営しています。プロンプト、設定、UI/UXなど、あらゆる改善のプルリクエストを歓迎します。
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
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

            <Link
              href="https://github.com/Gashin0601/VisionAssistALT-GPTs/issues/new/choose"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 text-gray-200 border border-white/15 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              Issueを作成する ↗
            </Link>

            <Link
              href="/developers/guidelines"
              className="inline-flex items-center px-5 py-3 text-gray-200 border border-white/15 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              コントリビューションガイドライン
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="lg:col-span-3 space-y-8">
              <section id="quickstart" className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold mb-3">Quick Start</h2>
                <div className="space-y-2">
                  <CopyLine text="git clone https://github.com/Gashin0601/VisionAssistALT-GPTs.git" />
                  <CopyLine text="cd VisionAssistALT-GPTs" />
                  <CopyLine text="npm i && npm run dev" />
                </div>
              </section>

              <section id="areas" className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <li>Issueで改善提案（バグ報告・提案・質問）</li>
                    <li>PRで修正・機能追加（小さな改善から歓迎）</li>
                    <li>利用シーン・作例の共有（README/Examplesへの追加）</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6">
                  <h2 className="text-xl font-semibold mb-2">ライセンス</h2>
                  <p className="text-gray-300">公開情報はリポジトリ記載の条件に従ってご利用いただけます。</p>
                </div>
              </section>

              <GoodFirstIssues />

              <motion.section
                id="roadmap"
                className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <h2 className="text-xl font-semibold mb-2">ロードマップ（抜粋）</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Promptテンプレートの精緻化と評価プロトコル</li>
                  <li>アクセシビリティ・UIの微調整（コントラスト/フォーカス）</li>
                  <li>作例ギャラリー（Before/After）とチュートリアル</li>
                </ul>
              </motion.section>
            </div>

            {/* 右カラム: Sticky目次 */}
            <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-24 space-y-3 text-sm text-gray-300">
              <div className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-4">
                <div className="font-semibold mb-2">目次</div>
                <nav className="grid gap-2">
                  <a href="#quickstart" className="hover:text-orange-300">Quick Start</a>
                  <a href="#areas" className="hover:text-orange-300">貢献領域</a>
                  <a href="#issues" className="hover:text-orange-300">募集中のIssue</a>
                  <a href="#roadmap" className="hover:text-orange-300">ロードマップ</a>
                  <a href="/developers/guidelines" className="hover:text-orange-300">ガイドライン</a>
                  <a href="/developers/terms" className="hover:text-orange-300">開発者規約</a>
                </nav>
              </div>
            </aside>
          </motion.div>

          {/* Quick start for contributors */}
          <motion.section
            className="mt-12 rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h2 className="text-xl font-semibold mb-3">はじめかた（Contribute Quick Start）</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li>GitHubでリポジトリをフォーク</li>
              <li>作業用ブランチを作成（例: `feat/some-change`）</li>
              <li>開発環境を起動：`npm i && npm run dev`</li>
              <li>小さな単位でコミット（Conventional Commits 推奨）</li>
              <li>PRを作成（背景・意図・スクショ/動画があると助かります）</li>
            </ol>
            <p className="text-sm text-gray-400 mt-3">詳細は「<Link href="/developers/guidelines" className="text-orange-300 hover:underline">開発者向けガイドライン</Link>」をご覧ください。</p>
          </motion.section>

          {/* Areas to help */}
          <motion.section
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6">
              <h3 className="text-lg font-semibold mb-2">歓迎する貢献領域</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>プロンプト/テンプレートの改善、評価軸の提案</li>
                <li>UI/UX微調整（アクセシビリティ・コントラスト・レスポンシブ）</li>
                <li>ドキュメント整備（使い方、FAQ、チュートリアル）</li>
                <li>サンプル画像・作例、ベンチマークの追加</li>
              </ul>
            </div>
            <div className="rounded-xl bg-zinc-900/70 ring-1 ring-white/10 p-6">
              <h3 className="text-lg font-semibold mb-2">ポリシーと利用条件</h3>
              <p className="text-gray-300 mb-2">貢献の前に以下をご確認ください。</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><Link href="/developers/guidelines" className="text-orange-300 hover:underline">開発者向けガイドライン</Link></li>
                <li><Link href="/developers/terms" className="text-orange-300 hover:underline">開発者向け利用規約</Link></li>
              </ul>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}

