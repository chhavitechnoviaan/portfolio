import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorHaloRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const lerpPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationFrameId;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Fast, reflow-free hover check using target element hierarchy
      const target = e.target;
      if (target) {
        const interactive = !!target.closest('a, button, input, textarea, select, [role="button"], .glass-card-3d, .hover-3d-lift');
        isHovered.current = interactive;
      }
    };

    const animLoop = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      lerpPos.current.x += (targetX - lerpPos.current.x) * 0.22;
      lerpPos.current.y += (targetY - lerpPos.current.y) * 0.22;

      if (cursorDotRef.current) {
        const dotScale = isHovered.current ? 1.5 : 1;
        cursorDotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${dotScale})`;
      }

      if (cursorHaloRef.current) {
        const haloScale = isHovered.current ? 1.6 : 1;
        cursorHaloRef.current.style.transform = `translate3d(${lerpPos.current.x}px, ${lerpPos.current.y}px, 0) scale(${haloScale})`;
      }

      animationFrameId = requestAnimationFrame(animLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Precision Pinpoint Center Dot */}
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          top: -3,
          left: -3,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#E02626',
          pointerEvents: 'none',
          zIndex: 999999,
          willChange: 'transform',
          boxShadow: '0 0 10px rgba(224, 38, 38, 0.8)'
        }}
      />

      {/* Trailing Ambient Crimson Glass Halo */}
      <div
        ref={cursorHaloRef}
        style={{
          position: 'fixed',
          top: -18,
          left: -18,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(224, 38, 38, 0.6)',
          backgroundColor: 'rgba(224, 38, 38, 0.06)',
          pointerEvents: 'none',
          zIndex: 999998,
          willChange: 'transform'
        }}
      />
    </>
  );
}
