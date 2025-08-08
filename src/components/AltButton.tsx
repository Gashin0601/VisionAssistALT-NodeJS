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

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPopupPosition({
        top: rect.top - 10,
        left: rect.left + rect.width / 2,
      });
    }
    
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
      if (isVisible && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPopupPosition({
          top: rect.top - 10,
          left: rect.left + rect.width / 2,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
              zIndex: 1000,
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