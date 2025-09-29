import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Bio />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
