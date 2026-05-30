'use client';

import { useEffect, useState } from 'react';

export function useExitIntent(delay = 3000) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    let timer;
    let canTrigger = false;

    timer = setTimeout(() => {
      canTrigger = true;
    }, delay);

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && canTrigger && !triggered) {
        const shown = sessionStorage.getItem('exitIntentShown');
        if (!shown) {
          setTriggered(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delay, triggered]);

  return triggered;
}
