import { useEffect, useRef } from 'react';

// Builds one quadrant-arc (used for the "scanning" idle rings) as an SVG path.
function quadrantArcPath(cx: number, cy: number, r: number, centerDeg: number, spanDeg: number) {
  const startDeg = centerDeg - spanDeg / 2;
  const endDeg = centerDeg + spanDeg / 2;
  const toXY = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const [sx, sy] = toXY(startDeg);
  const [ex, ey] = toXY(endDeg);
  const largeArc = spanDeg > 180 ? 1 : 0;
  return `M ${sx} ${sy} A ${r} ${r} 0 ${largeArc} 1 ${ex} ${ey}`;
}

const CENTER = 34;
const RING_RADII = [9, 15, 20];
const QUADRANTS = [45, 135, 225, 315];
const TICK_INNER = 24;
const TICK_OUTER = 31;
const TICK_CAP = 3.5;
const RETICLE_COLOR = '#22c55e';

export default function CursorReticle() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lockedRef = useRef<SVGGElement>(null);
  const idleRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (prefersReducedMotion || !supportsFinePointer) return;

    const wrapper = wrapperRef.current;
    const idle = idleRef.current;
    const locked = lockedRef.current;
    if (!wrapper || !idle || !locked) return;

    document.body.style.cursor = 'none';
    wrapper.style.opacity = '0';

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const handleMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (wrapper.style.opacity !== '1') wrapper.style.opacity = '1';
      if (!raf) raf = requestAnimationFrame(paint);
    };

    const paint = () => {
      wrapper.style.transform = `translate3d(${targetX - CENTER}px, ${targetY - CENTER}px, 0)`;
      raf = 0;
    };

    const isInteractive = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      return Boolean(target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer'));
    };

    const handleOver = (e: PointerEvent) => {
      if (isInteractive(e.target)) {
        idle.style.opacity = '0';
        locked.style.opacity = '1';
      }
    };
    const handleOut = (e: PointerEvent) => {
      if (isInteractive(e.target) && !isInteractive(e.relatedTarget)) {
        idle.style.opacity = '1';
        locked.style.opacity = '0';
      }
    };

    const handleLeave = () => { wrapper.style.opacity = '0'; };
    const handleEnter = () => { wrapper.style.opacity = '1'; };

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('pointerover', handleOver, { passive: true });
    document.addEventListener('pointerout', handleOut, { passive: true });
    document.addEventListener('pointerleave', handleLeave);
    document.addEventListener('pointerenter', handleEnter);

    return () => {
      document.body.style.cursor = '';
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerover', handleOver);
      document.removeEventListener('pointerout', handleOut);
      document.removeEventListener('pointerleave', handleLeave);
      document.removeEventListener('pointerenter', handleEnter);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[999] opacity-0 transition-opacity duration-300 will-change-transform"
      style={{ width: CENTER * 2, height: CENTER * 2 }}
    >
      <svg width={CENTER * 2} height={CENTER * 2} viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}>
        <g
          stroke={RETICLE_COLOR}
          fill="none"
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 2.5px ${RETICLE_COLOR})` }}
        >
          {/* crosshair ticks */}
          {[0, 90, 180, 270].map((deg) => (
            <g key={deg} transform={`rotate(${deg} ${CENTER} ${CENTER})`}>
              <line
                x1={CENTER} y1={CENTER - TICK_INNER}
                x2={CENTER} y2={CENTER - TICK_OUTER}
                strokeWidth={1.3} strokeDasharray="1 2"
              />
              <line
                x1={CENTER - TICK_CAP} y1={CENTER - TICK_OUTER}
                x2={CENTER + TICK_CAP} y2={CENTER - TICK_OUTER}
                strokeWidth={1.3} strokeDasharray="1 2"
              />
            </g>
          ))}

          {/* center ring */}
          <circle cx={CENTER} cy={CENTER} r={3.5} strokeWidth={1} strokeDasharray="0.8 1.8" className="animate-reticle-breathe" />

          {/* idle: quadrant scanning arcs */}
          <g ref={idleRef} className="transition-opacity duration-300" style={{ opacity: 1 }}>
            {RING_RADII.slice(0, 2).map((r, ri) =>
              QUADRANTS.map((q) => (
                <path
                  key={`${r}-${q}`}
                  d={quadrantArcPath(CENTER, CENTER, r, q, 42)}
                  strokeWidth={1}
                  strokeDasharray="0.8 2"
                  opacity={1 - ri * 0.25}
                  className="animate-reticle-breathe"
                  style={{ animationDelay: `${ri * 0.15}s` }}
                />
              ))
            )}
          </g>

          {/* locked: full concentric rings */}
          <g ref={lockedRef} className="transition-opacity duration-300" style={{ opacity: 0 }}>
            {RING_RADII.map((r, ri) => (
              <circle
                key={r}
                cx={CENTER} cy={CENTER} r={r}
                strokeWidth={1}
                strokeDasharray="0.8 1.8"
                opacity={1 - ri * 0.22}
                className="animate-reticle-breathe"
                style={{ animationDelay: `${ri * 0.12}s` }}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
