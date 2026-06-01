import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const LAYERS = Array.from({ length: 26 });
const COLORS = ['#FF4DB8', '#A855F7', '#22D3EE'];

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const safetyTimer = window.setTimeout(() => setDone(true), 3200);

    if (!root.current) {
      setDone(true);
      return () => window.clearTimeout(safetyTimer);
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.print-layer',
        { scaleX: 0, opacity: 0.2 },
        { scaleX: 1, opacity: 1, stagger: 0.08, duration: 0.45, ease: 'power2.out' },
      );
      gsap.to('.loader-bar', { width: '100%', stagger: 0.12, duration: 1.7, ease: 'power1.inOut' });
      gsap.to(root.current, { opacity: 0, delay: 2.35, duration: 0.35, onComplete: () => setDone(true) });
    }, root.current);

    return () => {
      window.clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, []);

  if (done) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[100] grid place-items-center bg-[#0F0F1A]">
      <div className="w-[min(440px,88vw)] text-center">
        <div className="mx-auto mb-8 grid h-72 w-48 content-end gap-1 rounded-b-full px-5">
          {LAYERS.map((_, i) => (
            <div
              key={i}
              className="print-layer h-2 origin-left rounded-full"
              style={{
                background: `linear-gradient(90deg, ${COLORS[i % COLORS.length]}, transparent)`,
                width: `${50 + Math.sin(i) * 16 + Math.min(i * 2, 45)}%`,
                marginInline: 'auto',
              }}
            />
          ))}
        </div>
        <h2 className="font-heading text-3xl">Imprimindo camada por camada...</h2>
        {COLORS.map((color) => (
          <div key={color} className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="loader-bar h-full w-0" style={{ background: color }} />
          </div>
        ))}
      </div>
    </div>
  );
}
