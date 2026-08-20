import { techStack } from '@/lib/constants';

export default function TechMarquee() {
  const first = techStack.slice(0, Math.ceil(techStack.length / 2));
  const second = techStack.slice(Math.ceil(techStack.length / 2));

  return (
    <div className="border-y border-border bg-muted/30 py-6 overflow-hidden" aria-hidden="true">
      <div className="marquee-row overflow-hidden mb-3">
        <div className="marquee-track">
          {[...first, ...first].map((tech, i) => (
            <span key={`${tech}-${i}`} className="font-mono text-sm text-muted-foreground px-4 whitespace-nowrap">
              {tech} <span className="text-primary/50">/</span>
            </span>
          ))}
        </div>
      </div>
      <div className="marquee-row overflow-hidden">
        <div className="marquee-track marquee-track-reverse">
          {[...second, ...second].map((tech, i) => (
            <span key={`${tech}-${i}`} className="font-mono text-sm text-muted-foreground px-4 whitespace-nowrap">
              {tech} <span className="text-primary/50">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
