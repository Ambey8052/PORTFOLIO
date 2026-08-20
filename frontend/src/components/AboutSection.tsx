import { GraduationCap, Code2, Sparkles, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { education, focusAreas, personalInfo } from '@/lib/constants';

const highlights = [
  {
    icon: GraduationCap,
    title: "Student & Developer",
    description: `Pursuing ${education.degree} at ${education.institution} with a CGPA of ${education.cgpa}, graduating in 2027.`,
  },
  {
    icon: Code2,
    title: "Full Stack Focus",
    description: "Specialized in the MERN stack with hands-on experience shipping AI-powered features, REST APIs, and secure authentication.",
  },
  {
    icon: Sparkles,
    title: "Innovation Mindset",
    description: "Currently exploring AI agents and automation with n8n, building tools that turn manual workflows into streamlined systems.",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container-px">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Driven by curiosity, powered by code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm on a mission to create impactful digital experiences that bridge creativity and functionality.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-5 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-3 space-y-5">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl border border-border bg-card card-hover">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 h-full flex flex-col">
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-5">Quick facts</h3>
              <dl className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <dd className="text-sm text-foreground">{personalInfo.location}</dd>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                  <dd className="text-sm text-foreground">{education.institution}</dd>
                </div>
              </dl>

              <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-3">Focus areas</h4>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span key={area} className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border">
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
