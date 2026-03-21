import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "MockMate",
    summary: "AI-powered mock interview platform with guided role-based practice.",
    tags: ["React", "Node.js", "MongoDB", "Gemini API"],
    link: "https://github.com/jeffy-sajan/MockMate.git",
  },
  {
    title: "Career-Link",
    summary: "Job portal product connecting candidates with employers and hiring flows.",
    tags: ["Django", "MySQL", "Bootstrap"],
    link: "https://github.com/jeffy-sajan/CareerLink.git",
  },
  {
    title: "CycleHub",
    summary: "E-commerce experience for bikes and accessories with simple checkout flow.",
    tags: ["Django", "SQLite", "Bootstrap"],
    link: "https://github.com/jeffy-sajan/cyclehub.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-gap">
      <div className="shell">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Work</p>
            <h2 className="section-title mt-3">Featured Projects</h2>
          </div>
          <Button variant="outline" className="rounded-full bg-card" asChild>
            <a href="https://github.com/jeffy-sajan" target="_blank" rel="noopener noreferrer">
              See all on GitHub
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Card key={project.title} className="flat-card border-none soft-hover">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <p className="section-subtitle mt-2">{project.summary}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full bg-muted text-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <Button variant="outline" className="rounded-full bg-card" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button className="rounded-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Open
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
