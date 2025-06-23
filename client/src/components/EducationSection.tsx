import { GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { education, certifications } from '@/lib/constants';

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey and professional development milestones
          </p>
        </div>
        
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              <div className="relative">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white text-sm" />
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">{education.degree}</h4>
                      <span className="text-sm text-gray-500 bg-primary/10 px-3 py-1 rounded">
                        {education.duration}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">{education.institution}</p>
                    <p className="text-gray-600 mb-3">{education.location}</p>
                    <div className="flex items-center">
                      <span className="text-gray-700 font-medium">CGPA: </span>
                      <span className="text-primary font-bold ml-2">{education.cgpa}</span>
                      <div className="ml-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Good Standing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name}
                  className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 ${cert.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-2">
                    <Award className={`mr-2 ${cert.color}`} size={16} />
                    <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
