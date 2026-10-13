export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full-Stack & Systems" | "AI / GenAI" | "Web & Database" | "Mobile Systems";
  period: string;
  thumbnailUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
  engineeringHighlights: string[];
  concepts?: string[];
  stackBreakdown?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    highlights?: string[];
  };
  caseStudy?: {
    problem: string;
    productSolution: string;
    coreConcepts: { name: string; description: string }[];
    architectureDiagram: { category: string; title: string; description: string }[];
    technicalChallenges: { challenge: string; solution: string }[];
  };
}

export const projectsData: Project[] = [
  {
    id: "tribely",
    title: "Tribely",
    subtitle: "Social Accountability & Habit Platform",
    description:
      "A social accountability platform where groups create Tribes, configure habit deadlines, submit daily proof, track progress and interact in real time.",
    category: "Full-Stack & Systems",
    period: "2024 – Present",
    thumbnailUrl: "/portfolio-content/images/projects/Projects/Tribely.png",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Redis", "WebSockets"],
    liveUrl: "https://tribely.mayurkpatil.in/",
    githubUrl: "https://github.com/xenonrocks71/Test_Tribely",
    metrics: [
      { label: "Community Adoption", value: "50+ Real Users" },
      { label: "Real-Time Layer", value: "WebSockets" },
      { label: "Event Fanout", value: "Redis Pub/Sub" }
    ],
    engineeringHighlights: [
      "Designed a full-stack product around social accountability and habit tracking.",
      "Built backend APIs and application logic with FastAPI and asynchronous workers.",
      "Designed relational data models, user streaks, and authorization flows in PostgreSQL.",
      "Implemented real-time communication using WebSockets and Redis Pub/Sub.",
      "Worked with time-sensitive habit states, proof submission and transactional workflows."
    ],
    caseStudy: {
      problem:
        "Solo habit tracking and personal goal apps suffer from high drop-off rates because individuals lack social friction, deadlines, and external peer verification.",
      productSolution:
        "Tribely organizes users into high-accountability groups called 'Tribes' (Arenas). Members commit to daily proof deadlines (images, links, or text), verify progress together, and award kudos in real-time.",
      coreConcepts: [
        {
          name: "Tribes (Arenas)",
          description: "Goal-oriented micro-communities with defined daily deadlines and collective accountability standards."
        },
        {
          name: "Daily Proof Verification",
          description: "Members submit authenticated visual or URL proofs before strict cutoff times to maintain active streaks."
        },
        {
          name: "Real-Time Kudos & Chat",
          description: "Live WebSocket-driven peer interactions, celebration feeds, and instant status synchronizations."
        }
      ],
      architectureDiagram: [
        {
          category: "Client Application",
          title: "Next.js & React",
          description: "TypeScript frontend client with responsive habit rooms, proof upload modals, and live WebSocket subscriptions."
        },
        {
          category: "Backend Engine",
          title: "FastAPI Core (Python)",
          description: "Asynchronous REST endpoints, Pydantic data validation schemas, and stateful WebSocket connection managers."
        },
        {
          category: "Real-Time Broker",
          title: "Redis Pub/Sub",
          description: "In-memory message broker fan-outing daily proofs, notifications, and room chat events across subscribers."
        },
        {
          category: "Relational Persistence",
          title: "PostgreSQL & SQLAlchemy",
          description: "ACID-compliant relational storage preserving user profiles, active streaks, proof submissions, and arena memberships."
        }
      ],
      technicalChallenges: [
        {
          challenge: "Handling intermittent mobile WebSocket connection drops",
          solution: "Implemented client-side exponential backoff with sequence-acknowledged replay buffer upon reconnection."
        },
        {
          challenge: "Ensuring atomic streak updates without race conditions",
          solution: "Used database-level transactions with row-level locks when evaluating midnight deadline verifications."
        }
      ]
    }
  },
  {
    id: "neuronexus",
    title: "NeuroNexus",
    subtitle: "Document Q&A / RAG Application",
    description:
      "A Retrieval-Augmented Generation application that processes documents, retrieves relevant information and generates document-grounded responses.",
    category: "AI / GenAI",
    period: "2025 – 2026",
    thumbnailUrl: "/portfolio-content/images/projects/Projects/RAG.png",
    technologies: ["Python", "RAG", "LangChain", "Google Gemini", "Ollama", "ChromaDB"],
    githubUrl: "https://github.com/xenonrocks71/NeuroNexus-RAG-Model",
    metrics: [
      { label: "Core Concept", value: "RAG Pipeline" },
      { label: "Retrieval", value: "Dense Embeddings" },
      { label: "Vector DB", value: "ChromaDB" }
    ],
    concepts: [
      "Document processing",
      "Chunking",
      "Embeddings",
      "Semantic retrieval",
      "Vector storage",
      "LLM response generation"
    ],
    engineeringHighlights: [
      "Engineered automated document ingestion with structural and semantic chunking heuristics.",
      "Generated dense vector embeddings stored within ChromaDB for rapid similarity search.",
      "Orchestrated prompt templates through LangChain with Google Gemini and local Ollama models.",
      "Constructed evaluation tests ensuring generated answers stay strictly grounded within document contexts."
    ]
  },
  {
    id: "dbatu-result-portal",
    title: "DBATU Result Portal",
    subtitle: "Student Result Management System",
    description:
      "A web-based academic result management system for organizing student, subject, marks and result information.",
    category: "Web & Database",
    period: "2023",
    thumbnailUrl: "/portfolio-content/images/projects/Projects/srms.png",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/xenonrocks71/DBATU-Result-Portal",
    metrics: [
      { label: "Architecture", value: "MVC Pattern" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Focus", value: "Academic Records" }
    ],
    engineeringHighlights: [
      "Student and academic record management with granular administration privileges.",
      "CRUD workflows for student enrollment, examination subjects, and score tracking.",
      "Normalized relational MySQL database schemas with foreign key integrity and constraints.",
      "Automated result computation, grading criteria, and marksheet generation.",
      "Optimized query performance through database constraints and indexed primary/secondary keys."
    ]
  },
  {
    id: "atten-attendance",
    title: "Atten - Smart Attendance Suite",
    subtitle: "Final Year Diploma Group Project • 1st Prize Winner",
    description:
      "Final-year Diploma group capstone project developed at Government Polytechnic Jalgaon. Native Android attendance suite published on Google Play Store featuring teacher-student attendance coordination, proxy prevention, and sub-75% detaining alert calculations with Firebase.",
    category: "Mobile Systems",
    period: "2023",
    thumbnailUrl: "/portfolio-content/images/projects/Projects/Atten.png",
    technologies: ["Java", "Android SDK", "Firebase Realtime DB", "XML"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.suyogbauskar.atten",
    metrics: [
      { label: "Academic Origin", value: "Diploma Capstone" },
      { label: "Recognition", value: "1st Prize State-Level" },
      { label: "Distribution", value: "Google Play Store" }
    ],
    engineeringHighlights: [
      "Awarded 1st Prize across top collegiate teams at State-Level Project Exhibition.",
      "Built native Android client in Java with Firebase real-time database synchronizations.",
      "Engineered automated threshold detection calculating sub-75% mandatory attendance warnings."
    ]
  }
];
