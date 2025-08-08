'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { StepData } from '@/types';

const steps: StepData[] = [
  {
    number: "01",
    title: "ツールにアクセス",
    description: "VisionAssist ALTのツールページにアクセスしてください。その後、「サインアップしてチャットを使用する」ボタンをタップしてください。既にChatGPTアカウントをお持ちの方は、すぐにご利用を開始できますので、ステップ1をスキップしてください。",
    image: "/images/step2.jpeg",
    alt: "ツールアクセスのイメージ"
  },
  {
    number: "02",
    title: "アカウント作成",
    description: "メールアドレスやGoogleアカウント等でアカウントを作成しましょう。",
    image: "/images/step1.jpeg",
    alt: "アカウント作成のイメージ"
  },
  {
    number: "03",
    title: "画像をアップロード",
    description: "説明を生成したい画像をアップロードし、送信してください。",
    video: "/videos/step3.mov",
    alt: "画像アップロードの動画"
  },
  {
    number: "04",
    title: "ALTテキストを適用",
    description: "生成された説明文をコピーし、Xの投稿時に画像のALTテキストを添付しましょう。",
    video: "/videos/step4.mp4",
    alt: "ALTテキスト適用の動画"
  }
];

interface StepProps {
  step: StepData;
  index: number;
}

function Step({ step, index }: StepProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -20% 0px'
  });

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center howto-step"
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 1 }}
    >
      <div className="md:w-2/5 mb-8 md:mb-0 md:mr-8">
        {step.image ? (
          <Image 
            src={step.image} 
            alt={step.alt} 
            width={500}
            height={400}
            className="w-full rounded-lg shadow-lg"
            style={{ height: "auto" }}
          />
        ) : step.video ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full rounded-lg shadow-lg"
          >
            <source src={step.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </div>
      <div className="md:w-3/5">
        <div className="step-number mb-4">{step.number}</div>
        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
        <p className="text-lg">
          {step.number === "01" ? (
            <>
              <Link 
                href="https://chatgpt.com/g/g-DRYfgEhV6-visionassist-alt" 
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                VisionAssist ALTのツールページ
              </Link>
              にアクセスしてください。<br />
              その後、「サインアップしてチャットを使用する」ボタンをタップしてください。既にChatGPTアカウントをお持ちの方は、すぐにご利用を開始できますので、ステップ1をスキップしてください。
            </>
          ) : step.number === "02" ? (
            <>
              メールアドレスやGoogleアカウント等でアカウントを作成しましょう。<br />
              また、
              <Link 
                href="https://auth.openai.com/authorize?client_id=TdJIcbe16WoTHtN95nyywh5E4yOo6ItG&scope=openid%20email%20profile%20offline_access%20model.request%20model.read%20organization.read%20organization.write&response_type=code&redirect_uri=https%3A%2F%2Fchatgpt.com%2Fapi%2Fauth%2Fcallback%2Flogin-web&audience=https%3A%2F%2Fapi.openai.com%2Fv1&device_id=f1c17356-f57d-44fd-9b10-1b19397c4506&prompt=login&screen_hint=signup&ext-statsig-tier=production&ext-oai-did=f1c17356-f57d-44fd-9b10-1b19397c4506&flow=control&state=VxxmVmA9K1mBb0jN6EEQapw4SHzbGcEl2c3nlis0wPU&code_challenge=Pc61YC_T2pyeTEeNeuc7kQoGFndWn8ZVSvatIntcUfc&code_challenge_method=S256" 
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                こちらのリンク
              </Link>
              からもアクセスできます。
            </>
          ) : (
            step.description
          )}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowTo() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center" 
          id="how-to"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          使い方
        </motion.h2>
        <div className="space-y-24">
          {steps.map((step, index) => (
            <Step key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}