
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <a href="#home" className="text-xl font-bold text-portfolio-primary block">
            <span className="uppercase">Pedro</span><br />
            <span className="uppercase text-foreground">Lucas</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#skills" className="nav-link">Habilidades</a>
          <a href="#projects" className="nav-link">Projetos</a>
          <a href="#contact" className="nav-link">Contato</a>
          <a href="#contact" className="btn ml-4">Fale Comigo</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 transform bg-background/95 backdrop-blur-sm transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container flex h-full flex-col justify-center gap-8 text-center">
          <a 
            href="#about" 
            className="text-xl font-medium hover:text-portfolio-primary" 
            onClick={toggleMenu}
          >
            Sobre
          </a>
          <a 
            href="#skills" 
            className="text-xl font-medium hover:text-portfolio-primary" 
            onClick={toggleMenu}
          >
            Habilidades
          </a>
          <a 
            href="#projects" 
            className="text-xl font-medium hover:text-portfolio-primary" 
            onClick={toggleMenu}
          >
            Projetos
          </a>
          <a 
            href="#contact" 
            className="text-xl font-medium hover:text-portfolio-primary" 
            onClick={toggleMenu}
          >
            Contato
          </a>
          <a 
            href="#contact" 
            className="mx-auto mt-4 inline-block rounded-md bg-portfolio-primary px-6 py-3 font-medium text-white hover:bg-portfolio-primary/80" 
            onClick={toggleMenu}
          >
            Fale Comigo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
