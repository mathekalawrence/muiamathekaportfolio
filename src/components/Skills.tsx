const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 94 }
      ]
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Flutter", level: 82 },
        { name: "Ionic", level: 78 },
        { name: "Capacitor", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Python", level: 83 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "Supabase", level: 90 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 93 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 88 }
      ]
    },
    {
      title: "Social Media Marketing",
      skills: [
        { name: "Facebook Ads", level: 88 },
        { name: "Instagram Marketing", level: 90 },
        { name: "Google Ads", level: 85 },
        { name: "Content Strategy", level: 87 },
        { name: "Analytics", level: 83 }
      ]
    },
    {
      title: "IT & Business",
      skills: [
        { name: "System Administration", level: 80 },
        { name: "Network Management", level: 78 },
        { name: "Business Analysis", level: 85 },
        { name: "Project Management", level: 88 },
        { name: "Strategic Planning", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card p-6 rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Always Learning
            </h3>
            <p className="text-muted-foreground">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring AI integration, advanced animation libraries, and 
              emerging mobile development frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;