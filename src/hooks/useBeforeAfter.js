'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useBeforeAfter(initialPosition = 50) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const getPositionFromEvent = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return 50;
    const rect = container.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const relativeX = clientX - rect.left;
    const percent = (relativeX / rect.width) * 100;
    return Math.min(Math.max(percent, 2), 98);
  }, []);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      setPosition(getPositionFromEvent(e));
    },
    [isDragging, getPositionFromEvent]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      setPosition(getPositionFromEvent(e));
    },
    [isDragging, getPositionFromEvent]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return {
    position,
    isDragging,
    containerRef,
    handleMouseDown,
    handleTouchStart,
  };
}
