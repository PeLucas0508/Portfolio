
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Aplicação Full Stack",
      description: "Um sistema completo com autenticação, dashboard e painel administrativo desenvolvido com React, Node.js e PostgreSQL.",
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "E-commerce",
      description: "Plataforma de e-commerce com catálogo de produtos, carrinho de compras e sistema de pagamento integrado.",
      tags: ["Next.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "App de Gestão",
      description: "Aplicação web para gestão de tarefas e projetos com recursos avançados de análise e relatórios.",
      tags: ["React", "FastAPI", "Python", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      githubLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">
          <span>03.</span> Projetos Recentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-portfolio-primary/10 text-portfolio-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-foreground hover:text-portfolio-primary"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-foreground hover:text-portfolio-primary"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="btn">Ver Mais Projetos</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
