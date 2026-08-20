import { GraduationCap, Award, Trophy } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { education, certifications } from '@/lib/constants';

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container-px">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">Education & Certifications</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Academic journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Coursework, milestones, and hackathons that shaped my development practice.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Education</h3>
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-lg font-semibold text-foreground">{education.degree}</h4>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                      {education.duration}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-1">{education.institution}</p>
                  <p className="text-sm text-muted-foreground mb-4">{education.location}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-foreground">
                      CGPA: <span className="font-bold text-primary">{education.cgpa}</span> / 10
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                      Good Standing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Certifications & Hackathons</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => {
                const Icon = cert.type === 'Hackathon' ? Trophy : Award;
                return (
                  <div
                    key={cert.name}
                    className="bg-card p-4 rounded-xl border border-border card-hover"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <h4 className="font-semibold text-foreground text-sm leading-tight">{cert.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
