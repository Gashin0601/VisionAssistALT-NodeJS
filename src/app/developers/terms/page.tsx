"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DevelopersTermsPage() {
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
          <h1 className="text-3xl font-bold mb-6">開発者向け利用規約（ドラフト）</h1>
          <p className="text-gray-300 mb-6">このページはドラフトです。最終版の公開まで変更される可能性があります。</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">概要</h2>
          <p className="text-gray-300">本プロジェクトへの貢献は、公開リポジトリのライセンスおよび本ガイドに従うものとします。投稿されたコード・文章・画像等は、プロジェクトの継続的な改善のために利用・改変・再配布される可能性があります。</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">禁止事項</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>第三者の権利を侵害する投稿</li>
            <li>機密情報・個人情報の無断共有</li>
            <li>悪意のあるコードの混入</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">免責</h2>
          <p className="text-gray-300">本プロジェクトは現状有姿で提供され、明示または黙示を問わずいかなる保証も行いません。利用により発生する損害について、運営は一切の責任を負いません。</p>

          <div className="mt-10">
            <Link href="/developers" className="text-orange-300 hover:underline">← 開発者向けトップへ戻る</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

