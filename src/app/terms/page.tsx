'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TermsOfService() {
  const { ref, inView } = useScrollAnimation();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/"
                className="inline-flex items-center px-5 py-2.5 text-gray-400 hover:text-orange-400 transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                ホームに戻る
              </Link>
            </motion.div>
            
            <motion.h1 
              className="text-4xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              ref={ref}
            >
              利用規約
            </motion.h1>
            {/* 開発者向け規約への案内 */}
            <motion.div
              className="mb-10 rounded-xl border border-orange-400/30 bg-orange-950/40 p-6 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="font-semibold mb-2">開発者の方へ</p>
              <p className="text-sm leading-relaxed">
              当サービスのALT精度および体験向上のため、コントリビュート（Issue や PR など）を歓迎しています。コントリビュートいただく場合は、一般の利用規約ではなく
                <Link href="/developers/terms" className="text-orange-300 underline ml-1">開発者向け利用規約</Link>
                と <Link href="/developers/guidelines" className="text-orange-300 underline">開発者向けガイドライン</Link> が適用されます。コントリビュートの前に必ずご確認ください。
              </p>
            </motion.div>
            <motion.div 
              className="space-y-12 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              
              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">第1条（適用）</h2>
                <p>
                  本利用規約（以下「本規約」といいます）は、VisionAssist ALT および「VisionAssist ALT-GPTs」（総称して「当サービス」といいます）の
                  利用条件を定めるものです。
                </p>
                <p className="mt-4">
                利用者が当サービスにアクセスし、画像のアップロードやチャット送信など、当サービスの利用を開始した時点で、本規約が適用され、利用者は本規約に同意したものとみなされます。
                </p>
                <p className="mt-4">
                  当サービスは
                  <a href="https://gashincreations.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline">GC Studio</a>
                  によって運営されています。
                </p>
              </section>

              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">第2条（サービス概要・GPTs利用に関する同意）</h2>
                <p>
                  当サービスは、GPTsテクノロジーを活用した視覚支援サービスです。利用者が画像をアップロードすることで、
                  AIがその内容を解析し、音声やテキストで説明を提供します。
                </p>
                <div className="bg-orange-900 bg-opacity-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6 mt-6">
                  <p className="font-semibold text-orange-200 mb-3">重要事項（同意事項）</p>
                  <p className="text-orange-100">
                    利用者が当サービスを使用した時点で、以下の事項に同意したものとみなされます：
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>
                    アップロードされた画像データは、GPTsによる解析のためにOpenAIのサーバーに送信されます
                  </li>
                  <li>
                    OpenAI社の
                    <a href="https://openai.com/policies/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline">利用規約</a>
                    および
                    <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline">プライバシーポリシー</a>
                    が適用されます（それらの変更は即時に本サービスにも反映されます）
                  </li>
                  <li>
                    画像の取り扱い（送信・保存・保持期間・再利用の可否等）やその他のデータ処理は、原則として上記OpenAI社の規約・ポリシーに従います
                  </li>
                  <li>
                    画像データの処理は、サービス提供の目的でのみ使用され、適切に管理されます
                  </li>
                  <li>
                    機密性の高い個人情報や機密文書の画像はアップロードしないでください
                  </li>
                </ul>
              </section>

              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">第2.1条（画像クレジット表示義務）</h2>
                <p className="mb-4">
                  当サービスの生成物または当サービスの利用に関連して公開・共有される画像について、以下を遵守してください：
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>公開・共有する画像が1枚の場合は当該画像に、複数枚の場合は「1枚目の画像」に必ずクレジットを含めてください</li>
                  <li>
                    表示するクレジット文言（指定どおりの表記）：
                    <span className="font-mono text-orange-200">© VisionAssistALT — Created by GC Studio</span>
                  </li>
                  <li>クレジットは画像上のオーバーレイ、または同一フレーム内のキャプション・代替テキストとして明示してください</li>
                </ul>
              </section>

              

              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">第3条（オープンソースと公開情報）</h2>
                <p className="mb-4">
                  当サービスは、一部の設定情報やプロンプトをGitHub上で公開しています。公開内容は研究・改善のための参考資料であり、利用者の個別データは含まれません。
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>
                    公開リポジトリ：
                    <a href="https://github.com/Gashin0601/VisionAssistALT-GPTs" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline ml-1">
                      VisionAssistALT-GPTs
                    </a>
                  </li>
                  <li>公開情報の利用は、各リポジトリのライセンス条件に従うものとします</li>
                  <li>公開情報は予告なく更新・変更・削除される場合があります</li>
                </ul>
              </section>

              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">第4条（免責事項）</h2>
                <p className="mb-4">
                  当サービスは現状有姿で提供され、以下について免責されます：
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>運営者である
                    <a href="https://gashincreations.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline">GC Studio</a>
                    は、適用法により最大限許容される範囲で、当サービスの利用に起因または関連して生じる一切の損害、損失、請求等について責任を負いません</li>
                  <li>AI解析結果の正確性、完全性について保証いたしません</li>
                  <li>サービスの中断、エラー、データ損失について責任を負いません</li>
                  <li>利用者の機器やネットワークの問題による影響について責任を負いません</li>
                  <li>第三者のサービス（GPTs等）の仕様変更による影響について責任を負いません</li>
                </ul>
              </section>

              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">第5条（サービスの変更・終了）</h2>
                <p>
                  当サービスは予告なくサービス内容の変更、一時停止、または終了する場合があります。
                  これによる利用者への損害について、当社は責任を負いません。
                </p>
              </section>

              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">第6条（準拠法・管轄裁判所）</h2>
                <p>
                  本規約は日本法に準拠し、本規約に関する紛争については、
                  当社所在地を管轄する裁判所を専属的合意管轄とします。
                </p>
              </section>

              <section className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">第7条（規約の変更）</h2>
                <p>
                  当社は必要に応じて本規約を変更することがあります。
                  変更後の規約は、当サイトでの掲載をもって効力を生じるものとします。
                </p>
              </section>

              <div className="mt-16 pt-8 border-t border-gray-600 text-center text-gray-400">
                <p>制定日：2024年12月</p>
                <p>最終更新：2024年12月</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}