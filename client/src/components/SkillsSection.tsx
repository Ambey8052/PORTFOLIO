import { Braces, Layout, Server, Database, Wrench } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { skills } from '@/lib/constants';

const categoryIcons = {
  languages: Braces,
  frontend: Layout,
  backend: Server,
  databases: Database,
  tools: Wrench,
} as const;

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();
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

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map(([key, category]) => {
            const Icon = categoryIcons[key];
            return (
              <div key={key} className="bg-card p-6 rounded-2xl border border-border card-hover">
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-3">
                    <Icon className="text-primary w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-medium px-3 py-1.5 rounded-lg bg-muted text-foreground/80 border border-border/60 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
