'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface NewsItem {
  id: string;
  date: string;
  title: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    date: '2024/08/08',
    title: 'GPTストアにて本サービスをリリースしました'
  },
  {
    id: '2',
    date: '2024/10/08',
    title: 'ウェブサイトを開設しました'
  },
  {
    id: '3',
    date: '2025/08/08',
    title: 'VisionAssistALT Ver.2.0をリリースしました'
  }
];

export default function News() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center" 
          id="news"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          お知らせ
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="border-b border-gray-700 py-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <span className="text-gray-400 text-sm font-mono">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">
                    {item.title}
                  </h3>
                </div>
                <Link 
                  href={`/news/${item.id}`}
                  className="mt-4 md:mt-0 md:ml-4 inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                >
                  詳しくはこちら
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
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}