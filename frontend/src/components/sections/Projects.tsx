import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "MockMate",
      description:
        "An AI-powered interview preparation and mock interview platform.",
      technologies: ["React (JavaScript)", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Gemini API", "JWT"],
      github: "https://github.com/jeffy-sajan/MockMate.git",
      // demo: "#",
    },
    {
      title: "Career-Link",
      description:
        "A full-fledged Job Portal web application that connects job seekers with employers.",
      technologies: ["HTML", "CSS", "Bootstrap", "Django", "MySQL"],
      github: "https://github.com/jeffy-sajan/CareerLink.git",
      demo: "#",
    },
    {
      title: "CycleHub",
      description:
        "An e-commerce platform for buying bicycles and it's related accessories.",
      technologies: ["HTML", "CSS", "Bootstrap", "Django", "SQLite"],
      github: "https://github.com/jeffy-sajan/cyclehub.git",
      // demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in border-none flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-accent hover:bg-accent/90"
                      asChild
                    >
                      {/* <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a> */}
                    </Button>
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
