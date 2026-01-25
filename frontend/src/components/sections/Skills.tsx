import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React","Tailwind CSS" ],
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Django", "Flask"],
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    },
    {
      title: "Testing & Tools",
      skills: ["Pytest", "Jest", "Git", "GitHub", "Jira", "VS Code"],
    },
    {
      title: "AI/ML",
      skills: ["scikit‑learn", "TensorFlow", "spaCy", "NLTK"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
