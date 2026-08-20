import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '@/lib/constants';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 76;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'glass-effect border-border shadow-sm'
          : 'bg-transparent border-transparent'
      }`}>
        <div className="container-px">
          <div className="flex justify-between items-center py-4">
            <button
              className="text-lg font-bold text-foreground cursor-pointer flex items-center gap-2"
              onClick={() => scrollToSection('#home')}
              aria-label="Go to home section"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-sm font-bold" style={{ background: 'var(--gradient-primary)' }}>
                KK
              </span>
              <span className="hidden sm:inline">{personalInfo.name}</span>
            </button>

            <div className="hidden xl:flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer ${
                    activeSection === link.href.substring(1) ? 'active text-foreground' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden xl:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 cursor-pointer"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <ThemeToggle />
              <button
                className="text-foreground p-2 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-72 bg-card shadow-xl">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span className="text-lg font-bold text-foreground">{personalInfo.name}</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer text-muted-foreground hover:text-foreground" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <div className="py-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left px-5 py-3 text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary bg-primary/5'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="px-5 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white cursor-pointer"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
