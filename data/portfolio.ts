export const portfolioData = {
  personal: {
    name: "Devin Adams",
    role: "Full Stack Developer",
    description: "I build accessible, pixel-perfect, performant, and modern web experiences.",
    email: "devin.adams@example.com",
    github: "https://github.com/dvn-ad",
    linkedin: "https://linkedin.com/in/dvn-ad",
    resume: "/resume.pdf", // Placeholder
    avatar: "https://github.com/dvn-ad.png", // Using GitHub avatar as placeholder
  },
  skills: [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "GraphQL", "Docker", "AWS", "Framer Motion"
  ],
  projects: [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing online stores with real-time analytics.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      github: "https://github.com/dvn-ad/ecommerce-dashboard",
      demo: "https://demo-ecommerce.com"
    },
    {
      title: "AI Content Generator",
      description: "SaaS application that uses OpenAI API to generate marketing copy.",
      tech: ["React", "Node.js", "OpenAI API", "Stripe"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
      github: "https://github.com/dvn-ad/ai-generator",
      demo: "https://ai-gen-demo.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features.",
      tech: ["Vue.js", "Firebase", "Pinia"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2372&auto=format&fit=crop",
      github: "https://github.com/dvn-ad/task-manager",
      demo: "https://task-app-demo.com"
    }
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: "Leading the frontend team in rebuilding the core product using Next.js and TypeScript. Improved performance by 40%."
    },
    {
      role: "Full Stack Developer",
      company: "StartUp Solutions",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client projects. Implemented CI/CD pipelines and automated testing."
    },
    {
      role: "Junior Web Developer",
      company: "Creative Agency",
      period: "2018 - 2019",
      description: "Collaborated with designers to implement responsive websites using HTML, CSS, and JavaScript."
    }
  ]
};
