import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contacto</h2>

        <Card className="p-8">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estoy abierta a nuevas oportunidades y colaboraciones. Si querés hablar sobre proyectos, tecnología o
              simplemente conectar, no dudes en contactarme.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Tandil, Buenos Aires, Argentina</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:flor.piuu@gmail.com" className="hover:text-foreground transition-colors">
                  flor.piuu@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+542281530585" className="hover:text-foreground transition-colors">
                  +54 2281 530585
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a href="https://github.com/PiuFlor" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/florenciapiu/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:flor.piuu@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Email
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Florencia Piu. Todos los derechos reservados.</p>
        </footer>
      </div>
    </section>
  )
}
