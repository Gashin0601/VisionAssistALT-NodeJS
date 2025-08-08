'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AltButtonProps {
  altText: string;
}

export default function AltButton({ altText }: AltButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const computeAndSetPopupPosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const headerElement = document.querySelector('header');
    const headerRect = headerElement?.getBoundingClientRect();
    const headerHeight = headerRect?.height ?? 64; // フォールバック
    const minTop = headerHeight + 8; // ヘッダーの下に必ず出す

    const candidateTop = rect.top - 10;
    const clampedTop = Math.max(candidateTop, minTop);

    setPopupPosition({
      top: clampedTop,
      left: rect.left + rect.width / 2,
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    computeAndSetPopupPosition();
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible || !buttonRef.current) return;
      
      // ボタンが画面内にあるかチェック
      const rect = buttonRef.current.getBoundingClientRect();
      const isButtonVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
      
      if (isButtonVisible) {
        // ボタンが見える場合は位置を更新
        computeAndSetPopupPosition();
      } else {
        // ボタンが見えない場合はポップアップを閉じる
        setIsVisible(false);
      }
    };

    const handleResize = () => {
      if (!isVisible) return;
      handleScroll(); // リサイズ時も同じロジックを使用
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  return (
    <>
      <button
        ref={buttonRef}
        className="alt-button"
        onClick={handleClick}
      >
        ALT
      </button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={popupRef}
            className="alt-popup show"
            style={{
              position: 'fixed',
              top: popupPosition.top,
              left: popupPosition.left,
              transform: 'translate(-50%, -100%)',
              zIndex: 40,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="alt-popup-title">画像の説明</div>
            <div className="alt-popup-description">{altText}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}