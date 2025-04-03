
import { Code, Globe, Server } from "lucide-react";

const About = () => {
  const skills = [
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Django", category: "backend" },
    { name: "FastAPI", category: "backend" },
    { name: "SQL", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "AWS", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "Git", category: "devops" },
    { name: "CI/CD", category: "devops" },
  ];

  const frontendSkills = skills.filter((skill) => skill.category === "frontend");
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const devopsSkills = skills.filter((skill) => skill.category === "devops");

  return (
    <>
      <section id="about" className="py-20">
        <div className="container">
          <h2 className="section-title">
            <span>01.</span> Sobre Mim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground mb-4">
                Olá! Sou um desenvolvedor full stack apaixonado por criar soluções digitais 
                completas que resolvem problemas reais. Minha jornada no desenvolvimento 
                começou há alguns anos, e desde então tenho me dedicado a aprimorar minhas 
                habilidades tanto no front-end quanto no back-end.
              </p>
              <p className="text-muted-foreground mb-4">
                Acredito que um bom desenvolvedor não apenas escreve código, mas entende 
                as necessidades do negócio e dos usuários. Busco sempre criar interfaces 
                intuitivas e sistemas robustos que funcionem em perfeita harmonia.
              </p>
              <p className="text-muted-foreground">
                Quando não estou codando, gosto de [seus hobbies ou interesses]. Acredito 
                que essas atividades me ajudam a manter uma mente criativa e aberta para 
                novas soluções.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-portfolio-primary/10 text-portfolio-primary">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <p className="text-muted-foreground mb-4">
                  Crio interfaces responsivas, acessíveis e intuitivas com foco na experiência do usuário.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-portfolio-secondary/10 text-portfolio-secondary">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <p className="text-muted-foreground mb-4">
                  Desenvolvo APIs robustas e eficientes, com foco em segurança e escalabilidade.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm sm:col-span-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-portfolio-dark/10 text-portfolio-dark">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Desenvolvimento Full Stack</h3>
                <p className="text-muted-foreground mb-4">
                  Integro todas as partes do desenvolvimento para criar soluções completas e coesas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="section-title">
            <span>02.</span> Minhas Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe size={20} className="text-portfolio-primary" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-sm bg-portfolio-primary/10 text-portfolio-primary"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Server size={20} className="text-portfolio-secondary" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-sm bg-portfolio-secondary/10 text-portfolio-secondary"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code size={20} className="text-portfolio-dark" />
                DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {devopsSkills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-sm bg-portfolio-dark/10 text-portfolio-dark"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
