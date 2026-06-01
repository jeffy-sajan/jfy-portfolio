import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    title: "MockMate",
    summary: "AI-powered mock interview platform with guided role-based practice.",
    tags: ["React", "Node.js", "MongoDB", "Gemini API"],
    code: "https://github.com/jeffy-sajan/MockMate.git",
    live: "https://mock-mateapp.vercel.app/",
  },
  {
    title: "Career-Link",
    summary: "Job portal product connecting candidates with employers and hiring flows.",
    tags: ["Django", "MySQL", "Bootstrap"],
    code: "https://github.com/jeffy-sajan/CareerLink.git",
  },
  {
    title: "PrepArena",
    summary: "AI-powered web application for practicing debates and mock interviews through interactive simulations.",
    tags: ["React", "FastAPI", "GraphQL", "MongoDB", "Gemini API"],
    code: "https://github.com/jeffy-sajan/preparena-ai.git",
    live: "https://preparena-frontend.onrender.com/",
  },
];

const gridVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="section-gap">
      <div className="shell">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Work</p>
            <h2 className="section-title mt-3 gradient-text">Featured Projects</h2>
          </div>
          <Button variant="outline" className="rounded-full bg-card" asChild>
            <a href="https://github.com/jeffy-sajan" target="_blank" rel="noopener noreferrer">
              See all on GitHub
            </a>
          </Button>
        </div>

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-4"
          variants={gridVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              className="project-card-shell h-full"
              style={{ ["--project-tilt" as string]: idx % 2 === 0 ? "-6deg" : "6deg" }}
            >
              <Card className="flat-card project-card border-none h-full glow-border">
                <CardContent className="p-6 flex flex-col h-full project-card-content relative">
                <span className="project-number">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl font-bold tracking-tight relative z-[1]">{project.title}</h3>
                <p className="section-subtitle mt-2 relative z-[1]">{project.summary}</p>

                <div className="flex flex-wrap gap-2 mt-4 relative z-[1]">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full bg-muted text-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex gap-2 relative z-[1]">
                  <Button variant="outline" className="rounded-full bg-card" asChild>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button className="rounded-full" asChild>
                    <a href={project.live ?? project.code} target="_blank" rel="noopener noreferrer">
                      Open
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
