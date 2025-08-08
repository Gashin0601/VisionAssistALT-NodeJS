import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'VisionAssist ALT - 画像説明自動生成ツール',
  description: 'Xのポストで視覚障害者向けの画像説明を自動生成するツール',
  keywords: ['VisionAssist', 'ALT', '画像説明', '視覚障害者', 'アクセシビリティ', 'X', 'Twitter'],
  authors: [{ name: 'VisionAssist ALT Team' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'VisionAssist ALT - 画像説明自動生成ツール',
    description: 'Xのポストで視覚障害者向けの画像説明を自動生成するツール',
    type: 'website',
    locale: 'ja_JP',
    images: ['/images/app_image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisionAssist ALT - 画像説明自動生成ツール',
    description: 'Xのポストで視覚障害者向けの画像説明を自動生成するツール',
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};