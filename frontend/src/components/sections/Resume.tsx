import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    role: "Full Stack Developer intern",
    company: "Doztix Group, Kochi",
    period: "November 2025 - Present",
    description:
      "Focused on backend development using Python, FastAPI, Alembic, Pytest, and PostgreSQL. Designed GraphQL APIs, implemented database migrations, and collaborated with frontend team using React Native and TypeScript. Worked in Agile sprints with Jira for task management and GitHub for version control.",
  },
  {
    role: "Python Web Developer",
    company: "Luminar Technolab, Kochi",
    period: "July 2023 - January 2024",
    description:
      "As a Python Web Developer, I worked on developing both front-end and back-end components of web applications. During my internship, I was responsible for designing user interfaces, implementing server-side logic, and integrating databases to ensure seamless functionality.",
  },
  {
    role: "Administrative Assistant",
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
    description: "Focused on software engineering, algorithms, and database systems.",
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Marian College Kuttikkanam Autonomous",
    period: "2019 - 2022",
    description: "",
  },
];

const steps = [
  { n: "01", t: "Discovery", d: "Understand goals, users, and constraints before implementation." },
  { n: "02", t: "Concept", d: "Convert requirements into visual direction and technical architecture." },
  { n: "03", t: "Build", d: "Develop reusable components and robust backend integrations." },
  { n: "04", t: "Refine", d: "Tighten copy, spacing, transitions, and responsiveness." },
  { n: "05", t: "Launch", d: "Deploy with testing and handoff support." },
];

const listVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Resume = () => {
  return (
    <section id="resume" className="section-gap">
      <div className="shell">
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Career</p>
          <h2 className="section-title mt-3">Work experience and education</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            Professional roles and academic background that shaped my software engineering journey.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-foreground" />
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Work Experience</h3>
            </div>
            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-4"
              variants={listVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {workExperience.map((job) => (
                <motion.div key={`${job.role}-${job.company}`} variants={cardVariant}>
                  <Card className="flat-card border-none soft-hover h-full">
                    <CardContent className="p-6">
                      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{job.period}</p>
                      <h4 className="text-xl font-bold mt-2">{job.role}</h4>
                      <p className="section-subtitle mt-1">{job.company}</p>
                      {job.description ? <p className="section-subtitle mt-4">{job.description}</p> : null}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-foreground" />
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Education</h3>
            </div>
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              variants={listVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
            >
              {education.map((item) => (
                <motion.div key={item.degree} variants={cardVariant}>
                  <Card className="flat-card border-none soft-hover h-full">
                    <CardContent className="p-6">
                      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{item.period}</p>
                      <h4 className="text-xl font-bold mt-2">{item.degree}</h4>
                      <p className="section-subtitle mt-1">{item.institution}</p>
                      {item.description ? <p className="section-subtitle mt-4">{item.description}</p> : null}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Process</p>
              <h3 className="section-title mt-3">How projects move from idea to launch</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {steps.map((step) => (
                <Card key={step.n} className="flat-card border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-sm font-bold text-primary">{step.n}</span>
                      <div>
                        <h4 className="text-2xl font-bold">{step.t}</h4>
                        <p className="section-subtitle mt-2">{step.d}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
