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
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mayur-patil-414070200/",
    handle: "in/mayur-patil",
    icon: "linkedin",
    isPrimary: true,
    color: "#0A66C2"
  },
  {
    name: "GitHub",
    url: "https://github.com/xenonrocks71",
    handle: "@xenonrocks71",
    icon: "github",
    isPrimary: true,
    color: "#FFFFFF"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/xenonrocks_71/",
    handle: "u/xenonrocks_71",
    icon: "leetcode",
    isPrimary: true,
    color: "#FFA116"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/MayurPa23149443",
    handle: "@MayurPa23149443",
    icon: "x",
    isPrimary: false,
    color: "#000000"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/xenonrocks_71/",
    handle: "@xenonrocks_71",
    icon: "instagram",
    isPrimary: false,
    color: "#E4405F"
  },
  {
    name: "Email",
    url: "mailto:mayurkp71@gmail.com",
    handle: "mayurkp71@gmail.com",
    icon: "mail",
    isPrimary: true,
    color: "#EA4335"
  }
];

export const contactInfo = {
  email: "mayurkp71@gmail.com",
  responseWindow: "Usually responds within 24 hours",
  directMessagePrompt: "Have an exciting project, full-time engineering opportunity, or technical challenge? Let's connect.",
  resumeUrl: "https://drive.google.com/file/d/18NY-bYco5AcR1ssWZmMsgMv2T7toTf-D/view?usp=drive_link",
  location: "Maharashtra, India (Open to Remote & On-site)"
};
