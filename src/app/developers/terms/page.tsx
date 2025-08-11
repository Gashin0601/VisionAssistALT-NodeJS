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
          <h1 className="text-3xl font-bold mb-6">開発者向け利用規約</h1>
          <p className="text-gray-300 mb-6">本規約は、VisionAssist ALT GPTs リポジトリ（以下「本リポジトリ」）へのコントリビューションおよびその利用に関する条件を定めるものです。本規約に同意いただけない場合は、コントリビューションを行わないでください。</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">1. ライセンスと権利帰属</h2>
          <p className="text-gray-300">本リポジトリのソースコード・ドキュメント等は、リポジトリに記載のライセンスに従います。コントリビューターは、PR の送信をもって、当該貢献物について当該ライセンス条件の下での利用・改変・再配布を許諾するものとし、第三者の権利を侵害しないことを表明・保証します。</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">2. 禁止事項</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>第三者の権利を侵害する投稿</li>
            <li>機密情報・個人情報の無断共有</li>
            <li>悪意のあるコードの混入</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">3. 取り扱いと公開</h2>
          <p className="text-gray-300">提出された Issue・PR・コメント等のやり取りは公開されることがあります。公開が不適切な機密情報は投稿しないでください。セキュリティに関わる内容は、再現最小限で報告するか、事前連絡を検討してください。</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">4. 免責</h2>
          <p className="text-gray-300">本リポジトリは現状有姿（AS IS）で提供され、明示または黙示を問わず、適合性・特定目的適合性・非侵害性その他いかなる保証も行いません。利用により生じた損害について、運営者は一切の責任を負いません。</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">5. 準拠法・裁判管轄</h2>
          <p className="text-gray-300">準拠法は日本法とし、本規約または本リポジトリに関連して生じた紛争については、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。</p>

          <div className="mt-10">
            <Link href="/developers" className="text-orange-300 hover:underline">← 開発者向けトップへ戻る</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

