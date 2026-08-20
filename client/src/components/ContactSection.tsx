import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { personalInfo } from '@/lib/constants';
import { apiRequest } from '@/lib/queryClient';

const contactItems = [
  { icon: Mail, label: "Email", value: (p: typeof personalInfo) => p.email, href: (p: typeof personalInfo) => `mailto:${p.email}` },
  { icon: Phone, label: "Phone", value: (p: typeof personalInfo) => p.phone, href: (p: typeof personalInfo) => `tel:${p.phone.replace(/[^+\d]/g, '')}` },
  { icon: MapPin, label: "Location", value: (p: typeof personalInfo) => p.location, href: undefined },
];

const socialLinks = [
  { icon: Linkedin, url: (p: typeof personalInfo) => p.linkedinUrl, label: "LinkedIn" },
  { icon: Github, url: (p: typeof personalInfo) => p.githubUrl, label: "GitHub" },
  { icon: Instagram, url: (p: typeof personalInfo) => p.instagramUrl, label: "Instagram" },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiRequest('POST', '/api/contact', formData);
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: result.message,
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/40">
      <div className="container-px">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h3>
              <p className="text-muted-foreground text-lg">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a conversation about technology and development.
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map((item) => {
                const content = (
                  <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 card-hover">
                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                      <p className="text-muted-foreground text-sm">{item.value(personalInfo)}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href(personalInfo)} className="block cursor-pointer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url(personalInfo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 bg-card border border-border text-foreground rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or how we can work together..."
                  required
                  rows={4}
                  className="mt-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white hover:scale-[1.02] transform transition-all duration-200 shadow-lg py-6 cursor-pointer"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
