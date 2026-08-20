import { ExternalLink, Github, ChevronDown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { projects } from '@/lib/constants';

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-muted/40">
      <div className="container-px">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">Projects</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered, full-stack applications built end-to-end with the MERN stack.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const hasLinks = Boolean(project.liveUrl || project.repoUrl);

            return (
              <div
                key={project.id}
                className="flex flex-col bg-card rounded-2xl border border-border card-hover overflow-hidden"
              >
                <div className="p-6 pb-0 flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="text-primary w-5 h-5" />
                  </div>
                  <Badge variant="secondary" className="font-mono text-xs">
                    {project.date}
                  </Badge>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    aria-expanded={isExpanded}
                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mb-3 cursor-pointer"
                  >
                    Key features
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isExpanded && (
                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                          <span className="text-primary mt-1.5 flex-shrink-0">&bull;</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-4 flex gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg text-white text-sm font-semibold py-2.5 transition-transform hover:scale-105 cursor-pointer"
                        style={{ background: 'var(--gradient-primary)' }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-border text-foreground text-sm font-semibold py-2.5 hover:bg-muted transition-colors cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    ) : null}
                    {!hasLinks && (
                      <span className="flex-1 inline-flex items-center justify-center rounded-lg border border-dashed border-border text-muted-foreground text-xs font-medium py-2.5">
                        Links coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
