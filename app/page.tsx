import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { WhoIAm } from "@/components/sections/who-i-am";
import { WorkShowcase } from "@/components/sections/work-showcase";
import { JourneyRoadmap } from "@/components/sections/journey-roadmap";
import { ExperienceDeck } from "@/components/sections/experience-deck";
import { SkillsMatrix } from "@/components/sections/skills-matrix";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { NetworkGraphBackground } from "@/components/ui/network-graph-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-strong)] flex flex-col selection:bg-blue-500/30 selection:text-white transition-colors duration-200 relative">
      {/* Whole-Website Dynamic Network Graph Background */}
      <NetworkGraphBackground className="fixed inset-0 pointer-events-none z-0" />

      {/* 1. Smart Floating Pill Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col relative z-10">
        {/* 2. Kinetic Hero: Who is Mayur? */}
        <Hero />

        {/* 3. Who I Am: 3D Interactive Flip Identity Cards */}
        <WhoIAm />

        {/* 4. Work Showcase: Pinned Horizontal Scrub + Live SVG Topology + Modals */}
        <WorkShowcase />

        {/* 5. Engineering Journey: Animated Scroll-Drawn SVG Roadmap */}
        <JourneyRoadmap />

        {/* 6. Work Experience: Interactive Sticky Card Deck */}
        <ExperienceDeck />

        {/* 7. Technical Skills & Ecosystem: Dual Marquees + Filter Matrix */}
        <SkillsMatrix />

        {/* 8. Verified Honors & Awards: Light-Sweep Trophy Cards */}
        <Achievements />

        {/* 9. Contact: Mask Reveal Headline + 1-Click Clipboard Email */}
        <Contact />
      </main>

      {/* 10. Minimal Clean Footer */}
      <Footer />
    </div>
  );
}
