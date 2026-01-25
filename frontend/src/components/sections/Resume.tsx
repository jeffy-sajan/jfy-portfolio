import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Full Stack Developer intern",
      company: "Doztix Group, Kochi",
      period: "November 2025 - Present",
      description: "Focused on backend development using Python, FastAPI, Alembic, Pytest, and PostgreSQL. Designed GraphQL APIs, implemented database migrations, and collaborated with frontend team using React Native and TypeScript. Worked in Agile sprints with Jira for task management and GitHub for version control.",
      gradient: "from-primary to-accent",
    },
    {
      title: "Python Web Developer",
      company: "Luminar Technolab, Kochi",
      period: "July 2023 - January 2024",
      description:
        "As a Python Web Developer, I worked on developing both front-end and back-end components of web applications. During my internship, I was responsible for designing user interfaces, implementing server-side logic, and integrating databases to ensure seamless functionality.",
      gradient: "from-accent to-secondary",
    },
    {
      title: "Administrative Assistant",
      company: "Thomson Paper Products, Kottayam",
      period: "2022 - 2023",
      description: "",
      gradient: "from-secondary to-primary",
    },
  ];

  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Marian College Kuttikkanam Autonomous",
      period: "2024 - 2026 (Expected)",
      description:
        "Focused on software engineering, algorithms, and database systems.",
      gradient: "from-primary to-secondary",
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "Marian College Kuttikkanam Autonomous",
      period: "2019 - 2022",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="resume" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold animate-slide-in-left">
                My <span className="text-gradient">Resume</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mt-4 rounded-full animate-scale-in" />
            </div>
            <Button
              className="group bg-gradient-hero hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg animate-slide-in-right"
              asChild
            >
              <a
                href={import.meta.env.BASE_URL + "assets/docs/Jeffy_Sajan_SE.pdf"}
                download
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="space-y-16">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Work Experience
                </h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 animate-slide-in-left bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary" />
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground mt-2">
                        <span className="font-semibold text-primary">{exp.company}</span>
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </CardHeader>
                    {exp.description && (
                      <CardContent className="relative z-10">
                        <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-secondary">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 animate-slide-in-right bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-secondary to-primary" />
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground mt-2">
                        <span className="font-semibold text-secondary">{edu.institution}</span>
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </CardHeader>
                    {edu.description && (
                      <CardContent className="relative z-10">
                        <p className="text-foreground/80 leading-relaxed">{edu.description}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
