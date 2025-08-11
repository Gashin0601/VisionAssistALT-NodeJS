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
          <h1 className="text-3xl font-bold mb-6">開発者向けガイドライン</h1>
          <p className="text-gray-300 mb-6">VisionAssist ALT GPTs は、X の ALT 機能向けに画像認識と OCR を用いて画像内テキストや重要情報を自動生成するオープンソースプロジェクトです。コントリビューションの前に、本ガイドラインをご確認ください。リポジトリは <a className="text-orange-300 hover:underline" href="https://github.com/Gashin0601/VisionAssistALT-GPTs" target="_blank" rel="noopener noreferrer">GitHub</a> で公開しています。</p>

          <h2 className="text-xl font-semibold mt-8 mb-3">基本方針</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>小さな変更から歓迎します（UI の微調整、文言修正、ドキュメント改善など）。</li>
            <li>Issue には背景・課題・提案・再現手順（必要に応じて）を簡潔に記載してください。</li>
            <li>UI に影響する PR はスクリーンショット/動画の添付を推奨します。</li>
            <li>本プロジェクトのライセンスはリポジトリ記載の内容に従います。投稿物は同条件で再配布・改変される場合があります。</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">ブランチと PR の流れ</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>リポジトリをフォークし、作業用ブランチを作成（例: <span className="font-mono">feat/xxx</span>, <span className="font-mono">fix/xxx</span>）。</li>
            <li>アクセシビリティと可読性を意識して実装（フォーカス、コントラスト、ARIA 属性、代替テキスト）。</li>
            <li>ローカルで <span className="font-mono">npm run lint</span> を実行し、ビルドが通ることを確認。</li>
            <li>PR 作成時に目的・変更点・影響範囲・スクショ/動画（UI 変更時）・関連 Issue を記載。</li>
            <li>レビューコメントには丁寧に対応し、必要に応じて追従コミットを行ってください。</li>
          </ol>

          <h2 className="text-xl font-semibold mt-8 mb-3">コーディング規約 / アクセシビリティ</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>TypeScript/React（Next.js）・Tailwind の既存スタイルに合わせること。</li>
            <li>ESLint/Prettier（プロジェクト設定）に従い、Lint エラーを残さないこと。</li>
            <li>コンポーネントは再利用性と読みやすさを重視し、適切な命名を行うこと。</li>
            <li>色コントラスト、キーボード操作、フォーカス指標、代替テキストを必須とします。</li>
            <li>アニメーションは控えめにし、ユーザーの注意を補助する目的に限定します。</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">コミットメッセージ規約</h2>
          <p className="text-gray-300 mb-2">Conventional Commits を推奨します。</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-300">
            <li><span className="font-mono">feat:</span> 機能追加</li>
            <li><span className="font-mono">fix:</span> バグ修正</li>
            <li><span className="font-mono">docs:</span> ドキュメントのみの変更</li>
            <li><span className="font-mono">style:</span> 動作に影響しないスタイル変更（フォーマット等）</li>
            <li><span className="font-mono">refactor:</span> リファクタリング</li>
            <li><span className="font-mono">chore:</span> ビルド/ツール/設定類</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">セキュリティ</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>脆弱性は公開の Issue では詳細を伏せ、再現に不要な情報の開示を避けてください。</li>
            <li>悪用可能な内容は、再現最小限で報告するか、メンテナへ事前連絡を検討してください。</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">第三者コンテンツ</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>著作権・ライセンスを確認できる素材のみを使用してください（画像・フォント・コード等）。</li>
            <li>出典が必要な場合は README やコメントで明記してください。</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">コントリビューションのライセンス</h2>
          <p className="text-gray-300">PR を送信することで、投稿者は当該貢献物について、リポジトリ記載のライセンス条件の下での利用・改変・再配布を許諾したものとみなします。第三者の権利を侵害しないことを保証してください。</p>

          <div className="mt-10">
            <Link href="/developers" className="text-orange-300 hover:underline">← 開発者向けトップへ戻る</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

