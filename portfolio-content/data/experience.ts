export interface ExperienceProject {
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Internship" | "Leadership";
  badge?: string;
  websiteUrl?: string;
  certificateUrl?: string;
  summary: string;
  projectsContributed?: ExperienceProject[];
  technologies: string[];
  keyLearnings: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "sumago-infotech",
    role: "Software Engineering Intern",
    company: "Sumago Infotech Pvt. Ltd.",
    period: "2022",
    location: "Nashik, Maharashtra",
    type: "Internship",
    badge: "Internship Award Winner",
    websiteUrl: "https://www.sumagoinfotech.com/",
    certificateUrl: "https://drive.google.com/file/d/1lSfpOyPaXm8Xb-yJKqB4kBQ6jUvxhNfp/view?usp=drive_link",
    summary:
      "Completed a software development internship focused on web application development using PHP and CodeIgniter with MySQL as the database, following the MVC architecture.",
    projectsContributed: [
      {
        title: "Customer Relationship Management System",
        description:
          "Worked on web application development and backend functionality for a CRM system, including application logic, database operations, and CRUD workflows."
      },
      {
        title: "Hospital Relationship System",
        description:
          "Worked on a web-based hospital management/relationship application involving backend logic, database interaction, and management of application data."
      },
      {
        title: "Hospital Locator System",
        description:
          "Built functionality for a hospital locator application using the Google Maps API, integrating location-based information into the web application."
      },
      {
        title: "Project Management System",
        description:
          "Worked on a project management web application involving application workflows, backend logic, and MySQL database operations."
      }
    ],
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "MVC", "Google Maps API"],
    keyLearnings: [
      "MVC-based web application development",
      "Backend and application logic",
      "MySQL database design and queries",
      "CRUD operations",
      "API integration",
      "Debugging and application workflows"
    ]
  }
];
