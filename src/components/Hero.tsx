
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark/5 via-transparent to-portfolio-secondary/5 -z-10"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTE4LjUtLjVoMXYxaC0xdi0xem0xOS0xOWgtMXYtMWgxdjF6bTAgMTQuNWgtMXYxaC0xdi0xaDF2LTFoMXYxem0tMTQtMTQuNWgxdjFoLTF2LTF6TTYwIDM2djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptMTggMGgtMnYyaC0ydi0yaDJ2LTJoMnYyek0zNiAxNHYyaC0ydi0yaDJ6bTAgMThoMnYyaC0ydi0yem0tMTggMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 -z-10"></div>

      <div className="container pb-20">
        <div className="max-w-3xl">
          <p className="animate-fade-in text-portfolio-primary font-medium mb-4">Olá, meu nome é</p>
          <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Desenvolvedor</span>
            <span className="text-portfolio-primary"> Full Stack</span>
          </h1>
          <h2 className="animate-fade-in-delay-2 text-2xl sm:text-3xl md:text-4xl font-medium text-foreground/70 mb-6">
            Eu construo soluções digitais completas e criativas.
          </h2>
          <p className="animate-fade-in-delay-3 text-muted-foreground max-w-xl mb-8">
            Sou um desenvolvedor especializado em criar experiências digitais excepcionais.
            Atualmente, foco em construir produtos acessíveis e centrados no usuário,
            utilizando as tecnologias mais modernas do mercado.
          </p>
          <div className="animate-fade-in-delay-3 flex flex-wrap gap-4">
            <a href="#projects" className="btn">
              Ver Projetos
            </a>
            <a href="#contact" className="btn btn-outline">
              Entre em Contato
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-foreground/70 mb-2">Saiba mais</span>
        <a href="#about" className="animate-bounce p-2 rounded-full border border-foreground/20 text-foreground/70 hover:text-portfolio-primary hover:border-portfolio-primary transition-colors">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
