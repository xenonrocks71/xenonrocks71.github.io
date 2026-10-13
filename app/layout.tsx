import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#07080c",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Mayur Patil — Software Engineer & Problem Solver",
  description:
    "Official portfolio of Mayur Kiran Patil. Final-year Computer Engineering undergraduate focused on software engineering, problem solving, scalable backend systems, and practical AI/GenAI applications.",
  keywords: [
    "Mayur Patil",
    "Mayur Kiran Patil",
    "Software Engineer",
    "Problem Solver",
    "SDE",
    "DSA",
    "Backend Engineer",
    "Tribely",
    "FastAPI",
    "Next.js",
    "Python",
    "C++",
    "LangChain",
    "RAG"
  ],
  authors: [{ name: "Mayur Patil", url: "https://mayurkpatil.in" }],
  creator: "Mayur Patil",
  metadataBase: new URL("https://mayurkpatil.in"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayurkpatil.in",
    title: "Mayur Patil — Software Engineer & Problem Solver",
    description:
      "Final-year Computer Engineering undergraduate focused on software engineering, problem solving, scalable backend systems, and practical AI/GenAI applications.",
    siteName: "Mayur Patil Portfolio",
    images: [
      {
        url: "/portfolio-content/images/profile/profile.png",
        width: 800,
        height: 800,
        alt: "Mayur Patil — Software Engineer & Problem Solver"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Patil — Software Engineer & Problem Solver",
    description:
      "Final-year Computer Engineering undergraduate focused on software engineering, problem solving, scalable backend systems, and practical AI/GenAI applications.",
    creator: "@MayurPa23149443",
    images: ["/portfolio-content/images/profile/profile.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/portfolio-content/images/profile/profile.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/portfolio-content/images/profile/profile.png",
    apple: "/portfolio-content/images/profile/profile.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <head>
        <link rel="icon" href="/portfolio-content/images/profile/profile.png" type="image/png" />
        <link rel="apple-touch-icon" href="/portfolio-content/images/profile/profile.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('theme');
                if (stored === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-page)] text-[var(--text-strong)] font-sans antialiased selection:bg-blue-600/30 selection:text-white transition-colors duration-200">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
