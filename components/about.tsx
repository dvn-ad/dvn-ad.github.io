"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge" // We need to create this or use standard div

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="text-muted-foreground text-lg">
              A glimpse into my technical world
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Who I am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate developer with a keen eye for detail and a drive for creating exceptional user experiences. 
                With a strong foundation in modern web technologies, I specialize in building scalable, responsive, and accessible applications.
                I love solving complex problems and turning ideas into reality through code.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 bg-background border rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
