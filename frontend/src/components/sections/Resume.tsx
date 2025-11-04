import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Python Full Stack Developer",
      company: "Luminar Technolab, Kochi",
      period: "July 2023 - January 2024",
      description:
        "As a Python Full Stack Developer, I worked on developing both front-end and back-end components of web applications. During my internship, I was responsible for designing user interfaces, implementing server-side logic, and integrating databases to ensure seamless functionality.",
    },
    {
      title: "Administrative Assistant",
      company: "Thomson Paper Products, Kottayam",
      period: "2022 - 2023",
      description: "",
    },
  ];

  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Marian College Kuttikkanam Autonomous",
      period: "2024 - 2026 (Expected)",
      description:
        "Focused on software engineering, algorithms, and database systems.",
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "Marian College Kuttikkanam Autonomous",
      period: "2019 - 2022",
      // description: "Focused on software engineering, algorithms, and database systems.",
    },
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Resume
            </h2>
            <Button className="bg-accent hover:bg-accent/90" asChild>
              <a href="/assets/docs/Jeffy`Sajan.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="space-y-12">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-semibold text-secondary">
                  Work Experience
                </h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in border-l-4 border-l-primary"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-primary">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-semibold text-secondary">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in border-l-4 border-l-accent"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-primary">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{edu.description}</p>
                    </CardContent>
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
