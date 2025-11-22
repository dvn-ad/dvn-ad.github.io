"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience</h2>
            <p className="text-muted-foreground text-lg">
              My professional journey
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative border-l border-border ml-4 md:ml-auto space-y-8 pl-8 md:pl-0">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                
                <Card className="relative md:ml-8">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl">{job.role}</CardTitle>
                      <span className="text-sm text-muted-foreground font-medium px-2 py-1 bg-secondary rounded-md w-fit">
                        {job.period}
                      </span>
                    </div>
                    <CardDescription className="text-base font-medium text-primary">
                      {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
