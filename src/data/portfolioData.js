export const portfolioData = {
  developer: {
    name: "Davin Adiputra Suryolaksana",
    role: "Backend Architecture & AI Engineer",
    avatar: "/assets/avatar.png",
    bio: "Passionate 3rd-year Informatics student at Sepuluh Nopember Institute of Technology (ITS) specializing in backend architecture and artificial intelligence engineering. Dedicated to mastering modern technologies, building scalable systems, and integrating intelligent models into production.",
    cvUrl: "/CV_ATS.pdf",
    location: "Mulyorejo, Surabaya, East Java, Indonesia",
    academics: {
      institution: "Sepuluh Nopember Institute of Technology (ITS) – Surabaya",
      degree: "Bachelor in Informatics Engineering",
      period: "2024 – 2028 (expected)",
      cgpa: "3.51 / 4.00"
    },
    social: {
      github: "https://github.com/dvn-ad",
      linkedin: "https://linkedin.com/in/dvn-ad",
      email: "davin.adisuryo@gmail.com",
      phone: "+6281315086622"
    }
  },

  skillsPayload: {
    languages: ["Python", "Go", "Java", "C++", "C", "JavaScript", "HTML", "CSS", "SQL"],
    frameworks_libraries: ["FastAPI", "Gin", "React", "Next.js", "Pydantic", "LayoutLMv3", "OpenCV", "XGBoost"],
    databases_infrastructure: ["PostgreSQL", "MySQL", "Redis", "Supabase", "MongoDB", "Docker", "Git"],
    cloud_platforms: ["Vercel", "Leapcell", "Railway", "AWS", "Google Sites"]
  },

  certifications: [
    {
      title: "TryHackMe Pre-Security Learning Path",
      description: "Foundational training covering core cybersecurity concepts, networking fundamentals, web system security, Linux/Windows operating systems, and basic defensive security."
    },
    {
      title: "Dicoding: Belajar Machine Learning untuk Pemula",
      description: "Completed machine learning training; building, evaluating, and optimizing classification, regression, and clustering models with hyperparameter tuning."
    },
    {
      title: "Dicoding: Belajar Dasar Cloud dan Gen AI di AWS",
      description: "Foundational cloud computing course covering AWS global infrastructure, core services, pricing models, and Generative AI basics."
    }
  ],

  projects: [
    {
      id: "project-1",
      type: "web",
      title: "AI-Powered Customs Automation (OCR for CEISA 4.0)",
      smalltitle:"LINTAS",
      achievement: "NATIONAL_SEMIFINALIST",
      techStack: "Python // FastAPI // Next.js // OpenCV // LayoutLMv3 // Table Transformer // Ollama // XGBoost",
      description: "National Semifinalist in the <a href=\"https://ai-open.president.ac.id/\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration: underline; color: inherit;\">AI Open Innovation Challenge 2026</a> (Ministry for Economic Affairs & President Univ). Engineered an end-to-end document processing pipeline automating Indonesian customs declarations (PIB/PEB) for Cikarang Dryport. Integrated LayoutLMv3 for spatial semantic classification, Table Transformer for multi-column tables, Ollama + Pydantic schema-enforced LLM layer for CEISA 4.0 JSON payloads, and an XGBoost risk-scoring model with SHAP explanations.",
      screenshots: [
        {
          url: "/assets/lintas-dashboard.png",
          caption: "Customs Document Processing & Field Classification Dashboard"
        },
      ],
      links: {
        github: "https://github.com/dvn-ad/LINTAS-HC",
        video: "https://www.youtube.com/embed/ycyW_DlvIsk"
      }
    },
    {
      id: "project-2",
      type: "web",
      title: "Bill Splitter - Deterministic AI Receipt Parser",
      smalltitle:"Bill Splitter",
      techStack: "Python // FastAPI // React // PostgreSQL // Redis // Gemini Vision API",
      description: "Integrated Gemini Vision API via google-genai SDK to parse multi-currency receipt images into structured JSON. Engineered a Deterministic Calculation Engine using Pydantic v2 to intercept AI responses, eliminating LLM mathematical hallucinations by routing financial logic through an exact backend service.",
      screenshots: [
        {
          url: "/assets/bill-splitter-chat.gif",
          caption: "Receipt Parsing & Bill Splitting Interface"
        }
      ],
      links: {
        github: "https://github.com/dvn-ad/bill-splitter"
      }
    },
    {
      id: "project-3",
      type: "web",
      title: "Community Service Project - Web Development for TK Tunas Pertiwi",
      techStack: "Google Sites // Web Development // UX & Content Design",
      description: "Designed and developed the school's web portal using Google Sites as part of a university community service project. Created and organized content highlighting school activities, facilities, programs, and contact information while collaborating directly with school representatives.",
      links: {
        demo: "https://sites.google.com"
      }
    }
  ]
};
