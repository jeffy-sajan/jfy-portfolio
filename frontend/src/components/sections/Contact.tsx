import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  const emailAddress = "jeffy.sajan@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/jeffy-sajan/";
  const githubUrl = "https://github.com/jeffy-sajan";

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Get In Touch
          </h2>
          <div className="flex flex-col items-center gap-8">
            <Card className="shadow-card border-none w-full max-w-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Button
                    onClick={() =>
                      (window.location.href = `mailto:${emailAddress}`)
                    }
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 h-16"
                  >
                    <Mail className="w-6 h-6" />
                    <span>Email Me</span>
                  </Button>
                  <Button
                    onClick={() => window.open(linkedInUrl, "_blank")}
                    className="flex items-center justify-center gap-2 bg-[#0077b5] hover:bg-[#0077b5]/90 h-16"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span>LinkedIn</span>
                  </Button>
                  <Button
                    onClick={() => window.open(githubUrl, "_blank")}
                    className="flex items-center justify-center gap-2 bg-[#333] hover:bg-[#333]/90 h-16"
                  >
                    <Github className="w-6 h-6" />
                    <span>GitHub</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-none w-full max-w-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Kottayam, Kerala, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
