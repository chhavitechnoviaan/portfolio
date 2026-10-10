import React from 'react';

export default function StackedSection({ children, id, zIndex = 1, isDark = false }) {
  return (
    <div
      id={id}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: zIndex,
        width: '100%',
        minHeight: '100vh',
        backgroundColor: isDark ? '#070709' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#171717',
        boxShadow: zIndex > 1 ? '0 -35px 80px rgba(0, 0, 0, 0.35)' : 'none',
        overflow: 'hidden',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
