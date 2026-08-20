import { Linkedin, Github, Instagram } from 'lucide-react';
import { personalInfo } from '@/lib/constants';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Linkedin, url: personalInfo.linkedinUrl, label: 'LinkedIn' },
  { icon: Github, url: personalInfo.githubUrl, label: 'GitHub' },
  { icon: Instagram, url: personalInfo.instagramUrl, label: 'Instagram' },
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
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
    <footer className="bg-slate-950 text-white py-14">
      <div className="container-px">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-xl font-bold mb-3">{personalInfo.name}</div>
            <p className="text-white/60 text-sm mb-4 max-w-xs">
              Full Stack Developer building AI-powered web applications with the MERN stack.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">Get In Touch</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
