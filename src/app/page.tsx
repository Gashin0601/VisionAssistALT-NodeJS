'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowTo from '@/components/HowTo';
import UseCases from '@/components/UseCases';
import Reviews from '@/components/Reviews';
import News from '@/components/News';
import Developers from '@/components/Developers';
import Footer from '@/components/Footer';
import Versions from '@/components/Versions';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  useEffect(() => {
    // 簡素化してすぐにコンテンツを表示
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 100); // すぐに表示
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {showContent && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <HowTo />
            <UseCases />
            {/* Ver.2.0の新機能 セクション */}
            <section className="py-20 bg-gray-900 text-white">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ver.2.0の新機能</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  複数画像のアップロードに対応し、ALTを簡単にコピーできるようになりました。さらに、Xのポスト内容を添付すると、その意図を反映したALTを生成します。
                </p>
                {/* ここにVer.2.0紹介動画が入ります */}
                {/* <video src="/videos/xxxx.mp4" controls className="mt-8 w-full rounded-lg" /> */}
              </div>
            </section>
            <Reviews />
            <News />
            <Versions />
            <Developers />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}