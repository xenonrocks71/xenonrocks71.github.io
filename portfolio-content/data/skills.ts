export interface SkillItem {
  name: string;
  iconName: string;
  brandColor?: string;
  isConcept?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "C++", iconName: "cpp", brandColor: "#00599c" },
      { name: "Python", iconName: "python", brandColor: "#f3c623" },
      { name: "Java", iconName: "java", brandColor: "#e43e00" },
      { name: "JavaScript", iconName: "javascript", brandColor: "#f7df1e" },
      { name: "TypeScript", iconName: "typescript", brandColor: "#3178c6" },
      { name: "SQL", iconName: "mysql", brandColor: "#4479a1" }
    ]
  },
  {
    title: "Software Development",
    skills: [
      { name: "React", iconName: "react", brandColor: "#61dafb" },
      { name: "Next.js", iconName: "nextjs", brandColor: "#ffffff" },
      { name: "REST APIs", iconName: "restapi", brandColor: "#38bdf8" },
      { name: "FastAPI", iconName: "fastapi", brandColor: "#009688" },
      { name: "HTML", iconName: "html5", brandColor: "#e34f26" },
      { name: "CSS", iconName: "css3", brandColor: "#1572b6" }
    ]
  },
  {
    title: "AI / GenAI",
    skills: [
      { name: "Generative AI", iconName: "ai", brandColor: "#8b5cf6" },
      { name: "RAG", iconName: "rag", brandColor: "#06b6d4" },
      { name: "LangChain", iconName: "langchain", brandColor: "#10b981" },
      { name: "Google Gemini API", iconName: "ai", brandColor: "#4285f4" },
      { name: "Ollama", iconName: "ai", brandColor: "#ffffff" },
      { name: "ChromaDB", iconName: "ai", brandColor: "#ec4899" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", iconName: "postgresql", brandColor: "#336791" },
      { name: "MySQL", iconName: "mysql", brandColor: "#4479a1" },
      { name: "SQLAlchemy", iconName: "python", brandColor: "#d71f00" },
      { name: "Database Design", iconName: "system", brandColor: "#38bdf8", isConcept: true },
      { name: "CRUD", iconName: "code", brandColor: "#10b981", isConcept: true },
      { name: "Query Optimization", iconName: "system", brandColor: "#f59e0b", isConcept: true }
    ]
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", iconName: "dsa", brandColor: "#38bdf8", isConcept: true },
      { name: "OOP", iconName: "code", brandColor: "#818cf8", isConcept: true },
      { name: "DBMS", iconName: "postgresql", brandColor: "#34d399", isConcept: true },
      { name: "Operating Systems", iconName: "linux", brandColor: "#fbbf24", isConcept: true },
      { name: "Computer Networks", iconName: "system", brandColor: "#60a5fa", isConcept: true },
      { name: "System Design", iconName: "system", brandColor: "#c084fc", isConcept: true }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", iconName: "git", brandColor: "#f05032" },
      { name: "GitHub", iconName: "github", brandColor: "#ffffff" },
      { name: "Docker", iconName: "docker", brandColor: "#2496ed" },
      { name: "Linux", iconName: "linux", brandColor: "#fcc624" }
    ]
  }
];
