import { Brush, LayoutGrid, ServerCog } from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "UI Engineering",
    desc: "Responsive interfaces, component systems, and interaction polish.",
  },
  {
    icon: ServerCog,
    title: "Backend Development",
    desc: "FastAPI and Django services with clean data models and API design.",
  },
  {
    icon: Brush,
    title: "Design-to-Code",
    desc: "Turning visual references into precise, production-ready frontend builds.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-gap">
      <div className="shell">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Services</p>
          <h2 className="section-title mt-3">How I can help</h2>
        </div>

        <div className="help-container">
          {services.map((item, index) => (
            <article
              key={item.title}
              className="help-glass"
              style={{ ["--r" as string]: index === 0 ? -8 : index === 1 ? 0 : 8 }}
              data-text={item.title}
            >
              <div className="p-6 pb-12 h-full">
                <div className="help-glass-icon">
                  <item.icon className="h-5 w-5 text-foreground/90" />
                </div>
                <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
                <p className="section-subtitle mt-2">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
