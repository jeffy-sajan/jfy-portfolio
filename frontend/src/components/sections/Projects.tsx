import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "MockMate",
      description:
        "An AI-powered interview preparation and mock interview platform.",
      technologies: ["React (JavaScript)", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Gemini API", "JWT"],
      github: "https://github.com/jeffy-sajan/MockMate.git",
      gradient: "from-primary via-accent to-secondary",
    },
    {
      title: "Career-Link",
      description:
        "A full-fledged Job Portal web application that connects job seekers with employers.",
      technologies: ["HTML", "CSS", "Bootstrap", "Django", "MySQL"],
      github: "https://github.com/jeffy-sajan/CareerLink.git",
      demo: "#",
      gradient: "from-accent via-secondary to-primary",
    },
    {
      title: "CycleHub",
      description:
        "An e-commerce platform for buying bicycles and it's related accessories.",
      technologies: ["HTML", "CSS", "Bootstrap", "Django", "SQLite"],
      github: "https://github.com/jeffy-sajan/cyclehub.git",
      gradient: "from-secondary via-primary to-accent",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-up">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full animate-scale-in" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-slide-in-up flex flex-col bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Sparkle Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </div>

                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-border/50 bg-muted/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-accent hover:shadow-glow transition-all duration-300 group/btn"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
