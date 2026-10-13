export interface IdentityCard {
  title: string;
  description: string;
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  role: string;
  eyebrow: string;
  location: string;
  status: string;
  headline: string;
  keywords: string[];
  bioSummary: string;
  aboutParagraphs: string[];
  identityCards: IdentityCard[];
  avatarUrl: string;
  resumeUrl: string;
  currentFocus: {
    title: string;
    description: string;
    tags: string[];
  }[];
}

export const personalData: PersonalInfo = {
  name: "Mayur Patil",
  fullName: "Mayur Kiran Patil",
  title: "Software Engineer & Problem Solver",
  role: "Software Engineer · Problem Solver · AI Application Builder",
  eyebrow: "FINAL-YEAR B.TECH · COMPUTER ENGINEERING",
  location: "Maharashtra, India",
  status: "Available for Software Engineering Roles",
  headline:
    "I enjoy solving technical problems and turning ideas into working software, from backend systems and web applications to AI-powered applications.",
  keywords: ["SDE", "DSA", "Software Engineering", "AI/GenAI"],
  bioSummary:
    "Computer Engineering student focused on software engineering, problem solving, and building practical applications across web, backend, and AI/GenAI.",
  aboutParagraphs: [
    "I'm a final-year Computer Engineering student at Dr. Babasaheb Ambedkar Technological University. My interests span software engineering, problem solving, backend systems, web applications and AI/GenAI.",
    "I like understanding how systems work, solving problems with code, and turning ideas into usable products. My projects range from traditional web and Android applications to real-time systems and RAG-based AI applications."
  ],
  identityCards: [
    {
      title: "Software Engineering",
      description: "Designing structured, maintainable software architectures with clean modular components.",
      iconName: "software-engineering"
    },
    {
      title: "Problem Solving & DSA",
      description: "Strong algorithmic foundations in C++, data structures, and systematic problem breakdown.",
      iconName: "dsa"
    },
    {
      title: "AI / GenAI Applications",
      description: "Applying RAG, vector retrieval, and LLM workflows into practical software tools.",
      iconName: "ai"
    },
    {
      title: "Systems & Web Development",
      description: "Building responsive frontend experiences and reliable backend APIs with relational databases.",
      iconName: "web"
    }
  ],
  avatarUrl: "/portfolio-content/images/profile/profile.png",
  resumeUrl: "https://drive.google.com/file/d/1jOZ1ThhgfXEUZ3xsETTUWhrRaXCLWAc6/view?usp=sharing",
  currentFocus: [
    {
      title: "Software Engineering",
      description: "Building stronger engineering fundamentals through real projects and system design.",
      tags: ["System Design", "Architecture", "Engineering Fundamentals"]
    },
    {
      title: "Problem Solving",
      description: "Practicing DSA and algorithmic problem solving in C++.",
      tags: ["C++", "DSA", "Algorithms", "Problem Solving"]
    },
    {
      title: "AI Applications",
      description: "Learning and building applications using RAG, LLMs, LangChain, LangGraph and MCP.",
      tags: ["RAG", "LLMs", "LangChain", "LangGraph", "MCP"]
    },
    {
      title: "Modern Software Development",
      description: "Improving my ability to design, build, test and deploy practical software systems.",
      tags: ["Clean Code", "API Design", "Full-Stack", "Testing"]
    }
  ]
};
