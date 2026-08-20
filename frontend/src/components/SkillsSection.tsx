import { motion } from 'framer-motion';
import { Braces, Layout, Server, Database, Wrench } from 'lucide-react';
import { skills } from '@/lib/constants';

const categoryIcons = {
  languages: Braces,
  frontend: Layout,
  backend: Server,
  databases: Database,
  tools: Wrench,
} as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] as const } },
};

function handleGlow(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
  el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
}

export default function SkillsSection() {
  const categories = Object.entries(skills) as [keyof typeof skills, typeof skills[keyof typeof skills]][];

  return (
    <section id="skills" className="py-24 bg-muted/40">
      <div className="container-px">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">Technical Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Tools of the trade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A practical, hands-on toolkit spanning languages, frontend, backend, data, and DevOps.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map(([key, category]) => {
            const Icon = categoryIcons[key];
            return (
              <motion.div
                key={key}
                variants={item}
                onMouseMove={handleGlow}
                className="glow-card relative bg-card p-6 rounded-2xl border border-border card-hover"
              >
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-3">
                    <Icon className="text-primary w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skillItem) => (
                    <span
                      key={skillItem}
                      className="text-sm font-medium px-3 py-1.5 rounded-lg bg-muted text-foreground/80 border border-border/60 font-mono"
                    >
                      {skillItem}
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
