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