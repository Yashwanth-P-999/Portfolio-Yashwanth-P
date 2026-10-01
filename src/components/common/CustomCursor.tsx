import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor-hover="true"]'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;
    const animateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };

    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Center dot in crisp dark ink */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-150"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered
              ? 'w-2 h-2 bg-[#18181B]'
              : 'w-1.5 h-1.5 bg-[#18181B]'
          }`}
        />
      </div>

      {/* Trailing ring with subtle dark ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40 transition-opacity duration-300"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) translate(-50%, -50%)`,
          opacity: isVisible ? 0.7 : 0,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            isHovered
              ? 'w-10 h-10 border-black bg-[#D4FF00]/30 scale-110 shadow-xs'
              : 'w-7 h-7 border-black/25 bg-transparent'
          }`}
        />
      </div>
    </>
  );
};
