export interface JourneyStage {
  year: string;
  stageTitle: string;
  institution: string;
  location: string;
  score: string;
  scoreType: string;
  description: string;
  focusAreas?: string[];
  websiteUrl?: string;
  badge?: string;
}

export const journeyData: JourneyStage[] = [
  {
    year: "2024 – 2027",
    stageTitle: "B.Tech in Computer Engineering",
    institution: "Dr. Babasaheb Ambedkar Technological University (DBATU)",
    location: "Lonere, Maharashtra",
    score: "7.71 / 10",
    scoreType: "CGPA",
    websiteUrl: "https://dbatu.ac.in/",
    badge: "Current Degree",
    description:
      "My current engineering stage, where my focus expanded toward core CS fundamentals, complex problem solving, scalable backend systems, and modern AI/GenAI application development.",
    focusAreas: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Computer Science Fundamentals",
      "Web / Backend Development",
      "AI / GenAI Applications",
      "System Design"
    ]
  },
  {
    year: "2021 – 2023",
    stageTitle: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Jalgaon",
    location: "Jalgaon, Maharashtra",
    score: "85.09%",
    scoreType: "Aggregate",
    websiteUrl: "http://gpjalgaon.org.in/",
    badge: "First Class with Distinction",
    description:
      "Where I developed my early foundation in programming, software development, relational databases, and practical group engineering projects like 'Atten' (1st Prize State-Level Exhibition).",
    focusAreas: ["C & C++ Programming", "Java", "Relational Databases", "Android Development", "Software Engineering Basics"]
  }
];

export const educationData = journeyData;
