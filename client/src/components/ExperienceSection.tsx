import {
  Briefcase, MapPin, ChevronRight,
  FileSpreadsheet, Workflow, Layers, Container,
  Shield, GitBranch, Database, Image,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { experience } from '@/lib/constants';

const flowIcons = {
  fileSpreadsheet: FileSpreadsheet,
  workflow: Workflow,
  layers: Layers,
  container: Container,
  shield: Shield,
  gitBranch: GitBranch,
  database: Database,
  image: Image,
} as const;

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container-px">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Where I've worked
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on internship experience building production-facing full-stack features.
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border" aria-hidden="true" />
            <div className="space-y-10">
              {experience.map((job) => (
                <div key={job.id} className="relative flex gap-6">
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-2xl p-6 card-hover">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                      {job.current && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-primary">{job.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="font-mono text-xs">{job.duration}</span>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {job.points.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">&bull;</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Pipeline visualization */}
                    <div className="mb-5 p-4 rounded-xl bg-muted/40 border border-border/60 overflow-x-auto">
                      <div className="flex items-center gap-1.5 min-w-max">
                        {job.flow.map((step, i) => {
                          const StepIcon = flowIcons[step.icon as keyof typeof flowIcons];
                          return (
                            <div key={step.label} className="flex items-center gap-1.5">
                              <div className="flex flex-col items-center text-center w-28">
                                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-1.5">
                                  <StepIcon className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-xs font-medium text-foreground leading-tight">{step.label}</span>
                                <span className="text-[10px] font-mono text-muted-foreground leading-tight">{step.sub}</span>
                              </div>
                              {i < job.flow.length - 1 && (
                                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
