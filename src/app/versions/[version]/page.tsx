import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VersionDetailClient from './version-detail-client';

type VersionDetail = {
  version: string;
  date: string;
  title: string;
  description: string;
  changes?: string[];
  gptUrl: string;
  promptUrl: string;
};

const versionMap: Record<string, VersionDetail> = {
  '2.0': {
    version: '2.0',
    date: '2025/08/08',
    title: 'VisionAssist ALT Ver.2.0',
    description:
      '複数画像のアップロードに対応し。さらに、Xのポスト内容を添付すると、その意図を反映したALTを生成。その他、精度・体験向上のための修正。',
    changes: [
      'ツイート本文のニュアンス（意図・語調・強調点）を読み取りALTに反映',
      '複数画像に対応し、各画像ごとに独立したALTコードブロックを出力',
      '最初に端的な一文（必要な情報を短く）→ 続けて詳細説明の順で記述',
      '鳥・花の種名は可能な限り特定（不確実な場合は一般名＋根拠）',
      '具体的名称（場所・施設名など）は直接表現',
      '数式はLaTeXを使わず文章で記述',
      'スクリーンリーダユーザ向けに日付・時刻は日本語表記に（例: 7/21 10:30 → 7月21日 10時30分）',
      'クレジット表記を「© VisionAssistALT — Created by GC Studio」に変更',
    ],
    gptUrl: 'https://chatgpt.com/g/g-689c304667408191b0b253067b3560a1-visionassist-alt-ver-2-0-beta',
    promptUrl:
      'https://github.com/Gashin0601/VisionAssistALT-GPTs/blob/v2.0-beta/visionassist-alt.md',
  },
  '1.0': {
    version: '1.0',
    date: '2024/08/08',
    title: 'VisionAssist ALT Ver.1.0',
    description:
      '初期リリース。ChatGPT上で画像からALTテキストを自動生成する、新しい体験をお楽しみください。',
    gptUrl: 'https://chatgpt.com/g/g-689b4298e1ac8191989215930d7919a2-visionassist-alt-ver-1-0',
    promptUrl:
      'https://github.com/Gashin0601/VisionAssistALT-GPTs/blob/v1.0/visionassist-alt.md',
  },
};

export function generateStaticParams() {
  return Object.keys(versionMap).map((v) => ({ version: v }));
}

export default function VersionDetailPage({ params, searchParams }: { params: { version: string }; searchParams?: { from?: string } }) {
  const { version } = params;
  const detail = versionMap[version];

  if (!detail) return notFound();

  const fromHome = searchParams?.from === 'home';
  const backHref = fromHome ? '/' : '/versions';
  const backLabel = fromHome ? 'ホームに戻る' : '一覧に戻る';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="mb-8">
            <Link
              href={backHref}
              className="inline-flex items-center px-5 py-2.5 text-gray-400 hover:text-orange-400 transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {backLabel}
            </Link>
          </div>

          <VersionDetailClient detail={detail} />
        </div>
      </main>
      <Footer />
    </>
  );
}

