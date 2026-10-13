export interface IdentityCard {
  title: string;
  proof: string;
  tag: string;
  iconName: string;
}

export interface PersonalData {
  name: string;
  fullName: string;
  role: string;
  rotatingRoles: string[];
  eyebrow: string;
  tagline: string;
  subKeywords: string[];
  location: string;
  status: string;
  statChips: { value: string; label: string; highlight?: boolean }[];
  identityCards: IdentityCard[];
  avatarUrl: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  leetcodeUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  email: string;
}

export interface ArchitectureNode {
  id: string;
  category: string;
  title: string;
  role: string;
  tech: string;
  x: number;
  y: number;
}

export interface ProjectChallenge {
  title: string;
  challenge: string;
  solution: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Flagship Realtime" | "AI / GenAI" | "Academic Systems" | "Mobile Android";
  period: string;
  organization: string;
  organizationType: string;
  orgIcon: string;
  institution?: string;
  metric?: { value: string; label: string };
  badge?: string;
  oneLineOutcome: string;
  description: string;
  thumbnailUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: {
    problem: string;
    solution: string;
    architectureDescription?: string;
    highlights: string[];
  };
  architectureNodes?: ArchitectureNode[];
  challenges?: ProjectChallenge[];
}

export interface JourneyMilestone {
  year: string;
  period: string;
  level: string;
  title: string;
  institution: string;
  institutionType?: string;
  location: string;
  score: string;
  scoreType: string;
  badge?: string;
  achievements?: { title: string; year: string }[];
  skillsGained: string[];
  description: string;
}

export interface ExperienceProject {
  title: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyType?: string;
  orgIcon?: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  certificateUrl?: string;
  summary: string;
  modules: ExperienceProject[];
  technologies: string[];
  learnings: string[];
}

export interface SkillItem {
  name: string;
  iconName: string;
  brandColor?: string;
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export interface AchievementItem {
  id: string;
  place: string;
  title: string;
  issuer: string;
  year: string;
  details: string;
  tags?: string[];
  certificateUrl?: string;
}

export interface FocusCard {
  title: string;
  summary: string;
  tags: string[];
}

// ==========================================
// MASTER DATA SOURCE OF TRUTH
// ==========================================

export const personalData: PersonalData = {
  name: "Mayur Patil",
  fullName: "Mayur Kiran Patil",
  role: "Software Engineer & Problem Solver",
  rotatingRoles: [
    "Backend Systems",
    "Full-Stack Products",
    "AI-Powered Apps",
    "DSA & Problem Solving"
  ],
  eyebrow: "FINAL-YEAR B.TECH · COMPUTER ENGINEERING",
  tagline:
    "I enjoy solving technical problems and turning ideas into working software, from backend systems and web applications to AI-powered applications.",
  subKeywords: ["SDE Candidate", "DSA in C++", "FastAPI & Next.js", "RAG & GenAI"],
  location: "Maharashtra, India",
  status: "Available for Software Engineering Roles",
  statChips: [
    { value: "50+ Real Users", label: "Production Habit Platform", highlight: true },
    { value: "1st Prize", label: "State-Level Exhibition Winner", highlight: true },
    { value: "DSA in C++", label: "Problem Solving Fundamentals", highlight: false }
  ],
  identityCards: [
    {
      title: "Software Engineering",
      proof: "Designing clean API contracts, relational schemas & modular services.",
      tag: "Architecture",
      iconName: "software-engineering"
    },
    {
      title: "Problem Solving & DSA",
      proof: "Algorithmic rigor in C++, graph traversals & dynamic programming.",
      tag: "Algorithms",
      iconName: "dsa"
    },
    {
      title: "AI / GenAI Applications",
      proof: "RAG pipelines, dense vector search in ChromaDB & LangChain workflows.",
      tag: "GenAI",
      iconName: "ai"
    },
    {
      title: "Systems & Web Dev",
      proof: "Real-time WebSockets, Redis Pub/Sub fanout & Next.js client state.",
      tag: "Full-Stack",
      iconName: "web"
    }
  ],
  avatarUrl: "/portfolio-content/images/profile/profile.png",
  resumeUrl: "https://drive.google.com/file/d/18NY-bYco5AcR1ssWZmMsgMv2T7toTf-D/view?usp=drive_link",
  githubUrl: "https://github.com/xenonrocks71",
  linkedinUrl: "https://www.linkedin.com/in/mayur-patil-414070200/",
  leetcodeUrl: "https://leetcode.com/u/xenonrocks_71/",
  twitterUrl: "https://x.com/MayurPa23149443",
  instagramUrl: "https://www.instagram.com/xenonrocks_71/",
  email: "mayurkp71@gmail.com"
};

export const projectsData: ProjectItem[] = [
  {
    id: "tribely",
    title: "Tribely",
    subtitle: "Social Accountability & Habit Platform",
    category: "Flagship Realtime",
    period: "2024 – Present",
    organization: "Tribely Cloud Platform",
    organizationType: "Production Cloud Platform · Live Service",
    orgIcon: "☁️",
    metric: { value: "50+", label: "Verified Active Users" },
    badge: "LIVE PRODUCTION",
    oneLineOutcome: "Eliminating goal abandonment via synchronized group proof deadlines and real-time WebSockets.",
    description:
      "A real-time social accountability platform where groups create Tribes, configure habit deadlines, submit daily proof, track streaks, and award kudos in real-time.",
    thumbnailUrl: "/portfolio-content/images/projects/Projects/Tribely.png",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Redis", "WebSockets"],
    liveUrl: "https://tribely.mayurkpatil.in/",
    githubUrl: "https://github.com/xenonrocks71/Test_Tribely",
    details: {
      problem:
        "Solo habit tracking and personal goal apps suffer from high drop-off rates because individuals lack social friction, peer verification, and strict deadlines.",
      solution:
        "Tribely organizes users into high-accountability micro-communities ('Tribes'). Members commit to daily visual or URL proofs before cutoff times to keep active streaks.",
      architectureDescription:
        "Next.js client connects through persistent WebSocket connection pools to asynchronous FastAPI workers. Real-time events fan out through Redis Pub/Sub, while state is persisted with ACID guarantees in PostgreSQL.",
      highlights: [
        "In-memory Redis Pub/Sub event broker routing instant kudos, live chat, and proof notifications.",
        "Heartbeat ping/pong WebSocket protocol with client-side exponential backoff and replay buffer.",
        "Atomic database transactions using row-level locking for midnight streak evaluations.",
        "Multi-container architecture orchestrated via Docker Compose."
      ]
    },
    architectureNodes: [
      { id: "client", category: "Client Tier", title: "Next.js 16 Client", role: "UI state & persistent WS subscriber", tech: "React 19 / TypeScript", x: 10, y: 50 },
      { id: "api", category: "API Gateway", title: "FastAPI Core", role: "Async REST & WebSocket connection pool", tech: "Python / Asyncio", x: 38, y: 50 },
      { id: "redis", category: "Pub/Sub Broker", title: "Redis Event Bus", role: "In-memory message fanout for live rooms", tech: "Redis In-Memory", x: 68, y: 25 },
      { id: "db", category: "Persistence", title: "PostgreSQL DB", role: "Relational streaks, proofs & memberships", tech: "SQLAlchemy / ACID", x: 68, y: 75 }
    ],
    challenges: [
      {
        title: "Intermittent Mobile WS Drops",
        challenge: "Mobile devices frequently drop WebSocket connections during cellular switching or background lock.",
        solution: "Engineered client-side exponential backoff with sequence-acknowledged replay buffer upon reconnection."
      },
      {
        title: "Midnight Streak Race Conditions",
        challenge: "Concurrent proof submissions at 23:59 created potential double-increment race conditions.",
        solution: "Enforced database-level transactions with row-level locks on user streak records during cutoff evaluations."
      }
    ]
  },
  {
    id: "neuronexus",
    title: "NeuroNexus",
    subtitle: "Document Q&A / RAG Application",
    category: "AI / GenAI",
    period: "2025 – 2026",
    organization: "NeuroNexus AI Systems",
    organizationType: "AI Research & Vector Architecture Lab",
    orgIcon: "⚡",
    metric: { value: "RAG", label: "Semantic Pipeline" },
    badge: "AI APPLICATION",
    oneLineOutcome: "Extracting verified, grounded answers from technical documentation via dense vector retrieval.",
    description:
      "A Retrieval-Augmented Generation application that processes documents, retrieves relevant context chunks via dense embeddings, and generates document-grounded responses.",
    thumbnailUrl: "/portfolio-content/images/projects/Projects/RAG.png",
    technologies: ["Python", "FastAPI", "RAG", "LangChain", "Google Gemini", "Ollama", "ChromaDB"],
    githubUrl: "https://github.com/xenonrocks71/NeuroNexus-RAG-Model",
    details: {
      problem:
        "Large language models suffer from hallucinations when answering domain-specific technical questions without grounded internal documentation.",
      solution:
        "Built a RAG pipeline utilizing structural chunking, dense vector similarity search, and prompt template orchestration to bind LLM answers strictly to retrieved passages.",
      highlights: [
        "Semantic chunking heuristics preserving table structures and code blocks.",
        "High-density vector embeddings stored and indexed in ChromaDB.",
        "Prompt orchestration through LangChain supporting cloud Gemini and local Ollama.",
        "Strict JSON schema outputs eliminating unstructured parsing failures."
      ]
    }
  },
  {
    id: "dbatu-results",
    title: "DBATU Result Portal",
    subtitle: "Student Result Management System",
    category: "Academic Systems",
    period: "2023",
    institution: "Dr. Babasaheb Ambedkar Technological University (DBATU)",
    organization: "Dr. Babasaheb Ambedkar Technological University (DBATU)",
    organizationType: "State Technological University · Academic Portal",
    orgIcon: "🏛️",
    metric: { value: "MVC", label: "Relational Architecture" },
    badge: "CAMPUS PORTAL",
    oneLineOutcome: "Automating student marksheet calculation, grade point evaluation, and academic record indexing.",
    description:
      "A web-based academic result management system for organizing student, subject, marks, and result information with relational database constraints.",
    thumbnailUrl: "/portfolio-content/images/projects/Projects/srms.png",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/xenonrocks71/DBATU-Result-Portal",
    details: {
      problem:
        "Manual compilation of departmental examination scores was error-prone, slow, and lacked centralized relational lookup.",
      solution:
        "Created an MVC-structured portal providing granular admin workflows, automated grade computing, and instant student scorecard queries.",
      highlights: [
        "Normalized relational MySQL schemas with foreign key integrity and check constraints.",
        "Automated result computation, grading criteria, and marksheet generation.",
        "Optimized query performance through indexed primary and composite keys."
      ]
    }
  },
  {
    id: "atten-attendance",
    title: "Atten",
    subtitle: "Diploma Final Year Group Project",
    category: "Mobile Android",
    period: "2023",
    institution: "Government Polytechnic, Jalgaon",
    organization: "Government Polytechnic, Jalgaon · DTE Maharashtra",
    organizationType: "State Polytechnic Institution · 1st Prize Winner",
    orgIcon: "🏛️",
    metric: { value: "1st Prize", label: "State-Level Team Winner" },
    badge: "DIPLOMA FINAL YEAR · GROUP PROJECT",
    oneLineOutcome: "Contributed to final-year diploma team capstone: proxy-proof mobile attendance suite with real-time Firebase sync.",
    description:
      "Final-year Diploma group capstone project at Government Polytechnic Jalgaon. Contributed as part of the student team to build the Android attendance suite, published on the Google Play Store.",
    thumbnailUrl: "/portfolio-content/images/projects/Projects/Atten.png",
    technologies: ["Java", "Android SDK", "Firebase Realtime DB", "XML"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.suyogbauskar.atten",
    details: {
      problem:
        "Paper attendance led to rampant proxy marking and end-of-semester attendance deficit surprises for students and faculty.",
      solution:
        "Collaborated with final-year diploma teammates to engineer an Android suite with teacher-student session pairing, immediate Firebase database sync, and real-time sub-75% attendance alerts.",
      highlights: [
        "Diploma Final Year Group Project developed at Government Polytechnic Jalgaon.",
        "Awarded 1st Prize across top collegiate teams at State-Level Project Exhibition.",
        "Contributed to Java Android client development with Firebase real-time synchronizations.",
        "Co-engineered automated threshold detection calculating sub-75% mandatory attendance warnings."
      ]
    }
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2024 – 2027",
    period: "Undergraduate",
    level: "Level 01",
    title: "B.Tech in Computer Engineering",
    institution: "Dr. Babasaheb Ambedkar Technological University (DBATU)",
    institutionType: "State Technological University of Maharashtra",
    location: "Lonere, Maharashtra",
    score: "7.71 / 10",
    scoreType: "CGPA",
    badge: "Final Year Active",
    achievements: [
      { title: "2nd Prize — ACES Project Competition", year: "2024" },
      { title: "Technical Hackathon Organizer — DBATU", year: "2024" }
    ],
    skillsGained: ["Software Engineering", "DSA & Algorithmic Rigor", "FastAPI & WebSockets", "RAG & GenAI", "System Design"],
    description:
      "Expanding engineering depth into scalable backend architectures, real-time protocols, algorithmic problem solving in C++, and modern AI application engineering."
  },
  {
    year: "2021 – 2023",
    period: "Polytechnic",
    level: "Level 02",
    title: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Jalgaon",
    institutionType: "Directorate of Technical Education (DTE Maharashtra)",
    location: "Jalgaon, Maharashtra",
    score: "85.09%",
    scoreType: "Aggregate",
    badge: "First Class Distinction",
    achievements: [
      { title: "1st Prize — State-Level Project Competition (Atten)", year: "2023" },
      { title: "1st Prize — SQL Query Competition (Shield)", year: "2022" }
    ],
    skillsGained: ["C & C++", "Java & Android", "Relational SQL", "OOP Foundations"],
    description:
      "Where my programming foundation was forged through hands-on system building, competitive SQL querying, and winning state-level project exhibitions."
  }
];


export const experienceData: ExperienceItem[] = [
  {
    id: "sumago-infotech",
    company: "Sumago Infotech Pvt. Ltd.",
    companyType: "Enterprise Software Agency · Nashik HQ",
    orgIcon: "🏢",
    role: "Software Engineering Intern",
    period: "2022",
    location: "Nashik, Maharashtra",
    badge: "Internship Award Winner",
    certificateUrl: "https://drive.google.com/file/d/1lSfpOyPaXm8Xb-yJKqB4kBQ6jUvxhNfp/view?usp=drive_link",
    summary:
      "Completed a software development internship focused on enterprise web application development using PHP and CodeIgniter with MySQL as the database, following MVC architecture.",
    modules: [
      {
        title: "Customer Relationship Management (CRM)",
        description: "Application logic, customer lead pipelines, and database CRUD operations.",
        iconName: "web"
      },
      {
        title: "Hospital Relationship System",
        description: "Doctor-patient scheduling logic and relational database interactions.",
        iconName: "system"
      },
      {
        title: "Hospital Locator System",
        description: "Google Maps API integration for real-time location coordinate mapping.",
        iconName: "web"
      },
      {
        title: "Project Management System",
        description: "Task lifecycle workflows, status transitions, and MySQL operations.",
        iconName: "software-engineering"
      }
    ],
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "MVC", "Google Maps API"],
    learnings: [
      "MVC-based web application development",
      "Backend & application logic",
      "MySQL database design & queries",
      "CRUD operations & API integration",
      "System debugging workflows"
    ]
  }
];

export const skillsGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: [
      { name: "C", iconName: "c", brandColor: "#A8B9CC" },
      { name: "C++", iconName: "cpp", brandColor: "#00599c" },
      { name: "Python", iconName: "python", brandColor: "#f3c623" },
      { name: "Java", iconName: "java", brandColor: "#e43e00" },
      { name: "TypeScript", iconName: "typescript", brandColor: "#3178c6" },
      { name: "JavaScript", iconName: "javascript", brandColor: "#f7df1e" },
      { name: "PHP", iconName: "php", brandColor: "#777bb4" },
      { name: "SQL", iconName: "mysql", brandColor: "#4479a1" }
    ]
  },
  {
    category: "Software Development",
    skills: [
      { name: "React", iconName: "react", brandColor: "#61dafb" },
      { name: "Next.js", iconName: "nextjs", brandColor: "#ffffff" },
      { name: "FastAPI", iconName: "fastapi", brandColor: "#009688" },
      { name: "Node.js", iconName: "nodejs", brandColor: "#5fa04e" },
      { name: "CodeIgniter", iconName: "codeigniter", brandColor: "#ee4326" },
      { name: "REST APIs", iconName: "restapi", brandColor: "#38bdf8" },
      { name: "WebSockets", iconName: "websockets", brandColor: "#a855f7" }
    ]
  },
  {
    category: "AI / GenAI",
    skills: [
      { name: "Generative AI", iconName: "ai", brandColor: "#8b5cf6" },
      { name: "Agentic AI", iconName: "agentic", brandColor: "#a855f7" },
      { name: "RAG", iconName: "rag", brandColor: "#06b6d4" },
      { name: "LangChain", iconName: "langchain", brandColor: "#10b981" },
      { name: "LangGraph", iconName: "langgraph", brandColor: "#22c55e" },
      { name: "Google Gemini API", iconName: "ai", brandColor: "#4285f4" },
      { name: "Ollama", iconName: "ai", brandColor: "#ffffff" },
      { name: "ChromaDB", iconName: "ai", brandColor: "#ec4899" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", iconName: "postgresql", brandColor: "#336791" },
      { name: "MySQL", iconName: "mysql", brandColor: "#4479a1" },
      { name: "Redis", iconName: "redis", brandColor: "#dc382d" },
      { name: "SQLAlchemy", iconName: "python", brandColor: "#d71f00" },
      { name: "Database Design", iconName: "system", brandColor: "#38bdf8" },
      { name: "Query Optimization", iconName: "system", brandColor: "#f59e0b" }
    ]
  },
  {
    category: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", iconName: "dsa", brandColor: "#38bdf8" },
      { name: "OOP", iconName: "code", brandColor: "#818cf8" },
      { name: "DBMS", iconName: "postgresql", brandColor: "#34d399" },
      { name: "Operating Systems", iconName: "linux", brandColor: "#fbbf24" },
      { name: "Computer Networks", iconName: "system", brandColor: "#60a5fa" },
      { name: "System Design", iconName: "system", brandColor: "#c084fc" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", iconName: "git", brandColor: "#f05032" },
      { name: "GitHub", iconName: "github", brandColor: "#ffffff" },
      { name: "Docker", iconName: "docker", brandColor: "#2496ed" },
      { name: "Linux", iconName: "linux", brandColor: "#fcc624" },
      { name: "Postman", iconName: "postman", brandColor: "#ff6c37" }
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "state-project",
    place: "1st Prize",
    title: "State-Level Project Competition",
    issuer: "Government Polytechnic Jalgaon · DTE",
    year: "2023",
    details: "Awarded 1st place across top collegiate teams for 'Atten', our native Android attendance application.",
    certificateUrl: "https://drive.google.com/file/d/1tiv4VpiR8ijs737oTgE2fGK-NHQL1L0w/view?usp=drive_link"
  },
  {
    id: "aces-comp",
    place: "2nd Prize",
    title: "ACES Project Competition",
    issuer: "Association of Computer Engineering Students · DBATU",
    year: "2024",
    details: "Recognized for software engineering architecture, clean data modeling, and execution in department-wide competition."
  },
  {
    id: "sql-comp",
    place: "1st Prize",
    title: "SQL Query Competition",
    issuer: "Shield 5.0 State-Level Symposium",
    year: "2022",
    details: "Secured 1st rank by solving complex relational joins, subquery optimization, and analytical constraints under strict time limits.",
    certificateUrl: "https://drive.google.com/file/d/1VZXcFAxZ8VS8CWTCNzaZLzYU7Y_EIX8u/view?usp=sharing"
  },
  {
    id: "hackathon-lead",
    place: "Organizer",
    title: "Departmental Hackathon Organizer",
    issuer: "Department of Computer Science · DBATU",
    year: "2024",
    details: "Led technical operations, judging pipelines, and platform management for collegiate hackathons.",
    tags: ["Event Management", "Technical Operations"]
  },
  {
    id: "aces-leadership",
    place: "Technical Lead",
    title: "ACES Technical Leadership & Event Coordination",
    issuer: "Association of Computer Engineering Students (ACES) · DBATU",
    year: "2023 – Present",
    details:
      "Headed technical operations and event coordination. Spearheaded collegiate hackathons, created the student symposium digital registration portal, and mentored 300+ junior students across Git, C++, and DSA fundamentals.",
    tags: ["Leadership", "Management", "Team Coordination", "Technical Mentorship", "Event Operations"]
  }
];

export const currentFocusCards: FocusCard[] = [
  {
    title: "Software Engineering",
    summary: "Building stronger engineering fundamentals through real projects, clean API design, and system architecture.",
    tags: ["System Design", "Architecture", "Clean Code"]
  },
  {
    title: "Problem Solving",
    summary: "Practicing DSA and algorithmic problem solving in C++ across graphs, trees, and dynamic programming.",
    tags: ["C++", "DSA", "Algorithms", "Competitive"]
  },
  {
    title: "AI Applications",
    summary: "Learning and building applications using RAG, LLMs, LangChain, LangGraph, and Model Context Protocol (MCP).",
    tags: ["RAG", "LangChain", "LangGraph", "MCP"]
  },
  {
    title: "Modern Software Development",
    summary: "Improving my ability to design, build, test, and deploy practical and dependable software systems.",
    tags: ["Full-Stack", "Testing", "FastAPI", "Next.js"]
  }
];
