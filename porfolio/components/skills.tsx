"use client"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Globe, Code2, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Lenguajes de Programación",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    icon: Code2,
    color: "text-primary",
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    icon: Code2,
    color: "text-accent",
  },
  {
    title: "Backend & Bases de Datos",
    skills: ["Node.js", "Django", "PostgreSQL", "MySQL"],
    icon: Database,
    color: "text-secondary",
  },
  {
    title: "Herramientas",
    skills: ["Git", "Control de Versiones", "GitHub"],
    icon: Wrench,
    color: "text-primary",
  },
]

const softSkills = [
  "Comunicación efectiva",
  "Resolución de problemas",
  "Pensamiento crítico",
  "Autoaprendizaje",
  "Adaptación a nuevas tecnologías",
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Habilidades
        </h2>

        <Accordion type="single" collapsible defaultValue="languages" className="space-y-4">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <AccordionItem
                key={category.title}
                value={category.title.toLowerCase().replace(/\s+/g, "-")}
                className="border-2 border-primary/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 transition-colors font-semibold">
                  <span className="flex items-center gap-3 text-lg">
                    <Icon className={`h-5 w-5 ${category.color}`} />
                    {category.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-muted/50">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm px-3 py-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}

          <AccordionItem value="soft-skills" className="border-2 border-accent/20 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-accent/5 transition-colors font-semibold">
              <span className="text-lg">Habilidades Blandas</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-muted/50">
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm px-3 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="languages" className="border-2 border-secondary/20 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-secondary/5 transition-colors font-semibold">
              <span className="flex items-center gap-3 text-lg">
                <Globe className="h-5 w-5 text-secondary" />
                Idiomas
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-muted/50">
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium">Español</span>
                  <Badge className="bg-primary/10 text-primary">Nativo</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium">Inglés</span>
                  <Badge variant="secondary">Básico (A2/B1)</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium">Portugués</span>
                  <Badge variant="secondary">Básico</Badge>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
