'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export function useScrollAnimation() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -50% 0px'
  });

  return { ref, inView };
}

export function useStaggeredAnimation(delay: number = 0.2) {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return { elementsRef, addToRefs };
}