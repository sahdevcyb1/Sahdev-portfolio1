import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for fine pointers (desktops with mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!isFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"]')
        );
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer subtle trailing halo */}
      <div
        className={`fixed rounded-full pointer-events-none transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isPointer
            ? 'w-12 h-12 border border-[#5B8CFF]/60 bg-[#5B8CFF]/10 scale-125'
            : 'w-8 h-8 border border-white/20 bg-transparent'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Inner pinpoint dot */}
      <div
        className={`fixed w-1.5 h-1.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ${
          isPointer ? 'bg-[#5B8CFF] scale-150' : 'bg-white/80'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
};
