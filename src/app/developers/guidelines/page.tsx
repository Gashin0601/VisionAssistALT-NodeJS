"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DevelopersGuidelinesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-24 max-w-4xl">
          <div className="mb-6">
            <Link href="/developers" className="text-gray-400 hover:text-orange-400 transition-colors">← 開発者向けトップへ戻る</Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors">ホーム</Link>
          </div>
          <h1 className="text-3xl font-bold mb-6">開発者向けガイドライン（ドラフト）</h1>
          <p className="text-gray-300 mb-6">このページはドラフトです。内容は今後更新されます。</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">基本方針</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>小さな変更を歓迎（UIの微調整や文言修正などでもOK）</li>
            <li>Issueに背景・課題・提案を簡潔に記載</li>
            <li>PRはスクショ/動画を添付（UI変更時）</li>
            <li>Conventional Commits推奨（例: feat, fix, docs, style）</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">PRの流れ</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>リポジトリをフォークしてブランチを作成</li>
            <li>デザイン方針に沿って実装（アクセシビリティ重視）</li>
            <li>lintエラーがないことを確認</li>
            <li>PR作成後、レビューコメントに対応</li>
          </ol>

          <h2 className="text-xl font-semibold mt-8 mb-3">デザイン/アクセシビリティ</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>十分なコントラストとフォーカススタイルを付与</li>
            <li>モーションは控えめに、ユーザーの注意を補助</li>
            <li>レスポンシブでの可読性を最優先</li>
          </ul>

          <div className="mt-10">
            <Link href="/developers" className="text-orange-300 hover:underline">← 開発者向けトップへ戻る</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

