'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4" id="hero" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src="/images/app_image.png" 
            alt="VisionAssist ALT アプリイメージ" 
            width={200}
            height={200}
            priority
            className="w-52 h-52 mx-auto mb-8 rounded-full"
            style={{ height: "auto" }}
          />
        </motion.div>
        <motion.h1 
          className="text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          VisionAssist ALT
        </motion.h1>
        <motion.p 
          className="text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Xのポストで視覚障害者向けの画像説明を自動生成するツール
        </motion.p>
      </div>
    </section>
  );
}