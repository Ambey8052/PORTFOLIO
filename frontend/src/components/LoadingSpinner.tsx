import { useEffect, useState } from 'react';

export default function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setIsVisible(false), prefersReducedMotion ? 0 : 900);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-sm font-bold animate-pulse-slow" style={{ background: 'var(--gradient-primary)' }}>
          KK
        </span>
        <div className="h-1 w-28 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-1/2 rounded-full animate-[loadingBar_0.9s_ease-in-out_infinite]" style={{ background: 'var(--gradient-primary)' }} />
        </div>
      </div>
    </div>
  );
}
