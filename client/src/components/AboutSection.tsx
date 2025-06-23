import { GraduationCap, Code, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by curiosity and powered by code, I'm on a mission to create impactful digital experiences
          </p>
        </div>
        
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <GraduationCap className="text-primary text-2xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Student & Developer</h3>
              <p className="text-gray-600">
                Currently pursuing B.Tech in Information Technology at Ajay Kumar Garg Engineering College 
                with a CGPA of 7.4, graduating in 2027.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-xl">
              <Code className="text-secondary text-2xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Stack Focus</h3>
              <p className="text-gray-600">
                Specialized in React.js ecosystem with hands-on experience in Node.js, Express.js, 
                and MongoDB. Passionate about creating scalable web applications.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <Lightbulb className="text-primary text-2xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Mindset</h3>
              <p className="text-gray-600">
                Always exploring emerging technologies like AI and modern development practices 
                to build solutions that make a difference.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
              alt="Professional developer portrait" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
