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
  changes: string[];
  gptUrl: string;
  promptUrl: string;
};

const versionMap: Record<string, VersionDetail> = {
  '2.0': {
    version: '2.0',
    date: '2025/08/08',
    title: 'VisionAssist ALT Ver.2.0',
    description:
      '解析精度とレスポンスを強化したメジャーアップデート。OCRと画像理解の向上により、より正確で読みやすいALTを生成します。',
    changes: [
      'OCR・画像解析の精度向上',
      '応答速度と安定性の改善',
      'UI/UXの微調整と説明文テンプレートの見直し',
    ],
    gptUrl: 'https://chatgpt.com/g/g-DRYfgEhV6-visionassist-alt',
    promptUrl:
      'https://github.com/Gashin0601/VisionAssistALT-GPTs/blob/d1fd87f6d830375385a48d649c013383abfa0e65/visionassist-alt.md',
  },
  '1.0': {
    version: '1.0',
    date: '2024/08/08',
    title: 'VisionAssist ALT Ver.1.0',
    description:
      '初期リリース。画像から日本語のALTテキストを自動生成し、視覚障害者向けアクセシビリティを支援します。',
    changes: [
      '画像→ALTテキスト自動生成の基本機能',
      '日本語での説明生成に対応',
      'プライバシー配慮のガイドラインを反映',
    ],
    gptUrl: 'https://chatgpt.com/g/g-DRYfgEhV6-visionassist-alt',
    promptUrl:
      'https://github.com/Gashin0601/VisionAssistALT-GPTs/blob/d1fd87f6d830375385a48d649c013383abfa0e65/visionassist-alt.md',
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

