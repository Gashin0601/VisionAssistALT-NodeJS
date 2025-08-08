'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Review } from '@/types';

const reviews: Review[] = [
  {
    id: "review1",
    name: "鈴木美咲",
    content: "アクセシビリティ専門のメディアを運営しており、Xでは記事を図解で紹介しています。毎回、画像のALTテキストを書くのが手間でしたが、このツールのおかげでとても助かっています。"
  },
  {
    id: "review2",
    name: "山田健太",
    content: "他のAIより詳しく画像を説明してくれます。背景やテキストまで読み取ってくれるので、フォロワーさんに投稿の意図がよく伝わります。画像の内容がよく分かるので返信も的確にでき、SNSがより楽しくなりました。"
  },
  {
    id: "review3",
    name: "佐藤雅子",
    content: "Vision Assist ALTで、SNSの写真を楽しめるようになりました。友達の投稿を理解でき、会話にも参加しやすくなりました。健常者の友達も使ってくれていて、より多くの人が楽しめるツールになれば嬉しいです。"
  }
];

interface ReviewCardProps {
  review: Review;
  index: number;
}

function ReviewCard({ review, index }: ReviewCardProps) {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.div 
      className="bg-gray-800 rounded-lg p-6 shadow-xl review-card"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      <p className="text-xl font-semibold text-orange-500 mb-2" style={{ display: 'block' }}>{review.name}</p>
      <p className="text-lg">{review.content}</p>
    </motion.div>
  );
}

export default function Reviews() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center" 
          id="reviews"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          ユーザー満足度とレビュー
        </motion.h2>
        <div className="text-center mb-16">
          <motion.p 
            className="text-2xl mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            VisionAssist ALTの満足度
          </motion.p>
          <div className="w-3/4 h-8 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" 
              id="satisfaction-bar"
              initial={{ width: 0 }}
              animate={inView ? { width: '75%' } : { width: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            />
          </div>
          <motion.p 
            className="text-xl mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            75%のユーザーが満足と回答
          </motion.p>
          <motion.p 
            className="text-2xl mt-6 font-semibold" 
            id="user-voice"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Xユーザーからの声
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}