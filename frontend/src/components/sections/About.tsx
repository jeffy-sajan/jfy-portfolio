import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-gap">
      <div className="shell grid lg:grid-cols-[1fr_1fr] gap-5">
        <Card className="flat-card border-none">
          <CardContent className="p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="section-title mt-3">Designing thoughtful products, not just screens.</h2>
            <p className="section-subtitle mt-4">
              I work across frontend, backend, and product collaboration. I care about clarity, performance,
              and interfaces that communicate intent quickly.
            </p>
          </CardContent>
        </Card>

        <Card className="flat-card border-none">
          <CardContent className="p-7 md:p-9">
            <p className="section-subtitle">
              I'm a passionate software developer focused on backend systems and
              cross-platform applications. I work with Python, FastAPI, React Native,
              GraphQL, and PostgreSQL, and I collaborate in Agile workflows using Jira to
              ship production-ready solutions.
            </p>
            <p className="section-subtitle mt-4">
              Over time, I've built a diverse skill set and a fast learning mindset. I care
              deeply about clean, maintainable code and consistent delivery quality across
              teams and products.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
