import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
      gradient: "from-primary to-accent",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient development with attention to detail",
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-slide-in-up">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-16 rounded-full animate-scale-in" />

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate software developer with expertise in backend systems and cross‑platform mobile
                applications. Skilled in <span className="text-primary font-semibold">Python, FastAPI, React Native, GraphQL, and PostgreSQL</span>, with experience in
                Agile workflows using Jira. I enjoy building scalable solutions and collaborating across teams to
                deliver production‑ready applications.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in software development has equipped me with a diverse skill set and the ability to adapt to
                new technologies quickly. I believe in writing <span className="text-secondary font-semibold">clean, maintainable code</span> and always strive for excellence
                in every project I undertake.
              </p>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-card-hover group">
                <img
                  src={import.meta.env.BASE_URL + "assets/img/jfy.png"}
                  alt="Jeffy Sajan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-accent rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-purple rounded-full blur-2xl opacity-50" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-slide-in-up hover-lift bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <CardContent className="p-8 text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} p-[2px] mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <item.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
