import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Bootstrap", "JavaScript"],
      icon: "🎨",
      description: "Building responsive, interactive user interfaces",
      gradient: "from-blue-400 to-indigo-600",
      delay: 0,
    },
    {
      title: "Backend Engineering",
      skills: ["Python", "FastAPI", "Django", "Flask", "Node.js"],
      icon: "⚙️",
      description: "Architecting robust server-side logic",
      gradient: "from-emerald-400 to-cyan-600",
      delay: 0.1,
    },
    {
      title: "Database Management",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
      icon: "🗄️",
      description: "Optimizing data storage and retrieval",
      gradient: "from-orange-400 to-red-600",
      delay: 0.2,
    },
    {
      title: "DevOps & Tools",
      skills: ["Git/GitHub", "Docker", "Jira", "VS Code", "Pytest", "Jest"],
      icon: "🛠️",
      description: "Streamlining development workflows",
      gradient: "from-purple-400 to-pink-600",
      delay: 0.3,
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "scikit-learn", "spaCy", "NLTK"],
      icon: "🤖",
      description: "Implementing intelligent solutions",
      gradient: "from-pink-400 to-rose-600",
      delay: 0.4,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold animate-slide-in-up">
              Technical <span className="text-gradient font-[Dancing_Script] text-5xl md:text-7xl">Arsenals</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full animate-scale-in" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
              A curated set of technologies I use to build scalable and efficient solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-none bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${category.delay}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`} />
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${category.gradient} group-hover:w-full transition-all duration-700`} />

                <CardContent className="p-8">
                  <div className="mb-6 relative">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} p-0.5 transform group-hover:rotate-6 transition-transform duration-300`}>
                      <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center text-3xl">
                        {category.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/20"
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
