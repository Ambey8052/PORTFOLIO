import { Linkedin, Github, Instagram } from 'lucide-react';
import { personalInfo } from '@/lib/constants';

export default function Footer() {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">{personalInfo.name}</div>
            <p className="text-gray-400 mb-4">
              Passionate Full Stack Developer dedicated to creating innovative web solutions 
              that bridge creativity and functionality.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick(personalInfo.linkedinUrl)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick(personalInfo.githubUrl)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick(personalInfo.instagramUrl)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#skills')}
                  className="hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#projects')}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">✉</span>
                {personalInfo.email}
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                {personalInfo.phone}
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {personalInfo.name}. All rights reserved. Built with passion and modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
}
