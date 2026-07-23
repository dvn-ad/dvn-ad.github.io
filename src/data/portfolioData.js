export const portfolioData = {
  developer: {
    name: "Davin Adiputra Suryolaksana",
    role: "Back-End Developer & AI Engineer",
    avatar: "/assets/avatar.jpg",
    bio: "Architecting high-throughput distributed microservices, low-latency API gateways, and autonomous multi-agent AI execution pipelines. Passionate about system resilience, fault tolerance, and deterministic machine learning infrastructure.",
    cvUrl: "/CV_ATS.pdf",
    social: {
      github: "https://github.com/dvn-ad",
      linkedin: "https://linkedin.com/in/dvn-ad",
      twitter: "https://twitter.com",
      email: "davin.adisuryo@gmail.com"
    }
  },

  skillsPayload: {
    core_languages: ["Python", "Go", "TypeScript", "C++", "C"],
    ai_agent_frameworks: ["LangChain", "LlamaIndex", "Google AGY SDK", "PyTorch", "vLLM", "FAISS"],
    databases_infrastructure: ["PostgreSQL", "Redis", "Kafka", "Qdrant", "ClickHouse", "gRPC"],
    cloud_devops: ["Kubernetes", "Docker", "Terraform", "AWS / GCP", "Prometheus", "CI/CD Pipelines"]
  },

  projects: [
    {
      id: "project-1",
      type: "web",
      title: "Nexus Core - Autonomous AI Agent Engine & Telemetry Mesh",
      techStack: "Python // Go // FastAPI // Redis // PyTorch // Docker",
      description: "An event-driven distributed system orchestrating multi-agent LLM workflows across heterogeneous clusters. Features real-time state synchronization, fault-tolerant execution graphs, dynamic rate-limiting, and an interactive telemetry analytics suite.",
      screenshots: [
        {
          url: "/assets/project1-slide1.jpg",
          caption: "Distributed AI Topology & Live Node Graph"
        },
        {
          url: "/assets/project1-slide2.jpg",
          caption: "API Health Gateway & Microservice Metrics Terminal"
        }
      ],
      links: {
        demo: "https://nexus-demo.example.com",
        github: "https://github.com/example/nexus-core"
      }
    },
    {
      id: "project-2",
      type: "mobile",
      title: "Vanguard Edge - Mobile Real-Time Industrial Diagnostics",
      techStack: "React Native // Rust Edge Runtime // WebSockets // gRPC // SQLite",
      description: "Offline-first edge telemetry and diagnostic monitor engineered for industrial environments. Leverages a local Rust native module for low-latency FFT sensor processing and streaming bi-directional gRPC metrics.",
      mockupImage: "/assets/project2-mockup.jpg",
      links: {
        github: "https://github.com/example/vanguard-mobile",
        store: "https://store.example.com/vanguard"
      }
    },
    {
      id: "project-3",
      type: "api",
      title: "HyperGraph DB - Distributed Knowledge Graph API",
      techStack: "Go // Rust // GraphQL // Qdrant Vector DB // RocksDB",
      description: "High-concurrency GraphQL engine designed for hybrid relational-vector graph queries. Optimized for sub-10ms sub-graph traversal, automated embeddings sync, and zero-downtime schema migrations.",
      screenshots: [
        {
          url: "/assets/project1-slide2.jpg",
          caption: "HyperGraph Execution Trace & Node Query Profiler"
        }
      ],
      links: {
        github: "https://github.com/example/hypergraph-api",
        docs: "https://docs.example.com/hypergraph"
      }
    }
  ]
};
