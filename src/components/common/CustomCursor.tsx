import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export type CursorMode = 'default' | 'view' | 'explore' | 'drag' | 'hover';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Detect touch device - disable custom cursor on touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Fast GSAP quickTo setters for 60fps cursor tracking
    const xDotTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power3' });
    const yDotTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power3' });
    const xFollowerTo = gsap.quickTo(follower, 'x', { duration: 0.35, ease: 'power3' });
    const yFollowerTo = gsap.quickTo(follower, 'y', { duration: 0.35, ease: 'power3' });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      xDotTo(e.clientX);
      yDotTo(e.clientX ? e.clientX : 0);
      xFollowerTo(e.clientX);
      yFollowerTo(e.clientY);

      // Check element under cursor for data-cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const mode = (cursorTarget.getAttribute('data-cursor') || 'hover') as CursorMode;
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        setCursorMode(mode);
        setCursorText(text || mode.toUpperCase());
      } else {
        setCursorMode('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Center Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#121212] dark:bg-[#F9F8F6] mix-blend-difference"
      />

      {/* Outer Follower Ring */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#121212]/40 transition-all duration-300 dark:border-[#F9F8F6]/40 ${
          cursorMode !== 'default'
            ? 'scale-150 bg-[#121212] text-[#F9F8F6] border-none shadow-lg dark:bg-[#F9F8F6] dark:text-[#121212]'
            : 'scale-100 bg-transparent'
        }`}
      >
        {cursorText && (
          <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-center leading-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
