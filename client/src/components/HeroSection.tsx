import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/constants';

export default function HeroSection() {
  const handleDownloadResume = () => {
    // In a real application, you would link to an actual resume file
    alert("Resume download would be implemented here");
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full animate-float" 
             style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-6">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl">
              Passionate B.Tech IT student specializing in React.js, Node.js, and modern web technologies. 
              Building innovative solutions that bridge creativity and functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleDownloadResume}
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline"
                onClick={handleContactClick}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Developer workspace with modern setup" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
