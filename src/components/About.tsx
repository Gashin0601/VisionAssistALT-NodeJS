'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center" 
          id="about"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          ref={ref}
        >
          VisionAssist ALTとは
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full rounded-lg shadow-2xl mb-8" 
            id="about-video"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <source src="/videos/about_video.mov" type="video/quicktime" />
            <source src="/videos/about_video.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            VisionAssist ALTは、Xに画像を投稿する際、視覚障害者向けの説明文（ALTテキスト）を自動生成するAIツールです。画像内の人物、物体、風景、文字を認識し、分かりやすい日本語で説明します。商品名や撮影場所も特定でき、視覚障害のある方々もXの画像を楽しめるようサポートします。
          </motion.p>
        </div>
      </div>
    </section>
  );
}