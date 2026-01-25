import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function Contact() {
  const emailAddress = "jeffy.sajan@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/jeffy-sajan/";
  const githubUrl = "https://github.com/jeffy-sajan";

  const contactMethods = [
    {
      icon: Mail,
      label: "Email Me",
      action: () => (window.location.href = `mailto:${emailAddress}`),
      gradient: "from-accent to-primary",
      hoverColor: "hover:shadow-glow-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      action: () => window.open(linkedInUrl, "_blank"),
      gradient: "from-[#0077b5] to-[#00a0dc]",
      hoverColor: "hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]",
    },
    {
      icon: Github,
      label: "GitHub",
      action: () => window.open(githubUrl, "_blank"),
      gradient: "from-[#333] to-[#24292e]",
      hoverColor: "hover:shadow-[0_0_30px_rgba(51,51,51,0.4)]",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-up">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full animate-scale-in" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
              Let's connect! Feel free to reach out through any of these channels
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            {/* Contact Methods */}
            <Card className="group relative overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-500 w-full max-w-3xl animate-slide-in-up bg-card/80 backdrop-blur-sm" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {contactMethods.map((method, index) => (
                    <Button
                      key={index}
                      onClick={method.action}
                      className={`group/btn relative overflow-hidden h-20 text-white bg-gradient-to-r ${method.gradient} ${method.hoverColor} transition-all duration-300 hover:-translate-y-1 animate-scale-in`}
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <method.icon className="w-6 h-6 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-lg">{method.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="group relative overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 w-full max-w-3xl animate-slide-in-up bg-card/80 backdrop-blur-sm" style={{ animationDelay: "0.6s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="flex items-center gap-6">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground mb-1">Location</p>
                    <p className="text-lg text-muted-foreground">
                      Kottayam, Kerala, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Message */}
            <div className="text-center mt-8 animate-slide-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">
                <Send className="w-5 h-5" />
                <span className="font-medium">Open to new opportunities and collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
