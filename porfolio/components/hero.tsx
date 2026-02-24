"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-6">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div
              className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl transition-all duration-500 ease-out animate-pulse"
              style={{
                top: `${mousePosition.y / 20}px`,
                left: `${mousePosition.x / 20}px`,
              }}
            />
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-300" />
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="space-y-2 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Portafolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
              Florencia Piu
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-medium">Ingeniera en Sistemas</p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty animate-fade-in-up delay-200">
            Estudiante avanzada de Ingeniería en Sistemas en UNICEN. Experiencia en automatización de procesos con
            Python/Django y desarrollo full-stack con React, Node.js y TypeScript.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-400">
            <Button
              asChild
              size="lg"
              className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              <a href="https://github.com/PiuFlor" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group hover:scale-105 transition-all duration-300 hover:border-primary hover:text-primary bg-transparent"
            >
              <a href="https://www.linkedin.com/in/florenciapiu/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group hover:scale-105 transition-all duration-300 hover:border-accent hover:text-accent bg-transparent"
            >
              <a href="mailto:flor.piuu@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
