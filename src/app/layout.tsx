import type { Metadata, Viewport } from 'next';
import { metadata, viewport } from './metadata';
import Script from 'next/script';
import './globals.css';

export { metadata, viewport };

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QKMVSWZ3LB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QKMVSWZ3LB');
          `}
        </Script>
      </head>
      <body className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}