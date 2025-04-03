import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#home" className="text-xl font-bold text-portfolio-primary block">
              <span className="uppercase"><Pedro/></span><br />
              <span className="uppercase text-foreground">Lucas</span>
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Desenvolvedor Full Stack especializado em criar experiências digitais
              excepcionais.
            </p>
          </div>
          <div className="flex gap-6">
            <div>
              <h3 className="font-medium mb-2">Links</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-portfolio-primary">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-portfolio-primary">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-portfolio-primary">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-portfolio-primary">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Social</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-portfolio-primary"
                  aria-label="Github"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-portfolio-primary"
                  aria-label="Linkedin"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-portfolio-primary"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Dev Portfolio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
