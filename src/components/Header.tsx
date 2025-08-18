'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--header-height',
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 text-white"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/images/app_image.png" 
            alt="VisionAssist ALT Logo" 
            width={48}
            height={48}
            className="h-12 w-12 object-contain mr-3"
            style={{ height: "48px", width: "48px" }}
          />
          <span className="text-white text-lg font-semibold">VisionAssist ALT</span>
        </div>
        <div className="flex items-center">
          <Link 
            href="https://chatgpt.com/g/g-DRYfgEhV6-visionassist-alt" 
            className="px-4 py-2 text-orange-400 border border-orange-400 rounded-md hover:bg-orange-400 hover:text-white transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            今すぐ試す
          </Link>
        </div>
      </div>
    </header>
  );
}