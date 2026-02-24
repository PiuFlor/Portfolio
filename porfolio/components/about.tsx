"use client"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Briefcase, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Sobre mí
        </h2>

        <Accordion type="single" collapsible defaultValue="bio" className="space-y-4">
          <AccordionItem value="bio" className="border-2 border-primary/20 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 transition-colors font-semibold">
              <span className="text-lg">Mi Historia</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-muted/50">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Estudiante avanzada de Ingeniería de Sistemas con experiencia práctica en desarrollo backend
                  utilizando Python y Django, obtenida en mi pasantía en Geneos. Cuento con conocimientos en lenguajes
                  como Java y TypeScript, y bases de datos SQL.
                </p>

                <p>
                  Me apasiona la resolución de problemas con un enfoque analítico y metódico, y tengo una gran capacidad
                  de autoaprendizaje y adaptación a nuevas tecnologías. Mi comunicación efectiva y pensamiento crítico
                  me permiten trabajar eficientemente en equipos de desarrollo.
                </p>

                <p>
                  Busco una posición de nivel inicial o pasantía donde pueda aplicar mis habilidades técnicas y seguir
                  creciendo profesionalmente en el desarrollo de software.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="experience" className="border-2 border-secondary/20 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-secondary/5 transition-colors font-semibold">
              <span className="flex items-center gap-3 text-lg">
                <Briefcase className="h-5 w-5 text-secondary" />
                Experiencia Profesional
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-muted/50">
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold">Pasantía - Cooperativa Geneos</h4>
                    <span className="text-sm text-secondary font-semibold">2024 | Tandil</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Desarrollo de funcionalidades para sistemas de gestión y automatización de procesos utilizando
                      Python y Django
                    </li>
                    <li>
                      Participación en la toma de requerimientos, diseño y desarrollo de soluciones personalizadas
                    </li>
                    <li>Colaboración en equipo aplicando metodologías ágiles</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="education" className="border-2 border-accent/20 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-accent/5 transition-colors font-semibold">
              <span className="flex items-center gap-3 text-lg">
                <GraduationCap className="h-5 w-5 text-accent" />
                Educación
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-muted/50">
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-semibold">Ingeniería de Sistemas</h4>
                      <p className="text-sm text-muted-foreground">UNICEN - Tandil, Buenos Aires</p>
                    </div>
                    <span className="text-sm font-semibold text-primary">2019 - Presente</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-semibold">Guía Universitario en Turismo</h4>
                      <p className="text-sm text-muted-foreground">UNICEN - Tandil, Buenos Aires</p>
                    </div>
                    <span className="text-sm font-semibold text-accent">2016 - 2018</span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
