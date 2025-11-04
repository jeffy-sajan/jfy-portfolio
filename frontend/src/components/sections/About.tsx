import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient development with attention to detail",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate full-stack developer with expertise in building
                modern web applications. With a strong foundation in both
                frontend and backend technologies, I create seamless digital
                experiences that solve real-world problems.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in software development has equipped me with a
                diverse skill set and the ability to adapt to new technologies
                quickly. I believe in writing clean, maintainable code and
                always strive for excellence in every project I undertake.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/assets/img/JEFF PROFILE.jpg"
                  alt="Jeffy Sajan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-in-right border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
