import { Laptop, Server, Wrench } from 'lucide-react';
import { useScrollAnimation, useSkillAnimation } from '@/hooks/use-scroll-animation';
import { skills } from '@/lib/constants';
import { useEffect } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  isVisible: boolean;
  onAnimate: () => void;
}

function SkillBar({ name, level, color, isVisible, onAnimate }: SkillBarProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onAnimate, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onAnimate]);

  return (
    <div className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className={`font-semibold ${color}`}>{level}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full skill-progress ${color.replace('text-', 'bg-')}`}
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { animatedSkills, animateSkill } = useSkillAnimation();

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern technologies with hands-on project experience
          </p>
        </div>
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Frontend Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Laptop className="text-primary text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
            </div>
            <div className="space-y-4">
              {skills.frontend.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="text-primary"
                  isVisible={isVisible}
                  onAnimate={() => animateSkill(skill.name)}
                />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Server className="text-secondary text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
            </div>
            <div className="space-y-4">
              {skills.backend.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="text-secondary"
                  isVisible={isVisible}
                  onAnimate={() => animateSkill(skill.name)}
                />
              ))}
            </div>
          </div>
          
          {/* Tools & Others */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Wrench className="text-amber-600 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Tools & Others</h3>
            </div>
            <div className="space-y-4">
              {skills.tools.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="text-amber-600"
                  isVisible={isVisible}
                  onAnimate={() => animateSkill(skill.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
