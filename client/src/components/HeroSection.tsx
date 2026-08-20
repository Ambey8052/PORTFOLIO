import { Download, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, stats } from '@/lib/constants';

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const navHeight = 76;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-24 pb-16">
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
             style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container-px relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-border bg-card/70 px-3 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to full-time & internship opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 tracking-tight">
              Hi, I'm <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
              <br />
              {personalInfo.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              B.Tech IT student building AI-powered, full-stack web applications with the{' '}
              <span className="font-mono text-primary">MERN</span> stack — from research tools and
              government-scheme platforms to conversational resume builders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button asChild className="text-white px-8 py-6 rounded-xl font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg cursor-pointer" style={{ background: 'var(--gradient-primary)' }}>
                <a href={personalInfo.resumeUrl} download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={handleContactClick}
                className="border-2 border-primary text-primary px-8 py-6 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer"
                 aria-label="GitHub profile"
                 className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer">
                <Github size={18} />
              </a>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer"
                 aria-label="LinkedIn profile"
                 className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                 aria-label="Send email"
                 className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer">
                <Mail size={18} />
              </a>
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl" style={{ background: 'var(--gradient-primary)' }} aria-hidden="true" />
              <img
                src="https://res.cloudinary.com/dfhkyutbe/image/upload/v1750711350/Karan_eywhgk.jpg"
                alt="Karan Kumar"
                className="relative rounded-[1.75rem] shadow-2xl w-full h-auto border border-border/60 object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-card border border-border p-3.5 rounded-2xl shadow-xl">
                <div className="text-xs font-mono text-muted-foreground">Currently interning at</div>
                <div className="text-sm font-semibold text-foreground">Salasar Techno Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToNext()}
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <span className="text-xs">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-float" />
      </button>
    </section>
  );
}

function scrollToNext() {
  const element = document.querySelector('#about');
  if (element) {
    const navHeight = 76;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
}
