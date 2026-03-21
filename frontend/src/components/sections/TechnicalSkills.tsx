import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Database, Layers, ServerCog, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: Layers,
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Bootstrap", "JavaScript"],
  },
  {
    icon: ServerCog,
    title: "Backend Engineering",
    description: "Architecting robust server-side logic",
    skills: ["Python", "FastAPI", "Django", "Flask", "Node.js"],
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Optimizing data storage and retrieval",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    icon: Wrench,
    title: "DevOps and Tools",
    description: "Streamlining development workflows",
    skills: ["Git/GitHub", "Docker", "Jira", "VS Code", "Pytest", "Jest"],
  },
  {
    icon: BrainCircuit,
    title: "AI and Machine Learning",
    description: "Implementing intelligent solutions",
    skills: ["TensorFlow", "scikit-learn", "spaCy", "NLTK"],
  },
];

const gridVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const TechnicalSkills = () => {
  return (
    <section id="technical-skills" className="section-gap">
      <div className="shell">
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Technical Arsenals</p>
          <h2 className="section-title mt-3">Technical skills and tooling stack</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            A curated set of technologies I use to build scalable and efficient solutions.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-4"
          variants={gridVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {categories.map((category) => (
            <motion.div key={category.title} variants={cardVariant}>
              <Card className="flat-card border-none soft-hover h-full bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="h-11 w-11 rounded-xl bg-muted grid place-items-center">
                    <category.icon className="h-5 w-5 text-foreground" />
                  </div>

                  <h3 className="text-2xl font-bold mt-4">{category.title}</h3>
                  <p className="section-subtitle mt-2">{category.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="rounded-full bg-muted/85 text-foreground border border-border/70">
                        {skill}
                      </Badge>
                    ))}
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

export default TechnicalSkills;
