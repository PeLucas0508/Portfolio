
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would handle the form submission (e.g., send an email)
    
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    // Show success message (in a real app, you'd use a toast or other notification)
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="section-title">
          <span>04.</span> Entre em Contato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground mb-8">
              Tem uma pergunta ou proposta, ou apenas quer dizer olá? Vá em frente. Estou sempre aberto a novas oportunidades e desafios.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-portfolio-primary/10 text-portfolio-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Localização</h3>
                  <p className="text-muted-foreground">Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-portfolio-primary/10 text-portfolio-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium">E-mail</h3>
                  <p className="text-muted-foreground">seu.email@exemplo.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-portfolio-primary/10 text-portfolio-primary">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Redes Sociais</h3>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-foreground hover:text-portfolio-primary">
                      LinkedIn
                    </a>
                    <a href="#" className="text-foreground hover:text-portfolio-primary">
                      GitHub
                    </a>
                    <a href="#" className="text-foreground hover:text-portfolio-primary">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:border-portfolio-primary focus:outline-none focus:ring-1 focus:ring-portfolio-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:border-portfolio-primary focus:outline-none focus:ring-1 focus:ring-portfolio-primary"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:border-portfolio-primary focus:outline-none focus:ring-1 focus:ring-portfolio-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:border-portfolio-primary focus:outline-none focus:ring-1 focus:ring-portfolio-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn flex items-center justify-center gap-2 w-full"
              >
                <Send size={18} /> Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
