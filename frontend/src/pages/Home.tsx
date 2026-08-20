import LoadingSpinner from '@/components/LoadingSpinner';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import BuildProcessSection from '@/components/BuildProcessSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <LoadingSpinner />
      <Navigation />
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <SkillsSection />
      <BuildProcessSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
