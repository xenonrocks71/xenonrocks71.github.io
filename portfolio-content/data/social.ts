export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string;
  isPrimary: boolean;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/xenonrocks71",
    handle: "@xenonrocks71",
    icon: "github",
    isPrimary: true,
    color: "#FFFFFF"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mayur-patil-414070200",
    handle: "Mayur Patil",
    icon: "linkedin",
    isPrimary: true,
    color: "#0A66C2"
  },
  {
    name: "Email",
    url: "mailto:mayurkpatil2006@gmail.com",
    handle: "mayurkpatil2006@gmail.com",
    icon: "mail",
    isPrimary: true,
    color: "#EA4335"
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/MayurPa23149443",
    handle: "@MayurPa23149443",
    icon: "twitter",
    isPrimary: false,
    color: "#1DA1F2"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/xenonrocks_71/",
    handle: "@xenonrocks_71",
    icon: "instagram",
    isPrimary: false,
    color: "#E4405F"
  }
];

export const contactInfo = {
  email: "mayurkpatil2006@gmail.com",
  responseWindow: "Usually responds within 24 hours",
  directMessagePrompt: "Have an exciting project, full-time engineering opportunity, or technical challenge? Let's connect.",
  resumeUrl: "https://drive.google.com/file/d/1jOZ1ThhgfXEUZ3xsETTUWhrRaXCLWAc6/view?usp=sharing",
  location: "Maharashtra, India (Open to Remote & On-site)"
};
