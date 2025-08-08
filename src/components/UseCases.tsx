'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AltButton from './AltButton';
import { UseCase } from '@/types';

const useCases: UseCase[] = [
  {
    id: "travel",
    title: "景色",
    username: "旅行好き",
    handle: "@traveler",
    userIcon: "/images/user1_icon.jpeg",
    userIconAlt: "画像には、カメラを持った笑顔の若い女性が描かれています。背景には、日本の象徴的な山である富士山がそびえ立っており、晴天の空が広がっています。女性は短い黒髪で、カジュアルなジャケットを着てリュックを背負っています。彼女は風景写真を撮影しているかのような場面を示唆しており、背景の広がる自然と富士山が強調されています。",
    postContent: "綺麗✨",
    image: "/images/user1_image.png",
    imageAlt: "この写真は、飛行機の窓から見える景色を撮影したものですね。窓の外には「HELSINKI AIRPORT」という文字が見え、飛行機はヘルシンキ空港に停まっていることが分かります。また、機内のモニターや座席の様子も写っており、座席に座っている状態で撮影されたようです。この写真はフィンランドに関連した旅行の一部かもしれませんね。",
    description: "画像の中に隠れたヒントを見逃しません。空港の看板や街の名所が写っていれば、それを手がかりに撮影場所を教えてくれます。例えば、空港の風景写真に「HELSINKI AIRPORT」という文字が写り込んでいれば、それを認識し、ユーザーがフィンランド旅行中であることを伝えます。"
  },
  {
    id: "family",
    title: "チャット",
    username: "家族 LINE",
    handle: "@family_chat",
    userIcon: "/images/user2_icon.jpeg",
    userIconAlt: "画像には、リビングルームで微笑む3人家族が描かれています。父親は眼鏡をかけており、白いシャツを着て、膝の上に小さな子供を抱えています。母親は茶色のエプロンを着て、家族の隣に座っています。背景にはテレビや時計が見え、家庭的で温かい雰囲気が伝わります。全体的に穏やかな家族の団らんの一場面を描いたイラストです。",
    postContent: "今日も頑張ったな！",
    image: "/images/user2_image.jpeg",
    imageAlt: "画像には、チャットアプリのスクリーンショットが映っています。以下のメッセージが含まれています：<br>1. 緑色の吹き出しで、「今日の夜ご飯何？」と質問しています。<br>2. それに対して、「カレーだよ」と返答しています。<br>3. さらに、インド料理のようなカレーのイラストが送信されています。イラストには、ナンと3つの小皿に入った料理（カレーや付け合わせ）が描かれています。",
    description: "チャットアプリの画面を細かく解説します。テキストメッセージだけでなく、送られてきた料理のイラストまで詳しく説明。会話の内容はもちろん、使われている絵文字や画像の雰囲気まで伝えることで、視覚情報がなくてもやりとりの様子が鮮明に伝わります。"
  },
  {
    id: "food",
    title: "グルメ",
    username: "カフェ巡り",
    handle: "@cafe_hopper",
    userIcon: "/images/user3_icon.jpeg",
    userIconAlt: "画像には、カフェの中でカフェラテを手に微笑む女性が描かれています。彼女は長い髪で、カジュアルなセーターを着ています。カフェラテにはラテアートが施されており、リラックスした雰囲気が伝わります。背景にはモダンなカフェの内装が広がっており、吊り下げ式の照明や観葉植物、本棚などが見えます。全体的に、落ち着いた空間でリラックスしたひとときを過ごしている様子が描かれています。",
    postContent: "これ最高だった",
    image: "/images/user3_image.jpeg",
    imageAlt: "画像には、「伊藤園」と書かれたカップに入った抹茶ソフトクリームのデザートが映っています。デザートには、抹茶ソフトクリームの上に白玉団子が2つトッピングされ、さらにウエハースのような細長いクッキーが立てられています。背景には幾何学模様の明かりが見え、デザートが室内で撮影されたことがわかります。全体的に、日本の抹茶を使ったデザートの美味しさと雰囲気が感じられます。",
    description: "料理の写真からおいしさが伝わるよう、見た目や素材を詳しく説明します。抹茶ソフトクリームの色合い、トッピング、さらには「伊藤園」というブランド名まで認識。気になったグルメを見つけるヒントにもなります。"
  }
];

interface UseCaseCardProps {
  useCase: UseCase;
}

function UseCaseCard({ useCase }: UseCaseCardProps) {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800 rounded-lg overflow-hidden max-w-6xl mx-auto"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Image 
            src={useCase.userIcon} 
            alt={useCase.userIconAlt} 
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mr-4"
            style={{ height: "auto" }}
          />
          <div>
            <span className="text-lg font-semibold">{useCase.username}</span>
            <p className="text-sm text-gray-400">{useCase.handle}</p>
          </div>
        </div>
        <p className="text-lg mb-4">{useCase.postContent}</p>
        <div className="relative">
          <Image 
            src={useCase.image} 
            alt={useCase.imageAlt} 
            width={500}
            height={400}
            className="w-full object-cover rounded-lg"
            style={{ height: "auto" }}
          />
          <AltButton altText={useCase.imageAlt} />
        </div>
      </div>
      <div className="p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
        <p className="text-lg">{useCase.description}</p>
      </div>
    </motion.div>
  );
}

export default function UseCases() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center" 
          id="use-cases"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          活用事例
        </motion.h2>
        <div className="space-y-16">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}