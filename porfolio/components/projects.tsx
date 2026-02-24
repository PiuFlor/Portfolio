"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play, ChevronLeft, ChevronRight, Images } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const projects = [
  {
    title: "Pomodoro-ToDo",
    description: "Aplicación de gestión de tareas con técnica Pomodoro integrada para mejorar la productividad.",
    technologies: ["TypeScript", "React"],
    github: "https://github.com/PiuFlor/Pomodoro-ToDo",
    stars: 1,
    image: "../imag/pomodoro-timer-app-with-task-list-interface.png",
    demo: "https://drive.google.com/file/d/13ePRmp4xJXESJDZTYJjfH0FOmE6t33Zo/view",
  },
  {
    title: "AHP-Calculador",
    description:
      "Calculadora para el método de Proceso Analítico Jerárquico (AHP). Trabajo final de Investigación Operativa.",
    technologies: ["TypeScript", "React"],
    github: "https://github.com/PiuFlor/AHP-Calculador",
    stars: 1,
    image: "../imag/analytical-hierarchy-process-calculator-interface-.png",
    demo: "https://ahp-calculador.vercel.app/",
  },
  {
    title: "PPS-ClubUnion",
    description:
      "Sistema de gestión de datos para un club deportivo, desarrollado como proyecto de práctica profesional.",
    technologies: ["Python", "Django"],
    github: "https://github.com/PiuFlor/PPS-ClubUnion",
    images: [
      "../imag/cunion/inicio.png",
      "../imag/cunion/Club.png",
      "../imag/cunion/Disciplina.png",
      "../imag/cunion/mostrar1.png",
      "../imag/cunion/mostrar2.png",
      "../imag/cunion/Socios.png",
    ],
  },
  {
    title: "Compilador",
    description: "Implementación de un compilador completo como proyecto final de la materia Compiladores.",
    technologies: ["Java"],
    github: "https://github.com/PiuFlor/Compilador-Final",
    image: "../imag/compiler-code-editor-with-syntax-highlighting.jpg",
  },
  {
    title: "Cardumen-Front",
    description: "....",
    technologies: ["TypeScript", "React"],
    github: "https://github.com/PiuFlor/Cardumen-Front",
    image: "../imag/sin-titulo.png",
    demo: "https://drive.google.com/file/d/14jiNs3Pe2oxM4iT7yPZX-iE6PR2uGQkd/view?usp=sharing",
  },
  {
    title: "Diseño de Software",
    description: "Proyecto académico enfocado en patrones de diseño y arquitectura de software.",
    technologies: ["Java"],
    github: "https://github.com/PiuFlor/Disenio-de-Software",
    image: "../imag/software-design-patterns-diagram-and-code-structur.jpg",
  },
]

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

  const handleImageNavigation = (projectIndex: number, direction: "prev" | "next", totalImages: number) => {
    setCurrentImageIndex((prev) => {
      const current = prev[projectIndex] || 0
      const next = direction === "next" ? (current + 1) % totalImages : (current - 1 + totalImages) % totalImages
      return { ...prev, [projectIndex]: next }
    })
  }

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Proyectos
          </h2>
          <p className="text-muted-foreground text-lg">
            Una selección de mis proyectos más destacados con capturas de las interfaces desarrolladas
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const hasMultipleImages = "images" in project && project.images && project.images.length > 1
            const currentIndex = currentImageIndex[index] || 0
            const displayImage = hasMultipleImages ? project.images![currentIndex] : project.image

            return (
              <Card
                key={project.title}
                className="overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={displayImage || "/placeholder.svg"}
                    alt={`Captura de ${project.title}`}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredProject === index && !hasMultipleImages ? "scale-110 blur-sm" : "scale-100"
                    }`}
                  />

                  {hasMultipleImages && (
                    <>
                      {/* Navegación en la tarjeta */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full z-20 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleImageNavigation(index, "prev", project.images!.length)
                        }}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full z-20 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleImageNavigation(index, "next", project.images!.length)
                        }}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {project.images!.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              imgIndex === currentIndex ? "bg-white w-6" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {!hasMultipleImages && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 flex items-center justify-center ${
                        hoveredProject === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-3 items-center">
                        {project.demo && (
                          <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-lg"
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Play className="mr-2 h-5 w-5" />
                              Ver Demo 
                            </a>
                          </Button>
                        )}
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 hover:scale-110 transition-all duration-300"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            Ver Código
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                    {project.stars && (
                      <Badge variant="secondary" className="text-xs animate-pulse">
                        ⭐ {project.stars}
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`text-xs font-medium transition-all duration-300 hover:scale-110 ${
                          techIndex % 3 === 0
                            ? "border-primary/50 text-primary hover:bg-primary/10"
                            : techIndex % 3 === 1
                              ? "border-accent/50 text-accent hover:bg-accent/10"
                              : "border-secondary/50 text-secondary hover:bg-secondary/10"
                        }`}
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all duration-300"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    
                    {/* Botón "Ver Imágenes" que abre en nueva pestaña */}
                    {hasMultipleImages && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent hover:bg-accent/5 hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
                      >
                        <a 
                          href={project.images![currentIndex]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Images className="mr-2 h-4 w-4" />
                          Ver Imagen
                        </a>
                      </Button>
                    )}

                    {/* Botón Demo para proyectos sin múltiples imágenes */}
                    {!hasMultipleImages && project.demo && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}