import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-gap">
      <div className="shell grid lg:grid-cols-[1.05fr_0.95fr] gap-5">
        <Card className="flat-card border-none">
          <CardContent className="p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
            <h2 className="section-title mt-3">Common Questions</h2>

            <Accordion type="single" collapsible className="mt-5">
              <AccordionItem value="timeline">
                <AccordionTrigger>How long does a project take?</AccordionTrigger>
                <AccordionContent>Most portfolio or product website projects take 2 to 5 weeks depending on scope.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="stack">
                <AccordionTrigger>What stack do you usually use?</AccordionTrigger>
                <AccordionContent>React + TypeScript for frontend, FastAPI or Django for backend, and PostgreSQL for data.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="engagement">
                <AccordionTrigger>Do you work with teams?</AccordionTrigger>
                <AccordionContent>Yes. I collaborate with designers, PMs, and engineers in sprint-based workflows.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="flat-card border-none">
          <CardContent className="p-7 md:p-9 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
              <h2 className="section-title mt-3">Ready to build?</h2>
              <p className="section-subtitle mt-3">
                If you have a product idea, redesign, or development need, let us discuss goals and timelines.
              </p>
            </div>

            <div className="space-y-3 mt-6">
              <Button asChild className="w-full rounded-full h-12">
                <a href="mailto:jeffysajan9400@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  jeffysajan9400@gmail.com
                </a>
              </Button>
              <div className="flat-card rounded-2xl px-4 py-3 text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-foreground" />
                Kottayam, Kerala, India
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
