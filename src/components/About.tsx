import { Code, Smartphone, Globe, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Creating responsive mobile applications with native performance"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Building modern web applications with cutting-edge technologies"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Mobile and Web Developer with expertise in creating exceptional digital experiences. 
            I specialize in building responsive, user-friendly applications that combine beautiful design with 
            robust functionality. My goal is to transform ideas into reality through clean, efficient code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              My Development Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing code that not only works but is also elegant, maintainable, and scalable. 
              Every project is an opportunity to learn something new and push the boundaries of what's possible. 
              I'm committed to staying updated with the latest technologies and best practices to deliver 
              exceptional solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;