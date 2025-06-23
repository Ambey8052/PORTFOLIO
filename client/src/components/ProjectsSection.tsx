import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { projects } from '@/lib/constants';

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const handleLiveDemo = (projectTitle: string) => {
    alert(`Live demo for ${projectTitle} would open here`);
  };

  const handleViewCode = (projectTitle: string) => {
    alert(`GitHub repository for ${projectTitle} would open here`);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work demonstrating technical skills and creative problem-solving
          </p>
        </div>
        
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={project.image}
                alt={`${project.title} interface`}
                className="w-full h-48 object-cover rounded-t-xl" 
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <Badge variant="secondary" className="text-sm">
                    {project.date}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button 
                    onClick={() => handleLiveDemo(project.title)}
                    className="flex-1 bg-primary text-white hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleViewCode(project.title)}
                    className="flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
