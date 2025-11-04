import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const apiBase = import.meta.env.VITE_API_URL || "";
      console.log("Sending to:", `${apiBase}/api/contacts/`);
      console.log("Form data:", formData);

      const res = await fetch(`${apiBase}/api/contacts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server response:", errorText);
        throw new Error(
          `Failed to send message: ${res.status} ${res.statusText}`
        );
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description:
          "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jeffysajan9400@gmail.com",
      link: "mailto:jeffysajan9400@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/jeffysajan/",
      link: "https://www.linkedin.com/in/jeffysajan/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/jeffy-sajan",
      link: "https://github.com/jeffy-sajan",
    },
    {
      icon: MapPin,
      label: "Chengalam South",
      value: "Kottayam, Kerala, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-card border-none animate-fade-in">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in-right">
              <Card className="shadow-card border-none">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-secondary">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {item.label}
                          </p>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-accent transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
