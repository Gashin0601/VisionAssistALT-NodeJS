'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Future() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center" 
          id="future"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          今後の展望
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image 
              src="/images/final_image.png" 
              alt="VisionAssist ALTの将来展望イメージ" 
              width={800}
              height={600}
              className="w-full rounded-lg shadow-2xl mb-8"
              style={{ height: "auto" }}
              id="future-image"
            />
          </motion.div>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            VisionAssist ALTは、Xだけでなく、幅広いSNSやウェブサイトに対応するツールを目指しています。私たちのビジョンは、障害の有無に関わらず、誰もが等しく情報を受け取れる社会を実現することです。
          </motion.p>
        </div>
      </div>
    </section>
  );
}