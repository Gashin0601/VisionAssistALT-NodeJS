'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface NewsDetail {
  id: string;
  date: string;
  title: string;
  content: string;
}

const newsDetails: Record<string, NewsDetail> = {
  '1': {
    id: '1',
    date: '2024/08/08',
    title: 'GPTストアにて本サービスをリリースしました',
    content: `
この度、VisionAssist ALTがGPTストアにてリリースされました。

VisionAssist ALTは、Xに画像を投稿する際、視覚障害者向けの説明文（ALTテキスト）を自動生成するAIツールです。画像内の人物、物体、風景、文字を認識し、分かりやすい日本語で説明します。

主な機能：
• 画像内容の詳細な説明生成
• 人物、物体、風景の認識
• 商品名や撮影場所の特定
• 視覚障害のある方々への配慮

GPTストアでは、多くの方にご利用いただき、Xでの情報共有をより包括的にするためのツールとして活用されています。
    `
  },
  '2': {
    id: '2',
    date: '2024/10/08',
    title: 'ウェブサイトを開設しました',
    content: `
VisionAssist ALTの公式ウェブサイトを開設いたしました。

本ウェブサイトでは、以下の情報をご提供しています：

• サービスの詳細な説明
• 使用方法のガイド
• 実際の使用例とレビュー
• 今後の展望と開発予定

視覚障害のある方々や、アクセシビリティに配慮したコンテンツ作成を心がける全ての方々に、VisionAssist ALTをより深くご理解いただけるよう、分かりやすい情報提供を目指しています。

今後も定期的にコンテンツを更新し、皆様により良い情報をお届けしてまいります。
    `
  },
  '3': {
    id: '3',
    date: '2025/08/08',
    title: 'VisionAssistALT Ver.2.0をリリースしました',
    content: `
VisionAssist ALT Ver.2.0の正式リリースをお知らせいたします。

Ver.2.0では、以下の新機能と改善を実装いたしました：

新機能：
• 複数のSNSプラットフォームへの対応
• より高精度な画像認識エンジンの搭載
• 多言語対応（英語、韓国語、中国語）
• カスタマイズ可能な説明スタイル

改善点：
• 処理速度の大幅な向上
• ユーザーインターフェースの刷新
• セキュリティ機能の強化
• APIの安定性向上

これらのアップデートにより、より多くの方々にご利用いただけるツールとなりました。引き続き、誰もが平等に情報を受け取れる社会の実現に向けて取り組んでまいります。

今後ともVisionAssist ALTをよろしくお願いいたします。
    `
  }
};

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const [newsItem, setNewsItem] = useState<NewsDetail | null>(null);

  useEffect(() => {
    const item = newsDetails[params.id];
    setNewsItem(item || null);
  }, [params.id]);

  if (!newsItem) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-black text-white pt-20">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8">お知らせが見つかりません</h1>
              <p className="text-gray-400 mb-8">指定されたお知らせは存在しないか、削除された可能性があります。</p>
              <Link 
                href="/#news"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
              >
                お知らせ一覧に戻る
                <svg 
                  className="ml-2 w-4 h-4" 
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
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/#news"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-8"
            >
              <svg 
                className="mr-2 w-4 h-4" 
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
              お知らせ一覧に戻る
            </Link>
            
            <article>
              <header className="mb-8">
                <span className="text-gray-400 text-sm font-mono">
                  {newsItem.date}
                </span>
                <h1 className="text-4xl font-bold mt-4 leading-tight">
                  {newsItem.title}
                </h1>
              </header>
              
              <div className="prose prose-invert prose-lg max-w-none">
                {newsItem.content.split('\n').map((line, index) => {
                  if (line.trim() === '') {
                    return <br key={index} />;
                  }
                  if (line.startsWith('•')) {
                    return (
                      <p key={index} className="ml-4">
                        {line}
                      </p>
                    );
                  }
                  if (line.endsWith('：')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                        {line}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="mb-4 leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}