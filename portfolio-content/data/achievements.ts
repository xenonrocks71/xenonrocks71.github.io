export interface AchievementItem {
  id: string;
  title: string;
  award: string;
  issuer: string;
  year: string;
  description: string;
  category: "Competition" | "Academic" | "Leadership";
  certificateUrl?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "state-level-project",
    award: "1st Prize Winner",
    title: "1st Prize — State-Level Project Competition",
    issuer: "Government Polytechnic Jalgaon / DTE",
    year: "2023",
    description:
      "Awarded 1st place across top collegiate teams for our final-year Diploma group capstone 'Atten', an Android-based attendance suite.",
    category: "Competition",
    certificateUrl: "https://drive.google.com/file/d/1tiv4VpiR8ijs737oTgE2fGK-NHQL1L0w/view?usp=drive_link"
  },
  {
    id: "aces-project-competition",
    award: "2nd Prize Winner",
    title: "2nd Prize — ACES Project Competition",
    issuer: "Association of Computer Engineering Students (ACES)",
    year: "2024",
    description:
      "Recognized for software engineering design, technical architecture, and execution in department-wide project competition.",
    category: "Competition"
  },
  {
    id: "query-master",
    award: "1st Prize",
    title: "1st Prize — SQL Query Competition",
    issuer: "Shield 5.0 State Symposium",
    year: "2022",
    description:
      "Secured 1st rank by solving relational SQL query challenges, analytical joins, and subquery optimization under strict time limits.",
    category: "Competition",
    certificateUrl: "https://drive.google.com/file/d/1VZXcFAxZ8VS8CWTCNzaZLzYU7Y_EIX8u/view?usp=sharing"
  },
  {
    id: "hackathon-organizer",
    award: "Technical Organizer",
    title: "Hackathon Organizer — DBATU",
    issuer: "DBATU Collegiate Technical Events",
    year: "2024",
    description:
      "Coordinated technical operations, problem statements, and digital platform workflows for collegiate hackathons.",
    category: "Leadership"
  }
];
