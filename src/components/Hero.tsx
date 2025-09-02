import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(220, 27%, 4%, 0.8), rgba(220, 27%, 4%, 0.8)), url(${heroBg}) center/cover`
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 mt-8">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/6d0765eb-c83c-4301-8cf8-1a88f638a42c.png"
                alt="Lawrence Muia Matheka - Profile Photo"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30 shadow-2xl glow-effect mx-auto"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-glow-pulse"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-2 gradient-text">
              Lawrence Muia Matheka
            </h2>
          </div>

          <h1 className="text-lg md:text-xl font-bold mb-6 leading-tight" style={{ color: 'hsl(220, 50%, 20%)' }}>
            Mobile | Web Developer | Social Media Marketing | IT Specialist | Business Strategist
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting exceptional digital experiences with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="glow-effect hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:glow-effect transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:glow-effect transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mathekahlawrence@gmail.com"
              className="p-3 glass-card rounded-full hover:glow-effect transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ArrowDown className="w-8 h-8 text-primary mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;