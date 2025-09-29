import { Code, Heart, Lightbulb, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Bio = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Human-Centered Design",
      description: "Every line of code is written with the end user in mind, creating experiences that feel natural and intuitive."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Creative Problem Solving",
      description: "Approaching challenges with artistic thinking while maintaining technical precision and analytical rigor."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Empowerment Through Technology",
      description: "Building tools that amplify human potential and enable organizations to achieve their mission."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Purpose-Driven Development",
      description: "Technology as a force for good - creating solutions that make a meaningful impact on lives and communities."
    }
  ];

  const achievements = [
    "Full-Stack Development Expertise",
    "Mobile & Web Application Development",
    "User Experience Design",
    "Agile Development Methodologies",
    "Clean Code & Performance Optimization",
    "Cross-Platform Solutions"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="bio" className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Bio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the story behind the code and the passion that drives innovation
          </p>
        </div>

        {/* Main Bio Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="glass-card p-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 gradient-text">The Creative Coder</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Lawrence is a <strong>Software Developer</strong> who sees code as a creative medium for solving human problems, 
                not just a technical discipline. What defines his approach is a unique fusion of the artistic and analytical; 
                he crafts <em>digital bridges</em>, not just applications.
              </p>
              <p>
                With an obsession for the intuitive details that transform a useful tool into a delightful experience, 
                his core passion is <strong>empowerment</strong>. He is most alive when his work enables a business, 
                a non-profit, or an individual to succeed, allowing the user's goal to take center stage.
              </p>
              <p>
                For Lawrence, development is the perfect vehicle for his passion, enabling him to live out his core belief 
                that <em>technology should be a force for good</em>. This powerful connection between his passion and his 
                profession is what drives him to continually learn, innovate, and excel.
              </p>
              <p className="text-primary font-semibold">
                In need of such amazing skills for a project or within your team? Reach out and let's create something extraordinary together.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6 animate-fade-in-up delay-200">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Technical Excellence</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/20">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 animate-fade-in-up delay-300">
              <h3 className="text-xl font-bold mb-4 gradient-text">Development Philosophy</h3>
              <p className="text-muted-foreground">
                "Code is poetry in motion. Every function tells a story, every algorithm solves a puzzle, 
                and every interface creates a connection. I believe in writing code that not only works 
                flawlessly but also inspires and empowers those who interact with it."
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Core Values & Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center glass-card p-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Something <span className="gradient-text">Amazing</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a startup with a bold vision, an established company seeking innovation, 
            or a non-profit making a difference, let's collaborate to bring your ideas to life.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Bio;