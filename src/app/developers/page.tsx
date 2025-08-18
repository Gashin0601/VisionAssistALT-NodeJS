"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CopyLine from "@/components/CopyLine";
import GoodFirstIssues from "./GoodFirstIssues";
import DecoratedCard from "@/components/DecoratedCard";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

export default function DevelopersPage() {
  const features = [
    {
      title: "プロンプト/設定",
      desc: "画像認識・OCR向けのプロンプト/設定と評価軸の改善。",
      icon: (
        <svg className="h-5 w-5 text-orange-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
        </svg>
      ),
    },
    {
      title: "UI/UX",
      desc: "可読性とアクセシビリティを高めるUI/UX改善。",
      icon: (
        <svg className="h-5 w-5 text-orange-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h7" />
        </svg>
      ),
    },
    {
      title: "ドキュメント",
      desc: "READMEやFAQ、チュートリアル、使用例の整備。",
      icon: (
        <svg className="h-5 w-5 text-orange-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
    },
    {
      title: "ライブラリ/ツール",
      desc: "ユーティリティやワークフロー自動化の小さな拡張。",
      icon: (
        <svg className="h-5 w-5 text-orange-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
        {/* background decorations */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
        </div>

        <div
          className="relative container mx-auto px-4 pb-20 md:pb-28 max-w-7xl"
          style={{ paddingTop: 'calc(var(--header-height, 80px) + 2rem)' }}
        >
          {/* breadcrumb */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center px-4 py-2 text-gray-400 hover:text-orange-400 transition-colors group">
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ホームに戻る
            </Link>
          </div>

          {/* Hero */}
          <section className="relative overflow-hidden text-center mb-12 md:mb-16 px-6 md:px-8 py-16 md:py-24 min-h-[360px] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            {/* hero background image */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/images/dev-hero.png"
                alt="エディタでコーディングしているデスクトップの背景"
                fill
                priority
                className="object-cover object-center opacity-70 brightness-110 saturate-110"
              />
              {/* gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="bg-gradient-to-r from-orange-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">開発者向けポータル</span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              VisionAssist ALT GPTs は、XのALT機能向けに画像認識とOCRで画像内テキストや重要情報を自動生成するオープンソースプロジェクトです。プロンプト/モデル設定、アクセシビリティ、ドキュメント整備など、あらゆる分野でのコントリビューションを歓迎します。
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Link
                href="https://github.com/Gashin0601/VisionAssistALT-GPTs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-orange-400 border-2 border-orange-400 rounded-xl hover:bg-orange-400 hover:text-white font-medium transition-all duration-300 group shadow-sm shadow-orange-400/10"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4m0 0v4m0-4L7 17" />
                </svg>
                リポジトリを開く
              </Link>
              <Link
                href="https://github.com/Gashin0601/VisionAssistALT-GPTs/issues/new/choose"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 text-gray-200 border border-white/15 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                Issueを作成する（提案・バグ報告）
              </Link>
              <Link href="/developers/guidelines" className="inline-flex items-center px-5 py-3 text-gray-200 border border-white/15 rounded-xl hover:bg-white/5 transition-all duration-300">
                コントリビューションガイドライン
              </Link>
            </motion.div>
            </div>
          </section>

          {/* Content grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="lg:col-span-3 space-y-10">
              {/* Features */}
              <section id="areas">
                <SectionHeading title="あなたの貢献が活きる領域" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((f) => (
                    <DecoratedCard key={f.title} className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">{f.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold">{f.title}</h3>
                          <p className="text-sm text-gray-300 mt-1">{f.desc}</p>
                        </div>
                      </div>
                    </DecoratedCard>
                  ))}
                </div>
              </section>

              {/* Quick Start */}
              <section id="quickstart">
                <SectionHeading title="Quick Start" />
                <DecoratedCard className="p-0">
                  <div className="p-6">
                    <div className="space-y-2">
                      <CopyLine text="git clone https://github.com/Gashin0601/VisionAssistALT-GPTs.git" />
                      <CopyLine text="cd VisionAssistALT-GPTs" />
                      <CopyLine text="npm i && npm run dev" />
                    </div>
                  </div>
                </DecoratedCard>
              </section>

              {/* Issues */}
              <GoodFirstIssues />

              {/* Roadmap */}
              <section id="roadmap">
                <SectionHeading title="ロードマップ（抜粋）" />
                <DecoratedCard>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>画像認識・OCRに最適化したPrompt/設定の精緻化と評価プロトコル</li>
                    <li>アクセシビリティ・UIの改善（読みやすさ、フォーカス、コントラスト）</li>
                    <li>作例ギャラリー（Before/After）とチュートリアルの拡充</li>
                  </ul>
                </DecoratedCard>
              </section>

              {/* Contribute flow */}
              <section>
                <SectionHeading title="はじめかた（Contribute Quick Start）" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {["フォーク","ブランチ","起動","コミット","PR"].map((label, idx) => (
                    <DecoratedCard key={label}>
                      <div className="flex items-start gap-4">
                        <div className="h-8 w-8 shrink-0 rounded-full bg-orange-400/20 text-orange-300 flex items-center justify-center font-semibold">{idx + 1}</div>
                        <div className="text-gray-300">
                          {idx === 0 && <p>GitHubでリポジトリをフォーク</p>}
                          {idx === 1 && <p>作業用ブランチを作成（例: <span className="font-mono">feat/some-change</span>）</p>}
                          {idx === 2 && <p>開発環境を起動：<span className="font-mono">npm i && npm run dev</span></p>}
                          {idx === 3 && <p>小さな単位でコミット（Conventional Commits 推奨）</p>}
                          {idx === 4 && <p>PRを作成（背景・意図・スクショ/動画があると助かります）</p>}
                        </div>
                      </div>
                    </DecoratedCard>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-3">詳細は「<Link href="/developers/guidelines" className="text-orange-300 hover:underline">開発者向けガイドライン</Link>」をご覧ください。</p>
              </section>

              {/* Policy */}
              <section>
                <SectionHeading title="ポリシーと利用条件" />
                <DecoratedCard>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>
                      <Link href="/developers/guidelines" className="text-orange-300 hover:underline">開発者向けガイドライン</Link>
                    </li>
                    <li>
                      <Link href="/developers/terms" className="text-orange-300 hover:underline">開発者向け利用規約</Link>
                    </li>
                  </ul>
                </DecoratedCard>
              </section>
            </div>

            {/* TOC */}
            <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-24 space-y-3 text-sm text-gray-300">
              <div className="rounded-2xl bg-zinc-900/70 ring-1 ring-white/10 p-5">
                <div className="font-semibold mb-2">目次</div>
                <nav className="grid gap-2">
                  <a href="#areas" className="hover:text-orange-300">貢献領域</a>
                  <a href="#quickstart" className="hover:text-orange-300">Quick Start</a>
                  <a href="#issues" className="hover:text-orange-300">募集中のIssue</a>
                  <a href="#roadmap" className="hover:text-orange-300">ロードマップ</a>
                  <a href="/developers/guidelines" className="hover:text-orange-300">ガイドライン</a>
                  <a href="/developers/terms" className="hover:text-orange-300">開発者規約</a>
                </nav>
              </div>
            </aside>
          </motion.div>

          {/* CTA */}
          <section className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
              <span className="text-sm text-gray-300">最初の一歩を踏み出そう</span>
              <Link href="https://github.com/Gashin0601/VisionAssistALT-GPTs" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-orange-400/90 text-black font-semibold hover:bg-orange-400 transition-colors">GitHubでフォーク</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

