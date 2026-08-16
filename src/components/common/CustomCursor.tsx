import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export type CursorMode = 'default' | 'view' | 'explore' | 'drag' | 'hover';

export const CustomCursor: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Detect touch device - disable custom cursor on touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const follower = followerRef.current;
    if (!follower) return;

    // Tight GSAP quickTo setters for instant, zero-lag pointer tracking
    const xFollowerTo = gsap.quickTo(follower, 'x', { duration: 0.08, ease: 'power2.out' });
    const yFollowerTo = gsap.quickTo(follower, 'y', { duration: 0.08, ease: 'power2.out' });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

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
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Contextual Ring Follower */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#1C241E]/30 transition-all duration-200 ${
          cursorMode !== 'default'
            ? 'scale-125 bg-[#1C241E] text-[#F1EDE4] border-none shadow-lg'
            : 'scale-100 bg-[#C5A880]/15 border-[#1C241E]/40'
        }`}
      >
        {cursorText && (
          <span className="font-sans text-[8px] font-bold tracking-widest uppercase text-center leading-none text-[#F1EDE4]">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
