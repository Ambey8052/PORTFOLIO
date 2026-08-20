import { motion } from 'framer-motion';
import { Layout, Server, Sparkles, Package } from 'lucide-react';
import { buildPhases } from '@/lib/constants';

const iconMap = {
  layout: Layout,
  server: Server,
  sparkles: Sparkles,
  package: Package,
} as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export default function BuildProcessSection() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div className="container-px relative">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">How I Build</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Executing the complete developer lifecycle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From interface to deployment, every project moves through the same four phases.
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {buildPhases.map((phase, index) => {
            const Icon = iconMap[phase.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={phase.phase}
                variants={item}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
                  el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
                }}
                className="glow-card relative flex flex-col bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-primary mb-1">{phase.phase}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{phase.focus}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {phase.tools.map((tool) => (
                    <span key={tool} className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border/60">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
