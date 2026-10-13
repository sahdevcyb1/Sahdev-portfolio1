import React, { useEffect, useState } from 'react';

export const AmbientBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    // Only track mouse on devices that support hover
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Relative percentage across viewport
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background base layer */}
      <div className="absolute inset-0 bg-[#080A10]" />

      {/* Subtle geometric grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Reactive cursor spotlight */}
      <div
        className="absolute rounded-full transition-transform duration-700 ease-out opacity-25"
        style={{
          width: '700px',
          height: '700px',
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(91, 140, 255, 0.18) 0%, rgba(155, 124, 255, 0.08) 40%, transparent 70%)',
        }}
      />

      {/* Soft atmospheric blue ambient orb - top right */}
      <div className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#5B8CFF]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Soft atmospheric violet ambient orb - middle left */}
      <div className="absolute top-[40%] -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#9B7CFF]/08 to-transparent blur-3xl pointer-events-none" />

      {/* Atmospheric blue orb - bottom center */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[750px] h-[550px] rounded-full bg-[#5B8CFF]/06 blur-3xl pointer-events-none" />

      {/* Fine noise vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,10,16,0.85)_100%)]" />
    </div>
  );
};
